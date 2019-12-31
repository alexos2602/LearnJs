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
    //>, <; >=; <=; ==; ===;para comparar valor y tipo de dato

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
    
    