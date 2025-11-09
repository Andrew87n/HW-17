const textRef = document.querySelector(".text");
const btnRef = document.querySelector(".btn");
btnRef.textContent = textRef.textContent;

const imgRef = document.querySelector(".img");
imgRef.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0IQhVr9DDJCq61QX28zCoiqDrvezBh5ylw&s";

const linkRef = document.querySelector(".link");
linkRef.href = "https://www.youtube.com";
const img1Ref = document.querySelector(".img1");
img1Ref.alt = "cat";

const listRef = document.querySelector(".list");
const firstElementChildRef = listRef.firstElementChild;
firstElementChildRef.textContent = "hello";