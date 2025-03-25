const  red=document.querySelector('.red')
const  yellow=document.querySelector('.yellow')
const  black=document.querySelector('.black')
const  purple=document.querySelector('.purple')
const  green=document.querySelector('.green')
const  blue=document.querySelector('.blue')
const defaulting=document.querySelector('.default')
const body=document.querySelector('body')

document.body,addEventListener('click',()=>{
    console.log('body was clicked!')
})

red.addEventListener('click',(event)=>{
 document.body.style.backgroundColor='red'
})

yellow.addEventListener('click',(event)=>{
 document.body.style.backgroundColor='yellow'
})

black.addEventListener('click',()=>{
  document.body.style.backgroundColor='black'
    console.log('black')
})

purple.addEventListener('click',()=>{
    document.body.style.backgroundColor='purple'
    console.log('purple')
})

green.addEventListener('click',()=>{
   document.body.style.backgroundColor='green'
    console.log('green')
})

blue.addEventListener('click',()=>{
    document.body.style.backgroundColor='blue'
    console.log('blue')
})
defaulting.addEventListener('click',()=>{
   document.body.style.backgroundColor='white'
})
        
   
