function guessFunc(choice){
    let guessSection=document.getElementById("guessResult");
    if(choice==1){
        guessSection.innerHTML="You guessed correctly!";
        guessSection.innerHTML.style.color="green";
    }else if(choice==2){
        guessSection.innerHTML="You guessed incorrectly!";
        guessSection.innerHTML.style.color="red";
    }else if(choice==3){
        guessSection.innerHTML="You guessed incorrectly!";
        guessSection.innerHTML.style.color="red";
    }
}