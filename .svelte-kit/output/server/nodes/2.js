

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.55585258.js","_app/immutable/chunks/index.4bd8640c.js","_app/immutable/chunks/ta-logo.83e008af.js"];
export const stylesheets = [];
export const fonts = [];
