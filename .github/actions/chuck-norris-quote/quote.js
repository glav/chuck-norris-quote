const request = require("request-promise");
const validFormat = require("./validFormat");

const options = {
  method: "GET",
  uri: "https://api.icndb.com/jokes/random?exclude=[explicit]",
  headers: {
    Accept: "application/json"
  },
  json: true
};

function formatQuote(formatType, quote, shouldEncode) {
  
  console.log(quote);

  var finalQuote = quote;

  if (shouldEncode === true) {
    console.log("Encoding quote");
    finalQuote = encodeURIComponent(quote);
    finalQuote = finalQuote.replace(/'/g, '%27');
  }

  const realType = validFormat.isType(formatType);
  if (realType === validFormat.formats.Html) {
    return `<div class="chuck-norris-quote"><span>${finalQuote}</span></div>`;
  }
  return finalQuote;
}


async function getQuote(quoteFormat, shouldEncode) {
  const res = await request(options);
   return formatQuote(quoteFormat, res.value, shouldEncode);
}

module.exports = getQuote;
