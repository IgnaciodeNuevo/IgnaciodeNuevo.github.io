---
layout: post
title: 'Creando formularios accesibles'
excerpt: '¿Sabemos lo que implica que un formulario sea accesible? Yo hace poco no lo sabía.'
tags:
    - Accesibilidad
---

<h2>Introducción</h2>

Cuando hablamos de formularios, nos viene inmediatamente a la mente el uso de estos en la web y la interacción con ellos para gestionar información. El problema viene cuando hablamos de formularios accesibles. No siempre nos paramos a panesar que significa hacer un formulario accesible y mucho menos la importancia de hacer partícipe a cualquier persona sin importar sus necesidades.

¿Os suenan los lectores de pantalla? El uso de los mismos es uno del os muchos medios de acceder a la web. La accesibilidad debería ser la base, no un "feature".

Vamos a repasar brevemente ciertas cosas importantes de los formularios y luego veremos un ejemplo de un panel de errores accesible.

_Nota:_

Recordar que dar estilos con CSS a campos de formulario como suele suceder con `<select name="select">`, `<input type="checkbox">` o `<input type="radio">` un problema para muchos usuarios si no tenemos en cuenta la accesibilidad.

<h2>Los formularios han de ser fáciles de usar</h2>

Los formularios deben ser claros e intuitivos. Si se requiere algún campo del formulario debemos asegurarnos de indicarlo. El orden de tabulado entre elementos (o lo que es lo mismo, de acceso a estos) ha de ser sencillo de entender.

No es recomendable tener un formulario con veinte campos, de los cuales diecinueve son obligatorios y uno opcional. Cuando todo es importante nada lo es.

<h2>Los formularios han de ser accesibles mediante teclado</h2>

Muchas personas usan un teclado para navegar, por ello debemos asegurarnos de que el formulario se puede rellenar utilizando el teclado.

Uno de los posibles problemas que podemos tener es el uso de JavaScript, pero también puede ser de gran ayuda si lo utilizamos correctamente. Lo podemos utilizar por ejemplo para dirigir el foco (`:focus`) o enviar el formulario.

<h2>Asociar labels del formulario con inputs</h2>

Los `<labels>` deben indicar la función de cada campo, (nombre, adjuntar imagen, número de tarjeta de crédito...).

El `<label>` es recomendable que se coloque visualmente encima y asociada con su correspondiente etiqueta (`<input>` por ejemplo) porque el ojo humano suele escanear en lugar de leer y esto mejora su lectura.

Sin embargo hay ejemplos en los cuales puede ir a la izquierda (`<input type="checkbox">` y `<input type="radio">`).

_Código de ejemplo:_

```html
<label for="name">Nombre</label>
<input type="text" name="name" id="name">
```

Aún a día de hoy, igual que leemos continuamente como una de las primeras cosas que recordar al hacer accesibles las páginas web, es añadir el atributo `alt` a una imagen cuando es contenido de la web y no algo decorativo. También vemos la necesidad de asociar cada `<label>` a su etiqueta asociada.

Aún así hay otro modo de no necesitar usar el atributo `for` en el `<label>` y su correspondiente `id` en la etiqueta asociada.

_Código de ejemplo:_

```html
<label>
    ¿Cuál es su nombre?
    <input type="text" name="name">
</label>
```

_Nota:_

Los usuarios que navegan con el teclado y lectores de pantalla suelen utilizar la tecla "TAB" para pasar de campo a campo del formulario. Dichos lectores de pantalla leen las etiquetas asociadas para cada elemento del formulario cuando la persona navega por ellas.

No debemos olvidarnos del uso de [`fieldset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset) y [`legend`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend) cuando sea necesario.

```html
<fieldset>
    <legend>Selecciona tu comida favorita.</legend>

    <label for="tomate">Tomate</label>
    <input type="radio" id="tomate" name="comida">

    <label for="queso">Queso</label>
    <input type="radio" id="queso" name="comida">

    <label for="pan">Pan</label>
    <input type="radio" id="pan" name="comida">
</fieldset>
```

<h2>Controles de formulario accesibles</h2>

<h3>Inputs de tipo Text</h3>

_Código de ejemplo:_

```html
<label for="name">Nombre</label>
<input type="text" name="name" id="name">
```

Hay que recordar que los `id` de cada `<label>` y su etiqueta asociada han ser ser únicos por cada página.

_Nota:_

El uso de `<labels>` tiene la ventaja asociada de que el usuario al hacer clic en éste, hace focus a su etiqueta asociada.

<h3>Textareas</h3>

_Código de ejemplo:_

```html
<label for="direccion">Dirección</label>
<textarea id="direccion" name="direccion"></textarea>
```

<h3>Checkboxes</h3>

_Código de ejemplo:_

```html
<fieldset>
    <legend>Indica la comida que has comprado</legend>

    <label for="tomate">Tomate</label>
    <input type="checkbox" id="tomate" name="comida" value="tomate">

    <label for="queso">Queso</label>
    <input type="checkbox" id="queso" name="comida" value="queso">

    <label for="pan">Pan</label>
    <input type="checkbox" id="pan" name="comida" value="pan">

    <label for="legumbre">Legumbre</label>
    <input type="checkbox" id="legumbre" name="comida" value="legumbre">
</fieldset>
```

El `<fieldset>` sirve para agrupar `checkboxes`.

El `<legend>` descripción la asociación que hemos hecho del grupo. En los lectores de pantalla, el texto de la leyenda se lee generalmente para cada control del conjunto de campos, por lo que el texto de la leyenda debe ser breve y descriptivo.

<h3>Radio buttons</h3>

_Código de ejemplo:_

```html
<fieldset>
    <legend>Selecciona tu comida favorita.</legend>

    <label for="tomate">Tomate</label>
    <input type="radio" id="tomate" name="comida">

    <label for="queso">Queso</label>
    <input type="radio" id="queso" name="comida">

    <label for="pan">Pan</label>
    <input type="radio" id="pan" name="comida">
</fieldset>
```

_Nota:_

`<fieldset>` y `<legend>` únicamente han de utilizarse cuando agrupemos elementos.

<h3>Menús de tipo select</h3>

_Código de ejemplo:_

```html
<label for="foodchoice">¿Cuál es tu comida favorita?</label>
<select id="foodchoice" name="select">
    <option value="1">Tomate</option>
    <option value="2">Queso</option>
    <option value="3">Pan</option>
</select>
```

No es muy recomendable el uso de menus de tipo `select` por su inconsistencia navegación entre distintos navegadores.

<h3>Botones</h3>

Para los botones de formulario (`submit`, `reset` y `button` "simple"), no se necesita información adicional. El atributo de `value` nunca debe dejarse vacío.

_Código de ejemplo:_

```html
<input type="submit" name="submit" value="Enviar Formulario">
<input type="reset" name="reset" value="Limpiar Formulario">
<button>Activar</button>
```

<h2>Formularios avanzados</h2>

Hay ocasiones en las que la etiqueta `<label>` se queda corta.

La mayoría de las limitaciones de etiquetado pueden solucionarse con tres propiedades ARIA (`aria-labelledby`, `aria-descriptionby`, y `aria-label`).

<h3>aria-labelledby</h3>

Un elemento `<label>` indica qué campo de formulario etiqueta haciendo referencia a su valor de atributo `id`.

Con `aria-labelledby`, el campo del formulario indica qué elemento lo etiqueta haciendo referencia a su atributo id:

```html
<label for="name">
<input aria-labelledby="name">
```

<h3>Labels Múltiples</h3>

Cada cabecera de la tabla funciona como una etiqueta visual para los controles del formulario en la columna inferior.

```htlm
<table>
    <tbody>
        <tr>
            <th id="name">Name</th>
            <th id="age">Age</th>
            <th id="weight">Weight</th>
        </tr>
        <tr>
            <td><input type="text" name="name1" aria-labelledby="name"></td>
            <td><input type="text" name="age1" aria-labelledby="age"></td>
            <td><input type="text" name="weight1" aria-labelledby="weight"></td>
        </tr>
        <tr>
            <td><input type="text" name="name2" aria-labelledby="name"></td>
            <td><input type="text" name="age2" aria-labelledby="age"></td>
            <td><input type="text" name="weight2" aria-labelledby="weight"></td>
        </tr>
        <tr>
            <td><input type="text" name="name2" aria-labelledby="name"></td>
            <td><input type="text" name="age2" aria-labelledby="age"></td>
            <td><input type="text" name="weight2" aria-labelledby="weight"></td>
        </tr>
    </tbody>
</table>
```

_Nota:_

Si un control tiene tanto un `<label>` como un `aria-labelledby` asociados, el texto de la `aria-labelledby` prevalecerá y será leído en lugar del `<label>`.

<h3>aria-describedby</h3>

Hay ocasiones en las que un formulario necesita información adicional y no se usa para ello una etiqueta. Esta información puede asociarse al campo del formulario con el atributo `aria-describedby`.

Código de ejemplo:

```html
<label for="pass">Restablecer Contraseña</label>
<input type="password" name="pass" id="pass" aria-describedby="nuevapass">
<span id="nuevapass">La contraseña ha de tener al menos 12 letras, una mayúscula, un número, un símbolo y sangre de unicornio 🦄 (esto último es broma 😉. Mejor que tenga sangre de elfo.)</span>
```

Al igual que con `aria-labelledby`, el atributo `aria-describedby` apunta al `id` del elemento.

_Nota:_

Mientras que `aria-labelledby` sobrescribe al `<label>`, `aria-describedby` no lo hace. Así pues, `aria-describedby` debe usarse adicionalmente al `<label>` no en su lugar.

<h3>Labels Invisibles</h3>

Hay ocasiones en las que una etiqueta no tiene sentido visualmente. En este caso podemos usar lo siguiente:

<h4>Label Oculto</h4>

Podemos ocultar el `<label>` vía CSS. Aún así aparecerá para el lector de pantalla.

_Código de ejemplo:_

```html
<label class="hidden" for="search">Búsqueda</label>
<input type="text" id="search" name="search">
```

<h4>Atributo Título</h4>

Esta técnica también hará que aparezca un tooltip cuando el usuario pasa el ratón por encima del campo.

_Código de ejemplo:_

```html
<input type="text" id="search" name="search" title="Búsqueda">
```

<h2>Panel de Errores</h2>
