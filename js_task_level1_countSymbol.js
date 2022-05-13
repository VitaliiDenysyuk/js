function countSymbols1(txt, symbol, caseSensitive = false) {

    return (caseSensitive ? txt.toLowerCase() : txt).split("")
        .filter((value) => (
            caseSensitive ? value == symbol.toLowerCase() : value == symbol))
        .length;
}
function countSymbols2(txt, symbol, caseSensitive = false) {

    return (txt.match(new RegExp(symbol, (caseSensitive ? "gi" : "g"))) || []).length;
}
function countSymbols(txt, symbol, caseSensitive = false) {

    return (caseSensitive ? txt.toLowerCase()
        .split("")
        .filter((value) => (value == symbol.toLowerCase())) :
        txt.split("")
            .filter((value) => (value == symbol)))
        .length;
}
console.log(countSymbols("Antony sssSmith", "s", true)) // 1
console.log(countSymbols("Antony ssSmith", "s", false)) // 0
console.log(countSymbols("Antony Smith", "s")) // 0