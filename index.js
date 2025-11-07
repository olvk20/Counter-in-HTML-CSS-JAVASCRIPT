const decreaseBtn = document.getElementsByClassName("decrease")[0];
const resetBtn = document.getElementsByClassName("reset")[0];
const increaseBtn = document.getElementsByClassName("increase")[0];
const countLabel = document.getElementsByClassName("countLabel")[0];
let count = 0;

increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
};

decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
};

resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
};
