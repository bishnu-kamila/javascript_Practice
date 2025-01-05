const button1 = document.querySelector('.box1')
const button2 = document.querySelector('.box2')
const button3 = document.querySelector('.box3')
const button4 = document.querySelector('.box4')
const body = document.querySelector('body')
// console.log(button1);
button1.addEventListener('click',function(b){
    if(b.target.id==='blue'){
        body.style.backgroundColor=b.target.id
    }
})
button2.addEventListener('click',function(b){
    if(b.target.id==='grey'){
        body.style.backgroundColor=b.target.id
    }
})
button3.addEventListener('click',function(b){
    if(b.target.id==='yellow'){
        body.style.backgroundColor=b.target.id
    }
})
button4.addEventListener('click',function(b){
    if(b.target.id==='aqua'){
        body.style.backgroundColor=b.target.id
    }
})
button5.addEventListener('click',function(b){
    if(b.target.id==='red'){
        body.style.backgroundColor=b.target.id
    }
})
