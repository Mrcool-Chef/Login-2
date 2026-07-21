const main=document.querySelector('.main');
const path=document.querySelector('#path');
const log=document.querySelector('#log');
const login=document.querySelector('#Login')
const icon=document.querySelector('.fa-solid')
const body=document.querySelector('body')

path.addEventListener('click',function(){
    main.classList.toggle('sign');
    if(main.classList.contains('sign')){
        log.innerHTML='Sign in'
        login.innerHTML='Sign in'
        path.innerHTML='Already logged in?'
    }else{
        log.innerHTML='Login'
        login.textContent = "Login";
    path.textContent = "Don't have an account?";
    }
})

icon.addEventListener('click',function(){
    body.classList.toggle('bg')
    if (body.classList.contains("bg")) {
        icon.classList.replace("fa-sun", "fa-moon");
    } else {
        icon.classList.replace("fa-moon", "fa-sun");
    }
})
