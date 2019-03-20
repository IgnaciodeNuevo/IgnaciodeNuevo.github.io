---
layout: post
title: "Nociones básicas de accesibilidad: Parte uno de dos."
tags:
  - Accessibility
lang: es
page_class: post
description: Cuando pensamos en accesibilidad lo importante es conocer quién o quienes van a ser las personas que van a usar nuestra web o aplicación. Desafortunadamente no siempre sabemos qué situación tiene cada uno de nuestros usuarios.
---

## Es necesario entender unas bases

La web se concibió como una herramienta para transmitir información, hagamos porque esto sea así y llegue a la mayor cantidad de personas posible.

Puede parecer exagerado pensar en este tipo de cosas, pero en muchos casos debemos saber que gran parte de nuestros usuarios tendrán en algún momento problemas temporales que les impedirán usar nuestra plataforma adecuadamente. Así que debemos pensar en todas las posibilidades:

  +	Personas que usan teclado.
  +	Personas invidentes y con baja visión.
  +	Personas daltónicas.
  +	Personas sordas y con problemas de audición.
  +	Personas con dificultades de aprendizaje y limitaciones cognitivas.
  +	Personas con problemas de movilidad.
  +	Personas con discapacidades del habla.
  +	Personas con trastornos cognitivos.

Según la  <a class="link link--special" href="https://www.ine.es/revistas/cifraine/1009.pdf" target="_blank" rel="noopener noreferrer">última encuesta del INE</a> (Encuesta de Discapacidad, Autonomía personal y situaciones de Dependencia), en 2008 arroja que hay 3,85 millones de personas con alguna limitación visual, motora, cognitiva, auditiva… en España.

## Niveles de accesibilidad

Web Content Accessibility Guidelines <a class="link link--special" href="https://www.w3.org/TR/WCAG21/" target="_blank" rel="noopener noreferrer">(WCAG) 2.1</a>, es W3C Recommendation desde el 5 de junio de 2018.

<details class="dropdown">
    <summary>WCAG 2.1 Nivel A</summary>
    <ul>
        <li>1.1.1 – <b lang="en">Non-text Content</b>: Proporcionar alternativas de texto para el contenido no textual.</li>
        <li>1.2.1 – <b lang="en">Audio-only and Video-only</b>: Proporcionar una alternativa a los contenidos sólo de vídeo y sólo de audio.</li>
        <li>1.2.2 – <b lang="en">Captions</b>: Proporcione subtítulos para los videos con audio.</li>
        <li>1.2.3 – <b lang="en">Audio Description or Media Alternative</b>: El vídeo con audio tiene una segunda alternative.</li>
        <li>1.3.1 – <b lang="en">Info and Relationships</b>: Estructura lógica.</li>
        <li>1.3.2 – <b lang="en">Meaningful Sequence</b>: Presentar el contenido en un orden significativo.</li>
        <li>1.3.3 – <b lang="en">Sensory Characteristics</b>: Usar más de un sentido para las instrucciones.</li>
        <li>1.4.1 – <b lang="en">Use of Colour</b>: No utilice una presentación que se base únicamente en el color.</li>
        <li>1.4.2 – <b lang="en">Audio Control</b>: No reproduzca el audio automáticamente.</li>
        <li>2.1.1 – <b lang="en">Keyboard</b>: Accesible sólo con el teclado.</li>
        <li>2.1.2 – <b lang="en">No Keyboard Trap</b>: No atrapar a los usuarios de teclado.</li>
        <li>2.1.4 – <b lang="en">Character Key Shortcuts</b>: Si un atajo de teclado se implementa en el contenido utilizando sólo letras (incluyendo mayúsculas y minúsculas), signos de puntuación, números o símbolos, entonces al menos uno de los siguientes puntos es verdadero: <span lang="en">turn off, remap, active only on focus</span>.</li>
        <li>2.2.1 – <b lang="en">Timing Adjustable</b>: Los límites de tiempo han de tener controles de usuario.</li>
        <li>2.2.2 – <b lang="en">Pause, Stop, Hide</b>: Proporcionar controles de usuario para mover contenido.</li>
        <li>2.3.1 – <b lang="en">Three Flashes or Below</b>: Ningún contenido parpadea más de tres veces por segundo.</li>
        <li>2.4.1 – <b lang="en">Bypass Blocks</b>: Proporcionar un enlace de tipo «saltar» al contenido.</li>
        <li>2.4.2 – <b lang="en">Page Titled</b>: Utilice títulos de página útiles y claros.</li>
        <li>2.4.3 – <b lang="en">Focus Order</b>: Orden lógico.</li>
        <li>2.4.4 – <b lang="en">Link Purpose</b>: El propósito de cada enlace está claro desde su contexto.</li>
        <li>2.5.1 – <b lang="en">Pointer Gestures</b>: Todas las funciones que utilizan gestos multipunto o basados en trayectorias para su funcionamiento se pueden utilizar con un único puntero sin un gesto basado en trayectorias.</li>
        <li>2.5.2 – <b lang="en">Pointer Cancellation</b>: En el caso de las funciones que se pueden utilizar con un solo puntero, al menos una de las siguientes opciones es cierta: <span lang="en">no down-event, abort or undo, up reversal, essential</span>.</li>
        <li>2.5.3 – <b lang="en">Label in Name</b>: Para los componentes de la interfaz de usuario con `labels` que incluyen texto o imágenes de texto, el nombre contiene el texto que se presenta visualmente.</li>
        <li>2.5.4 – <b lang="en">Motion Actuation</b>: La funcionalidad que puede ser operada por el movimiento del dispositivo o el movimiento del usuario también puede ser operada por los componentes de la interfaz de usuario y responder al movimiento puede ser desactivado para prevenir una actuación accidental.</li>
        <li>3.1.1 – <b lang="en">Language of Page</b>: La página tiene un idioma asignado.</li>
        <li>3.2.1 – <b lang="en">On Focus</b>: Los elementos no cambian cuando reciben el foco.</li>
        <li>3.2.2 – <b lang="en">On Input</b>: Los elementos no cambian cuando reciben contenido.</li>
        <li>3.3.1 – <b lang="en">Error Identification</b>: Identificar claramente los errores de entrada.</li>
        <li>3.3.2 – <b lang="en">Labels or Instructions</b>: Etiquetar los elementos y dar instrucciones.</li>
        <li>4.1.1 – <b lang="en">Parsing</b>: No hay errores de código importantes.</li>
        <li>4.1.2 – <b lang="en">Name, Role, Value</b>: Construir todos los elementos para la accesibilidad.</li>
    </ul>
</details>

<details class="dropdown">
    <summary>WCAG 2.1 Nivel AA</summary>
    <ul>
        <li>1.2.4 – <b lang="en">Captions</b>: Los videos en vivo tienen subtítulos.</li>
        <li>1.2.5 – <b lang="en">Audio Description</b>: Los usuarios tienen acceso a la descripción de audio para el contenido de vídeo.</li>
        <li>1.3.4 – <b lang="en">Orientation</b>: El contenido no restringe su visualización y funcionamiento a una única orientación de pantalla, a menos que sea esencial una orientación de pantalla específica.</li>
        <li>1.3.5 – <b lang="en">Identify Input Purpose</b>: El campo de entrada sirve para un propósito identificado en la sección y el contenido se implementa utilizando tecnologías que ayudan a identificar el significado esperado.</li>
        <li>1.4.10 – <b lang="en">Reflow</b>: El contenido puede presentarse sin pérdida de información o funcionalidad, y sin necesidad de desplazarse en dos dimensiones (320px horizontal y 256px vertical).</li>
        <li>1.4.11 – <b lang="en">Non-Text Contrast</b>: La presentación visual tiene una relación de contraste de al menos 3:1 con respecto a los colores adyacentes.</li>
        <li>1.4.12 – <b lang="en">Text Spacing</b>: En el contenido implementado usando lenguajes de marcado no se produce ninguna pérdida de contenido o funcionalidad al configurar o al no cambiar ninguna otra propiedad de estilo.</li>
        <li>1.4.13 – <b lang="en">Content on Hover or Focus</b>: Si al recibir y luego eliminar el puntero o el foco del teclado se activa el contenido adicional para que se haga visible y luego se oculte, lo siguiente es cierto: <span lang="en">dismissable, hoverable, persistent</span>.</li>
        <li>1.4.3 – <b lang="en">Contrast</b>: La relación de contraste entre el texto y el fondo es de al menos 4.5:1.</li>
        <li>1.4.4 – <b lang="en">Resize Text</b>: El texto puede ser redimensionado al 200% sin pérdida de contenido o función.</li>
        <li>1.4.5 – <b lang="en">Images of Text</b>: No utilice imágenes de texto.</li>
        <li>2.4.5 – <b lang="en">Multiple Ways</b>: Ofrecer varias maneras de encontrar páginas.</li>
        <li>2.4.6 – <b lang="en">Headings and Labels</b>: Usar encabezados y <code>labels</code> claras.</li>
        <li>2.4.7 – <b lang="en">Focus Visible</b>: Asegúrese de que el focus del teclado sea visible y claro.</li>
        <li>3.1.2 – <b lang="en">Language of Parts</b>: Informar a los usuarios cuando cambie el idioma de una página.</li>
        <li>3.2.3 – <b lang="en">Consistent Navigation</b>: Usar los menús de manera consistente.</li>
        <li>3.2.4 – <b lang="en">Consistent Identification</b>: Utilice los iconos y botones de forma coherente.</li>
        <li>3.3.3 – <b lang="en">Error Suggestion</b>: Sugerir correcciones cuando los usuarios cometen errores.</li>
        <li>3.3.4 – <b lang="en">Error Prevention</b>: Reducir el riesgo de errores de entrada de datos confidenciales.</li>
        <li>4.1.3 – <b lang="en">Status Messages</b>: En el contenido implementado usando lenguajes de marcado, los mensajes de estado pueden ser determinados programáticamente a través de roles o propiedades de manera que puedan ser presentados al usuario mediante tecnologías de asistencia sin recibir atención.</li>
    </ul>
</details>

<details class="dropdown">
    <summary>WCAG 2.1 Nivel AAA</summary>
    <ul>
        <li>1.2.6 – <b lang="en">Sign Language</b>: Proporcionar traducciones en lenguaje de signos para los videos.</li>
        <li>1.2.7 – <b lang="en">Extended Audio description</b>: Proporcionar una descripción de audio ampliada para los vídeos.</li>
        <li>1.2.8 – <b lang="en">Media Alternative</b>: Proporcionar una alternativa de texto a los vídeos.</li>
        <li>1.2.9 – <b lang="en">Audio Only</b>: Proporcionar alternativas para el audio en vivo.</li>
        <li>1.3.6 – <b lang="en">Identify Purpose</b>: En el contenido implementado utilizando lenguajes de marcado, el propósito de los componentes de la interfaz de usuario, iconos y regiones puede determinarse de forma programática.</li>
        <li>1.4.6 – <b lang="en">Contrast</b>: La relación de contraste entre el texto y el fondo es de al menos 7:1.</li>
        <li>1.4.7 – <b lang="en">Low or No Background Audio</b>: El audio es claro para que los oyentes lo oigan.</li>
        <li>1.4.8 – <b lang="en">Visual Presentation</b>: Ofrecer a los usuarios una serie de opciones de presentación.</li>
        <li>1.4.9 – <b lang="en">Images of Text</b>: No utilice imágenes de texto.</li>
        <li>2.1.3 – <b lang="en">Keyboard</b>: Accesible sólo por teclado, sin excepción.</li>
        <li>2.2.3 – <b lang="en">No Timing</b>: Sin límite de tiempo.</li>
        <li>2.2.4 – <b lang="en">Interruptions</b>: No interrumpa a los usuarios.</li>
        <li>2.2.5 – <b lang="en">Re-authenticating</b>: Guardar los datos de usuario al volver a autenticar.</li>
        <li>2.2.6 – <b lang="en">Timeouts</b>: Se advierte a los usuarios de la duración de cualquier inactividad del usuario que pueda causar la pérdida de datos.</li>
        <li>2.3.2 – <b lang="en">Three Flashes</b>: Ningún contenido parpadea más de tres veces por segundo.</li>
        <li>2.3.3 – <b lang="en">Animation from Interactions</b>: La animación de movimiento activada por la interacción puede ser desactivada.</li>
        <li>2.4.1 – <b lang="en">Section Headings</b>: «Romper» el contenido con los encabezados.</li>
        <li>2.4.8 – <b lang="en">Location</b>: Informar a los usuarios de dónde están.</li>
        <li>2.4.9 – <b lang="en">Link Purpose</b>: El propósito de cada enlace está claro en su texto.</li>
        <li>2.5.5 – <b lang="en">Target Size</b>: El tamaño del objetivo para las entradas de puntero es de al menos 44 por 44 pixels.</li>
        <li>2.5.6 – <b lang="en">Concurrent Input Mechanisms</b>: El contenido de la web no restringe el uso de las modalidades de entrada disponibles en una plataforma.</li>
        <li>3.1.3 – <b lang="en">Unusual words</b>: Explique cualquier palabra extraña.</li>
        <li>3.1.4 – <b lang="en">Abbreviations</b>: Explique cualquier abreviatura.</li>
        <li>3.1.5 – <b lang="en">Reading Level</b>: Los usuarios con nueve años de escolaridad pueden leer su contenido.</li>
        <li>3.1.6 – <b lang="en">Pronunciation</b>: Explicar cualquier palabra que sea difícil de pronunciar.</li>
        <li>3.2.5 – <b lang="en">Change on Request</b>: No cambie los elementos de su sitio web hasta que los usuarios le pregunten.</li>
        <li>3.3.5 – <b lang="en">Help</b>: Proporcionar ayuda e instrucciones detalladas.</li>
        <li>3.3.6 – <b lang="en">Error Prevention</b>: Reducir el riesgo de todos los errores de entrada.</li>
    </ul>
</details>

## El principio POUR

Existe este principio que indica, básicamente la necesidad de hacer las cosas _bien_ hechas. ¿Qué indica en este caso bien hechas?

  +	Perceptible (<span lang="en">Perceivable</span>) – La información y los componentes de la interfaz de usuario deben ser presentables a los usuarios de manera que puedan percibirlos.
  +	Usable (<span lang="en">Operable</span>) – Los componentes de la interfaz de usuario y la navegación deben ser usables.
  +	Comprensible (<span lang="en">Understandable</span>) – La información y el funcionamiento de la interfaz de usuario deben ser comprensibles.
  +	Robusto (<span lang="en">Robust</span>) – El contenido debe ser lo suficientemente robusto como para que pueda ser interpretado de forma fiable por una amplia variedad de _user agents_, incluidas las tecnologías de asistencia.

## Recomendaciones de la W3C

En su momento, la <a class="link link--special" href="www.w3.org/" target="_blank" rel="noopener noreferrer">W3C</a> hizo las siguientes recomendaciones, que aún siendo básicas, siguen ocurriendo como bien indica <a class="link link--special" href="https://webaim.org/" target="_blank" rel="noopener noreferrer">WebAIM</a> en su artículo <span lang="en">an <a class="link link--special" href="https://webaim.org/projects/million/" target="_blank" rel="noopener noreferrer">accessibility analysis</a> of the top 1,000,000 home pages</span>.

  +	Proporcionar suficiente contraste entre el color de primer plano y el de fondo.
  +	No use el color únicamente para transmitir información.
  +	Hay que asegurarse de que los elementos interactivos sean fáciles de identificar.
  +	Proporcionar opciones de navegación fáciles de usar.
  +	Asegúrese de que los elementos del formulario incluyan `labels` claramente asociados a sus `inputs` o `textareas`.
  +	Proporcionar `feedback` fácilmente identificable.
  +	Utilice los encabezados y el espaciado para agrupar el contenido relacionado.
  +	Crear diseños para diferentes tamaños de pantalla en los que se ajuste el contenido.
  +	Debemos añadir el atributo `alt` y la consiguiente descripción a imágenes que son parte del contenido (o que no son decorativas).
  +	Proporcione controles para el contenido cuya reproducción se inicie automáticamente.
  +	Usar encabezamientos para transmitir significado y estructura.
  +	Hacer que el texto de los enlaces tenga sentido.

## Recomendaciones generales

  +	Deberíamos usar el <span lang="en"><em>progressive enhancement</em></span> para que si fallan las librerías que usamos la aplicación siga funcionando con unos mínimos.
  +	La web debe tener <span lang="en"><em>fallbacks</em></span> para las tipografías personalizadas, por si falla la cargue, que haya una sustituta.
  +	La web debe poder seguir funcionando de forma correcta aún si se usan herramientas de bloqueo de anuncios como Ad Blocker, Privacy Badger, uBlock Origin…
  +	No usar color únicamente para mostrar mensajes, añadir a ser posible, texturas, iconografía y/o textos.
  +	Las web debe verse bien, debemos pensar en el contraste de color.
  +	En los formularios debemos asociar cada `label` a su `input` y nunca debemos tener un `input` de forma aislada.
  +	La web debe verse correctamente con un zoom de 200%, también deberíamos probar que se ve bien a 500%.
  +	No bloquear el zoom en el metatag del `<head></head>`.

¡Ésto es todo, amigos! Por ahora, porque ya estoy preparando el siguiente artículo sobre accesibilidad.

<div class="related">
    <h4 class="related__title">Recursos</h4>
    <ul class="related__list">
       <li>How to Meet <a class="link link--special" href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1" target="_blank" rel="noopener noreferrer">WCAG 2.1 (Quick Reference)</a>.</li>
       <li>Hilo de Twitter con <a class="link link--special" href="https://twitter.com/IgnaciodeNuevo/status/952620136250462210" target="_blank" rel="noopener noreferrer">recursos sobre accesibilidad</a>.</li>
    </ul>
</div>
