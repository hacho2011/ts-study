{
  const obj = {
    name: "ellie",
  };

  obj.name;
  obj["name"];

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "fdmale";
  };

  type Name = Animal["name"]; //string
  const text: Name = "hello";

  type Gender = Animal["gender"]; // mail | female
  type Keys = keyof Animal; // name | age | gender
  const key: Keys = "gender";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };

  const person: Person = {
    name: "name",
    gender: "fdmale",
  };
}
