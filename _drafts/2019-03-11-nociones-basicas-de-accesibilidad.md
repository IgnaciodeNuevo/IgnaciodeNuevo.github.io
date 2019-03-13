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

  +	WCAG 2.0 Nivel A: para lograr conformidad con el Nivel A (el mínimo), la página web satisface todos los Criterios de Conformidad del Nivel A, o proporciona una versión alternativa conforme.
  +	WCAG 2.0 Nivel AA: para lograr conformidad con el Nivel AA, la página web satisface todos los Criterios de Conformidad de los Niveles A y AA, o se proporciona una versión alternativa conforme al Nivel AA.
  +	WCAG 2.0 Nivel AAA: para lograr conformidad con el Nivel AAA, la página web satisface todos los Criterios de Conformidad de los Niveles A, AA y AAA, o proporciona una versión alternativa conforme al Nivel AAA.

  +	WCAG 2.0 Nivel A
    +	1.1.1 – Non-text Content: Proporcionar alternativas de texto para el contenido no textual
    +	1.2.1 – Audio-only and Video-only (Pre-recorded): Proporcionar una alternativa a los contenidos sólo de vídeo y sólo de audio
    +	1.2.2 – Captions (Pre-recorded): Proporcione subtítulos para los videos con audio
    +	1.2.3 – Audio Description or Media Alternative (Pre-recorded): El vídeo con audio tiene una segunda alternative
    +	1.3.1 – Info and Relationships: Estructura lógica
    +	1.3.2 – Meaningful Sequence:	Presentar el contenido en un orden significativo
    +	1.3.3 – Sensory Characteristics: Usar más de un sentido para las instrucciones
    +	1.4.1 – Use of Colour: No utilice una presentación que se base únicamente en el color
    +	1.4.2 – Audio Control: No reproduzca el audio automáticamente
    +	2.1.1 – Keyboard: Accesible sólo con el teclado
    +	2.1.2 – No Keyboard Trap: No atrapar a los usuarios de teclado
    +	2.2.1 – Timing Adjustable: Los límites de tiempo han de tener controles de usuario
    +	2.2.2 – Pause, Stop, Hide: Proporcionar controles de usuario para mover contenido
    +	2.3.1 – Three Flashes or Below: Ningún contenido parpadea más de tres veces por segundo
    +	2.4.1 – Bypass Blocks: Proporcionar un enlace de tipo “saltar” al contenido
    +	2.4.2 – Page Titled: Utilice títulos de página útiles y claros
    +	2.4.3 – Focus Order: Orden lógico
    +	2.4.4 – Link Purpose (In Context): El propósito de cada enlace está claro desde su contexto
    +	3.1.1 – Language of Page: La página tiene un idioma asignado
    +	3.2.1 – On Focus: Elements do not change when they receive focus
    +	3.2.2 – On Input: Los elementos no cambian cuando reciben entradas
    +	3.3.1 – Error Identification: Identificar claramente los errores de entrada
    +	3.3.2 – Labels or Instructions: Etiquetar los elementos y dar instrucciones
    +	4.1.1 – Parsing: No hay errores de código importantes
    +	4.1.2 – Name, Role, Value: Construir todos los elementos para la accesibilidad

  +	Nivel AA
    +	1.2.4 – Captions (Live): Los videos en vivo tienen subtítulos
    +	1.2.5 – Audio Description (Pre-recorded): Los usuarios tienen acceso a la descripción de audio para el contenido de vídeo
    +	1.4.3 – Contrast (Minimum): La relación de contraste entre el texto y el fondo es de al menos 4.5:1
    +	1.4.4 – Resize Text: El texto puede ser redimensionado al 200% sin pérdida de contenido o función.
    +	1.4.5 – Images of Text: No utilice imágenes de texto
    +	2.4.5 – Multiple Ways:	Ofrecer varias maneras de encontrar páginas
    +	2.4.6 – Headings and Labels: Usar encabezados y labels claras
    +	2.4.7 – Focus Visible: Asegúrese de que el focus del teclado sea visible y claro
    +	3.1.2 – Language of Parts: Informar a los usuarios cuando cambie el idioma de una página
    +	3.2.3 – Consistent Navigation: Usar los menús de manera consistente
    +	3.2.4 – Consistent Identification: Utilice los iconos y botones de forma coherente
    +	3.3.3 – Error Suggestion: Sugerir correcciones cuando los usuarios cometen errores
    +	3.3.4- Error Prevention (Legal, Financial, Data): Reducir el riesgo de errores de entrada de datos confidenciales

  +	Nivel AAA
    +	1.2.6 – Sign Language (Pre-recorded): Proporcionar traducciones en lenguaje de signos para los videos
    +	1.2.7 – Extended Audio description (Pre-recorded): Proporcionar una descripción de audio ampliada para los vídeos
    +	1.2.8 – Media Alternative (Pre-recorded): Proporcionar una alternativa de texto a los vídeos
    +	1.2.9 – Audio Only (Live): Proporcionar alternativas para el audio en vivo
    +	1.4.6 – Contrast (Enhanced): La relación de contraste entre el texto y el fondo es de al menos 7:1
    +	1.4.7 – Low or No Background Audio: El audio es claro para que los oyentes lo oigan
    +	1.4.8 – Visual Presentation: Ofrecer a los usuarios una serie de opciones de presentación
    +	1.4.9 – Images of Text (No Exception): No utilice imágenes de texto
    +	2.1.3 – Keyboard (No Exception): Accesible sólo por teclado, sin excepción
    +	2.2.3 – No Timing: Sin límite de tiempo
    +	2.2.4 – Interruptions: No interrumpa a los usuarios
    +	2.2.5 – Re-authenticating: Guardar los datos de usuario al volver a autenticar
    +	2.3.2 – Three Flashes: 	Ningún contenido parpadea más de tres veces por segundo
    +	2.4.8 – Location: Informar a los usuarios de dónde están
    +	2.4.9 – Link Purpose (Link Only): El propósito de cada enlace está claro en su texto
    +	2.4.10 – Section Headings: “Romper” el contenido con los encabezados
    +	3.1.3 – Unusual words: Explique cualquier palabra extraña
    +	3.1.4 – Abbreviations: 	Explique cualquier abreviatura
    +	3.1.5 – Reading Level: 	Los usuarios con nueve años de escolaridad pueden leer su contenido
    +	3.1.6 – Pronunciation: 	Explicar cualquier palabra que sea difícil de pronunciar
    +	3.2.5 – Change on Request: No cambie los elementos de su sitio web hasta que los usuarios le pregunten
    +	3.3.5 – Help: Proporcionar ayuda e instrucciones detalladas
    +	3.3.6 – Error Prevention (All): Reducir el riesgo de todos los errores de entrada

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

## Herramientas de testeo

  1. <a class="link link--special" href="https://validator.w3.org/nu/" target="_blank" rel="noopener noreferrer">W3C Nu HTML Checker</a>
  1. <a class="link link--special" href="https://accessibilityinsights.io/en/" target="_blank" rel="noopener noreferrer">Accessibility Insights</a>
  1. <a class="link link--special" href="https://www.tenon.io/" target="_blank" rel="noopener noreferrer">Tenon</a>
  1. <a class="link link--special" href="https://www.deque.com/axe/" target="_blank" rel="noopener noreferrer">aXe</a>
  1. <a class="link link--special" href="https://wave.webaim.org/extension/" target="_blank" rel="noopener noreferrer">WAVE</a>
  1. <a class="link link--special" href="https://www.powermapper.com/products/sortsite/checks/accessibility-checks/" target="_blank" rel="noopener noreferrer">PowerMapper</a>
  1. <a class="link link--special" href="https://developers.google.com/web/tools/lighthouse/" target="_blank" rel="noopener noreferrer">Lighthouse accessibility audit</a>
  1. <a class="link link--special" href="https://www.toptal.com/designers/colorfilter/" target="_blank" rel="noopener noreferrer">Color Blind tool</a>
  1. <a class="link link--special" href="http://pa11y.org/" target="_blank" rel="noopener noreferrer">Pa11y</a>
  1. <a class="link link--special" href="https://github.com/AccessLint/accesslint.js" target="_blank" rel="noopener noreferrer">AccessLint.js</a>
  1. <a class="link link--special" href="http://khan.github.io/tota11y/" target="_blank" rel="noopener noreferrer">tota11y</a>
  1. <a class="link link--special" href="http://squizlabs.github.io/HTML_CodeSniffer/" target="_blank" rel="noopener noreferrer">HTML CodeSniffer</a>


<div class="related">
  <h4 class="related__title">Documentación adicional sobre SVGs inline accesibles</h4>
  <ol class="related__list">
    <li><a class="link link--special" href="https://www.keycdn.com/blog/icon-fonts-vs-svgs" target="_blank" rel="noopener noreferrer">Icon Fonts vs SVGs - Which One Should You Use In 2018?</a></li>
    <li><a class="link link--special" href="https://twitter.com/IgnaciodeNuevo/status/960646272356093952" target="_blank" rel="noopener noreferrer">IMG de Twitter</a></li>
    <li><a class="link link--special" href="https://css-tricks.com/icon-fonts-vs-svg/" target="_blank" rel="noopener noreferrer">Inline SVG vs Icon Fonts</a></li>
    <li><a class="link link--special" href="https://www.sitepoint.com/tips-accessible-svg/" target="_blank" rel="noopener noreferrer">Tips for Creating Accessible SVG</a></li>
    <li><a class="link link--special" href="https://www.24a11y.com/2017/svg-icon-fonts-accessibility-case-study/" target="_blank" rel="noopener noreferrer">SVG, Icon Fonts, and Accessibility: A Case Study</a></li>
    <li><a class="link link--special" href="https://developer.paciellogroup.com/blog/2013/12/using-aria-enhance-svg-accessibility/" target="_blank" rel="noopener noreferrer">Using ARIA to enhance SVG accessibility</a></li>
    <li><a class="link link--special" href="https://www.youtube.com/watch?v=af4ZQJ14yu8" target="_blank" rel="noopener noreferrer">Why Inline SVG is Best SVG</a></li>
    <li><a class="link link--special" href="https://css-tricks.com/video-screencasts/137-svg-is-for-everybody/" target="_blank" rel="noopener noreferrer">SVG is for Everybody</a></li>
  </ol>
</div>





  + Aria Authoring Practices (patterns section: 11)
  + Landmarks
  + Use roles when necessary

Bla bla

  + 5 Fast accesibility tests you can do
    + Comprobar que se puede parar o dejar en silencio el contenido dinámico.
    + Comprobar que se puede poner en pausa, parar o silenciar cualquier audio que tenga “autoplay”.
    + Comprobar que los videos tienen subtítulos.
    + Comprobar que si se aumenta la Fuente el contenido la web o aplicación no se “rompe” visualmente.
    + Comprobar que los usuarios que usan teclado pueden saltarse el contenido repetido.

  + Accounts for multiple input types
    + Keyboard
    + Mouse
    + Touch
    + Stylus
    + Voice

Bla bla

  + 1.3.2 Meaningful Sequence
  + 2.1.2 No keyboard trap
    + Modals and Keyboard traps
  + 1.1 Text alternatives for non text content
  + ARIA
    + Aria Roles
    + Aria States
    + Aria Properties
    + Firefox A11y Panel
    + a11y Landmarks
