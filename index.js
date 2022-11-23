const btn=document.getElementById('sub');
const ref=document.getElementById('ref');
const invalid=document.getElementById('invalid');
const input=document.getElementById('input')
const output=document.getElementById('output');
function random(){
    var cap=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0']
    var a=cap[Math.floor(Math.random()*62)];
    var b=cap[Math.floor(Math.random()*62)];
    var c=cap[Math.floor(Math.random()*62)];
    var d=cap[Math.floor(Math.random()*62)];
    var e=cap[Math.floor(Math.random()*62)];
    var f=cap[Math.floor(Math.random()*62)];
    let captcha=a+b+c+d+e+f;
    output.value=captcha;
    }
    
    sub.addEventListener('click', ()=>{
        if(input.value != output.value){
        invalid.innerText="Invalid Captcha!!!"
    }
    });
    ref.addEventListener('click' ,random);
    window.addEventListener('load' ,random);

