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

    /* let nombre = prompt('Escribe tu nombre');

    nombre.length > 5 ? console.log('tu nombre es largo') : console.log('tu nombre es corto'); */

/* ------------------------------------------------------------------------ */

    //Ciclos
    //For  variable; condicion; contador;
    /* for (let i = 1; i <= 10; i++){
        console.log(i);
    } */
    //let teachers = ['jose1', 'lose222', 'sose3333', 'tose44444', 'eose5555555'];
    /* for (let i = 0; i < teachers.length; i++) {
        if (teachers[i].toUpperCase().indexOf('T') == 0) {
            console.log(teachers[i])
        }
        /* if (teachers[i].length <= 5) {
            console.log(teachers[i])
        } */
        //console.log(teachers[i]);
    //}

    //break: salir del ciclo
    // continue: saltarse iteracion del ciclo

    /* for (let i = 0; i < teachers.length; i++) {
        if (teachers[i].toUpperCase().indexOf('T') == 0) {
            continue;// para que salte la condicion de arriva
        }
        console.log(teachers[i]);
    } */

    /* for (let i = 0; i < teachers.length; i++) {
        if (teachers[i].toUpperCase().indexOf('T') == 0) {
            break;// para salir del ciclo
        }
        console.log(teachers[i]);
    }
 */

    //While

    //let i = 100;
    /* while (i > 0) {
        console.log('debo atender la clase y no jugar')
        i--;
    } */
    /* while (i--) {
        console.log('debo atender la clase y no jugar')
    } */

    //do while
    /* let password = 'ED';
    let pass;
    do {
        pass = prompt('Introduce contraseña');
    } while (pass != 'ED'); */

    //For of (ES6)
    /* let teachers = ['jose1', 'lose222', 'sose3333', 'tose44444', 'eose5555555'];

    for(let profesor of teachers){
        console.log(profesor);
    } */

    /* let nombre = 'Amarillo';

    for(let valor of nombre){
        console.log(valor);
    } */

/* ------------------------------------------------------------------------ */

    //Array

    /* let arr = [1, '2', 3, 4, 'true', 5, 6]; */
             //0  1  2  3  4

    /* console.log(arr.length);
    console.log(arr[0]); */

    /* for (let index = 0; index < arr.length; index++) {
        let element = arr[index];
        console.log(element)
    } */

    /* let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        let element = arr[index];
        if (typeof element == 'number') {
            sum += element;
        }
    }

    console.log(sum); */

    /* let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        let element = arr[index];
        if (typeof element != 'number') continue;
            sum += element;
    }

    console.log(sum);
    */

    //IndexOf() devuelve el indice del elemento, si no existe devuelve -1
    /* console.log(arr.indexOf(4)); */

    //Agregar elementos a un Array con:
    //.push(el1, el2, el3)  añade al final 
    //.unshift(el1, el2, el3) añade al inicio

    /* arr.push('push', 'segundo', 'tercero');
    console.log(arr);
    arr.unshift('unshift', 'segundo', 'tercero');
    console.log(arr); */

    /* arr.unshift('unshift', 'segundo', 'tercero');
    console.log(arr); */

    //Eliminar un solo elemento (sin parametros)
    //Estos metodos devuelven el elemento eliminado
    //.pop() al final
    //.shift() al principio

    /* let eleEliminado = arr.pop();
    console.log(arr);
    console.log(eleEliminado); */

    /* let eleEliminado = arr.shift();
    console.log(arr);
    console.log(eleEliminado); */

    //.join('separador')  convertir Array a String
    //'separador' es por defecto una coma
    /* console.log(arr.join()); */

    //splice(A indice a hacer la operacion, B numero de elementos a tomar, Items a añadir si fuera el caso)
    //añade o quita elementos

    /* arr.splice(2, 2, 'Eliminado1', 'Eliminando2');
    console.log(arr); */

    /* arr.splice(2, 0, 'Añadiendo1', 'Añadiendo1');
    console.log(arr); */

    //slice() crea un nuevo Array

    /* console.log(arr);

    let arr2 = arr.slice(2, 5);
    console.log(arr2); */

    /////////////////////////// ES6
    /* function name(params) {
        lo que hace
    } */

    //Arrow Function
    // parametro => valorRetornado

    //devolver elemento que pases atravez de la funcion
    //.find(cb);
    //.findIndex(); encuentra indice

    /* let arr = [1, 2, 3, 4, 5];
    let num = arr.find( elemento => elemento > 3);
    let numIndex = arr.findIndex( elemento => elemento > 3);
    console.log(num);
    console.log(numIndex); */

/* ------------------------------------------------------------------------ */

    // Iteradores 'permite recorer un objeto iterable'
    // Son objetos que contienen un metodo next()
    // Este metodo devuelve un objeto con dos propiedades
    // value, done

    //.keys() .values() .entries() devuelven un iterador??

    /* let arr = [1, 2, 3, 4, 5];

    let iterador = arr.keys();
    console.log(iterador.next());
    console.log('estoy atravezado');
    console.log(iterador.next());
    console.log(iterador.next());
    console.log(iterador.next());
    console.log(iterador.next());
    console.log(iterador.next()); */

/* ------------------------------------------------------------------------ */

    //Objetos 
    // No es más que una variable especial que puede contener más variables en su interior.

    /* let Objeto = {
        propiedad: valor,
        propiedad: valor2,
        propiedad: vlaor3
    } */

    /* let yo = {
        nombre: 'José',
        edad: 23,
        esPadre: false,
        hijos: ['ninguno1', 'ninguno2']
    }

    yo.edad = 24;

    console.log(yo);
    console.log(yo.nombre);
    console.log(yo.edad);
    console.log(yo.esPadre);
    console.log(yo.hijos); */

    //Operadores de objetos
    //delete -> elimina un propiedad
    //in -> devuelve true si existe la propiedad en el objeto

    /* let yo = {
        nombre: 'José',
        edad: 23,
        esPadre: false,
        hijos: ['ninguno1', 'ninguno2'],
        saludo() {
            return 'hola soy el return'
        }
    }; */

    /* delete yo.nombre; */
    /* Object.prototype.algo = 27; */
    /* console.log(yo.nombre); */
    /* console.log('nombre' in yo); */
    /* console.log('algo' in yo);
    console.log(yo.hasOwnProperty('algo'));
    console.log(yo.hasOwnProperty('nombre')); */

    // ES6
    //copiar un objeto
    /* let yo2 = Object.assign({},yo);
    console.log(yo2); */

    //Asignar variables existentes a propiedades
    /* let a = 'hola', b = 'mundo';
    let objeto = {
        a,
        b
    }
    console.log(objeto); */

    //Expresiones en propiedades
    /* let objeto2 = {
        [a + b]: 'hola mundo'
    }
    console.log(objeto2); */

    /* ------------------------------------------------------------------------ */

    //metodos para recorrer Array
    // .map() 
    // .filter()
    // .reduce() agarrar todo los elementos del array y devolver un valor

    let alumnos = [
        {
            nombre: 'juanito',
            calificacion: 15
        },
        {
            nombre: 'menganito',
            calificacion: 10
        },
        {
            nombre: 'panganito',
            calificacion: 14
        },
        {
            nombre: 'culpa',
            calificacion: 20
        },
        {
            nombre: 'culpa2',
            calificacion: 9
        },
    ];

    /* console.log(alumnos[0]); */
    
    //map(cb)
    //Transforma cada elemento del Array segun el callback
    //devuelve un nuevo Array

    /* let alumnosNombres = [];

    for (let i = 0; i < alumnos.length; i++) {
        alumnosNombres.push(alumnos[i].nombre);      
    }

    console.log(alumnosNombres); */

    /* let alumnosNombres = alumnos.map( alumnos => alumnos.nombre );
    console.log(alumnosNombres); */

    