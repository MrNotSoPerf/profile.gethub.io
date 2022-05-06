const secs=document.querySelectorAll('.section') , sideSec=document.querySelectorAll('.controls') , secBtn=document.querySelectorAll('.control') , allSecs=document.querySelector('.main')
//clicking buttons
function pageTrans(){
    for(let i=0; i<secBtn.length ; i++){
        secBtn[i].addEventListener('click' , function(){
            let currentBtn=document.querySelectorAll('.active-btn')
            currentBtn[0].className=currentBtn[0].className.replace('active-btn','')
            this.className+=' active-btn'
            let currentSec=document.querySelectorAll('.active')
            currentSec[0].classList.remove('active')
            secs[i].classList.add('active')
        })       
    }
    //toggle
    const mode=document.querySelector('.theme-btn')
    const dayonight=document.querySelector('.sun')
    mode.addEventListener('click',function(){
        let e=document.body
        e.classList.toggle('light-mode')
        this.classList.toggle('activesh')
      
    })
}



  
pageTrans()
