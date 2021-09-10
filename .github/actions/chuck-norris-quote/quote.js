const request = require("request-promise");
const validFormat = require("./validFormat");

const options = {
  method: "GET",
  uri: "https://api.chucknorris.io/jokes/random",
  headers: {
    Accept: "application/json"
  },
  json: true
};

function formatQuote(formatType, quote, iconUrl) {
  
  console.log(quote);

  const realType = validFormat.isType(formatType);
  if (realType === validFormat.formats.Html) {
    return `<div class="chuck-norris-quote"><img src="${iconUrl}" alt="Check Norris quote" title="Check Norris quote" /><span>${quote}</span></div>`;
  }
  if (realType === validFormat.formats.Markdown) {
    return `![Chuck Norris quote](${iconUrl})
    ${quote}`;
  }
  return quote;
}


async function getQuote(quoteFormat) {
  const res = await request(options);
   return formatQuote(quoteFormat, res.value, res.icon_url);
}

module.exports = getQuote;
