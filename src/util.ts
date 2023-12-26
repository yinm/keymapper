export const isEmptyObject = (object: object) =>
  Reflect.ownKeys(object).length === 0;
