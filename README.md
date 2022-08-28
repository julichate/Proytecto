Entrega del proyecto final

Es un programa para resolver el control de flotas de un ferrocarril. La flota está compuesta por un número de locomotora y un número de EOT(end off train).
El programa comienza importando un archivo JSON con una flota de diez locomotoras con sus respectivos EOT, presionando el boton "ver" en el menú, se imprime en pantalla
un listado con la flota actualizada.
Lo que permite hacer el programa es trabajar la lista de la flota, se puede agregar, modificar o eliminar los datos.

Agregar:

Cuando se hace click en el botón agregar, se hace visible un cuadro para poder completar dos valores, El número de locomotora y el número de EOT.
Si el número ingresado de locomotora ya figura en la base de datos, el programa avisa mediante un sweetAlert que esa locomotora ya existe y por lo tanto no agrega ese valor a la lista. Lo mismo hace con el número de EOT.
Una vez que los datos fueron verificados correctamente, estos valores se agregan a la base de datos, se le informa al usuario mediante la librería toastify que los datos fueron agregados correctamente y el programa guarda la lista actualizada en el localStorage. Al hacer click en el botón "ver", se imprime en pantalla la lista actualizada.


Modificar:

La acción modificar tiene las mismas propiedades que la función agregar, solamente que el programa modificará el valor de EOT existente por el ingresado a la locomotora seleccionada.

Eliminar:

La acción eliminar, le pide al usuario ingresar el número de locomotora que desea eliminar. El programa verifica la existencia de la locomotora en la flota, si el valor ingresado figura en la base de datos, este lo elimina de caso contrario le informa al usuario que la locomotora ingresada no existe.

Ver:

Imprime en pantalla la última actualización de la flota.
