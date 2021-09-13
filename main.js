const coreActions = require("@actions/core");
const validFormat = require("./validFormat");
const getQuote = require("./quote");

async function run() {
    try {
        
        var quoteFormat = coreActions.getInput("quote-format");
        var shouldEscape = coreActions.getInput("escape-quote").toLowerCase() === 'true';

        const actualFormat = validFormat.parseValidType(quoteFormat);

        coreActions.info(`Setting quote format: [${actualFormat}]`);
        coreActions.info(`Escaping quote: [${shouldEscape}]`);

        const formattedQuote = await getQuote(actualFormat, shouldEscape);
        coreActions.setOutput("quote", formattedQuote);

    } catch (err) {
        coreActions.setFailed(err);
    }

}

run();