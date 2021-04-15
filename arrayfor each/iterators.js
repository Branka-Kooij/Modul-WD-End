const arreyColor =['green' , 'blue' , "red ",  " orange" ];
let i=0;
while(i <arreyColor.length) {
console.log(arreyColor[i]);
i++
}

for (let i=0; i<arreyColor; i++){
    console.log(arreyColor[i]);
}
//NEW

 arreyColor.forEach(color => console.log(color))

 //obj
 let colorOBject = {
    colorY: 'yellow',
    colorS: 'blue',
    colorF: 'red',
    colorL: 'orange'
};

for (i in colorOBject) {
    console.log(colorOBject[i]);
}