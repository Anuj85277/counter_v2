let count=0;

// const decreasebtn = document.getElementById("decreasebtn");

document.getElementById("decreasebtn").addEventListener("click", function(){
    count--;
    countLabel.textContent=count;
});

// decreasebtn.onclick = function(){
//     count--;
//     countLabel.textContent=count;
// } 

const increasebtn = document.getElementById("increasebtn");

increasebtn.onclick = function(){
    count++;
    countLabel.textContent=count;
} 

const resetbtn = document.getElementById("resetbtn");

resetbtn.onclick = function(){
    count = 0;
    countLabel.textContent=count;
} 
