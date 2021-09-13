const request = require("request-promise");
const validFormat = require("./validFormat");
const coreActions = require("@actions/core");

const options = {
  method: "GET",
  uri: "https://api.icndb.com/jokes/random?exclude=[explicit]",
  headers: {
    Accept: "application/json"
  },
  json: true
};

function formatQuote(formatType, quote, shouldEscape) {
  
  var finalQuote = quote;

  // Output quote by default for a simple lighthearted addition to the build logs.
  console.log(quote);

  if (shouldEscape === true) {
    coreActions.info("Escaping quote");
    finalQuote = finalQuote.replace(/'/g, '%27');
  }

  if (formatType === validFormat.formats.Html) {
    return `<div class="chuck-norris-quote"><span>${finalQuote}</span></div>`;
  }
  return finalQuote;
}


async function getQuote(quoteFormat, shouldEscape) {
  const res = await request(options);
   return formatQuote(quoteFormat, res.value.joke, shouldEscape);
}

module.exports = getQuote;
