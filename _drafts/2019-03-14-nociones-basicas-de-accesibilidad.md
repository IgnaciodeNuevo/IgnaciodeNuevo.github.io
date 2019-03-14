---
layout: post
title: "Nociones básicas de accesibilidad"
tags:
  - Accessibility
lang: es
page_class: post
description:
---

## Es necesario entender unas bases

Cuando pensamos en accesibilidad lo importante es conocer quién o quienes van a ser las personas que van a usar nuestra web o aplicación.

Desafortunadamente no siempre sabemos qué situación tiene cada uno de nuestros usuarios.

La web se concibió como una herramienta para transmitir información, hagamos porque esto sea así y llegue a la mayor cantidad de personas posible.

Puede parecer exagerado pensar en este tipo de cosas, pero en muchos casos debemos saber que gran parte de nuestros usuarios tendrán en algún momento problemas temporales que les impedirán usar nuestra plataforma adecuadamente.

Puede ocurrir que en un accidente se fracturen una mano, que por una revisión ocular se le dilaten las pupilas y pierda temporalmente la visión y su capacidad de ver nítidamente y así con numerables situaciones que no tenemos en cuenta porque no las vivimos y que pueden hacer que el buen uso de nuestra plataforma sea un suplicio para aquella persona habituada a usarla.

  +	Personas que usan teclado.
  +	Personas invidentes y con baja visión.
  +	Personas daltónicas.
  +	Personas sordas y con problemas de audición.
  +	Personas con dificultades de aprendizaje y limitaciones cognitivas.
  +	Personas con problemas de movilidad.
  +	Personas con discapacidades del habla.
  +	Personas con trastornos cognitivos.

## Niveles de accesibilidad

Documentación oficial de: <a class="link link--special" src="https://www.w3.org/TR/2006/WD-WCAG20-20060427/conformance.html#conformance-reqs" target="_blank" rel="noopener noreferrer">Conformance levels and the baseline</a>

<details class="dropdown">
    <summary>WCAG 2.0 Nivel A</summary>
    <ul>
        <li>1.1.1 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Non-text Content</a>: Proporcionar alternativas de texto para el contenido no textual</li>
        <li>1.2.1 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Audio-only and Video-only</a> (Pre-recorded): Proporcionar una alternativa a los contenidos sólo de vídeo y sólo de audio</li>
        <li>1.2.2 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Captions</a> (Pre-recorded): Proporcione subtítulos para los videos con audio</li>
        <li>1.2.3 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Audio Description or Media Alternative</a> (Pre-recorded): El vídeo con audio tiene una segunda alternative</li>
        <li>1.3.1 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Info and Relationships</a>: Estructura lógica</li>
        <li>1.3.2 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Meaningful Sequence</a>: Presentar el contenido en un orden significativo</li>
        <li>1.3.3 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Sensory Characteristics</a>: Usar más de un sentido para las instrucciones</li>
        <li>1.4.1 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Use of Colour</a>: No utilice una presentación que se base únicamente en el color</li>
        <li>1.4.2 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Audio Control</a>: No reproduzca el audio automáticamente</li>
        <li>2.1.1 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Keyboard</a>: Accesible sólo con el teclado</li>
        <li>2.1.2 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">No Keyboard Trap</a>: No atrapar a los usuarios de teclado</li>
        <li>2.2.1 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Timing Adjustable</a>: Los límites de tiempo han de tener controles de usuario</li>
        <li>2.2.2 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Pause, Stop, Hide</a>: Proporcionar controles de usuario para mover contenido</li>
        <li>2.3.1 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Three Flashes or Below</a>: Ningún contenido parpadea más de tres veces por segundo</li>
        <li>2.4.1 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Bypass Blocks</a>: Proporcionar un enlace de tipo “saltar” al contenido</li>
        <li>2.4.2 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Page Titled</a>: Utilice títulos de página útiles y claros</li>
        <li>2.4.3 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Focus Order</a>: Orden lógico</li>
        <li>2.4.4 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Link Purpose</a> (In Context): El propósito de cada enlace está claro desde su contexto</li>
        <li>3.1.1 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Language of Page</a>: La página tiene un idioma asignado</li>
        <li>3.2.1 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">On Focus</a>: Elements do not change when they receive focus</li>
        <li>3.2.2 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">On Input</a>: Los elementos no cambian cuando reciben entradas</li>
        <li>3.3.1 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Error Identification</a>: Identificar claramente los errores de entrada</li>
        <li>3.3.2 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Labels or Instructions</a>: Etiquetar los elementos y dar instrucciones</li>
        <li>4.1.1 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Parsing</a>: No hay errores de código importantes</li>
        <li>4.1.2 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Name, Role, Value</a>: Construir todos los elementos para la accesibilidad</li>
    </ul>
</details>

<details class="dropdown">
    <summary>WCAG 2.0 Nivel AA</summary>
    <ul>
        <li>1.2.4 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Captions</a> (Live): Los videos en vivo tienen subtítulos</li>
        <li>1.2.5 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Audio Description</a> (Pre-recorded): Los usuarios tienen acceso a la descripción de audio para el contenido de vídeo</li>
        <li>1.4.3 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Contrast</a>: (Minimum) La relación de contraste entre el texto y el fondo es de al menos 4.5:1</li>
        <li>1.4.4 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Resize Text</a>: El texto puede ser redimensionado al 200% sin pérdida de contenido o función.</li>
        <li>1.4.5 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Images of Text</a>: No utilice imágenes de texto</li>
        <li>2.4.5 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Multiple Ways</a>: Ofrecer varias maneras de encontrar páginas</li>
        <li>2.4.6 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Headings and Labels</a>: Usar encabezados y labels claras</li>
        <li>2.4.7 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Focus Visible</a>: Asegúrese de que el focus del teclado sea visible y claro</li>
        <li>3.1.2 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Language of Parts</a>: Informar a los usuarios cuando cambie el idioma de una página</li>
        <li>3.2.3 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Consistent Navigation</a>: Usar los menús de manera consistente</li>
        <li>3.2.4 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Consistent Identification</a>: Utilice los iconos y botones de forma coherente</li>
        <li>3.3.3 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Error Suggestion</a>: Sugerir correcciones cuando los usuarios cometen errores</li>
        <li>3.3.4 - <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Error Prevention</a> (Legal, Financial, Data): Reducir el riesgo de errores de entrada de datos confidenciales</li>
    </ul>
</details>

<details class="dropdown">
    <summary>WCAG 2.0 Nivel AAA</summary>
    <ul>
        <li>1.2.6 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Sign Language</a> (Pre-recorded): Proporcionar traducciones en lenguaje de signos para los videos</li>
        <li>1.2.7 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Extended Audio description</a> (Pre-recorded): Proporcionar una descripción de audio ampliada para los vídeos</li>
        <li>1.2.8 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Media Alternative</a> (Pre-recorded): Proporcionar una alternativa de texto a los vídeos</li>
        <li>1.2.9 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Audio Only (Live)</a>: Proporcionar alternativas para el audio en vivo</li>
        <li>1.4.6 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Contrast</a> (Enhanced): La relación de contraste entre el texto y el fondo es de al menos 7:1</li>
        <li>1.4.7 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Low or No Background Audio</a>: El audio es claro para que los oyentes lo oigan</li>
        <li>1.4.8 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Visual Presentation</a>: Ofrecer a los usuarios una serie de opciones de presentación</li>
        <li>1.4.9 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Images of Text</a> (No Exception): No utilice imágenes de texto</li>
        <li>2.1.3 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Keyboard</a> (No Exception): Accesible sólo por teclado, sin excepción</li>
        <li>2.2.3 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">No Timing</a>: Sin límite de tiempo</li>
        <li>2.2.4 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Interruptions</a>: No interrumpa a los usuarios</li>
        <li>2.2.5 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Re-authenticating</a>: Guardar los datos de usuario al volver a autenticar</li>
        <li>2.3.2 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Three Flashes</a>: 	Ningún contenido parpadea más de tres veces por segundo</li>
        <li>2.4.8 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Location</a>: Informar a los usuarios de dónde están</li>
        <li>2.4.9 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Link Purpose</a> (Link Only): El propósito de cada enlace está claro en su texto</li>
        <li>2.4.1 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer"> Section Headings</a>: “Romper” el contenido con los encabezados</li>
        <li>3.1.3 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Unusual words</a>: Explique cualquier palabra extraña</li>
        <li>3.1.4 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Abbreviations</a>: 	Explique cualquier abreviatura</li>
        <li>3.1.5 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Reading Level</a>: 	Los usuarios con nueve años de escolaridad pueden leer su contenido</li>
        <li>3.1.6 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Pronunciation</a>: 	Explicar cualquier palabra que sea difícil de pronunciar</li>
        <li>3.2.5 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Change on Request</a>: No cambie los elementos de su sitio web hasta que los usuarios le pregunten</li>
        <li>3.3.5 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Help</a>: Proporcionar ayuda e instrucciones detalladas</li>
        <li>3.3.6 – <a class="link link--special" src="" lang="en" target="_blank" rel="noopener noreferrer">Error Prevention (All)</a>: Reducir el riesgo de todos los errores de entrada</li>
    </ul>
</details>

<a class="link link--special" src="https://www.w3.org/WAI/WCAG21" target="_blank" rel="noopener noreferrer">WCAG 2.1</a>

## El principio POUR

  +	Perceptible (Perceivable) - La información y los componentes de la interfaz de usuario deben ser presentables a los usuarios de manera que puedan percibirlos.
  +	Usable (Operable) - Los componentes de la interfaz de usuario y la navegación deben ser usables.
  +	Comprensible (Understandable) - La información y el funcionamiento de la interfaz de usuario deben ser comprensibles.
  +	Robusto (Robust) - El contenido debe ser lo suficientemente robusto como para que pueda ser interpretado de forma fiable por una amplia variedad de _user agents_, incluidas las tecnologías de asistencia.

## Recomendaciones de la W3C

  +	Proporcionar suficiente contraste entre el color de primer plano y el de fondo.
  +	No use el color solo para transmitir información.
  +	Hay que asegurarse de que los elementos interactivos sean fáciles de identificar.
  +	Proporcionar opciones de navegación fáciles de usar.
  +	Asegúrese de que los elementos del formulario incluyan `labels` claramente asociados.
  +	Proporcionar `feedback` fácilmente identificable.
  +	Utilice los encabezados y el espaciado para agrupar el contenido relacionado.
  +	Crear diseños para diferentes tamaños de pantalla en los que se ajuste el contenido.
  +	Debemos añadir el atributo `alt` y la consiguiente descripción a imágenes que son parte del contenido (o que no son decorativas) con lo que si las imágenes no se cargan correctamente al menos veremos el atributo y entenderemos de que hablamos.
  +	Proporcione controles para el contenido cuya reproducción se inicie automáticamente.
  +	Usar encabezamientos para transmitir significado y estructura.
  +	Hacer que el texto de los enlaces tenga sentido.

## Recomendaciones generales

  +	Deberíamos usar el _progressive enhancement_ para que si fallan las librerías que usamos la aplicación siga funcionando con unos mínimos.
  +	La web o aplicación debe tener _fallbacks_ para las tipografías custom que usemos por si falla la cargue una sustituta.
  +	La web o aplicación debe poder seguir funcionando de forma correcta aún si se usan herramientas de bloqueo de anuncios como Ad Blocker, Privacy Badger, uBlock Origin…
  +	No usar color únicamente para mostrar mensajes, añadir a ser posible de texturas, iconografía y textos.
  +	Las web o aplicación debe verse bien, debemos tener en cuenta el contraste de color.
  +	En los formularios debemos asociar cada `label` a su `input` y nunca debemos tener un `input` de forma aislada.
  +	La web o aplicación debe verse correctamente con un zoom de 200%, posteriormente deberíamos probar que también se ve bien a 500%
  +	Usar la `metatag` que ayuda al responsive correctamente, no bloquear el zoom del siguiente modo:

{% highlight css %}

/**
* Metatag en el <head></head>
*/
<meta name="viewport" content="width=device-width, initial-scale=1">

/**
* Hide element while making it readable for screen readers
* Shamelessly borrowed from HTML5Boilerplate:
* https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css#L119-L133
*/
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

{% endhighlight %}

##  ¿Qué debemos tener en nuestras webs y aplicaciones?

Para empezar, deberemos tener muy presente en usar elementos semánticos siempre que podamos ya que, componentes con los que podemos interactuar como los botones, links o elementos de formulario: `inputs`, `dropdowns`, `datepickers`… son por defecto focusables.

Dichos elementos interactuables suelen usar unas teclas por defecto de forma nativa y si hacemos algún componente custom deberemos intentar salvo que desarrollemos una ayuda contextual usar las que por defecto usan los controles nativos.

Nota:

  +	Tab (para avanzar al siguiente elemento)
  +	Shift + Tab (para retroceder al elemento anterior)
  +	Arrow keys (para moverte dentro del componente como en un dropdown)
  +	Space (para activar elementos como los checkboxes)
  +	Enter (para activar elementos como los botones de submit)


## Elementos de formulario

En los elementos de formulario cada `input` debe tener varios factores claramente interpretables por el usuario con el sistema que utilice y que a su vez serán expuestos al API de accesibilidad.

  + `role`
  + `name` o `label`
  + `state`
  + `value`

## Checklist para controles personalizados

  +	¿Podemos acceder al control personalizado con el que queremos interactuar con el teclado?
  +	¿Podemos controlar el control personalizado con el teclado?
  +	¿Podemos controlar el control personalizado con gestos?
  +	¿Podemos controlar el control personalizado con tecnologías que ayuden a la accesibilidad?
  +	¿Podemos controlar el control personalizado con las teclas o gestos standard para un control de este tipo?
  +	¿Se puede ver fácilmente el control personalizado cuando se hace focus?
  +	¿Tiene el control personalizado un `label` que se expone como nombre al API de accesibilidad?
  +	¿Tiene el control personalizado un `role` que se expone al API de accesibilidad?
  +	¿Tiene el control personalizado estados de interfaz que se exponen al API de accesibilidad?
  +	El control personalizado tiene un `label`, una descripción e iconos perceptibles y accesibles por usuarios con baja visión.
  +	El control se puede usar correctamente cuando el usuario tenga el modo de Alto Contraste activo en su sistema operativo.

Por tanto, deberemos hacer que todos los elementos interaccionables de nuestra página web han de poder hacérseles foco y verse claramente. Si debemos hacerlos vía JavaScript podremos usar el método nativo `.focus()`.

Nota:

  +	Focusable
  +	Se puede usar el método `.focus()` de JavaScript

Por otro lado, deberemos tener en cuenta, que todos estos elementos por defecto tienen de forma implícita un `TAB` order, que no es ni más ni menos que irán haciéndose foco uno detrás de otro en el mismo orden que se encuentran en el <abbr title="Document Object Model">DOM</abbr> si no lo cambiamos activamente, cosa que en la mayoría de los casos debemos evitarlo.

Nota:

  +	Posibles valores del `tabindex`
    + -1 (no son focusables)
    + 0 (el estado normal)
    + Más de uno (aparecerán en dicho orden)

Otro tema a tener en cuenta son los skip-links que sirven para saltar de cosas no tan importantes como una barra de navegación o un aside con diferentes elementos al contenido a consumir.

  + <a class="link link--special" src="https://webaim.org/techniques/skipnav/" target="_blank" rel="noopener noreferrer">Skip Links</a>


{% highlight css %}

/**
* Ejemplo de código que podríamos usar en los skip-links
*/
.accessible-hidden {
  position: absolute;
  top: 0;
  left: -99999px;
  height: 1px;
  width: 1px;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
}

.accessible-hidden:focus {
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  padding: 10px;
  etc etc...
}

{% endhighlight %}

## Checklists

  1. <a class="link link--special" href="https://a11yproject.com/checklist/" target="_blank" rel="noopener noreferrer">A11y Project Checklist</a>

<div class="related">
  <h4 class="related__title">Herramientas de testeo</h4>
  <ol class="related__list">
    <li><a class="link link--special" href="https://validator.w3.org/nu/" target="_blank" rel="noopener noreferrer">W3C Nu HTML Checker</a></li>
    <li><a class="link link--special" href="https://accessibilityinsights.io/en/" target="_blank" rel="noopener noreferrer">Accessibility Insights</a></li>
    <li><a class="link link--special" href="https://www.tenon.io/" target="_blank" rel="noopener noreferrer">Tenon</a></li>
    <li><a class="link link--special" href="https://www.deque.com/axe/" target="_blank" rel="noopener noreferrer">aXe</a></li>
    <li><a class="link link--special" href="https://wave.webaim.org/extension/" target="_blank" rel="noopener noreferrer">WAVE</a></li>
    <li><a class="link link--special" href="https://www.powermapper.com/products/sortsite/checks/accessibility-checks/" target="_blank" rel="noopener noreferrer">PowerMapper</a></li>
    <li><a class="link link--special" href="https://developers.google.com/web/tools/lighthouse/" target="_blank" rel="noopener noreferrer">Lighthouse accessibility audit</a></li>
    <li><a class="link link--special" href="https://www.toptal.com/designers/colorfilter/" target="_blank" rel="noopener noreferrer">Color Blind tool</a></li>
    <li><a class="link link--special" href="http://pa11y.org/" target="_blank" rel="noopener noreferrer">Pa11y</a></li>
    <li><a class="link link--special" href="https://github.com/AccessLint/accesslint.js" target="_blank" rel="noopener noreferrer">AccessLint.js</a></li>
    <li><a class="link link--special" href="http://khan.github.io/tota11y/" target="_blank" rel="noopener noreferrer">tota11y</a></li>
    <li><a class="link link--special" href="http://squizlabs.github.io/HTML_CodeSniffer/" target="_blank" rel="noopener noreferrer">HTML CodeSniffer</a></li>
</ol>
</div>
