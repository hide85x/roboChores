    let spaceDoor='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg',
    beachDoor= 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg',
    botDoor='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg',
    closedDoor='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg',
    door1=document.getElementById('door1'),
    door2=document.getElementById('door2'),
    door3=document.getElementById('door3'),
    start= document.getElementById('start'),
    door=document.getElementById('door')
  
    openDoor1= null,
    openDoor2= null,
    openDoor3=null,
    numDoor=3,
    isPlaying=true
start.onclick=()=>{location.reload()}
door.innerHTML='Doors to open : ' + (numDoor-1)
door1.onclick=()=>{
    if(isClosed(door1)==false&&door1.src==closedDoor && isPlaying==true){
    door1.src= openDoor1
    play(door1)
    console.log(numDoor)
    door.innerHTML='Door to open: ' + (numDoor -1)
        }else if(isPlaying==false){alert('You are done here, click play again to play one more time!')
        }
        else{alert('You have already clicked that YOU FILTHY CHEATER !')}
        }
        door2.onclick=()=>{
    if(isClosed(door2)==false&& door2.src==closedDoor  && isPlaying==true){
    door2.src= openDoor2
    play(door2)
    console.log(numDoor)
    door.innerHTML='Door to open: ' + (numDoor -1)

        }else if(isPlaying==false){alert('You are done here, click play again to play one more time!')
        }
        else{alert('You have already clicked that YOU FILTHY CHEATER !')}
        }
        door3.onclick=()=>{
    if(isClosed(door3)==false&& door3.src==closedDoor  && isPlaying==true){
    door3.src= openDoor3
    play(door3)
    console.log(numDoor)
    door.innerHTML='Door to open: ' + (numDoor -1)

        }else if(isPlaying==false){alert('You are done here, click play again to play one more time!') 
         }
        else{alert('You have already clicked that YOU FILTHY CHEATER !')}
        }  

function isBot(door){
    if(door.src==botDoor){
        return true
    }else{ return false}
}
function isClosed(door){
    if(door.src!=closedDoor){
        return true
    }else{return false}
}

function play(door){
    numDoor--;
    if(door.src==botDoor){
        isPlaying=false
        alert(`YOU LOOSE
GAME OVER`)
        start.innerHTML='Play Again?'
        
    }
    else if(numDoor==1&&isPlaying==true){
    setTimeout(function(){alert('GAME OVER\n  YOU WIN!');},500),isPlaying=false,start.innerHTML='Play Again ?'}
    console.log(numDoor)
}
function GetRandom(){           // losuje robota i przypisuje go i pozostałym dzrzwiom clicki i obrazki
     let random=Math.floor(Math.random()*3)
        if( random==0){
            openDoor1=botDoor;
            openDoor2=beachDoor;
            openDoor3=spaceDoor;
        }else if( random==1){
            openDoor1=beachDoor;
            openDoor2=botDoor;
            openDoor3=spaceDoor;
        }else if( random==2 ){
            openDoor1=spaceDoor;
            openDoor2=beachDoor;
            openDoor3=botDoor;
        }
}
GetRandom()