const clickHandler = async () => {
  let response = await fetch('/quote');
  let quote = await response.text();
  document.querySelector('#quote').innerText = quote;
};

document.querySelector("#frog").addEventListener('click', clickHandler);