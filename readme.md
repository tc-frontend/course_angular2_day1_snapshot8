Angular 2: Getting Started - SnapShot 8
===================
En esta parte veremos estos contenidos del curso de Pluralshight:

----------

### 1 - Angular modules

----------

### What is an Angular module?

![enter image description here](https://i.imgur.com/KCoKCeN.png)

Un módulo define una seria de características:

![enter image description here](https://i.imgur.com/NEtkKbT.png)

#### Declarations array
Este array define los components, directives y pipes que pertenecen al módulo. Como consideraciones:

- Es recomendable que cada component, directive o pipes solo pertenezca a un solo módulo para una mejor división de la aplicación.
- No re-declarar un módulo si un módulo importa un módulo que a su vez exporte el componente, directiva o pipe.
- Todo o declaro tiene un ámbito privado dentro del módulo. Para poder ser utilizado en otros módulos deberemos exportarlo. Lo veremos en el módulo siguiente.
- Todo componente, directivas o pipe declara permite su resolución en cualquier plantilla del módulo. 

#### Exports array
Un módulo puede exportar componentes, directivas, pipes o modules. Consideraciones:

- Si re-exporta un módulo a su vez se re-exportan sus componentes.
- No se puede exportar algo sin haberlo importado antes.
- Nunca exportar servicios. La forma de hacerlo es incluirlos en el array de providers.

#### Imports array
Un módulo puede importar otros módulos necesarios en sus componentes, directivas, pipes, servicios...etc. Consideraciones:

- Cuando importamos un módulo tenemos disponible todos los componentes, directivas y pipes exportadas por dicho módulo.
- Es aconsejable solo importar los módulos que se vayan a utilizar.
- Importar un módulo no implica importar los módulos que el importa. Para poder hacer esto es necesario re-exportar el módulo.

#### Providers array

Un módulo puede registrar servicios. Estos servicios se pueden registrar a nivel de módulo y a nivel componente. Consideraciones:

- Si registramos a nivel de módulo, este módulo no solo estará disponible en el módulo sino en todos los módulos de la aplicación. Si quieres que ese servicio solo esté disponible en algún componente en concreto será necesario registrarlo a nivel de componentes.
- Es aconsejable no añadir servicios a nivel de módulos que tengan un propósito de ser compartidos. Es mejor crear un módulo específico para los servicios e importarlo solo una vez en el módulo de Aplicación. Esto nos asegurará registrar servicios solo una vez.
- Routing guards deben ser añadidos solamente en el array de providers.

Para ilustrar vamos a re-factorizar nuestra aplicación con todos estos conceptos.


----------
### 2 - Práctica
----------

En esta práctica tendremos que crear un módulo para productos y otro para componentes shared como el starComponent
Adicionalmente crearemos dos módulos para agrupar las rutas definidas en el RouterModule.


Para ello clonamos el **SnapShot 8** desde el primer commit:

    git clone https://github.com/tc-frontend/course_angular2_day1_snapshot8.git
    cd course_angular2_day1_snapshot8
    git checkout tags/init
    npm install
    code .

----------

#### 1 - Creamos un nuevo módulo Products

Eliminamos todo lo relativo a productos del módulo principal incluidas las rutas. Además debemos eliminar la referencia al servicio desde el módulo principal.

https://goo.gl/8xX99Z

----------

#### 2 - Crear un módulo compartido

Incluir el componente starComponent. Eliminar todas las referencias a él dentro del módulo.

https://goo.gl/ysCQcL

----------

#### 3 - Encapsular las rutas en módulos separados.

Crearemos un módulos para las rutas de aplicación (welcome y rutas por defecto) y otro para las rutas relacionada con los productos 

https://goo.gl/aoN3dG

----------

 
Los pasos detallados en el historial de commits:

https://goo.gl/XQ0UDk 
  
Si queremos ver la App en nuestro browser

    npm start

Si queremos ver la solución final de este SnapShot:

    git checkout master
    npm install
    npm start



