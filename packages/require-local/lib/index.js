import { Module } from 'node:module';
import { basename, isAbsolute, resolve } from 'node:path';
/**
 * In esm context __dirname or __filename will be undefined.
 */
const isEsmModule = !__dirname;
export function resolveLocalSync(from, moduleId) {
    console.log(isEsmModule);
    const requireModule = Module.createRequire(import.meta.url ?? __dirname);
    try {
        return requireModule(moduleId);
    }
    catch (e) {
        throw new Error('Can\'t get ESM module using CJS require(\'\'), use resolveLocal instead.');
    }
}
export async function resolveLocal(from, moduleId) {
    console.log(isEsmModule);
    const localPath = isEsmModule ? import.meta.url : __dirname;
    if (!isAbsolute(from)) {
        from = resolve(basename(localPath), from);
    }
    try {
        const m = await import(moduleId);
        if (m.default) {
            return m.default;
        }
    }
    catch (error) {
        console.log(error.message);
    }
}
