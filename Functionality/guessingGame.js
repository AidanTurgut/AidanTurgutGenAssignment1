function guessFunc(choice){
    let guessSection=document.getElementById("guessResult");
    if(choice=='Dog'){
        guessSection.innerHTML="You guessed correctly!";
        guessSection.style.color="green";
    }else if(choice=='Cat'){
        guessSection.innerHTML="You guessed incorrectly!";
        guessSection.style.color="red";
    }else if(choice=='Bird'){
        guessSection.innerHTML="You guessed incorrectly!";
        guessSection.innerHTML.style.color="red";
    }
}