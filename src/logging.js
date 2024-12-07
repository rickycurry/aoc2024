export class Logger {
    constructor(verbosity) {
        this.verbosity = verbosity;
    }

    log(input, verbosity) {
        if (verbosity >= this.verbosity) {
            console.log(input);
        }
    }
}