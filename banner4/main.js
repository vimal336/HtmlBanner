function startAnim(){

    var startTime = 0;

    var anim = new TimelineMax();

    startTime+=0.5;
    anim.to("#bgc",0.5,{ opacity:1, ease:Power3.easeOut},startTime);
    


    startTime+=0.3;
    anim.to("#shape1",0.5,{ x:0,y:0, ease:Power3.easeOut},startTime);

    startTime+=0.5;
    anim.to("#kc",0.5,{ x:0,y:0, opacity:1, ease:Power3.easeOut},startTime);
    

    startTime+=0.3;
    anim.to("#text-1",0.5,{ x:0, ease:Power3.easeOut},startTime);
    
    startTime+=0.3;
    anim.to("#text-2",0.5,{ x:0, ease:Power3.easeOut},startTime);

    startTime+=0.3;
    anim.to("#text-3",0.5,{ x:0, ease:Power3.easeOut},startTime);

    startTime += 0.5;
    anim.to("#line", 0.5, { width:100, ease:Power3.easeOut}, startTime);
    startTime += 0.5;
    anim.to("#line", 0.5, { width:27, ease:Power3.easeOut}, startTime);

    
    startTime += 0.5;
    anim.to("#logo", 0.5, { y:0, ease:Power3.easeOut}, startTime);

    startTime+=0.3;
    anim.to("#text-4",0.5,{ opacity:1, ease:Power3.easeOut},startTime);

    

    startTime+=0.3;
    anim.to("#shape2",0.5,{ x:0,y:0, ease:Power3.easeOut},startTime);

    startTime+=0;
    anim.to("#bgtext1",0.5,{ opacity:1, ease:Power1.easeNone},startTime);
    startTime+=0.5
    anim.to("#bgtext1",0.5,{ opacity:0, ease:Power1.easeNone},startTime);

    
    startTime+=0.3;
    anim.to("#cta",0.5,{ x:0,y:0, ease:Power3.easeOut},startTime);

    startTime+=0.3;
    anim.to("#url",0.5,{ x:0,y:0, ease:Power3.easeOut},startTime);

    startTime+=0.5;
    anim.to("#kc",0.5,{ x:0,y:0, opacity:0, ease:Power3.easeOut},startTime);
   
    anim.to("#lr",0.3,{ x:0,y:0, opacity:1, ease:Power3.easeOut},startTime);
    startTime+=0.3;
    
    startTime+=0.5;
    anim.to("#bgtext2",0.5,{ opacity:1, ease:Power1.easeNone},startTime);

    startTime+=0.3
    anim.to("#bgtext2",0.5,{ opacity:0, ease:Power1.easeNone},startTime);

    startTime+=0.3;
    anim.to("#lr",0.5,{ x:0,y:0, opacity:0, ease:Power3.easeOut},startTime);

    startTime+=0.3;
    anim.to("#br",0.5,{ x:0,y:0, opacity:1, ease:Power1.easeNone},startTime);

    startTime+=0.3;
    anim.to("#bgtext3",0.5,{ opacity:1, ease:Power1.easeNone},startTime);
    


   

   

}


window.onload = startAnim();