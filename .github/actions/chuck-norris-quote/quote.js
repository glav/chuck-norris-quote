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

function formatQuote(formatType, quote, iconUrl) {
  
  console.log(quote);

  const realType = validFormat.isType(formatType);
  if (realType === validFormat.formats.Html) {
    return `<div class="chuck-norris-quote"><span>${quote}</span></div>`;
  }
  return quote;
}


async function getQuote(quoteFormat) {
  const res = await request(options);
   return formatQuote(quoteFormat, res.value);
}

module.exports = getQuote;
