const inputText = "Highly recommend you to read at least one work of Shakespeare. He made his masterpieces for hundreds of years before London, Dickens and Fitzgerald. Hope to buy last book to my collection it 2022, and read it.";

const parser = (txt) => {
  //use (?<=pattern)	Positive Lookbehind 
  //search some quantity letters witch started at big  letter
  //and before it present "not dot + space"
  return txt.replace(/(?<=[^\.]\s)[A-Z]\w+/g,"writer")
};

console.log(parser(inputText));

