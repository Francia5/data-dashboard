# Data Dashboard

* **Track:** _Common Core_
* **Curso:** _Creando tu primer sitio web interactivo_
* **Unidad:** _Producto final_
* **Equipo:** _Sara, Francia_

***

## Resumen de proyecto


Creación de herramienta web que ayude a las Training Managers de Laboratoria a optimizar sus tiempos mediante la búsqueda rápida y ágil de los siguientes aspectos:


    1- El total de estudiantes presentes por sede y generación.


    2- El porcentaje de deserción de estudiantes.


    3- La cantidad de estudiantes que superan la meta de puntos en promedio de todos los sprints cursados. La meta de puntos es 70% del total de puntos en HSE y en tech.


    4- El porcentaje que representa el dato anterior en relación al total de estudiantes.


    5- El Net Promoter Score (NPS) promedio de los sprints cursados. El NPS se calcula en base a la encuesta que las estudiantes responden al respecto de la recomendación que darían de Laboratoria, bajo la siguiente fórmula:

    [Promoters] = [Respuestas 9 o 10] / [Total respuestas] * 100 [Passive] = [Respuestas 7 u 8] / [Total respuestas] * 100 [Detractors] = [Respuestas entre 1 y 6] / [Total respuestas] * 100 [NPS] = [Promoters] - [Detractors]


    6- La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos técnicos en promedio y por sprint.


    7- La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos de HSE en promedio y por sprint.


    8- El porcentaje de estudiantes satisfechas con la experiencia de Laboratoria.


    9- La puntuación promedio de l@s profesores.


    10-La puntuación promedio de l@s jedi masters.

***

### Procesos de Investigación

#### Investigación y empatía.

        EMPRESA : Laboratoria
        LEMA : "Talento que transforma"
        MISION : Talento tech femenino de Latinoamérica para el mundo

    - El dia 24 de Mayo 2018 se realiza entrevista con el cliente para investigar la problematica y platicar sobre las posibles soluciones que se le pueden ofrecer en la herramienta web a desarrollar.


    PROBLEMATICA

    Los TMS (Training Managers) y Jedis (coach) tienen que recurrir a muchas herramientas para obtener un solo dato de las alumnas, en promedio tarda de 30min a 1 hora para obtener informacion de busqueda por alumna por tanto el equipo tiende a estar estresado y frustrado.

    Al ser tanto el tiempo que se llevan en obtener informacion es dificil evaluar y dar feedback constante a las alumnas del bootcamp e intervenir de una manera eficiente y temprana.

    RESULTADOS DE LAS ENCUESTAS

    -Tener una herramienta que muestre la informacion global de las alumnas y pueda mostrarse en   porcentajes por medio de graficas para asi poder medir el avance de ellas y ayudar en su evolucion.

    - La frecuencia de uso de la herramienta para las TM es diario

    - La pagina web requiere ser simple en el diseño e intuitiva.

    - EXTRA : agregar notas, seccion de HSE, mostrar graficas de la evolucion de las alumnas por generacion durante el proceso del bootcamp por quiz, por retos de codigo, trabajo en equipo, y todas las areas a evaluar para asi detectar las areas de oportunidad para los jedi.

    DEFINICION

    - Consideramos  que debido a la falta de tiempo y organizacion no se ha podido contar con una herramienta que conjugue la informacion de todas las partes involucradas y gracias a la necesidad y a la demanda de mas sedes y por ende mas alumnas ha sido forzoso obtener una herramienta que pueda solucionar la problematica para cada una de las areas como son las TM en primer caso, los jedi y los coach.


    BRAINSTORMING (Ideacion) DE LA PROBLEMATICA

    - Pagina Intuitiva con diseños simple
    - Barra de navegacion fija para facil acceso a la informacion mas usada por los TMs
    - Input de busqueda para localizacion rapida de alumnas
    - Simplificar la informacion
    - Graficas con facil lectura
    - Detalles que transciendan


***
brainstorming solucion grafica
#### Pantalla de Inicio

![home](assets/images/nav-home.jpeg)

#### Seccion Estudiantes

##### Menu Sedes

![Estudiantes](assets/images/sec-menu.jpeg)

![Estudiantes por sedes](assets/images/sede-alumnas.jpeg)

#### Seccion Formacion

![Formacion](assets/images/formacion.jpeg)

#### Seccion Estadisticas

![Estadisticas](assets/images/estadisticas.jpeg)

***

### Flujo de la Herramienta
Arquitectura de la informacion

![Diagrama de Flujo](assets/images/diagrama-flujo.png)

***

### Sketching y Prototyping

HISTORIA DEL USUARIO

El usuario debido a la falta de una herramienta eficaz que tenga toda la informacion que necesita se ve en la necesidad de usar mas de dos herramientas. Para hacer mas facil su trabajo la pagina le permitira con una barra de navegacion fija dirigirse a las areas de mayor importancia para los TMS que son: estudiantes, formacion y las estadisticas globales. Al ingresar al boton de estudiantes se despliega un menu de opciones de las sedes y al elegir una se despliega otro menu con las generaciones disponibles para esa sede, se veran los perfiles de las alumnas con su foto y nombre que podra clickear para ingresar a los datos de cada una de ellas. En la opcion del boton de formacion vera los perfiles del equipo de formacion con su nombre por sedes y si accede a el se muestra el perfil con los skills y una grafica de porcentaje dado por las estudiantes para medir su satisfaccion con la enseñanza del coach. En el boton de las estadisticas se mostrara un listado, en la primer seccion estan las graficas globales y seguido de ellas las graficas por sede.
Se agrego un input en la parte superior derecha para que el usuario de manera rapida pueda acceder a cualquier alumna y asi evitar que caiga en el mismo problema antes comentado.


Home

![Main](assets/images/1main.png)
![Main + comments](assets/images/2main_notes.png)

Estudiantes

![Estudiantes](assets/images/3alumnas_sidebar.png)
![Estudiantes + comments](assets/images/4alumnas_sidebar_notas.png)

Alumnas pagina principal

![Estudiantes perfiles](assets/images/5alumnas_pagina_principal.png)
![Estudiantes perfiles + comments](assets/images/6alumnas_pagina_principal_notas.png)

Mostrar Estudiante

![Estudiante perfil](assets/images/7alumnas_seleccion.png)
![Estudiante perfil + comments](assets/images/8alumnas_seleccion_notas.png)
![Estudiante perfil desertor](assets/images/9alumnas_seleccion_2.png)

Formacion

![Equipo de formacion](assets/images/10jedis_principal.png)

Estadisticas

![Estadisticas y Graficas](assets/images/11estadisticas_principal.png)
![Estadisticas y Graficas ver](assets/images/12estadisticas_principal_1.png)
![Estadisticas y Graficas + comments](assets/images/13estadisticas_principal_notas.png)


***

### Herramientas
-Taskade
-Scrum
-Pencil para mockups
-Charts.js
-Google charts

### UPTADES
####SCRUM
![Scrum Main](assets\mockups\6.jpg)
![Scrum students](assets\mockups\7.jpg)
![Estadisticas](assets\mockups\8.jpg)
![Readme Cambios](assets\mockups\9.jpg)
![Lista de Tareas](assets\mockups\5.jpg)
![Extras 1](assets\mockups\5.jpg)
![Extras 2](assets\mockups\10 extra.jpg)
####Mockups
![Main](assets\mockups\main.png)
![Estudiantes](assets\mockups\alumnas_pagina_principal.png)
![Coach](assets\mockups\coach.png)
![Estadisticas](assets\mockups\estadisticas_principal.png)
![Sidebar](assets\mockups\alumnas_sidebar.png)

##Como se manejo el proyecto?

Para una mejor organizacion, se organizo el proyecto por medio de scrum, separando Tareas
y haciendo tareas mas sencillas para un mejor alcance de la misma, se tuvieron algunos
conflictos con el Git, sin embargo, se solucionaron poco a poco, aun que eso tomo mucho tiempos
y recursos.

A nivel tecnico , nos manejamos  por medio de ramas en Github, teniendo cada una su propia rama para
poder modificar el producto de manera independiente y hacer un mejor merge ya teniendo las cosas separadas
esperando crear los menos conflictos en la misma a la hora del merge.
