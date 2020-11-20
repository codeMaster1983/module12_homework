function check (str, obj) {
   console.log(str in obj)
}
const text = prompt('Input text here')
const verifyObj = {
  first: "first",
  second: "second",
  last: "last"
}
check(text, verifyObj);