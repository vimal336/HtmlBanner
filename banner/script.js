function startAnim() {
  setTimeout(function () {
    document.getElementById("text1").style.opacity = "1";
    document.getElementById("text1").style.transition = "all 0.5 ease";
  }, 1000);

  setTimeout(function () {
    document.getElementById("text2").style.opacity = "1";
    document.getElementById("text2").style.transition = "all 0.5 ease";
  }, 1500);

  setTimeout(function () {
    document.getElementById("text3").style.opacity = "1";
    document.getElementById("text3").style.transition = "all 0.5 ease";
  }, 2000);

  setTimeout(function () {
    document.getElementById("cta").style.opacity = "1";
    document.getElementById("cta").style.transition = "all 0.5 ease";
  }, 2500);

  setTimeout(function () {
    document.getElementById("url").style.opacity = "1";
    document.getElementById("url").style.transition = "all 0.5 ease";
  }, 3000);
}

window.onload = startAnim();
