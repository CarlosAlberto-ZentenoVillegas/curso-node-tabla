const fs = require('fs');
const colores = require('colors');

//Con promesas
/*
const crearArchivo =(base = 5)=>{
    

    return new Promise((resolve, reject)=>{

    console.log(`================`);
    console.log('TABLA DEL NRO.',base);
    console.log(`================`);

    let salida='';

        for(let i=1; i<=10;i++){
            salida +=`${base} * ${i} = ${base * i}\n`;
        }
        
        console.log(salida);
        
        fs.writeFileSync(`tabla-${base}.txt`,salida)
        
        resolve(`tabla-${base}.txt`);
    });
}
*/  
//Async-Await
const crearArchivo = async(base = 5, lista = 'false', hasta = 0)=>{    

try{
    
    if(lista)
    {
        console.log(`================`.green);
        console.log('TABLA DEL NRO.'.green, colores.blue(base));
        console.log(`================`.green);   
    }

    let salida, consola='';

    for(let i=1; i<=hasta;i++){
        salida +=`${base} * ${i} = ${base * i}\n`;
        consola +=`${base}${colores.cyan(' * ') + i + colores.cyan(' = ')}${base * i}\n`;
    }
    
    //console.log(`------${lista}------`);

    if(lista){
        console.log(consola);
    }
        
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida)
        
        return `tabla-${base}.txt`;
}
catch(err){
 throw ('El error detectado es: '+err);
}
}

module.exports={
    crearArchivo
};