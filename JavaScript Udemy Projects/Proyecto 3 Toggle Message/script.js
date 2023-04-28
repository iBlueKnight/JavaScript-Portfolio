let toggleBtn = document.querySelector('.toggleBtn');
let container = document.querySelector('.container');

toggleBtn.onclick=function(){
    container.classList.toggle('active'); //toggle is a method that automatically recognizes who is going to act like a toggle and when is triggered it will be set to an active status, when is triggered again it will set to unactive
}