function startanim(){
    setTimeout(function(){
        document.getElementById("shape1").style.transform = 'translatex(0px)';
        document.getElementById("shape1").style.transition = 'all 0.4s ease-out';
    }, 500)

    setTimeout(function(){
        document.getElementById("photo").style.transform = 'translatex(0px)';
        document.getElementById("photo").style.transition = 'all 0.4s ease-out';
    }, 900)

    setTimeout(function(){
        document.getElementById("shape2").style.transform = 'translatex(0px)';
        document.getElementById("shape2").style.transition = 'all 0.4s ease-out';
    }, 1400)

    setTimeout(function(){
        document.getElementById("logo").style.transform = 'scale(1)';
        document.getElementById("logo").style.transition = 'all 0.8s ease';
    }, 2000)

    setTimeout(function(){
        document.getElementById("text1").style.transform = 'translatex(0px)';
        document.getElementById("text1").style.opacity = '1';
        document.getElementById("text1").style.transition = 'all 0.5s ease';
    }, 2500)

    setTimeout(function(){
      
        document.getElementById("text2").style.opacity = '1';
        document.getElementById("text2").style.transition = 'all 0.5s ease';
    }, 3000)

    setTimeout(function(){
        document.getElementById("text3a").style.opacity = '1';
        document.getElementById("text3a").style.transition = 'all 0.5s ease';
    }, 3500)

    setTimeout(function(){
        document.getElementById("text3b").style.opacity = '1';
        document.getElementById("text3b").style.transition = 'all 0.5s ease';
    }, 4000)

    setTimeout(function(){
        document.getElementById("cta").style.transform = 'scale(1)';
        document.getElementById("cta").style.opacity = '1';
        document.getElementById("cta").style.transition = 'all 0.5s ease';
    }, 4500)

    

}
window.onload = startanim();
