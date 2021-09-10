const FMT_TEXT = 'text';
const FMT_HTML = 'html';
const FMT_MARKDOWN = 'markdown';
const validFormats = [FMT_HTML, FMT_MARKDOWN, FMT_TEXT];
const formatType = {
    Text: FMT_TEXT,
    Html: FMT_HTML,
    Markdown: FMT_MARKDOWN
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
        if (quoteFormat === FMT_MARKDOWN) {
            return formatType.Markdown;
        }
        if (quoteFormat === FMT_HTML) {
            return formatType.Html;
        }
        return formatType.Text;
    }
}

module.exports = quote;