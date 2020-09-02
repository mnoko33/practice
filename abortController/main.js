const app = document.querySelector('#app');

const allFetch = [];
const abortedFetch = [];
const doneFetch = [];

app.innerHTML = `
  <div class="btn-area">
    <button id="fetch-btn">api요청</button>
    <div class="id-viewer">ID: 0</div>
  </div>
  <div class="container">
    <div class="wrapper all-fetch-wrapper" style="">
      <h2>All API</h2>
      <div class="all-fetch-contents"></div>
      </div>
      <div class="wrapper done-fetch-wrapper" style="">
      <h2>DONE API</h2>
      <div class="done-fetch-contents"></div>
      </div>
      <div class="wrapper aborted-fetch-wrapper" style="">
      <h2>ABORTED API</h2>
      <div class="aborted-fetch-contents"></div>
    </div>
  </div>
  `

const all = document.querySelector('.all-fetch-contents');
const aborted = document.querySelector('.aborted-fetch-contents');
const done = document.querySelector('.done-fetch-contents');
const allList = [];
const abortedList = [];
const doneList = [];

const idViewer = document.querySelector('.id-viewer');

const render = () => {
  [
    [all, allList],
    [aborted, abortedList],
    [done, doneList]
  ].forEach(([target, list]) => {
    target.innerHTML = list.map(id => `<div class="${id ? 'card' : 'card vacant'}">${id ? id : ''}</div>`).join('')
  })
}

const fetchData = (id, signal) => {
  const URL = `http://localhost:80?id=${id}`;
  allList.push(id);
  render()
  try {
    fetch(URL, { signal })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        doneList.push(res.id);
        abortedList.push(null);
        render()
      })
      .catch(e => {
        abortedList.push(id);
        doneList.push(null);
        render()
        console.log('during fetch', e);
      })
  } catch(e) {
    console.log('in fetchData', e)
  }
}

let timeStamp = null;
const controllerQ = [];
let id = 0;

document.querySelector('#fetch-btn').addEventListener('click', e => {
  id += 1;
  idViewer.innerText = `ID: ${id}`;
  // 해당 이벤트의 controller와 signal을 생성
  let controller;
  if (controllerQ) {
    controller = controllerQ.shift();
  }
  // 1000ms 이내에 이벤트가 다시 발생했을 때
  if (timeStamp && controller && e.timeStamp - timeStamp < 1000) {
    // 기존 fetch를 취소
    controller.abort();
  }
  timeStamp = e.timeStamp;

  // 새로운 controller를 만들고 controllerQ에 삽입
  controller = new AbortController()
  controllerQ.push(controller);
  signal = controller.signal;
  fetchData(id, signal);
})