import { resolve } from 'node:path';

import { test } from 'vitest';

import { resolveLocal, resolveLocalSync } from '../src';

test('Resolve from local', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const m1 = await resolveLocal<any>(
        resolve(process.cwd()), '@moccona/shared'
    );

    const m2 = await resolveLocalSync(
        resolve(process.cwd()), '@moccona/shared'
    );

    console.log(m1, '<--->', m2);
});
