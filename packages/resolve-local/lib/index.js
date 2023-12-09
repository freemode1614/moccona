/**
 *
 * @example
 *  ```ts
 *  const pluginManager = plugin();
 *  pluginManager.add(()=>{ console.log(1) });
 *  pluginManager.add(()=>{ console.log(2) });
 *  pluginManager.add(()=>{ console.log(3) });
 *  pluginManager.apply();
 *  ```
 * @returns
 */
export default function createPlugin() {
    const appliedPlugins = [];
    const plugins = [];
    const add = (handler) => {
        plugins.push(handler);
    };
    const apply = async (ctx) => {
        if (plugins.length > 0) {
            for await (const plugin of plugins) {
                try {
                    if (appliedPlugins.includes(plugin)) {
                        console.warn(`Same plugin executed twice.`);
                    }
                    else {
                        const ret = await plugin.handler(ctx);
                        appliedPlugins.push(plugin);
                    }
                }
                catch (error) {
                    console.error("error", error);
                }
            }
        }
    };
    return {
        add,
        apply,
    };
}
