function nullFunc(prot) {
  const nullObj = Object.create(prot)
  console.log('Prototype is ' + nullObj.getPrototypeOf)
  console.log(nullObj)
}

const proto = null

nullFunc(proto);