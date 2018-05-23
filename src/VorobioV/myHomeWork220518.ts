function isInArray(arr: Array<string | number | boolean>, ...args: Array<string | number | boolean>) {
  let flag: boolean = true;
  args.forEach(item => {
    if (arr.find(el => el === item) === undefined) flag = false;
  });
  return flag;
}
