

function paint( color) {
    console.log('The wall has been painted ' + color );
};
paint( 'green');


function paint( color, wallType) {
    console.log('The '+  wallType+' wall has been painted ' + color );
};
paint( 'orange' , ' north ');


paint( 'gray' , ' south');
