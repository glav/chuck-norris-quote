const coreActions = require("@actions/core");

const FMT_TEXT = 'text';
const FMT_HTML = 'html';
const formatType = {
    Text: FMT_TEXT,
    Html: FMT_HTML
}

const quote = {

    formats: formatType,

    parseValidType: function(quoteFormat) {
        const testFormat = quoteFormat.toLowercase();

        if (testFormat === FMT_TEXT) {
            return formatType.Text;
        }
        if (testFormat === FMT_HTML) {
            return formatType.Html;
        }

        coreActions.warning(`Format type of [${quoteFormat}] not supported. Defaulting to '${validFormat.formats.Text}'`);
        return formatType.Text;
    }
}

module.exports = quote;