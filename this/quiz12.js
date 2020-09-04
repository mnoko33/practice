const logThis = () => {
  console.log(this);
}

const btn = document.getElementById('btn');
btn.addEventListener('click', logThis);