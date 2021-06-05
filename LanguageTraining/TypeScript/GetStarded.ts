let helloWorld = "Hello World";
console.log(helloWorld);

/// Define Types

interface User {
  name: string;
  id: number;
}
const user = {
  name: "46kuro",
  id: 0,
};
class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
const user2: User = new UserAccount("kuro", 1);
console.log(user);
console.log(user2);
