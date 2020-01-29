let insert =() => {
  let str = "Hello,JavaScript!"

  let ul = document.getElementById("insert");

  let li = document.createElement('li');
  li.innerText = 'Hello, JavaScript!';

  ul.appendChild(li);
};
