---
layout: post
title: 'Creando formularios accesibles'
excerpt: '¿Sabemos lo que implica que un formulario sea accesible? Yo hace poco no lo sabía.'
tags:
    - Accesibilidad
---

<h2>Introducción</h2>

Cuando hablamos de formularios, nos viene inmediatamente a la mente el uso de estos en la web y la interacción con ellos para gestionar información. El problema viene cuando hablamos de formularios accesibles. No siempre nos paramos a panesar que significa hacer un formulario accesible y mucho menos la importancia de hacer partícipe a cualquier persona sin importar sus necesidades.

¿Os suenan los lectores de pantalla? El uso de los mismos es uno del os muchos medios de acceder a la web. La accesibilidad debería ser la base, no un "feature", por esto, porque creo que la web debería poder usarse por todo el mundo vamos a crear un formulario accesible.

Vamos a repasar brevemente ciertas cosas importantes de los formularios y luego veremos un ejemplo.

_Nota:_

Recordar que dar estilos con CSS a campos de formulario como suele suceder con `<select name="select">`, `<input type="checkbox">` o `<input type="radio">` un problema para muchos usuarios si no tenemos en cuenta la accesibilidad.

<h2>Los formularios han de ser fáciles de usar</h2>

Los formularios deben ser claros e intuitivos. El orden de tabulado entre elementos (o lo que es lo mismo, de acceso a ellos) ha de ser sencillo de entender.

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

El uso de `<labels>` tiene la ventaja asociada de que el usuario al hacer click en éste, hace focus a su etiqueta asociada.

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

El `<fieldset>` sirve para agrupar elementosscripción la asociación que hemos hecho del gr.

El `<legend>` describe la asociación que hemos hecho. En los lectores de pantalla, el texto del `<legend>` se lee generalmente para cada control del conjunto de campos, por lo que el texto del `<legend>` debe ser breve y descriptivo.

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

No es muy recomendable el uso de menus de tipo `select` por su inconsistente navegación entre distintos navegadores.

<h3>Botones</h3>

Para los botones de formulario (`submit`, `reset` y `button` "simple"), no se necesita información adicional. El atributo de `value` nunca debe dejarse vacío.

_Código de ejemplo:_

```html
<input type="submit" name="submit" value="Enviar Formulario">
<input type="reset" name="reset" value="Limpiar Formulario">
<button>Activar</button>
```

<h2>Formularios avanzados</h2>

Hay ocasiones en las que la etiqueta `<label>` se queda corta, para lo cual podemos solucionar el problema con tres propiedades ARIA (`aria-labelledby`, `aria-descriptionby`, y `aria-label`).

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
        </tr>
        <tr>
            <td><input type="text" name="nameA" aria-labelledby="name"></td>
        </tr>
        <tr>
            <td><input type="text" name="nameB" aria-labelledby="name"></td>
        </tr>
        <tr>
            <td><input type="text" name="nameC" aria-labelledby="name"></td>
        </tr>
    </tbody>
</table>
```

_Nota:_

Si un control tiene tanto un `<label>` como un `aria-labelledby` asociados, el texto de la `aria-labelledby` prevalecerá y será leído en lugar del `<label>`.

<h3>aria-describedby</h3>

Hay ocasiones en las que un formulario necesita información adicional. Esta información puede asociarse al campo del formulario con el atributo `aria-describedby`.

Código de ejemplo:

```html
<label for="pass">Restablecer Contraseña</label>
<input type="password" name="pass" id="pass" aria-describedby="nuevapass">
<span id="nuevapass">La contraseña ha de tener al menos 12 letras, una mayúscula, un número, un símbolo y sangre de unicornio 🦄 (esto último es broma 😉. Mejor que tenga sangre de elfo.)</span>
```

Al igual que con `aria-labelledby`, el atributo `aria-describedby` apunta al `id` del elemento.

_Nota:_

Mientras que `aria-labelledby` sobrescribe al `<label>`, `aria-describedby` no lo hace. Así pues, `aria-describedby` debe usarse adicionalmente al `<label>`.

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

<h2>Ejemplo de formulario accesible</h2>

Después de la teoría llega la práctica. Vamos a ver un ejemplo real de lo que podría ser un formulario accesible y otros temas no directamente relacionados con el HTML o ARIA que también son importantes.

En este ejemplo usaré HTML, CSS y TypeScript muy sencillo con [Vue.js](https://vuejs.org/).

_Código de ejemplo:_

```html
<form class="form js-form">

    <!-- Panel de errores -->
    <div class="errors-panel">
        <p class="errors-panel__number js-errors-panel" tabindex="0">Revisa los <strong>3</strong> siguientes campos para poder enviar el formulario.</p>
        <ul class="errors-panel__list">
            <li class="errors-panel__item"
                @click="scrollToElement(error.id)"
                v-for="error in errors">
                    {{ error.message }}.
                    <span class="u-visually-hidden"
                          @keydown.enter="scrollToElement(error.id)"
                          @keydown.space="scrollToElement(error.id)">
                              Presiona "ESPACIO" o "ENTER" para hacer focus sobre el campo a revisar.
                    </span>
            </li>
        </ul>
    </div>

    <!-- Body del formulario -->

    <!-- Nombre -->
    <div class="form__item">
        <label class="form__label" for="name">
            Nombre
            <!-- En un proyecto real crearíamos una directiva personalizada que en su lugar -->
            <span tabindex="0"
                  @keydown.enter="scrollToMandatory()"
                  @keydown.space="scrollToMandatory()">*
                <span class="u-visually-hidden"> es un campo que no puede estar vacío.</span>
            </span>
        </label>
        <input class="form__input" type="text" id="name" name="name" required>
    </div>

    <!-- Apellidos -->
    <div class="form__item">
        <label class="form__label" for="surname">
            Apellidos
            <!-- En un proyecto real crearíamos una directiva personalizada que en su lugar -->
            <span tabindex="0"
                  @keydown.enter="scrollToMandatory()"
                  @keydown.space="scrollToMandatory()">*
                <span class="u-visually-hidden"> es un campo que no puede estar vacío.</span>
            </span>
        </label>
        <input class="form__input" type="text" id="surname" name="surname" required>
    </div>

    <!-- Descripción -->
    <div class="form__wrapper">
        <label class="form__title" for="desc">
            Descripción
            <!-- En un proyecto real crearíamos una directiva personalizada que en su lugar -->
            <span tabindex="0"
                  @keydown.enter="scrollToMandatory()"
                  @keydown.space="scrollToMandatory()">*
                <span class="u-visually-hidden"> es un campo que no puede estar vacío.</span>
            </span>
        </label>
        <textarea class="form__textarea" id="desc" name="desc" required></textarea>
    </div>

    <!-- Input File -->
    <div class="u-flex">
        <input id="image" name="image" accept=".jpg, .jpeg, .png, .gif" type="file">
        <label for="image">Selecciona una imagen en formato .jpg, .jpeg, .png o .gif</label>
    </div>

    <p class="upload__text">(*) This is a mandatory field</p>

    <button class="btn js-btn" type="submit" value="Enviar" @submit.prevent="submitForm()">Enviar formulario</button>
</form>
```

Como podemos ver, el HTML consta de dos partes bien diferenciadas. El panel de errores en el que se muestran tres posibles campos a revisar y el cuerpo del formulario con cuatro campos:

- `<input type="text" id="name" name="name" required>` para el "Nombre"
- `<input type="text" id="surname" name="surname" required>` para los "Apellidos"
- `<textarea id="desc" name="desc" required></textarea>` para la "Descripción"
- `<input id="image" name="image" accept=".jpg, .jpeg, .png, .gif" type="file">` para la imagen.

Cuando enviemos el formulario, lo primero que haremos será validar si los campos se están enviando correctamente. En caso de haber algún campo vacío que sea obligatorio, con JavaScript, podríamos añadir una clase a dichos elementos que deberá marcar de algún modo (no únicamente con un borde de color rojo o verde como se suele hacer, ya que podríamos confundir a personas con daltonismo) el campo que ha de ser revisado.

También sería recomendable añadir una imagen que sea lo más entendible posible. Por ejemplo una `X` si hay error y un `tick` si el campo está como se ha solicitado.

_Código de ejemplo:_

```css
.form__item.has-error,
.form__wrapper.has-error,
.u-flex.has-error,
.form__item.is-ok,
.form__wrapper.is-ok,
.u-flex.is-ok {
    border: 2px solid #ff0000;
    position: relative;
}

.form__item.has-error,
.form__wrapper.has-error
.u-flex.has-error

/* El posicionamiento de este elemento no se ajusta a la realidad */
.form__item.has-error::after,
.form__wrapper.has-error::after,
.u-flex.has-error::after,
.form__item.is-ok::after,
.form__wrapper.is-ok::after,
.u-flex.is-ok::after {
    position: absolute;
    right: 5px;
    top: 5px;
}

.form__item.has-error::after,
.form__wrapper.has-error::after,
.u-flex.has-error::after {
    background-image: url("assets/error.jpg");
}

.form__item.is-ok::after,
.form__wrapper.is-ok::after,
.u-flex.is-ok::after {
    background-image: url("assets/ok.jpg");
}

.u-visually-hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}
```

Después de esto en caso de que haya errores deberemos hacer scroll al panel de errores, hacerle focus y mostrar tantos `<li class="errors-panel__item">` como elementos a revisar.

En un archivo del panel de errores crearíamos una clase.

```javascript
export default class ErrorsComponent extends Vue {
    @Prop()
    errors: any[];

    @Prop()
    errorsNumber: number;

    mounted() {
        if (this.errors) {
            this.scrollToErrors();
        }
    }

    <!-- Hacemos scroll y focus cuando se hace click al elemento del formulario a revisar -->
    public scrollToElement(id): void {
        let element = document.getElementById(id);
        this.focusElement(id);
        element.parentElement.scrollIntoView();
    }

    private focusElement(id): void {
        let focusedElement = document.getElementById(id);
        focusedElement.scrollIntoView();
        document.getElementById(id).focus();
    }

    <!-- Hacemos scroll y focus al panel de errores -->
    private scrollToErrors(): void {
        let errorsPanel = document.getElementById('js-errors-panel');
        errorsPanel.scrollIntoView();
        errorsPanel.focus();
    }
}
```

Cada vez que enviemos el formulario deberemos validarlo para comprobar si existe algún problema con el mismo y hacer scroll y focus en el panel de errores.

```javascript
export default class UploadComponent extends Vue {
    public name = '';
    public surname = '';
    public desc = '';
    public image = ''

    public errors = [];
    public errorsNumber = 0;

    <!-- Comprobamos si hay errores en el formulario -->
    private validateForm(): void {
        if (!this.name) this.errors.push({ id: 'name', message: 'Name of the project is a mandatory field.' });
        if (!this.surname) this.errors.push({ id: 'surname', message: 'Surname is a mandatory field.'});
        if (!this.desc) this.errors.push({ id: 'desc', message: 'Description is a mandatory field.'});

        this.errorsNumber = this.errors.length;
    }

    <!-- Aquí añadimos la clase en caso de que haya un error al campo adecuado y deberíamos usar la clase en el HTML con v-bind:class="toggleClassError('')" y v-model="" -->
    public toggleClassError(id): any {
        return this.errors.some(error => error.id === id) ? 'has-error' : '';
    }

    <!-- Enviamos el formulario -->
    public submitForm(id): Promise<void> {
        this.errors = [];
        this.validateForm();

        if (this.errorsNumber) {
            return;
        }

        <!-- Aquí enviaremos el formulario al backend usando la función: getFormsData() -->
    }

    <!-- Aquí subiríamos la imagen a algún lugar donde almacenarla -->

    private getFormsData(): any {
        const form = <HTMLFormElement>document.querySelector('.js-form');
        const formData = new FormData(form);

        return formData;
    }
}
```

Con esto, acabamos de hacer un formulario accesible. Si bien, no de es la manera más estricta de usar Vue.js ya que estamos manipulando el `DOM` creo que aclara las cosas para el ejemplo.

¿Se te ocurre alguna idea para mejorarlo?
