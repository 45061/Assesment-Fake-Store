# ¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?

`Un Sprint normal tendría los siguiente eventos o ceremonias:`

`1. El Sprint Planning se realiza al comienzo del Sprint`
`2. Daily Scrums este se realiza a diario`
`3. Un Sprint Review al final del Sprint para inspeccionar el incremento realizado.`
`4. Y, finalmente, una Retrospectiva para inspeccionar el equipo y levantar mejoras que se apliquen en el siguiente Sprint.`
`5. Adicionalmente se ha incorporado también una reunión de Grooming o Refinement, que sirve para, dentro del Sprint, afinar y aclarar ciertas historias de usuario que pudieron quedar pendientes durante el Sprint Planning.`

## ¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.

`Un wireframe o prototipo no es más que un boceto donde se representa visualmente, de una forma muy sencilla y esquemática la estructura de una página web.`

`Se pueden realizar Wireframes a mano, o en la nube podemos utilizar figna.com o MockFlow`

### Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.

`var definimos una variable con local scope, también nos permite utilizar un comportamiento llamado hoisting, sin generar ningún error.`

`let definimos variable con block scope, las variables declaradas de esta manera nos genera un error de referencia cuando intentamos utilizar hoisting.`

`const definimos variables de sólo lectura (no confundir con inmutables), esto quiere decir que, cuando asignamos una variable, el nombre de esta va estar asignada a un puntero en memoria, el cual no puede ser sobreescrito o reasignado.`

#### ¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada rama-1?

`git checkout -b rama-1`
`git branch rama-1`
`git branch create rama-1`

##### Explicar la diferencia entre git merge y git rebase.

`git merge al ser aplicado, mantiene a salvo la historia de la rama secundaria, ya que crea un nuevo commit que une ambas ramas sin “eliminarlas”, creando un nuevo punto de continuación que tiene 2 historias por detrás.`

`git rebase al ser aplicado, NO mantiene a salvo la historia de la rama secundaria, sino que “re-escribe” la historia de la rama principal integrando los commits de la rama secundaria en la rama principal, no crea un commit de unión adicional, sino que cambia el puntero (HEAD) al último commit que ubica.`

###### ¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?

`Si se usa git pull, extrae los cambios del repositorio remoto al personal en cambio, si envía un pull request a otro repositorio, le pide a sus mantenedores que extraigan sus cambios al suyo (más o menos les pide que usen un git pull desde su repositorio)`

###### # ¿Qué es el Virtual DOM?

`El Virtual DOM es una representación del DOM guardada en memoria, que actúa de intermediario entre los estados de la aplicación y los estados del DOM (vistos por el usuario). Cuando ocurre un cambio en la aplicación web, el virtual DOM interpreta dichos cambios y calcula la manera más eficiente de actualizar el DOM para que renderice la menor cantidad de cambios posibles.`

###### ## CSS del punto 8

.c-services{
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 20px;
padding: 0;
}
.c-section\_\_title{
display: flex;
text-align: center;
background-color: rgb(170, 166, 166);
padding-top: 8px;

}
span{
background-color: rgb(38, 41, 38);
color: white;
margin-bottom: 0px;
padding: 20px;
width: 100%;
font-family: 'Courier New', Courier, monospace;
font-size: 30px;
font-weight: 500;
}

.c-services\_\_item{
display: flex;
flex-direction: column;
border-radius: 10px;
width: 100%;
height: auto;
background-color: rgb(245, 245, 245);
font-size: 24px;
font-family: sans-serif;
}

h3{
text-align: center;
}
