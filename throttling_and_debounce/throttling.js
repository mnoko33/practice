const input = document.querySelector('#input');
let value = '';
const result = []

/* 
  fn: throttling을 적용할 callback 함수
  ms: 마지막 함수 호출 뒤, 다른 함수를 무시하는 기간 (milesecond)
  return throttling이 적용된 함수
*/
const getThrottledFunc = (fn, ms) => {
  let timer = null;
  return () => {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null
        fn();
      }, ms)
    }
  }
}

const func = () => {
  result.push(`${new Date().getTime()} : ${value}`)
  document.querySelector('.result').innerHTML = result.map(s => `<div>${s}</div>`).join('');
}

const throttledFunc = getThrottledFunc(func, 200);

input.addEventListener('keyup', e => {
  value = e.target.value;
  throttledFunc();
});




