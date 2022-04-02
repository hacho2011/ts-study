type Video = {
  title: string;
  author: string;
};

type Optional<T> = {
  [K in keyof T]?: T[K];
};

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

type VideoOptional = Optional<Video>;

type VideoReadOnly = ReadOnly<Video>;

type Animal = {
  name: string;
  age: number;
};

type AnimalOptional = Optional<Animal>;

type AnimalReadOnly = ReadOnly<Animal>;

const animal: AnimalOptional = {};

const animal2: AnimalReadOnly = {
  name: "1",
  age: 1,
};

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

const obj: Nullable<Video> = {
  title: null,
  author: null,
};
