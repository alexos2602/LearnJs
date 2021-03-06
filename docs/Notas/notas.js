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

/* ------------------------------------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------------------------------------ */

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
    //>, <; >=; <=; ==; !=  diferente de; === para comparar valor y tipo de dato; && y and; || or;

    /* let condicion = 5 < 10;

    console.log('condicion'); */

/* ------------------------------------------------------------------------------------------------ */

    //Propiedades y metodos
    //propiesdades: caracteristicas 
    //metodos: accion a ejecutar

    /* let prof1 = 'Arsged';
    let prof2 = 'Brsged';
    let prof3 = 'arsged';
    let prof4 = 'crsged';

    console.log(prof3.toUpperCase().indexOf('A') == 0); */

/* ------------------------------------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------------------------------------ */

    //metodos para recorrer Array
    // .map() 
    // .filter()
    // .reduce() agarrar todo los elementos del array y devolver un valor

    /* let alumnos = [
        {
            nombre: 'juanito',
            calificacion: 15
        },
        {
            nombre: 'menganito',
            calificacion: 5
        },
        {
            nombre: 'panganito',
            calificacion: 10
        },
        {
            nombre: 'culpa',
            calificacion: 19
        },
        {
            nombre: 'culpa2',
            calificacion: 9
        },
    ]; */

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

    //.filter(cb)

    /* let alumnosAprobados = alumnos.filter( alumnos => alumnos.calificacion >= 10 );
    console.log(alumnosAprobados);
    let aaNombres = alumnosAprobados.map( alumnos => alumnos.nombre );
    console.log(aaNombres); */

    //.reduce(cb(prev, current, <<i, arr, initial opcionales>>))
    /* let numeros = [2 , 4, 6, 8, 10, 12, 14]; */
    /* let suma = numeros.reduce( (a,b) => a + b );
    console.log(suma); */

    /* let max = numeros.reduce( (a,b) => a > b ? a : b); */ // si el valor Prev (a) es mayor que Current (b), retorna Prev si no 
    //quiere decir que Current es mayor y lo retornara 
    /* console.log(max); */

    /* let promedio = numeros.reduce( (prev,_current,i,arr) => {
        _current += prev; // current = current + prev; //
        return i == arr.length -1 ? _current / arr.length : _current; //si el indice es igual a la longitud de array menos 1 porque los array
        //empiezan en 0, que divida current entre la longitud SI NO que retorne current para la siguiente suma ???no entiendo con se sale 
        // del ciclo y entra de nuevo????

        //if (i == arr.length -1) {
        //    return b / arr.length
        //} else {
        //    return b
        //} 
    }); */

    /* console.log(promedio); */

    //Mejor Alumno ni se como funciona esto
    /* let bestAlumno = alumnos.reduce( (a,b) => {
        if (a.calificacion > b.calificacion) {
            return {
                nombre: a.nombre,
                calificacion: a.calificacion 
            }
        } else {
            return {
                nombre: b.nombre,
                calificacion: b.calificacion
            }
        }
    });
    console.log(bestAlumno); */

/* ------------------------------------------------------------------------------------------------ */

    //Funciones
    //bloques de codigos reutilizables

    /* function name(params, parametro2) {
        //codigo        
    } */

    /* function sumar(a, b) {//parametros a,b lo que recibe y retorna
        if (a > b) {
            return a + b;
            // despues del return no se ejecuta mas naa
        }
        return b;
    }

    let lasuma = sumar(1,5);//argumentos 1,5 valores reales
    console.log(lasuma); */

    /* let objetoso = {
        nombre : 'holaObjeto',
        sumar(a,b) {    //cuando una funcion esta dentro de un objeto se llama metodo.
            return a + b;
        }
    }

    let suma = objetoso.sumar(1,5);
    console.log(suma);  */

    //Funcion dentro de otra funcion
    /* function restar(a) {
        return function(b) {
            return a - b;            
        }
    }

    let rResta = restar(5)(3); // A le pertenece 5 y 3 a B la segunda funcion no es lo mismo que (5,3) que trabajaria con 1 funcion
    console.log(rResta); */

    //Practica-------------------------------------------------------------------------

    /* function sumar(x) {
        return function(y) {
            return x + y             
        }
    }

    let rSuma = sumar(5)(4);
    console.log(rSuma); */

    ////////---------------------------------------------------------------------------

    //Funciones auto invocadas
    /* let laMultiplicacion = (function(a,b) {//encerradas entre parentesis para que se conviertan en expresion
        return a * b;
    })(5,2);

    console.log(laMultiplicacion); */

    //Funciones constructora: soporta objetos y hace una simulación muy personal de otros conceptos como clases o herencia.
    //pero ya  se usan las clases
    /* let Pai = function (name,currency) {
        this.name = name;
        this.currency = currency;        
    }

    let rPai = new Pai('Venezula','Bolivar');
    console.log(rPai); */

    //llamar a una funcion indirectamente
    // apply() y call()
    /* function sumata(a,v,s) { //esto devuelve la suma de estos parametros
        return a + v + s;        
    }

    let numbers = [5, 6, 7];
    //let rsumata = sumata.apply(undefined,numbers);
    let rsumata = sumata.call(undefined,5,6,7);
    console.log(rsumata); */

/* ------------------------------------------------------------------------------------------------ */

    //Tipos de funciones

    //funciones por definicion
    /* function name(params) {
        //codigo
    } */

    //funciones por expreseion
    /* let variable = function(params) {
        //codigo
    }

    let c = console.log;
    c('hola asdfasdf');*/
    
    //funciones nombradas

    //funciones anonimas

    //callback = una funcion que es ejecutada por otra luego de un proceso
    /* elemento.addEventListener('click', function () {
        //hace algo        
    }) */

    //Funciones de flecha (arrow funtions) ES6
    //Son funciones anónimas
    //(param, param2, param3) => valorDeRetorno

    /* let suma = (a,b) => a + b;

    let suma = function (a,b) {
        return a + b;        
    } */

    //let c = console.log;
    /* let suma = (a,b) => a + b;
    let laSuma = suma(1,5);
    c(laSuma); */

    /* let elevaCuadro = (a) => {
        if(typeof a == 'number'){
            return a * a
        }
    }; */

    /* let elevaCuadro = a => (typeof a == 'number') ? a * a : undefined;
    let rCuadrado = elevaCuadro(8);
    c(rCuadrado); */

    //devolver un objeto
    /* let miObj = (a,b) => ({a,b});
    let rMiObj = miObj('primerObj', 'segundoObj');
    c(rMiObj); */

    //Parametros y argumentos
    /* let sumar = (a,b) => a + b;
    let rSuma = sumar(2,9);
    console.log(rSuma); */

    /* function sumar(a,b) {
        console.log(arguments);//objeto que contiene los elementos enviados   
    }
    sumar(2,3); */

    //Si hay mas parametros que argumentos, los argumentos faltantes son undefined
    //Si hay mas argumentos que parametros, no devuelve error

    /* function sumaTodo() {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    }
    console.log(sumaTodo(1,2,3,4,5,6,7,8,9,10)); */

    /* function sumaTodo() {
        return [...arguments].reduce((a,b) => a + b);
    }
    console.log(sumaTodo(1,2,3,4,5,6,7,8,9,10)); */

    //array como parametro
    /* function sumar(a,b) {
        return a + b;
    }
    let numeros = [2,3];
    console.log(sumar.apply(undefined,numeros)); */

    /* function sumar(a,b) {
        return a + b;
    }
    let numeros = [2,3];
    console.log(sumar(...numeros)); */

    //Parametros por defecto ES6
    /* function sumar(a, b = 2) {
        return a + b;
    }
    console.log(sumar(1)); */

    //Parametros rest
    /* function sumaTodo(...elementos) {
        return elementos.reduce((a,b) => a + b);        
    }
    console.log(sumaTodo(1,2,3,)); */

/* ------------------------------------------------------------------------------------------------ */

    //Scope es el ambito o contexto donde
    //se ejecuta una funcion y exiten sus variables::::
    //El scope puede definirse como el alcance que una variable tendrá en tu código. 
    //En otras palabras, el scope decide a qué variables tienes acceso en cada parte del código. 
    //Existen dos tipos de scope, el scope global y el scope local.
    
    //Contexto Global
    /* var hola;
    function holaMundo() {
        hola = 'hola mundo impreso'
    }
    holaMundo();//ejecutando 
    console.log(hola);

    function holaOtraVez() {
        hola = 'Hola otra vez impreso';
    }
    holaOtraVez();
    console.log(hola); */

    //Contexto Local
    /* function holaMundo() {
        var hola;//////////////////////
        hola = 'hola mundo impreso'
    }
    holaMundo();//ejecutando 
    console.log(hola); */

    /* function sumar(a) {
        return function (b) {
            return a + b; // esta funcion puede acceder al scope fuera de ella
        }
    }

    let rSuma = sumar(5)(7);
    console.log(rSuma); */

    //Closures :Un closure o clausura es la combinación de una función y el ámbito léxico en el que se declaró dicha función.
    // Es decir los closures o clausuras son funciones que manejan variables independientes.

    /* function saludar() {
        let saludo = 'hola';
        return function saludarInterno() {
            console.log(saludo);
        }
    }
    saludar()(); */

    //----------------------------------------------------

    /* function saludar() {
        let saludo = 'hola';
        return function saludarInterno(amigo) {
            console.log(`${saludo} ${amigo} `);
        }
    }
    let miSaludo = saludar();
    miSaludo('Jose');
    miSaludo('Otro'); */

    /* function afuera() {
        let numero = 1;
        return function() {
            numero++;
            console.log(numero);
        }
    }
    //afuera()(); no suma   
    //afuera()(); no suma
    let aumenta = afuera();
    aumenta();//2
    aumenta();//3
    aumenta();//4
    aumenta();//5
    afuera()();//2 */

/* ------------------------------------------------------------------------------------------------ */

    //This 
    /* let myObj = {
        nombre: 'José',
        saludar(){
            console.log(`Hola ${this.nombre}`)
        }
    }
    myObj.saludar(); */

    /* 'use strict'; //Modo Estricto
    function checkThis() {
        console.log(this);
    }
    checkThis(); */

    //Lexical This
    //????????????????

/* ------------------------------------------------------------------------------------------------ */

    //Clase Plantilla apartir de la cual se crean objetos
    //Instancia Cada Objeto creado apartir de una clase
    //Constructor funcion que se ejecuta automaticamente al instanciar una clase
    //Propiedad son valores
    //Metodos son funciones

    /* const jon = {
        nombre : 'jon',
        apellido : 'Mircha',
        cursos : ['Node.js', 'React.js'],
        pais : 'Mexico'
    };

    const pedro = {
        nombre : 'pedro',
        apellido : 'camejo',
        cursos: ['Html, css'],
        pais : ['Colombia']
    } */

    //En vez de esto > esto

    /* var Profesor = function (nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    };

    var jon = new Profesor ('john', 'mircha', 'mexico');
    var alexys = new Profesor ('alexys', 'camejo', 'colombia');

    console.log(jon);
    console.log(alexys); */

    //Clases ES6

    /* class Persona {
        constructor(nombre,apellido,pais){
            this.nombre = nombre;
            this.apellido = apellido;
            this.pais = pais;
            this.nombreCompleto = `${nombre} ${apellido}`;
        }

        saludar(){
            return `Hola, soy ${this.nombreCompleto} y vivo en ${this.pais}`;
        }
    }

    class Profesor extends Persona {
        constructor(nombre,apellido,pais,curso){
            super(nombre,apellido,pais);
            this.curso = curso;
        }
        invitarAlCurso(){
            return `Hola, soy ${this.nombreCompleto} y te invito al curso ${this.curso}`
        }
    } */

    /* const alexys = new Persona ('Alexys', 'Lozada', 'Colombia');
    const juan = new Persona ('Alexys', 'Lozada', 'España');
    console.log(alexys.saludar());
    console.log(alexys);
    console.log(juan.saludar());
    console.log(juan); */

    /* const daniel = new Profesor('Danie', 'Romero', 'Colombia', 'Php');
    console.log(daniel);
    console.log(daniel.invitarAlCurso()); */

    ///Metodo Estatico
    
    class Persona {
        constructor(nombre,apellido,pais){
            this.nombre = nombre;
            this.apellido = apellido;
            this.pais = pais;
            this.nombreCompleto = `${nombre} ${apellido}`;
        }

        saludar(){
            return `Hola, soy ${this.nombreCompleto} y vivo en ${this.pais}`;
        }

        static describirPersona(persona){
            return `Esta persona se llama ${persona.nombreCompleto} y es de ${persona.pais}`;
        }
    }

    class Profesor extends Persona {
        constructor(nombre,apellido,pais,curso){
            super(nombre,apellido,pais);
            this.curso = curso;
        }
        invitarAlCurso(){
            return `Hola, soy ${this.nombreCompleto} y te invito al curso ${this.curso}`
        }
    } 

    const juan = new Persona ('Alexys', 'Lozada', 'España');
    const alexys = new Persona ('Alexys', 'Lozada', 'Colombia');
    const daniel = new Profesor('Danie', 'Romero', 'Colombia', 'Php');

    console.log(daniel.invitarAlCurso());
    console.log(Persona.describirPersona(daniel));

    Persona.prototype.propiedadEstatica = 'valor de la propiedad estatica';
    console.log(daniel.propiedadEstatica);
    
    ///Ejempluso de libreria

    /* class MiLibreria {
        constructor() {

        }
        static.funcionalidadA() {
            return 'hola a todos'
        }
    }
    
    MiLibreria.funcionalidadA() */



    