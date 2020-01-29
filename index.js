let insert =() => {
  let str = prompt("何か入力してください！");

  let ul = document.getElementById("dom");

  let li = document.createElement('li');
  li.innerText = str;

  ul.appendChild(li);
};
