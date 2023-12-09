import { test } from 'vitest';

import resolveLocal from '../src';

test('Resolve from local', () => {
    const m = resolveLocal(
        process.cwd(), 'typescript'
    );
});
