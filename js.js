const item = [
  {
    img: "images/p1.jpg",
    price: "21.22",
    title: "hello",
  },

  {
    img: "images/p1.jpg",
    price: "21.22",
    title: "hello",
  },

  {
    img: "images/p1.jpg",
    price: "21.22",
    title: "hello",
  },

  {
    img: "images/p1.jpg",
    price: "21.22",
    title: "hello",
  },

  {
    img: "images/p1.jpg",
    price: "21.22",
    title: "hello",
  },

  {
    img: "images/p1.jpg",
    price: "21.22",
    title: "hello",
  },

  {
    img: "images/p1.jpg",
    price: "21.22",
    title: "hello",
  },
  {
    img: "images/p1.jpg",
    price: "21.22",
    title: "hello",
  },
  {
    img: "images/p1.jpg",
    price: "21.22",
    title: "hello",
  },


];
var txt = "";

item.map((e) => {
  // console.log(e);
    txt += `<div class="item">
    <div class="img-box">
        <img src="${e.img}" alt="">
    </div>
    <div class="txt-box">
        <p class="txt-money"><b>$${e.price}</b></p>
        <p>${e.title}</p>
    </div>
   </div>`;
});
document.getElementById("list").innerHTML=txt;