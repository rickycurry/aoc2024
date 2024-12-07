import { Verbosity } from "./verbosity.js";

export function run1(input, logger) {
    logger.log("Running day 1", Verbosity.info);
    logger.log(input, Verbosity.debug);
}