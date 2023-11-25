import { test } from 'vitest';

import createPluginManager from '../src';

test('plugin system usage', () => {
    const manager = createPluginManager<{ name: string }>();
    manager.add({
        name: '1',
        handler(ctx) {
            ctx.name += '9528';
            console.log(1);
        },
    });
    manager.add({
        name: '2',
        handler(ctx) {
            ctx.name += '9529';
            console.log(2);
        },
    });
    manager.add({
        name: '3',
        handler(ctx) {
            console.log(3, ctx);
        },
    });
    manager.apply({ name: '9527', });
});
