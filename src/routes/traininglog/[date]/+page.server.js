import { PrismaClient } from '@prisma/client'
import { user } from '$lib/stores/stores.js';
import {TrainingSmartAIThingie} from '../../SmartAIThingie.js';

const prisma = new PrismaClient()
var forDate = "";

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ params })  => {
	if(!params.date) {
		// set forDate to today's date
		forDate = new Date().toString().split('T')[0];
	} else {
		/* create date from the params passed in (use local time) */
		forDate = params.date;
	}

	var currentTrainingProgramDays = await loadTraining(forDate);

	return {
		trainingProgamDays: currentTrainingProgramDays
	};
};

/** @type {import('./$types').Actions} */
export const actions = {
	createprogram: async ({ request, cookies }) => {

		const data = await request.formData();
		const trainingProgramRaw = data.get('trainingprogram');
		// format training program as JSON with OpenAI
		var trainingProgramDays = await TrainingSmartAIThingie.askForTrainingProgramJSON(trainingProgramRaw);
		console.log("training program: " + JSON.stringify(trainingProgramDays));

		// program name is likely irrelevant, so default to "New Program " + current date
        var trainingProgramName = "New Program " + new Date().toLocaleDateString();
        // let's set the end date to ~7 years from now
        var trainingProgramNameEndDate = new Date();
        trainingProgramNameEndDate.setFullYear(trainingProgramNameEndDate.getFullYear() + 7);

		// create a "shell" for the training program
		const newTrainingProgram = await prisma.trainingProgram.create({
			data: {
				user_id: user.name,
				program_name: trainingProgramName,
				end_date: trainingProgramNameEndDate
			},
		})

		// add associated training days for the training program to the database
		for (var i = 0; i < trainingProgramDays.length; i++) {
			// create training day for the new training program
			const newTrainingDay = await prisma.trainingProgramDay.create({
				data: {
					user_id: user.name,
					program: {
						connect: {
							id: newTrainingProgram.id
						}
					},
					end_date: trainingProgramNameEndDate,
					day_name: trainingProgramDays[i].day_name,
					day_description: trainingProgramDays[i].day_description,
				}
			})
		}
	}
};

async function loadTraining(date) {

	// select the first training program
	// 	where ending date is greater than today's date
	var trainingData = await prisma.trainingProgram.findFirst ({
		where: {
			user_id: user.name,
			end_date: {
				gte: new Date(date)
			}
		},
	});

	console.log("trainingData: " + JSON.stringify(trainingData));
	return trainingData;
}