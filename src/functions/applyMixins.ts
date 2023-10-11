import { NewableClass } from "../types";

export const applyMixins = (
  baseClass: NewableClass<any>,
  extendedClasses: NewableClass<any>[]
) => {
  extendedClasses.forEach((extendedClass) => {
    Object.getOwnPropertyNames(extendedClass.prototype).forEach((name) => {
      Object.defineProperty(
        baseClass.prototype,
        name,
        Object.getOwnPropertyDescriptor(extendedClass.prototype, name) ||
          Object.create(null)
      );
    });
  });
};
