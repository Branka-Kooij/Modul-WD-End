const changeBtn = document.getElementById('changebutton');
const changeColor = () => {
    changeBtn.classList.add('red-background');
};
changeBtn.addEventListener('click', changeColor);