const coreActions = require("@actions/core");
const validFormat = require("./validFormat");
const getQuote = require("./quote");

async function run() {
    try {
        
        var quoteFormat = coreActions.getInput("quote-format");
        if (validFormat.isValidType(quoteFormat) === false) {
            coreActions.warning(`Format type of [${quoteFormat}] not supported. Defaulting to '${validFormat.formats.Text}'`);
            quoteFormat =validFormat.formats.Text;
        }

        coreActions.info(`Setting quote format: [${quoteFormat}]`);

        const formattedQuote = await getQuote(quoteFormat);
        coreActions.setOutput("quote", formattedQuote);

    } catch (err) {
        coreactions.setFailed(err);
    }

}

run();