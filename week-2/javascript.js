const welcome = document.getElementById('frontpage');

welcome.addEventListener('click',()=>{
    welcome.textContent = "Have a goodtime!"
})

const menubutton = document.getElementById('menuicon');
const menuclick = document.getElementById('menuclick');

menubutton.addEventListener('click',()=>{
    if(menuclick.style.display == 'none'){
        menuclick.style.display = 'block';
    }else{
        menuclick.style.display = 'none';
    }
})

const showmore = document.getElementById('showmore');
const hiddencontent = document.getElementsByClassName('hiddencontent')[0];

showmore.addEventListener('click',()=>{
    hiddencontent.style.display = "block";
})