const squareBtn= document.querySelector('#sqrButton');
const squareResults= document.querySelector('#squareResults');
const  squareSide= document.querySelector('#squareSide');
const squareLabel= document.querySelector('#squareLabel')
const reloadBtn= document.querySelector('#reloadBtn')

squareBtn.addEventListener('click',(e)=>{
  e.preventDefault()
  if(squareSide.value==="" || squareSide.type!= "number" ){ 
    alert(`You have to introduce a number`)
  }
  else {
  squareLabel.classList.add('inactive')
  squareSide.classList.add('inactive')
  reloadBtn.classList.remove('inactive')
  squareBtn.classList.add('inactive')
  squareResults.innerHTML=`The perimeter of the square is ${squareSide.value*4}`}
})

  
  
