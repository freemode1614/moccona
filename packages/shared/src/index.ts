export interface PluginContext {}

export type PluginHandlerReturn = Promise<any> | void;

export type TPluginHandlerObj<T> = {
  name: string;
  version?: string;
  handler: (ctx: T) => PluginHandlerReturn | Promise<PluginHandlerReturn>;
};

export type TPluginManagerObj<T> = {
  add(handler: TPluginHandlerObj<T>): void;
  apply(ctx: T): Promise<void>;
};

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
export default function createPlugin<
  T extends PluginContext,
>(): TPluginManagerObj<T> {
  const appliedPlugins: TPluginHandlerObj<T>[] = [];
  const plugins: TPluginHandlerObj<T>[] = [];

  const add = (handler: TPluginHandlerObj<T>) => {
    plugins.push(handler);
  };

  const apply = async (ctx: T) => {
    if (plugins.length > 0) {
      for await (const plugin of plugins) {
        try {
          if (appliedPlugins.includes(plugin)) {
            console.warn(`Same plugin executed twice.`);
          } else {
            const ret = await plugin.handler(ctx);
            appliedPlugins.push(plugin);
          }
        } catch (error) {
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
