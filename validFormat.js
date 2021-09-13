const FMT_TEXT = 'text';
const FMT_HTML = 'html';
const validFormats = [FMT_HTML, FMT_TEXT];
const formatType = {
    Text: FMT_TEXT,
    Html: FMT_HTML
}

const quote = {
    isValidType: function(quoteFormat) {
        if (validFormats.indexOf(quoteFormat) === -1) {
            return false;
        }
        return true;
    },
    formats: formatType,
    isType: function(quoteFormat) {
        if (quoteFormat === FMT_TEXT) {
            return formatType.Text;
        }
        if (quoteFormat === FMT_HTML) {
            return formatType.Html;
        }
        return formatType.Text;
    }
}

module.exports = quote;