

const ageAdult =function (age) {
    if (age>=18){
    
        return true;
    }
    else {
        return false;
    }
};
 const greeting = function( age){
     if (ageAdult(age)){
        return "Hello there";
    } else {
       return "Hey kiddo";
    }
 };

    


console.log(ageAdult(15));
console.log(greeting(10));
console.log(greeting(20));




//vat calculation
const vatAmount = function (baseprice ,vatProcentage )
{
    const onlyVat =baseprice* (vatProcentage/100);
    console.log("Vat amount "+ onlyVat);
    return onlyVat;
};


 const totalAmount = function ( baseprice , vatProcentage)
 {
     let total = baseprice + vatAmount(baseprice,vatProcentage);
    return total;
 };
 console.log(totalAmount(16,21));


 // vat 2


 
 const totalAmount = function ( fullprice , vatProcentage){
     const basePrice = fullprice / ((100+vatProcentage)/100);
     const vatAmount= fullprice - basePrice;
     return [basePrice, vatAmount];

 };

 console.log(totalAmount(36,21))
