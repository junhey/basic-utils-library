const deepClone = (obj: any, clonedObjects = new WeakMap()): any => {
  // 不是引用类型或者是null的话直接返回
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  // 如果已经拷贝过该对象，则直接返回其拷贝
  if (clonedObjects.has(obj)) {
    return clonedObjects.get(obj);
  }

  // 初始化结果
  let result: any;
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }

  // 将当前对象记录到已拷贝对象的 Map 中
  clonedObjects.set(obj, result);

  for (let key in obj) {
    // 保证不是原型上的属性
    if (obj.hasOwnProperty(key)) {
      // 递归调用
      result[key] = deepClone(obj[key], clonedObjects);
    }
  }
  return result;
};

export default deepClone;
