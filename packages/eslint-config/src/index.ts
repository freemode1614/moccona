import config from "./main";

console.debug(config);

const {
    overrides,
    plugins,
    env,
    parserOptions,
    rules
} = config;

export {
    overrides,
    plugins,
    env,
    parserOptions,
    rules
};
