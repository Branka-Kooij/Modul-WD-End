function squarDeclaration (num1, num2){
    const square1 = num1 * num1;
    const square2 = num2 * num2;
    const sum  = square1 + square2;
    const sumSquare = sum * sum;
  return sumSquare;
}
console.log(squarDeclaration(1,2))


const squareExpresion = function ( num1, num2)
{
       const square1 = num1 * num1;
      const square2 = num2 * num2;
      const sum  = square1 + square2; 
      const sumSquare = sum * sum;

      return sumSquare;

};

console.log(squareExpresion(1,2))



const squareArrow = (num1, num2)=>
{
    const square1 = num1 * num1;
     const square2 = num2 * num2;
     const sum= square1 + square2;

     const sumSquare = sum * sum;

     return sumSquare;

};

console.log(squareArrow(1,2))
