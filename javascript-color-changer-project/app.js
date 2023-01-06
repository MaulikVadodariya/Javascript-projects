const canvasElement = document.querySelector('#canvas');
const bodyElement = document.querySelector('body');

const clickBtn = document.querySelector('#button');

const elementArray = [canvasElement , bodyElement];

const bgChange = (...elements) => {    

    // console.log(elements);
    
    elements.forEach(element => {
        var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        element.style.backgroundColor = randomColor;
    });

    // for(element of elements){
    //     var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    //     element.style.backgroundColor = randomColor;
    // }

}

clickBtn.addEventListener("click" , function(){
    bgChange(...elementArray);
});
