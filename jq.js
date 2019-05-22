$(function(){
    let door1= $('#door1'),
        door2=$('#door2'),
        door3=$('#door3'),
        start=$('#start'),
        door=$('#door'),

        spaceDoor='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg',
        beachDoor= 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg',
        botDoor='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg',
        closedDoor='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg',

        openDoor1= null,
        openDoor2= null,
        openDoor3=null,
        numDoor=3,
        isPlaying=true
    
    door1.on('click', function(){
        $(this).attr('src', openDoor1),
        console.log('dupa')
        play($(this))
    })
    door2.on('click', function(){
        $(this).attr('src', openDoor2),
        console.log('dupa')
        play($(this))
    })
    door3.on('click', function(){
        $(this).attr('src', openDoor3),
        console.log('dupa')
        play($(this))
    })
function play(door){
    numDoor--
    if(door.attr('src')==botDoor){
        alert('Game Over!')
        isPlaying=false
        start.text('Wanna Go Again ?')
    }
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
})