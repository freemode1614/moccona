import { test } from "vitest";
import createPlugin from "../src";

test("Simple plugin system", () => {
  const mgmt = createPlugin<{ name: string }>();
  mgmt.add({
    name: "1",
    handler(ctx) {
      ctx.name += '9528';
      console.log(1);
    },
  });
  mgmt.add({
    name: "2",
    handler(ctx) {
      ctx.name += '9529';
      console.log(2);
    },
  });
  mgmt.add({
    name: "3",
    handler(ctx) {
      console.log(3, ctx);
    },
  });

  mgmt.apply({ name: "9527" });
});
