/*//variables

    let precio = 100,
    impuesto = precio * 0.28,
    descuent = precio * 0.1;

    let preFinal = precio + impuesto - descuent;

    console.log(precio);
    console.log(impuesto);
    console.log(descuent);
    console.log(preFinal);

    const echoEn = 1996;

    //let tienen ambito de bloque fuera del bloque no se toma en cuenta
    //var no es asi 
    */

/* ------------------------------------------------------------------------ */

/* //tipos de datos

    //primitivos

    //string texto

    let hola = "hola \"todos\"";

    //template Strings para concatenar

    let nombPerso = "Jose"; 
    let num = 4;
    let saludo = console.log(` Bienvenido, ${nombPerso}, ${num * 2} veces`);//backtick alt+96 */


    /* //number 

    let birth = 1996;
    let year = new Date().getFullYear();// guardando año actual
    let age = year - birth; */


    /* //Boolean verdadero o falso

    if ('a' == 'b'){
        console.log('son iguales')
    }else{
        console.log('no son iguales')
    } */

    //undefined cuando no se le asigna valor a una variable

    //let noDefinido;

    //null cuando no existe algun volor

    //let title = document.getElementById('title');

    //typeof devuelve una cadena que indica el tipo del operando sin evaluarlo.
    //Compuestos u objetos

    //Array
    //Object
    //Map
    //Set
    //function

    /* ------------------------------------------------------------------------ */

    //Operadores aritmeticos
    // +, -, *, /, %

    //Incremento y decremento
    //++
    //--

    /* let numero = 5;
    console.log(numero++);
    console.log(numero); */

    // +=, -=, *=, /= 

    /* let numero = 10;
    numero /= 5;
    console.log(numero); */

    //operadores de comparacion (devuelven un boolean)
    //>, <; >=; <=; ==; !=; diferente de; ===;para comparar valor y tipo de dato &&; y and; ||; o O

    /* let condicion = 5 < 10;

    console.log('condicion'); */

/* ------------------------------------------------------------------------ */

    //Propiedades y metodos
    //propiesdades: caracteristicas 
    //metodos: accion a ejecutar

    /* let prof1 = 'Arsged';
    let prof2 = 'Brsged';
    let prof3 = 'arsged';
    let prof4 = 'crsged';

    console.log(prof3.toUpperCase().indexOf('A') == 0); */

/* ------------------------------------------------------------------------ */

    //Propiedades

    /* let saludo = " hola quien vea esto ";

    let longitud = saludo.length;

    console.log(longitud);
    console.log(saludo);//para quitar espacios inicio/fin

    //Metodos, sin parametros

    console.log(saludo.trim());//para quitar espacios inicio/fin
    console.log(saludo.trim().toUpperCase());
    console.log(saludo.trim().toLowerCase()); */

    //Metodos con parametros

    //let saludo = "hola quien vea esto";

    /* let longitud = saludo.length; */

    //indexOf(string[i]) i es indice
    /* console.log(saludo[2]);
    console.log(saludo.indexOf('vea', 1)); */

    //lastIndexOf(string[i]) i es indice
    /* console.log(saludo[2]);
    console.log(saludo.lastIndexOf('o')); */

    //replace(oldString,newString)
    /* let nuevoSaludo = saludo.replace('vea esto', 'esto es un nuevo saludo');
    console.log(nuevoSaludo);
    console.log(saludo); */

    //split('separador', N) convierte string en array
    /* let arrayFromSaludo = saludo.split(' ', 4);
    console.log(arrayFromSaludo); */

    // substring(a,b), substr(a,b), slice(a,b)
    /* let substring,substr,slice;

    substring = saludo.substring(4, 7);
    console.log(substring);

    substr = saludo.substr(4, 8); //indice cantidad de caracteres
    console.log(substr);
    
    slice = saludo.slice(4, 5);
    console.log(slice); */

    //Nuevos metodos ES6
    //.startWtih(), endsWith(), includes() 

    /* console.log(saludo.startsWith('h'));
    console.log(saludo.endsWith('o'));
    console.log(saludo.includes('vea')); */

/* ------------------------------------------------------------------------ */
    
    //Condicionales
    //let edad = prompt('dime tu edad');// toma string pero js lo convierte 

    /* if (edad < 12) {
        console.log('eres niño');
        if (edad < 2) {
            console.log('eres un bebé');
        }
        } else if (edad >= 12 && edad < 18) {
            console.log('eres adolescente');
        } else if (edad >= 18 && edad < 60) {
            console.log('eres adulto');
    }
    else {
        console.log('eres anciano');
    } */
 

    // valores que no son boolean pero equivalen
    //Truthy: Strings no vacios, Arrays[], {}, Numeros diferentes de 0
    //Falsy: 0, string vacios, null, nan, undefined.

    /* if (edad) {
        console.log('Ingresaste un valor truthy');
    } else {
        console.log('Ingresaste un valor falsy');
    }
 */

    //Switch
    /* let color = prompt(`Escoje un color: 
    1. rojo
    2. verde
    3. azul
    4. negro
    5. amarillo`);

    switch (color) {
        case '1':
            console.log('rojo');
            break;
        case '2':
            console.log('verde');
            break;
        case '3':
            console.log('azul');
            break;
        case '4':
            console.log('negro');
            break;
        case '5':
            console.log('amarillo');
            break;
    
        default:
            break;
    } */

    //operador ternario: 
    //forma abreviada de hacer un IF
    //condicion ? valorTrue : valorFalse colocar simpre valor falso

    let nombre = prompt('Escribe tu nombre');

    nombre.length > 5 ? console.log('tu nombre es largo') : console.log('tu nombre es corto');