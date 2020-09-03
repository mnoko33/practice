const input2 = document.querySelector('#input2');
let value2 = '';

/* 
  fn: debounce를 적용시킬 함수
  ms: 이벤트 호출이 끝났음을
*/
const getDebouncedFunc = (fn, ms) => {
  let timer = null;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn()
    }, ms)
  }
}

const func2 = () => {
  document.querySelector('.result2').innerText = value2;
}

const debouncedFunc = getDebouncedFunc(func2, 200)

input2.addEventListener('keyup', e => {
  value2 = e.target.value;
  debouncedFunc();
})