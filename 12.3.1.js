const human = {
  head: 1,
  arm: 2,
  leg: 2,
  skill: function () {
    yell = prompt("Что скажешь?")
    console.log(yell)
  }
}

const sergey = Object.create (human);

sergey.age = 37

// sergey.skill();

const result = function () {
  for (let key in sergey) {
    if (sergey.hasOwnProperty(key)) {
      console.log(key)
  }
 }   
}

result();