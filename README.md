//////////////////////////////////////////////////////////////
Prueba tecnica:
----------------------------------------------------------------------------------------------------
descripccion:
-Aplicacion creada para generar una web dodne se pueden visualizar diferentes imagaenes con sus diferentes caracteristicas de una prenda de vestir se realizaron
api como app consumiendo servicios defenrente para cada una de sus funciones para la creacion del crud de prendas de vestir.


-------------------------------------------------------------------------------------------------
ide de desarrollo:
visual studio code ultima vercion.

tecnologias usadas:

express:
es un marco de aplicación web para Node.js

nodejs:
es un entorno en tiempo de ejecución multiplataforma, basado en lenguaje de programacion js(Javascript).

mongodb:
Es una base de datos basada en javascript y es tambien de caracter nosql.

reactjs:
es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de 
aplicaciones en una sola página.

env:
es una forma de crear ambientes de desarrollo para ejecucion del proyecto en diferentes equipos que no poseean las variable
ya configuradas.


axios:
es una librería de JavaScript construida con el objetivo de gestionar la programación asíncrona con promesas. 


postman:
es una aplicacion externa que sirve para hacer insercion al backend de forma directa por medio de los metodos establecidos para mandar o cumplir con 
cualquier funcion del crud manipulando informacion real o insertada por el cliente por medio de objetos json.



-----------------------------------------------------------------------------------------------------
usar para instalar en la carpeta backend modules:
npm install express mongoose cors dotenv
npm install nodemon -d

user para instalar en la carpeta frontend:
npx create-react-app frontend
npm install react-router-dom
npm install bootstrap
npm install axios
npm install react-datepicker
npm install timeago.js

el proyecto esta separado en dos carpetas una que es frontend donde tenemos la vista de la aplicacion lo que se ve en web y otra que es backend que funciona 
antes de correr el proyecto abriremos mongod que es el exe de mongodb.
o en la consola de visual studio code oprimimos mongodb.
para correr a iniciar el proyecto una vez se exporte al ide se usara el siguiente por defecto el proyecto nos dejara ubicados en su carpeta raiz ahora lo que aremos
para correr la parte del backend es abrir la terminal de visual studio code y escribir el siguiente comando.

  -cd ./backend/ o solo cd back y oprimimos la tecla tab para autocompletar y luego enter.
  
una vez nos ubicamos en la carpeta backend usaremos el siguiente comando ya que el por defecto tiene un archivo env de configuracion 
de variables de entorno usamos el comando para correr el proyecto que seria:
	
	-npm run dev y luego enter.
	
de esta manera correra el backend.

ahora para correr el frontend usaremos en visual studio code una segunda consola y usaremos el comando

     cd ./frontend/ o cd front y oprimimos la tecla tab para autocompletar y luego enter.
	 
una vez se haga esto empezara a correr el proyecto ejecutando sus dos partes.

abriremos google chrome o mozilla firefox o el navegador desado y pondremos http://localhost:3000/ y podremos entrar en la aplicacion.


para la creacion de usuarios se puede realizar por medio de un consumo de postman dodne se púede crear el usuario solo teniendo la base de datos configurada.
para eso se utiliza el modelo dentro de models que se enecuentra dentro del backend



	 

 
