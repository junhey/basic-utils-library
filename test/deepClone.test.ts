import deepClone from '../src/deepClone';

describe('deepClone function', () => {
  it('should return the same object when passing a non-object value', () => {
    const input = 42;
    const result = deepClone(input);
    expect(result).toBe(input);
  });

  it('should return a deep cloned array', () => {
    const input = [1, { a: 2 }, [3, 4]];
    const result = deepClone(input);
    expect(result).toEqual(input); // 检查值相等
    expect(result).not.toBe(input); // 检查引用不同
  });

  it('should return a deep cloned object', () => {
    const input = { a: 1, b: { c: 2 }, d: [3, 4] };
    const result = deepClone(input);
    expect(result).toEqual(input); // 检查值相等
    expect(result).not.toBe(input); // 检查引用不同
  });

  it('should handle circular references', () => {
    const input: any = { a: 1 };
    input.b = input;
    const result = deepClone(input);
    expect(result).toEqual(input);
    expect(result).not.toBe(input);
    expect((result as any).b).toBe(result); // 检查循环引用
  });
});
