function sayName(name) {
  this.name = name
  return name
}

var obj = {
  name: 'cpp'
}
sayName.call(obj, 'Chendapeng')