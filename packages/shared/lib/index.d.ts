export interface PluginContext {
}
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
export default function createPlugin<T extends PluginContext>(): TPluginManagerObj<T>;
