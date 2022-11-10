class Person {
  @readonly name = "cpp";
}
function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}
export const person = new Person();

