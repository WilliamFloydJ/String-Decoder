const decode = (Str) => {
  const CharAr = Str.split("");
  let skip = false;
  let skipAmt = undefined;
  let skipTo = undefined;
  let decodedMsg = "";
  const decodedMsgArr = [];

  CharAr.forEach(
    (element = (Char, ind) => {
      if (isNaN(Char) === false) {
        skipAmt = Char;
        skip = true;
      }
      if (ind === skipTo && skip === true) {
        decodedMsgArr.push(Char);
        skip = false;
        skipTo = undefined;
      }
      if (skip && skipTo === undefined) {
        skipTo = parseInt(ind) + parseInt(skipAmt) + 1;
      }
    })
  );

  decodedMsg = decodedMsgArr.toString();
  return decodedMsg;
};

console.log(decode("0w3hqri5gsrgal2sel"));
