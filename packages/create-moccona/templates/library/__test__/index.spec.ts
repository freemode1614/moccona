import {
    expect, test
} from "vitest";
import sum from "../src";

test(
    `1 plus 1 equals to 2`,
    () => {
        expect(
            sum(1, 1)
        ).equalsTo(2)
    }
)