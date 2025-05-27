Luis Velasquez  
Carnet 24011341  
3er Semestre - Curso React fundamentos  
Tarea 2 - Conceptos basicos React.js  

# INSTRUCCIONES


## Descripción:
El objetivo de esta tarea es poner en práctica los conceptos fundamentales de React.js para
construir una aplicación funcional y dinámica. Los estudiantes aplicarán el manejo del estado con
useState, gestionarán efectos secundarios con useEffect, y trabajarán con eventos del DOM para
crear una experiencia de usuario reactita. Esta tarea tiene como propósito fortalecer la
comprensión de cómo React renderiza los componentes, cómo se manejan los datos dentro de
los mismos, y cómo se actualiza la interfaz en respuesta a interacciones del usuario.

## Primera actividad: Cambia el color de la caja

### Procedimiento:
1. Dentro de App.jsx realizar un diseño que muestre una caja de color (un div con tamaño
fijo) y cuatro botones. Al hacer clic en los distintos botones, el color de fondo de la caja
debe cambiar según el botón presionado. El color se manejará mediante un estado con
useState.
2. Mostrar una caja (div) con un tamaño fijo, por ejemplo, 200px x 200px.
3. Crear tres botones que cambien el color de la caja (Rojo, Azul y Verde).
4. El color debe cambiar en tiempo real al hacer clic en un botón.
5. Utilizar useState para guardar el color actual.
6. Agrega un botón adicional para reiniciar el color a un color neutro como gris o blanco.

## Segunda actividad: Mostrar razas de perros aleatorios

### Procedimiento:
1. Crear un componente funcional llamado DogBreedSearch:
a. Dentro de la carpeta src/components/, crear un archivo llamado
DogBreedSearch.jsx.
2. Al momento de que el componente se cree se deben realizar diez peticiones al API dog Ceo (https://dog.ceo/dog-api/documentation/random), todas las peticiones deben finalizar para mostrarse en la vista del usuario. Cada una de las peticiones tendrá la siguiente respuesta:
3. Al momento que se está creando el componente y se están realizando las peticiones la aplicación mostrará un gif de cargando hasta que se haya terminado de cargar se dejará de mostrar.
4. Una vez finalizadas todas las peticiones se mostrarán al usuario en forma de una cuadrícula de tres columnas todas las imágenes obtenidas en las peticiones (propiedad message de la respuesta de cada una de las peticiones).