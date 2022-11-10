/* eslint-disable @typescript-eslint/no-unused-vars */
export enum Sizes {
  Small,
  Middle,
  Large,
}

const coffee = {
  name: "pro",
  size: Sizes.Middle,
};

const coffee1 = {
  name: "cpp",
  size: Sizes[Sizes.Small],
};

const enum Sizes1 {
  Small,
  Middle,
  Large,
}

const coffee2 = {
  name: "cpp",
  size: Sizes1.Middle,
};
