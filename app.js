//select all button divs

const btns = document.querySelectorAll(".btn");

btns.forEach(btn =>{
    btn.addEventListener("click", ()=> playSound(btn))
})

function playSound(btn){
    const sound =document.getElementById(btn.dataset.key);
    sound.currentTime = 0;
    sound.play();
}

function handleColor(){
    let selectedcolor=document.getElementById('colors').value;
    console.log(selectedcolor);
    let colors=document.querySelectorAll(".white");
    for(let i=0;i<colors.length;i++){
        colors[i].style.backgroundColor=selectedcolor;
    }
}

  