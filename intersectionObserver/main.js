const data = []
cnt = 25;
for (let i = 0; i <= cnt; i++) {
  data.push({ id: i })
}

const app = document.querySelector('#app');
app.innerHTML = `${data.map((x, idx) => `<div data-idx=${idx} class="observed" style="height: 50px; border: 1px solid black; width: 500px; margin: 10px;">id:${x.id}</div>`).join('')}`

const observer = new IntersectionObserver((items, observer) => {
  items.forEach(item => {
    if (item.isIntersecting) {
      item.target.style.backgroundColor = 'yellow';
      console.log(item.target);
      if (Number(item.target.dataset.idx) + 1 === cnt) {
        for (let i = 0; i < 25; i++) {
          const dom = document.createElement('div')
          dom.innerText = 'new';
          app.append(dom);
        }
      }
      observer.unobserve(item.target)
    }
  })
})

document.querySelectorAll('.observed').forEach(item => observer.observe(item));