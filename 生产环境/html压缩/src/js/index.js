// import '@babel/polyfill';
// 所有的兼容性d都加载进来

const add = (x, y) => {
  return x + y;
};
console.log(add(2, 5));

const promise = new Promise(resolve => {
  setTimeout(() => {
    console.log('定时器执行完了~');
    resolve();
  }, 1000);
});

console.log(promise);
