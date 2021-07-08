// helper function (input: array with objects, return: new array with objects)
export const updateObjectArray = (array, itemId, objPropName, newObjProps) => {
  return array.map((u) => {
    if (u[objPropName] === itemId) {
      return { ...u, ...newObjProps };
    }
    return u;
  });
};
