const withSpeak = (targetClass: any) => {
  const prototype = targetClass.prototype;
  prototype.speak = function () {
    console.log('I can speak ', this.language);
  }
}
@withSpeak
class Student {
  protected language;
  constructor(language: any) {
    this.language = language;
  }
}
export const student1 = new Student('Chinese');
export const student2 = new Student('English');
