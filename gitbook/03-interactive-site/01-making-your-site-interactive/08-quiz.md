# 08 - Quiz

* Tipo: `quiz`
* Formato: `self-paced`
* Duración: `30min`

## Objetivos

* En esta sección tendrás la oportunidad de evaluarte para que pongas tus

  conocimientos a prueba. Es una oportunidad para que te calibres y valides que

  realmente estás aprendiendo. ¡Mucho éxito!

## Preguntas

### 1\) Completa el siguiente enunciado: `Las etiquetas HTML siempre serán nodos de tipo _______.`

#### Opciones

1. Texto
2. Comentario
3. Elemento
4. Atributo

3

### 2\) En la siguiente imagen

```markup
        <body>
            <h1>¡Hola Mundo! ¡La programación es muy cool :3 !</h1>
        </body>
```

### El texto `¡Hola Mundo! ¡La programación es muy cool!` entre las etiquetas h1, corresponde a un nodo tipo **\_\_**

#### Opciones

1. Condicional
2. Texto
3. Elemento
4. Atributo

2

### 3\) El DOM nos sirve para

#### Opciones

1. Entrar a los elementos de una página html y modificar sus propiedades
2. Acceder a los elementos del navegador y modificarlos
3. Dominar el mundo de la programación
4. Crear bucles y condicionales

1

### 4\) Cuando quiero acceder u obtener un elemento único de mi página web a través de su identificador, ¿qué método/métodos de selección del DOM puedo utilizar?

#### Opciones

1. `.getElementsByTagName();`
2. `.getElementsByClassName();`
3. `.getElementById();`
4. `.querySelector();`

3

### 5\) Para acceder a elementos de mi página web que tienen la misma etiqueta HTML, ¿qué método/métodos del DOM puedo utilizar?

#### Opciones

1. `.getElementsByTagName();`
2. `.getElementsByClassName();`
3. `.getElementById();`
4. `.querySelector();`

1

### 6\) Selecciona los objetos del BOM

#### Opciones

1. Location
2. Screen
3. HTMLtags
4. Navigator

1,2,4

### 7\) BOM define **\_\_** métodos para manipular el tamaño y la posición de la **\_\_**

#### Opciones

1. dos, ventana
2. cuatro, ventana
3. tres, etiqueta
4. dos, información

2

### 8\) ¿Para qué puedo utilizar los atributos data?

#### Opciones

1. Para agregar estilos a través de css a un elemento del HTML
2. Para identificar a un elemento del DOM
3. Para obtener el valor de una entrada de texto
4. Para almacenar datos en las etiquetas HTML sin modificar la presentación

   del documento

4

### 9\) ¿Cuál de las siguientes opciones es la correcta para hacer uso de los atributos data?

#### Opciones

1. ```markup
    <ul>
      <li data-lista="frutas">Manzana</li>
      <li data-lista="frutas">Peras</li>
      <li data-lista="frutas">Fresas</li>
    </ul>
   ```
2. ```markup
    <ul>
      <li data="frutas">Manzana</li>
      <li data="frutas">Peras</li>
      <li data="frutas">Fresas</li>
    </ul>
   ```
3. ```markup
    <ul>
      <li data-lista-frutas>Manzana</li>
      <li data-lista-frutas>Peras</li>
      <li data-lista-frutas>Fresas</li>
    </ul>
   ```
4. ```markup
    <ul>
      <li data-lista(frutas)>Manzana</li>
      <li data-lista(frutas)>Peras</li>
      <li data-lista(frutas)>Fresas</li>
    </ul>
   ```

1

### 10\)  Viendo el siguiente código, ¿cómo accedemos a nuestros atributos data a través de js?

```markup
<p id="text" data-autor="Gustavo Monet">
  Aquí está nuestro texto
</p>
```

#### Opciones

1. ```javascript
    var text = document.getElementById("text");
    var autor = autor.dataset;
   ```
2. ```javascript
    var text = document.getElementById("text");
    var autor = dataset.text.autor;
   ```
3. ```javascript
    var text = document.getElementById("text");
    var autor = text.dataset.autor;
   ```
4. ```javascript
    var text = document.getElementById("text");
    var text.dataset = autor;
   ```

3

### 11\) ¿A través de qué método eliminas un nodo del DOM?

#### Opciones

1. elementoPadre.removeAttribute\(**nodo**\);
2. elementoPadre.appendChild\(**nodo**\);
3. elementoPadre.removeChild\(**nodo**\);
4. elementoPadre.removeNode\(**nodo**\);

3

### 12\) ¿Con qué método creas un evento?

#### Opciones

1. .addEventListener\('_\_\__', **funcion**\);
2. .createEvent\(' **\_**',**funcion**\);
3. .createElement\('**\_**'\);
4. .actionListener\('**\_**'\);

1

### 13\) ¿Qué son los eventos?

#### Opciones

1. Acciones que realiza el navegador cuando algo no anda bien.
2. Acciones que se desencadenan a partir de la interacción del usuario con

   un elemento de la página web.

3. Fechas importantes para el navegador.

2

### 14\) ¿Cómo agregas un evento a un elemento?

#### Opciones

1. ```javascript
   var boton = document.getElementById('boton');
   boton.createEventListener(click, funcion_a_ejecutar);
   ```
2. ```javascript
   var boton = document.getElementById('boton');
   boton.addEventListener = 'click' + 'funcion_a_ejecutar';
   ```
3. ```javascript
   var boton = document.getElementById('boton');
   boton.addEventListener('click', funcion_a_ejecutar);
   ```
4. ```javascript
   var boton = document.getElementById('boton');
   boton = document.addEventListener('click', funcion_a_ejecutar);
   ```

3

### 15\) En ocasiones tenemos que usar e.preventDefault\(\) para

#### Opciones

1. Para prevenir cierto comportamiento que ya tienen los eventos.
2. Para que nuestro evento tenga un valor por default.
3. Para que el evento se ejecute en automático.
4. Para prevenir que se llame al evento.

1
