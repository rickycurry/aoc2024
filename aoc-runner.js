import { parseInput } from "./src/parser.js";
import { Logger } from "./src/logging.js"
import { Verbosity } from "./src/verbosity.js";
import { run1 } from "./src/day_1.js";

if (process.argv.length < 3) {
    console.log("We're definitely missing some command line arguments... Should be 'node aoc-runner.js [number] [v]")
}

const verbosity = process.argv.length >= 4 ? Verbosity[process.argv[3]] : Verbosity.info;
const logger = new Logger(verbosity);
logger.log(`Verbosity: ${verbosity}`, Verbosity.debug);

const day = process.argv[2];

const input = parseInput(day);

run1(input, logger);