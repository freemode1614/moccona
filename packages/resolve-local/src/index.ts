import { basename, isAbsolute, resolve } from 'node:path'

import { Module } from 'module';

/**
 * In esm context __dirname or __filename will be undefined.
 */
const isEsmModule = !__dirname;

export default function resolveLocal(
    from: string, moduleId: string
) {
    console.log(
        isEsmModule
    );

    const localPath = isEsmModule ? import.meta.url : __filename;

    if (
        !isAbsolute(from)
    ) {
        from = resolve(
            basename(localPath), from
        );
    }

    console.log(
        'from', from
    );


    const resolveModule = Module.createRequire(
        from
    );


    const path = resolveModule.resolve(moduleId, {
        paths: [
            from
        ],
    });

    console.log(
        path
    );

    return resolveModule(moduleId);
}
