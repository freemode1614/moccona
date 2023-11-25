export interface PluginContext { }

export type PluginHandlerReturn = Promise<unknown> | void;

export type TPluginHandlerObj<T> = {
    name: string;
    version?: string;
    handler: (ctx: T) => PluginHandlerReturn | Promise<PluginHandlerReturn>;
};

export type RemovePluginFn = () => void;

export type TPluginManagerObj<T> = {
    add(handler: TPluginHandlerObj<T>): RemovePluginFn;
    apply(ctx: T): Promise<void>;
};

export default function createPluginManager<
    T extends PluginContext,
>(): TPluginManagerObj<T> {
    const appliedPlugins: TPluginHandlerObj<T>[] = [];
    const plugins: TPluginHandlerObj<T>[] = [];

    const add = (handler: TPluginHandlerObj<T>) => {
        const handleIndex = plugins.push(handler);
        return () => {
            plugins.splice(handleIndex - 1, 1)
        }
    };

    const apply = async (ctx: T) => {
        if (plugins.length > 0) {
            for await (const plugin of plugins) {
                try {
                    if (appliedPlugins.includes(plugin)) {
                        console.warn('Same plugin executed twice.');
                    } else {
                        await plugin.handler(ctx);
                        appliedPlugins.push(plugin);
                    }
                } catch (error) {
                    console.error('error', error);
                }
            }
        }
    };

    return {
        add,
        apply,
    };
}
