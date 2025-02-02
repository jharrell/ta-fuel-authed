
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const GITHUB_ID: string;
	export const GITHUB_SECRET: string;
	export const AUTH_SECRET: string;
	export const AUTH0_CLIENT_ID: string;
	export const AUTH0_CLIENT_SECRET: string;
	export const AUTH0_DOMAIN: string;
	export const AUTH0_BASE_URL: string;
	export const AUTH0_ISSUER_BASE_URL: string;
	export const TWITTER_KEY: string;
	export const TWITTER_ID: string;
	export const TWITTER_SECRET: string;
	export const GOOGLE_ID: string;
	export const GOOGLE_SECRET: string;
	export const GPT3_API_KEY: string;
	export const POSTGRES_URL: string;
	export const POSTGRES_PRISMA_URL: string;
	export const POSTGRES_URL_NON_POOLING: string;
	export const DATABASE_URL: string;
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const INIT_CWD: string;
	export const SHELL: string;
	export const TERM: string;
	export const npm_config_metrics_registry: string;
	export const TMPDIR: string;
	export const npm_config_global_prefix: string;
	export const CONDA_SHLVL: string;
	export const CONDA_PROMPT_MODIFIER: string;
	export const TERM_PROGRAM_VERSION: string;
	export const MallocNanoZone: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const COLOR: string;
	export const npm_config_noproxy: string;
	export const npm_config_registry: string;
	export const npm_config_local_prefix: string;
	export const USER: string;
	export const COMMAND_MODE: string;
	export const OPENAI_API_KEY: string;
	export const npm_config_globalconfig: string;
	export const CONDA_EXE: string;
	export const HOMEBREW_NO_ANALYTICS: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const MAVEN_OPTS: string;
	export const _CE_CONDA: string;
	export const PATH: string;
	export const npm_package_json: string;
	export const _: string;
	export const npm_config_userconfig: string;
	export const npm_config_init_module: string;
	export const __CFBundleIdentifier: string;
	export const CONDA_PREFIX: string;
	export const npm_command: string;
	export const HOMEBREW_HOME: string;
	export const PWD: string;
	export const JAVA_HOME: string;
	export const npm_lifecycle_event: string;
	export const EDITOR: string;
	export const LANG: string;
	export const XPC_FLAGS: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const npm_config_node_gyp: string;
	export const XPC_SERVICE_NAME: string;
	export const _CE_M: string;
	export const HOME: string;
	export const SHLVL: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const npm_config_strict_ssl: string;
	export const npm_config_cache: string;
	export const LOGNAME: string;
	export const CONDA_PYTHON_EXE: string;
	export const npm_lifecycle_script: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const CONDA_DEFAULT_ENV: string;
	export const npm_config_user_agent: string;
	export const MYSQL_HOME: string;
	export const GIT_ASKPASS: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const npm_node_execpath: string;
	export const npm_config_prefix: string;
	export const COLORTERM: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		GITHUB_ID: string;
		GITHUB_SECRET: string;
		AUTH_SECRET: string;
		AUTH0_CLIENT_ID: string;
		AUTH0_CLIENT_SECRET: string;
		AUTH0_DOMAIN: string;
		AUTH0_BASE_URL: string;
		AUTH0_ISSUER_BASE_URL: string;
		TWITTER_KEY: string;
		TWITTER_ID: string;
		TWITTER_SECRET: string;
		GOOGLE_ID: string;
		GOOGLE_SECRET: string;
		GPT3_API_KEY: string;
		POSTGRES_URL: string;
		POSTGRES_PRISMA_URL: string;
		POSTGRES_URL_NON_POOLING: string;
		DATABASE_URL: string;
		TERM_PROGRAM: string;
		NODE: string;
		INIT_CWD: string;
		SHELL: string;
		TERM: string;
		npm_config_metrics_registry: string;
		TMPDIR: string;
		npm_config_global_prefix: string;
		CONDA_SHLVL: string;
		CONDA_PROMPT_MODIFIER: string;
		TERM_PROGRAM_VERSION: string;
		MallocNanoZone: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		COLOR: string;
		npm_config_noproxy: string;
		npm_config_registry: string;
		npm_config_local_prefix: string;
		USER: string;
		COMMAND_MODE: string;
		OPENAI_API_KEY: string;
		npm_config_globalconfig: string;
		CONDA_EXE: string;
		HOMEBREW_NO_ANALYTICS: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		MAVEN_OPTS: string;
		_CE_CONDA: string;
		PATH: string;
		npm_package_json: string;
		_: string;
		npm_config_userconfig: string;
		npm_config_init_module: string;
		__CFBundleIdentifier: string;
		CONDA_PREFIX: string;
		npm_command: string;
		HOMEBREW_HOME: string;
		PWD: string;
		JAVA_HOME: string;
		npm_lifecycle_event: string;
		EDITOR: string;
		LANG: string;
		XPC_FLAGS: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		npm_config_node_gyp: string;
		XPC_SERVICE_NAME: string;
		_CE_M: string;
		HOME: string;
		SHLVL: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		npm_config_strict_ssl: string;
		npm_config_cache: string;
		LOGNAME: string;
		CONDA_PYTHON_EXE: string;
		npm_lifecycle_script: string;
		VSCODE_GIT_IPC_HANDLE: string;
		CONDA_DEFAULT_ENV: string;
		npm_config_user_agent: string;
		MYSQL_HOME: string;
		GIT_ASKPASS: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		npm_node_execpath: string;
		npm_config_prefix: string;
		COLORTERM: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
