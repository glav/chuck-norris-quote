const coreActions = require("@actions/core");
const validFormat = require("./validFormat");
const getQuote = require("./quote");

async function run() {
    try {
        
        var quoteFormat = coreActions.getInput("quote-format");
        var shouldEscape = coreActions.getInput("escape-quote").toLowerCase() === 'true';

        if (validFormat.isValidType(quoteFormat) === false) {
            coreActions.warning(`Format type of [${quoteFormat}] not supported. Defaulting to '${validFormat.formats.Text}'`);
            quoteFormat =validFormat.formats.Text;
        }

        coreActions.info(`Setting quote format: [${quoteFormat}]`);
        coreActions.info(`Escaping quote: [${shouldEscape}]`);

        const formattedQuote = await getQuote(quoteFormat, shouldEscape);
        coreActions.setOutput("quote", formattedQuote);

    } catch (err) {
        coreActions.setFailed(err);
    }

}

run();