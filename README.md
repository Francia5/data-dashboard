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

## CONCLUSION DEL EQUIPO SOBRE LAS ENTREVISTAS

   La importancia de nuestro cliente por la eficiencia de su tiempo es nuestro cometido durante el desarrollo de esta herramienta, al igual que la simplicidad al mostrar la data con una interfaz intuitiva basada en la filosofia de LABORATORIA y guiandonos por el branding de la marca.

   La TM´s son las que tienen mayor contacto y necesidad sobre esta Herramienta pero eso no quita que pueda haber mas usuarios de otras areas haciendo uso de la misma, por ello es importante ser conciso y así poder mostrar de una manera simple y sencilla la Data de las estudiantes, Jedis y coaches.

## DEFINICION

    - Consideramos  que debido a la falta de tiempo y organizacion no se ha podido contar con una herramienta que conjugue la informacion de todas las partes involucradas y gracias a la necesidad y a la demanda de mas sedes y por ende mas alumnas ha sido forzoso obtener una herramienta que pueda solucionar la problematica para cada una de las areas como son las TM en primer caso, los jedi y los coach. 

    HIPOTESIS

   Gracias a la información obtenida en las entrevistas realizadas a las TM's de Laboratoria nuestro equipo llego a la conclusión de crear una herramienta donde se almacene toda la data de las estudiantes al igual que porcentajes y calificaciones del equipo de formación el tener que acceder a tantas plataformas para obtener estos datos ha sido un dolor que acompaña a diario el trabajo de las TM's y perjudica su desempeño global por eso esta herramienta al simplificar su búsqueda podría llegar a impactar de manera positiva todas las áreas incluso a las estudiantes y mejorar su experiencia en Laboratoria.

   Mediante una herramienta de facil acceso, permitir al usuario observar la data de las estudiantes de Laboratoria almacenandola en tres prestañas laterales a las cuales el usuario podrá acceder a ellas en cualquier momento para navegar de una manera mas facil entre paginas. Posteriormente mostrar la información de cada una de ellas con una pequeña descripcion de su sprint y calificacion de HSE y Tech, en otra de las pestañas podremos ver las graficas de los coaches y jedis para ver sus porcentajes de cada sprint por sede y generación y por ultimo la pestaña de las gráficas donde podremos ver a gran escala el alcance de los datos de Laboratoria.
   Al almacenar toda la información de las estudiantes será mas facil para las TM´s dar feedback en tiempo y forma y así dirigir todo este talento femenino a lograr sus objetivos.

    
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


