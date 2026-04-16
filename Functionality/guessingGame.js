function guessFunc(){
    let guessSection=document.getElementById("AnimalInput").value;
    if(guessSection=="Dog" || guessSection=="dog"){
        document.getElementById("guessResult").innerHTML=`<p>You guessed correctly!</p>`;
        document.getElementById("guessResult").style.color="green";
    }else{
        document.getElementById("guessResult").innerHTML=`<p>You guessed incorrectly!</p>`;
        document.getElementById("guessResult").style.color="red";
    }
}