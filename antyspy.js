const text = "If you agree with that, just let me know to obama@mail.us or newpower@gmail.com and I'll reach out as soon as possible."
console.log(antiSpy(text)) // "If you agree with that, just let me know to HIDDEN_DATA or HIDDEN_DATA and I'll reach out as soon as possible."
function antiSpy1(text, hiddenMask = "HIDDEN_DATA") {
    return text.replace(/[A-Za-z0-9_]+@[A-Za-z0-9_]+\.[A-Za-z0-9_]+/g, hiddenMask);
}
function antiSpy(text, hiddenMask = "HIDDEN_DATA") {
    let allLetters = "abcdefghijklmnopurstuvwxyzABCDEFGHIJKLMNOPURSTUVWXYZ";
    return text.split(" ")
    .map(element => {
                if (element.includes("@")) {
                    return allLetters.includes(element[element.length-1])?
                    hiddenMask
                    :hiddenMask+element[element.length-1]
                } else return element;
            })
    .join(" ");
}