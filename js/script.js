var mainImage = document.getElementById("main-image");
var sImage = document.getElementsByTagName("img");

function changeImage(tst) {
  let imgSrc = tst.src;
  mainImage.src = imgSrc;

  //active
  tst.classList.add("active");

  setInterval(function () {
    if (tst.src != mainImage.src) {
      tst.classList.remove("active");
    }
  }, 200);
}

//
function checkIA() {
  let checkA = document.getElementById("checkbox1");
  let o = false;

  let body = document.getElementsByTagName("body")[0];
  let container = document.getElementById("container");
  let smallImages = document.getElementById("small-images");

  window.onload = setInterval(function () {
    if (checkA.checked == true) {
      o = true;
    } else {
      o = false;
    }

    if (o == true) {
      body.style.backgroundColor = "black";
      container.style.backgroundColor = "rgb(18, 53, 83)";
      smallImages.style.backgroundColor = container.style.backgroundColor;
    } else {
      body.style.backgroundColor = "";
      container.style.backgroundColor = "";
      smallImages.style.backgroundColor = "";
    }
  }, 10);
}

checkIA();

//
function checkItem(item) {
  var check1status = document.getElementById(item).checked;
  localStorage.setItem(item, check1status);
}

window.onload = function () {
  checkItemOnload("checkbox1");
};

function checkItemOnload(item) {
  var checkStatusStorage = localStorage.getItem(item);
  if (checkStatusStorage == "true") {
    document.getElementById(item).checked = true;
  } else {
    document.getElementById(item).checked = false;
  }
}

checkItemOnload("checkbox1");
