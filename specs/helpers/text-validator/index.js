const disallowedChars = [
  "&amp;", // &
  "&nbsp;",
  "&ndash;",
  "&deg;",
  "&there4;",
  "&times;",
  "&asymp;",
  "&euro;", // €
  "&minus;",
  "&quot;",
  "&gt;",
  "&#39;",
  "∴",
  "’’", 
  "",
  " "
];

module.exports = {
  chars: function(text) {
    const result = disallowedChars.reduce(function(output, char) {
      return output && (text.indexOf(char) === -1);
    }, true);

    return result 
      ? Promise.resolve() 
      : Promise.reject(new Error(text));
  },
};
