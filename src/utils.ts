export const getUniqueObjsByName = <T extends { name: string }>(arr: T[]) => {
  const namesSet = new Set();

  const res: T[] = [];
  return arr.reduce((res, obj, ind) => {
    const name = obj.name.toLowerCase();

    if (!namesSet.has(name)) {
      namesSet.add(name);
      res.push(obj);
    }

    return res;
  }, res);
};
