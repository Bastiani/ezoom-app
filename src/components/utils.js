export const isFunction = obj => typeof obj === 'function';

export const getObject = (object) => {
  const key = Object.keys(object);
  return object[key[0]];
};
