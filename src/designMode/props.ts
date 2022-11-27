function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class Person {
  @readonly() name = "cpp";
}
export const person = new Person();
