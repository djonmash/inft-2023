const  pardalote= document.querySelector(".pardalote");
const  purple_swamp= document.querySelector(".purple-swamp");
const  white_headed_stilt= document.querySelector(".white-headed-stilt");
const  inland_thornbill= document.querySelector(".inland-thornbill");
const  rose_robin= document.querySelector(".rose-robin");
const btn_purple_swamp = document.querySelector(".btn-purple-swamp");
const btn_white_headed_stilt= document.querySelector(".btn-white-headed-stilt");
const btn_inland_thornbill = document.querySelector(".btn-inland-thornbill");
const btn_rose_robin = document.querySelector(".btn-rose-robin");
const btn_pardalote = document.querySelector(".btn-pardalote");

btn_pardalote.addEventListener('click',()=>{

    

    pardalote.style.display='flex';
    purple_swamp.style.display='none';
    white_headed_stilt.style.display='none';
    inland_thornbill.style.display='none';
    rose_robin.style.display='none';


})

btn_purple_swamp.addEventListener('click',()=>{

    
    pardalote.style.display='none';
    purple_swamp.style.display='flex';
    white_headed_stilt.style.display='none';
    inland_thornbill.style.display='none';
    rose_robin.style.display='none';
})

btn_white_headed_stilt.addEventListener('click',()=>{
    pardalote.style.display='none';
    purple_swamp.style.display='none';
    white_headed_stilt.style.display='flex';
    inland_thornbill.style.display='none';
    rose_robin.style.display='none';
})

btn_inland_thornbill.addEventListener('click',()=>{
    pardalote.style.display='none';
    purple_swamp.style.display='none';
    white_headed_stilt.style.display='none';
    inland_thornbill.style.display='flex';
    rose_robin.style.display='none';
})

btn_rose_robin.addEventListener('click',()=>{
    pardalote.style.display='none';
    purple_swamp.style.display='none';
    white_headed_stilt.style.display='none';
    inland_thornbill.style.display='none';
    rose_robin.style.display='flex';
})

