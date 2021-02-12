// selctors

box=document.querySelectorAll("td");
backCol = document.querySelector("h1");
msg = document.querySelector(".try");
kef = document.querySelector(".kafali");

//var
len=6;

// console.log(msg)

for(i=0;i<6;i++)
{
    box[i].addEventListener("click", function (){
        console.log(this.style.backgroundColor, backCol.textContent);
        if (this.style.backgroundColor === backCol.textContent )
        {
            msg.textContent="Correct";
            msg.style.color = "green";
            buttons[0].textContent="PLAY AGAIN?"
            for(i=0; i< len; i++)
            {
                kef.style.backgroundColor = box[i].style.backgroundColor = backCol.textContent;
            }
        }
        else
        {
            this.style.backgroundColor ="rgb(37, 37, 38)"
            msg.textContent = "Try again";
            msg.style.color = "red";
        }
        
    })
}
game(len);


// selector buttons
buttons=document.querySelectorAll("button");

buttons[0].addEventListener("click", function () {
    this.textContent = "NEW GAME";
    game(len);
});

buttons[1].addEventListener("click", function () {
        this.classList.add("lvl");
        buttons[2].classList.remove("lvl");
        for(i=3;i<6;i++){
            box[i].classList.add("hide");
        }
        buttons[0].textContent = "NEW GAME";
        len=3;
        game(len);

});

buttons[2].addEventListener("click", function () {
    this.classList.add("lvl");
    buttons[1].classList.remove("lvl");
    for (i = 3; i < 6; i++) {
        box[i].classList.remove("hide");
    }
    buttons[0].textContent = "NEW GAME";
    len=6;
    game(len);
});


function rgb()
{
    c1 = Math.floor(Math.random() * 256);
    c2 = Math.floor(Math.random() * 256);
    c3 = Math.floor(Math.random() * 256);

    return "rgb(" + c1 + "," + c2 + "," + c3 + ")";
}

function game(len){
        kef.style.backgroundColor = " #73AD21"
        msg.textContent = "";
        msg.style.backgroundColor = "none";
        key = Math.floor(Math.random() * len);
        for(i=0;i<len;i++){
        box[i].style.backgroundColor = rgb();
        if (key==i){
            backCol.innerHTML = box[i].style.backgroundColor;
            console.log(key);
        }

    }
}