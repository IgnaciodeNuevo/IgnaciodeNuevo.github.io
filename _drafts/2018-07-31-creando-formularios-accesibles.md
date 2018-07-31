---
layout: post
title: "Creando formularios accesibles"
excerpt: "¿Sabemos lo que implica que un formulario sea accesible? Yo hace poco no lo sabía."
post_date: "Julio 31, 2018"
post_number: 21
tags:
 - Accesibilidad
---

<h2 id="top">Contenido del artículo</h2>

<ul>
    <ul>
        <li><a href="#introduccion">Introducción</a></li>
        <li><a href="#los-formularios-sean-logicos-y-faciles-de-usar">Los formularios sean lógicos y fáciles de usar</a></li>
        <li><a href="#los-formularios-han-de-ser-accesibles-mediante-teclado">Los formularios han de ser accesibles mediante teclado</a></li>
        <li><a href="#asociar-labels-del-formulario-con-controles-como-los-inputs">Asociar `labels` del formulario con controles como los `inputs`</a></li>
    </ul>
    <li><a href="#controles-de-formulario-accesibles">Controles de formulario accesibles</a></li>
    <ul>
        <li><a href="#inputs-de-tipo-text">Inputs de tipo text</a></li>
        <li><a href="#textareas">Textareas</a></li>
        <li><a href="#checkboxes">Checkboxes</a></li>
        <li><a href="#radio-buttons">Radio buttons</a></li>
        <li><a href="#menus-de-tipo-select">Menús de tipo select</a></li>
        <li><a href="#botones">Botones</a></li>
        <li><a href="#botones-de-tipo-imagen">Botones de tipo imagen</a></li>
        <li><a href="#elementos-de-tipo-ir-a-menu-con-javascript">Elementos de tipo ir a menú con JavaScript</a></li>
    </ul>
    <li><a href="#formularios-avanzados">Formularios avanzados</a></li>
    <ul>
        <li><a href="#introduccion-a-formularios-avanzados">Introducción a formularios avanzados</a></li>
        <li><a href="#aria-labelledby">aria-labelledby</a></li>
        <li><a href="#labels-multiples">Labels múltiples</a></li>
        <li><a href="#aria-describedby">aria-describedby</a></li>
        <li><a href="#labels-invisibles">Labels invisibles</a></li>
        <ul>
            <li><a href="#label-oculto">Label oculto</a></li>
            <li><a href="#atributo-titulo">Atributo título</a></li>
            <li><a href="#aria-label">aria-label</a></li>
        </ul>
        <li><a href="#resumen">Resúmen</a></li>
    </ul>
    <li><a href="#panel-de-errores">Panel de Errores</a></li>
</ul>

<h2 id="introduccion">Introducción</h2>

Los formularios se utilizan para muchos tipos de interacciones en la web. Cuando hablamos de la accesibilidad de los formularios, normalmente nos referimos a su accesibilidad para las personas que utilizan lectores de pantalla o teclados. Las personas con otros tipos de discapacidades generalmente se ven menos afectadas por las formas defectuosas. Cabe señalar, sin embargo, que todo el mundo se beneficia de una forma bien organizada y altamente utilizable, especialmente aquellos con discapacidades cognitivas.

<h2 id="los-formularios-sean-logicos-y-faciles-de-usar">Los formularios sean lógicos y fáciles de usar</h2>

Los formularios deben ser claros e intuitivos. Deben organizarse de manera lógica. Las instrucciones, claves, campos de formulario obligatorios, requisitos de formato de campo, etc. deben identificarse claramente a los usuarios. Proporcione instrucciones claras sobre qué información se desea. Si se requiere algún elemento del formulario, asegúrese de indicarlo. Asegúrese de que el orden en el que se accede a los elementos del formulario sea lógico y fácil. Esto a veces puede resultar problemático si se utilizan tablas para controlar la disposición de posiciones de formulario. Para comprobar el orden lineal de los elementos de la página.

<h2 id="los-formularios-han-de-ser-accesibles-mediante-teclado">Los formularios han de ser accesibles mediante teclado</h2>

Muchos usuarios sólo pueden usar un teclado para navegar y usar la web. Debe asegurarse de que los formularios de su sitio web sólo se puedan rellenar utilizando el teclado. Hay algunas cosas que pueden hacer que los formularios sean totalmente inutilizables con el teclado, la más común de las cuales es JavaScript. Tenga cuidado al utilizar JavaScript para manipular datos de formularios, establecer el foco, cambiar elementos de formulario o enviar formularios. Cada uno de ellos puede dificultar o imposibilitar la cumplimentación o comprensión del formulario utilizando únicamente el teclado. Pruebe siempre los formularios de su sitio web para comprobar la accesibilidad del teclado.

<h2 id="asociar-labels-del-formulario-con-controles-como-los-inputs">Asociar `labels` del formulario con controles como los `inputs</h2>

Las etiquetas de texto deberían describir generalmente la función de cada control de formulario. Coloque la etiqueta junto a su respectivo control de forma (es decir, cuadro de texto, casilla de verificación, botón de opción, menú, etc.). Las etiquetas suelen colocarse encima o a la izquierda de los controles; sin embargo, las etiquetas de las casillas de verificación y los botones de opción suelen estar a la derecha del control. Los usuarios con visión visual deberían poder asociar visualmente una etiqueta de texto con su correspondiente control de formulario. Los usuarios con discapacidades visuales, sin embargo, no pueden hacer esta asociación visual. Sin embargo, las etiquetas pueden asociarse programáticamente con los controles de formulario que utilizan marcado HTML.

El elemento `<label>` se utiliza para asociar una etiqueta de texto a un control de formulario. Esto permite que un lector de pantalla lea el texto de etiqueta asociado cuando el usuario navega al control de formulario.

    Screen reader users generally navigate through a form using the `Tab` key
    to jump from form control to form control. Associated form labels are read
    for each form control when the user navigates to them. Any non-label text
    content between the form controls is usually skipped over. Be sure to
    include important cues or instructions in associated labels or at the
    beginning of the form.

Las agrupaciones de controles de formulario, normalmente grupos de casillas de verificación y botones de opción relacionados, a veces requieren una descripción de nivel superior (como "Método de envío" para un grupo de botones de opción de envío). Este texto descriptivo puede asociarse al grupo de controles de formulario utilizando `<fieldset>` y `<legend>`. El `<fieldset>` identifica toda la agrupación y `<legend>` identifica el texto descriptivo de la agrupación. El uso de `<fieldset>` y `<legend>` asegura que la descripción del texto se lea a los usuarios del lector de pantalla cuando se navega hacia la agrupación.

<h2 id="controles-de-formulario-accesibles">Controles de formulario accesibles</h2>

<h3 id="inputs-de-tipo-text">Inputs de tipo Text</h3>

(imagen input de tipo texto)

Aquí tenéis el código:

```html
<label for="name">Name:</label>
<input id="name" type="text" name="textfield">
```

La correspondencia de los valores de id y de id asocia la etiqueta con el control de formulario apropiado. Debido a que el id debe ser único en cada página, sólo se puede asociar una etiqueta a cada elemento de formulario único. Esto significa que no puede tener una etiqueta para varios elementos de formulario. Además, los lectores de pantalla no admiten múltiples etiquetas asociadas al mismo elemento de formulario.

_Nota_

    Otra ventaja del uso de etiquetas es que el usuario puede hacer clic en la
    propia etiqueta para enfocar el elemento del formulario. Esto es útil para
    algunos con motor especialmente cuando se seleccionan casillas de verificación
    y botones de selección pequeños. Puede intentarlo haciendo clic en la palabra
    "Name:" (Nombre:) arriba para ver el enfoque establecido en la opción cuadro
    de texto. Hacer clic en las etiquetas adyacentes proporciona una manera fácil
    de comprobar si las etiquetas son correctas. etiquetado de formularios.

<h3 id="textareas">Textareas</h3>

(imagen textarea)

Aquí tenéis el código:

```html
<label for="address">Enter your address:</label>
<textarea id="address" name="addresstext"></textarea>
```

<h3 id="checkboxes">Checkboxes</h3>

(imagen checkboxes)

Aquí tenéis el código:

```html
<fieldset>
<legend>Select your pizza toppings:</legend>
<input id="ham" type="checkbox" name="toppings" value="ham">
<label for="ham">Ham</label><br>
<input id="pepperoni" type="checkbox" name="toppings" value="pepperoni">
<label for="pepperoni">Pepperoni</label><br>
<input id="mushrooms" type="checkbox" name="toppings" value="mushrooms">
<label for="mushrooms">Mushrooms</label><br>
<input id="olives" type="checkbox" name="toppings" value="olives">
<label for="olives">Olives</label>
</fieldset>
```

El `<fieldset>` rodea toda la agrupación de casillas de verificación. El `<legend>` proporciona una descripción para la agrupación. En los lectores de pantalla, el texto de la leyenda se lee generalmente para cada control del conjunto de campos, por lo que el texto de la leyenda debe ser breve y descriptivo.

<h3 id="radio-buttons">Radio buttons</h3>

(imagen radio buttons)

Aquí tenéis el código:

```html
<fieldset>
<legend>Choose a shipping method:</legend>
<input id="overnight" type="radio" name="shipping" value="overnight">
<label for="overnight">Overnight</label><br>
<input id="twoday" type="radio" name="shipping" value="twoday">
<label for="twoday">Two day</label><br>
<input id="ground" type="radio" name="shipping" value="ground">
<label for="ground">Ground</label>
</fieldset>
```

_Nota_

    El juego de campos y la leyenda sólo deben utilizarse para asociar grupos de
    controles cuando sea necesaria una descripción de nivel superior
    (es decir, la leyenda). Las casillas de verificación simples o los botones
    de radio básicos (como macho/hembra para el género) que tienen sentido a
    partir de sus etiquetas por sí solas no requieren juego de campos ni leyenda.
    Por lo general, se deben evitar los campos anidados.

<h3 id="menus-de-tipo-select">Menús de tipo select</h3>

(imagen menus de tipo select)

Aquí tenéis el código:

```html
<label for="favcity">Choose your favorite city?</label>
<select id="favcity" name="select">
<option value="1">Amsterdam</option>
<option value="2">Buenos Aires</option>
<option value="3">Delhi</option>
<option value="4">Hong Kong</option>
<option value="5">London</option>
<option value="6">Los Angeles</option>
<option value="7">Moscow</option>
<option value="8">Mumbai</option>
<option value="9">New York</option>
<option value="10">Sao Paulo</option>
<option value="11">Tokyo</option>
</select>
```

Para mejorar aún más la accesibilidad de esta lista, podríamos añadir `optgroup`, para agrupar las opciones.

```html
<label for="favcity2">Choose your favorite city?</label>
<select id="favcity2" name="favcity2">
<optgroup label="Asia">
  <option value="3">Delhi</option>
  <option value="4">Hong Kong</option>
  <option value="8">Mumbai</option>
  <option value="11">Tokyo</option>
</optgroup>
<optgroup label="Europe">
  <option value="1">Amsterdam</option>
  <option value="5">London</option>
  <option value="7">Moscow</option>
</optgroup>
<optgroup label="North America">
  <option value="6">Los Angeles</option>
  <option value="9">New York</option>
</optgroup>
<optgroup label="South America">
  <option value="2">Buenos Aires</option>
  <option value="10">Sao Paulo</option>
</optgroup>
</select>
```

Tenga en cuenta que `optgroup` no es totalmente compatible con algunos agentes de usuario y lectores de pantalla, por lo que no se debe confiar en él para presentar información de categoría vital. En los casos en los que el `optgroup` no es soportado, simplemente es ignorado. No confunda el atributo de la etiqueta del elemento del `optgroup` con el elemento de la etiqueta. Son cosas muy diferentes.

Múltiples menús de selección permiten al usuario elegir más de una opción de la lista.

Choose your three favorite cities? (imagen del select)

    Se recomienda evitar los menús de selección múltiple. No todos los
    navegadores ofrecen navegación intuitiva con el teclado para varios
    menús de selección. Muchos usuarios no saben usar CTRL/Comando o
    Mayúsculas + clic para seleccionar varios elementos. Normalmente,
    un conjunto de opciones de casillas de verificación puede proporcionar
    una funcionalidad similar, pero más accesible.

<h3 id="botones">Botones</h3>

Para los botones de formulario (enviar y restablecer elementos de entrada y elementos de botón), no se requiere información de accesibilidad adicional. El atributo de valor para los botones de entrada y el texto anidado para los elementos `<button>` serán leídos por los lectores de pantalla cuando se acceda al botón. Estos nunca deben dejarse vacíos.

(imagen botón)

Aquí tenéis el código:

```html
<input type="submit" name="submit" value="Submit Search">
<input type="reset" name="reset" value="Reset">
<button>Activate</button>
```

Debido a que los botones de restablecimiento pueden seleccionarse inadvertidamente, hay pocos casos en los que se deben proporcionar.

<h3 id="botones-de-tipo-imagen">Botones de tipo imagen</h3>

If you use an image button (`<input type="image">` rather than a standard button, the input must have appropriate alt text.

(imagen botón de tipo imagen)

Aquí tenéis el código:

```html
<input type="image" name="submitbutton" alt="search" src="submit.png">
```

<h3 id="elementos-de-tipo-ir-a-menu-con-javascript">Elementos de tipo ir a menú con JavaScript</h3>

Debido a que estos tipos de menús se activan cuando el elemento de menú cambia, estos menús pueden causar problemas de accesibilidad del teclado porque no puede desplazarse por la lista sin seleccionar una de las opciones.

_Nota_

    Algunos navegadores (incluido Firefox) anulan estos menús de salto
    para que no se activen en el cambio de teclado, pero sólo después
    de seleccionar un elemento con el ratón o pulsar Intro si se
    utiliza el teclado.

Ir a página web: (imagen elementos de tipo ir a menú con JavaScript)

Proporcionar un botón de envío separado de la lista de opciones que activa el elemento actualmente seleccionado permitirá la accesibilidad total del teclado.

<h2 id="formularios-avanzados">Formularios avanzados</h2>

<h3 id="introduccion-a-formularios-avanzados">Introducción a formularios avanzados</h3>

Hay ocasiones en las que el elemento `<label>` se queda corto - no puede ser usado para proveer múltiples etiquetas para un solo control de forma, o para asociar una sola etiqueta con múltiples controles de forma. También hay ocasiones en las que no hay una etiqueta de texto visible para ser asociada a un control de formulario. La mayoría de estas limitaciones de etiquetado pueden superarse con tres propiedades ARIA (`aria-labelledby`, `aria-descriptionby`, y `aria-label`) y un par de otras técnicas descritas en esta página.

<h3 id="aria-labelledby">aria-labelledby</h3>

Un elemento `<label>` indica qué campo de formulario etiqueta haciendo referencia a su valor de atributo id:

```html
<label for="fname">
```

Declara: "Yo soy una etiqueta para este control".

Con `aria-labelledby`, el campo form indica qué elemento lo etiqueta haciendo referencia a su atributo id:

```html
<input aria-labelledby="fnamelabel">
```

El control de forma declara, "Yo soy un control etiquetado por este elemento").

<h3 id="labels-multiples">Labels Múltiples</h3>

Dado que todos los elementos de una página deben tener valores de atributo de identificación únicos, una `<etiqueta>` sólo puede apuntar al identificador de un único control - a lo sumo una relación uno a uno entre la etiqueta y el control. `aria-labelledby`, sin embargo, permite que un elemento sea referenciado como una etiqueta para múltiples controles, y permite que múltiples elementos sean referenciados como etiquetas para un único control. En resumen, `aria-labelledby` supera la limitación 1 a 1 de `<label>`.

El siguiente es un ejemplo simplificado de una tabla que se podría utilizar para la entrada de datos. Cada cabecera de tabla funciona como una etiqueta visual para los controles de formulario en la columna inferior. Sólo hay una etiqueta visual para los controles de formularios múltiples. El elemento `<etiqueta>` no se puede utilizar para asociar este texto a los múltiples cuadros de texto.

(imagen de tabla): https://webaim.org/techniques/forms/advanced

El HTML para el primer encabezado ("Nombre") es:

```html
<th id="namelabel" scope="col">Name</th>
```

El HTML para el primer campo de texto dentro de la tabla es:

```html
<input type="text" name="name1" aria-labelledby="namelabel">
```

Las etiquetas de texto deberían describir generalmente la función de cada control de formulario. Este atributo aria-labelledby podría añadirse a los tres campos Name, etiquetando así correctamente todos ellos con un elemento de texto.

Basándose en este ejemplo, la tabla de abajo tiene etiquetas visuales a lo largo de la parte superior y lateral - múltiples etiquetas visuales para cada control.

(imagen de tabla 2): https://webaim.org/techniques/forms/advanced

El HTML para el primer campo de esta tabla es:

```html
<input type="text" name="office1" aria-labelledby="cyndi officenum">
```

Los valores de `cyndi` y `officenum` hacen referencia a los ids de las celdas de las tablas "Cyndi" y "Office Number". Un lector de pantalla leerá "Cyndi Office Number" al navegar por este campo. El orden de lectura de varias etiquetas se basa en el orden en el que se especifican estos valores.

_Nota_

    Como regla general, si una sola etiqueta está presente para un
    solo control, se debe utilizar el elemento `<etiqueta>` para hacer
    referencia a él. Estas etiquetas proporcionan funcionalidad
    adicional - al hacer clic en ellas se enfoca o activa el control.
    Esto no está disponible cuando se utiliza `aria-labelledby`.

_Importante_

    Si un control tiene tanto una `<label>` como una `aria-labelledby`
    asociada, el texto de la `aria-labelledby` referenciada
    prevalecerá y será leída en lugar de la `<label>` asociada.

<h3 id="aria-describedby">aria-describedby</h3>

Hay ocasiones en las que un formulario incluye información que no es exactamente una etiqueta pero que es lo suficientemente importante como para ser leída por un lector de pantalla cuando se navega hacia el control de formularios. Esta información adicional puede asociarse al campo del formulario con el atributo `aria-describedby` por. Por ejemplo:

(imagen reset password)
La nueva contraseña debe tener entre 8 y 15 caracteres e incluir letras y números

Aquí está el HTML:

```html
<label for="resetpass">Reset Password:</label>
<input type="password" name="resetpass" id="resetpass" aria-describedby="newpass">
<span id="newpass">New password must be 8-15 characters and include letters and numbers</span>
```

Because there is a single label, `<label>` is used rather than `aria-labelledby`. As with `aria-labelledby`, the `aria-describedby` attribute points to the id of the element that contains the password requirements. A screen reader would read both the associated label(s) and then the associated description(s). Descriptions are sometimes read after a short pause. `aria-describedby` can also reference multiple elements - just separate the referenced id values with spaces.

_Nota_

    - Mientras que el aria`-`labelledby anula el `<label>`, el `aria-labelledby`
    no lo hace. Esto significa que la aria descrita como tal sólo debe utilizarse
    además de una etiqueta (por ejemplo, `<>` o `<input aria-labelledby>`),
    no en lugar de una.

    - El atributo `aria-describedby` también puede utilizarse para hacer
    referencia a descripciones que aparecen como'tooltips'. Los usuarios de
    teclado deben poder ver las sugerencias de herramientas cuando el control
    tiene el foco del teclado, no sólo cuando el usuario pasa el ratón por
    encima o hace clic con el ratón.

<h3 id="labels-invisibles">Labels Invisibles</h3>

Hay ocasiones en las que una etiqueta de texto para un control de formulario no tiene sentido visualmente. El ejemplo más común es el campo "Buscar". Su ubicación dentro de la página, junto con el botón Buscar, hace que su propósito sea claro para los usuarios con visión. Añadir una etiqueta de texto visual sería exagerado y podría tener un impacto negativo en el diseño del sitio.

Cuando no se disponga de una etiqueta visible, se utilizará una de las tres técnicas siguientes:

<h4 id="label-oculto">Label Oculto</h4>

Ocultar el elemento `<>` fuera de pantalla usando CSS. La etiqueta no aparecerá visualmente, pero seguirá siendo leída por un lector de pantalla.

(imagen de label oculto)

Aquí está el HTML para el control del formulario:

```html
<label class="hidden" for="s">Search Terms</label>
<input type="text" id="s" name="s">
```

El CSS que se utiliza para ocultar la etiqueta, así como información adicional sobre esta técnica, se describe en nuestro artículo sobre contenido invisible para lectores de pantalla.

<h4 id="atributo-titulo">Atributo Título</h4>

Esta técnica también hará que aparezca un tooltip cuando el usuario pasa el ratón por encima del campo, lo que podría distraer a algunos usuarios.

<h4 id="aria-label">aria-label</h4>

El atributo `aria-label` también se puede utilizar cuando no hay etiqueta de texto en la página.

```html
<input id="s" type="text" name="s" aria-label="Search Terms">
```

A diferencia de `aria-labelledby`, que debe hacer referencia a otro elemento, `aria-label` contiene el texto de la etiqueta directamente. Al igual que con `aria-labelledby`, `aria-label` anulará cualquier elemento `<label>` asociado.

    - Sólo una de estas recomendaciones debe ser implementada. Usar dos o
    más juntos (por ejemplo, una <etiqueta> oculta y un atributo de título
    duplicado) puede causar que la información sea repetida por un lector
    de pantalla.

    - El texto del marcador de posición (por ejemplo,
    <input type="text" placeholder="Search WebAIM">) no es una etiqueta
    adecuada y nunca debe usarse en lugar de las técnicas anteriores.


<h3 id="resumen">Resúmen</h3>

- Utilice `<label>` elemento cuando pueda. Tiene un excelente soporte para navegadores y lectores de pantalla, y los usuarios pueden hacer clic en la etiqueta para seleccionar el control de formularios asociado.
- Utilice `aria-labelledby` para superar las limitaciones 1:1 de `<label>`.
- Utilice `aria-descriptionby` además de una etiqueta cuando necesite asociar texto descriptivo al control de formulario.
- Utilice una etiqueta `<label>` oculta o una etiqueta de `title` o `aria-label` cuando no esté disponible una etiqueta de texto visible.

<h2 id="panel-de-errores">Panel de Errores</h2>


<a href="#top">GO TO TOP</a>
