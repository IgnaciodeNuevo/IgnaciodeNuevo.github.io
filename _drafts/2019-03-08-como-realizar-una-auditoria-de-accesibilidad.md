---
layout: post
title: "¿Cómo realizar una auditoría de accesibilidad?"
tags:
  - Accessibility
lang: es
page_class: post
description:
---

## Introducción

La accesibilidad se podría definir como el conjunto de normas de implementación y diseño que hacen posible la utilización de la plataforma (web o aplicación web) al mayor número posible de personas independientemente de los medios técnicos, incluyendo aquellas que tienen algún tipo de discapacidad.

## ¿A qué usuarios tengo que dar soporte?

  +	Personas que usan teclado o una pantalla táctil.
  +	Personas ciegas o con baja visión.
  +	Personas daltónicas.
  +	Personas sordas o con problemas de audición.
  +	Personas con dificultades de aprendizaje y limitaciones cognitivas.
  +	Personas con problemas motrices.
  +	Personas con discapacidades del habla.

  +	Pueden no ser capaces de ver, oír o procesar cierto tipo de información.
  +	Pueden tener dificultades a la hora de leer o comprender un texto.
  +	No tienen por qué tener o ser capaces de usar un teclado o un ratón.
  +	Pueden usar lectores específicos, pantallas pequeñas como dispositivos móviles o no disponer de una conexión rápida a la red.
  +	Pueden no hablar o comprender con fluidez el idioma en que esté redactado el documento.
  +	Pueden encontrarse en una situación en la que sus ojos, oídos o manos estén ocupados u obstaculizados (por ejemplo, conduciendo un automóvil, trabajando en un entorno ruidoso,).
  +	Pueden tener una versión anterior del navegador, un navegador completamente diferente, un navegador de voz o un sistema operativo distinto.
  +	Pueden encontrarse en un entorno que presente limitaciones o restricciones a la hora de ejecutar scripts, objetos u otras funcionalidades.

Las personas con deficiencia visual total pueden usar ayudas técnicas tales como lectores de pantalla que faciliten la información para dispositivos de lectura braille o usen sintetizadores de voz para narrar el contenido; personas con deficiencias parciales en la visión pueden usar magnificadores de pantalla, herramientas para el aumento del contraste o barredores de pantalla entre otros; personas con discapacidades motoras pueden usar reconocedores de voz para navegar y enviar órdenes; personas con discapacidades cognitivas pueden necesitar la ayuda de símbolos o contenido ilustrativo que refuerce el mensaje y facilite la navegación.

## A11y Audit

  + Definir el alcance de la evaluación.
  + Explorar el sitio web.
  + Seleccionar una muestra representativa.
  + Auditoría de la muestra seleccionada.
  + Informe de los resultados.

## Navegadores usados y productos de apoyo bajo sistema operativo Windows 10

  + Explorer 11
  + Firefox 63.0
  + Chrome 70.0.3538.77
  + Jaws 18.4

## Principales barreras de accesibilidad detectadas

 + Inadecuada descripción alternativa
 + Botones sin etiquetar
 + Saltos en las jerarquías de encabezados
 + Carencia de uso de listas
 + Instrucciones para indicar las salas que forman parte del juego
 + Enlaces identificados solo por color
 + Solapamiento de contenidos al redimensionar el contenido
 + Ausencia de orden de foco al duplicar elementos
 + Enlaces sin información de contexto
 + Ausencia de foco visible en selectores
 + Incorrecta información en los campos requeridos de los formularios
 + Orden inconsistente al duplicar elementos en una listado
 + Uso de aria-hidden en toda la página

## Resultados del análisis sobre las WCAG 2.0

WCAG 2.0 - Descripción - Nivel - Cumplimiento

## Consejos del Consorcio W3C

  +	Debemos proporcionar suficiente contraste entre el color de primer plano y el de fondo.
  +	No hay que usar el color como única forma de información.
  +	Hay que asegurarse de que los elementos interactivos sean fáciles de identificar, fáciles de identificar visualmente y también por su semántica.
  +	Debemos proporcionar opciones de navegación fáciles de usar.
  +	Debemos asegurarnos de que los elementos del formulario incluyan etiquetados claramente asociados a sus controles.
  +	Debemos proporcionar `feedback` fácilmente interpretado por los productos de apoyo (aparte de visible y comprensible).
  +	Debemos utilizar los encabezados y el espaciado para agrupar el contenido relacionado.
  +	Debemos añadir el atributo `alt` y la consiguiente descripción a imágenes que son parte del contenido (o que no son decorativas).
  +	Debemos proporcionar una forma sencilla y evidente de parar el contenido cuya reproducción se inicie automáticamente.
  +	Debemos hacer que el texto de los enlaces identifique el destino.
  +	La web debe verse correctamente con un zoom de 200%, también deberíamos probar que se ve bien a 500%.
  +	No bloquear el zoom en el metatag del `<head></head>`.

## 4.1.	Principio 1: Perceptible

La información y los componentes de la interfaz de usuario deben presentarse de manera que ellos puedan percibirlos.

### Errores

#### Atributo ALT

Hay que tener en cuenta también en la descripción de las imágenes en una web, que a parte de las personas ciegas que usan un dispositivo de ayuda, otras personas con poca visión que no hacen uso de dispositivos de ayuda necesitarán que se les describa las imágenes cuando estas necesiten de su descripción para comprenderse. El tooltip que muestra el alt es muy interesante para estas personas y para todas aquellas que pueden no entender la imagen. El problema es que el tooltip no es accesible con teclado, y otra cuestión más es que el atributo alt no se muestra en navegadores como Mozilla Firefox, por ello aunque hay formas de hacer el tooltip accesible y usar además del alt el title para asegurarnos que siempre habrá una ayuda contextual para saber lo que nos muestra una imagen, como se ha dicho anteriormente, lo mejor, es tener impreso en pantalla la descripción equivalente de la información de la imagen.

+ Mejorar la descripción de los textos alternativos de las imágenes, suelen ser poco descriptivos.

#### Encabezados

Suele pasar que hay falta de coherencia en los encabezados en diferentes páginas de la web, en una podemos tener H1, H2, H3, H4, H5, H6 pero en otra nos saltemos algún tipo de heading. Lo cual es un error.

Se produce un salto de encabezado desde h2 a h4 (por ejemplo).

#### Enlaces

El color no se emplea como el único medio visual para transmitir una información, indicar una acción, provocar una respuesta o distinguir visualmente un elemento (Nivel A).

Nota: Este criterio de éxito trata específicamente acerca de la percepción del color. Otras formas de percepción se cubren en la pauta 1.3, que incluye el acceso programado al color y a otros códigos de presentación visual

Los enlaces en los textos solo están identificados por color, deberían contener un subrayado para que se diferencien del resto del contenido. Mejorar la descripción de los mismos. (El propósito de cada vínculo puede determinarse con el texto del vínculo descontextualizado, o del texto del vínculo junto a su contexto programablemente determinable, excepto donde el propósito del vínculo puede ser ambiguo para los usuarios en general (Nivel A)). No usar click aquí. No aporta nada.

#### Contraste mínimo

La presentación visual del texto y las imágenes de texto tienen una relación de contraste de al menos 5:1, excepto para los siguientes casos (Nivel AA):

*Gran tamaño*: El texto a gran tamaño y las imágenes de texto a gran tamaño tienen una relación de contraste de al menos 3:1.

*Incidental*: El texto o las imágenes de texto que son parte de un componente de interfaz de usuario inactivo, que son pura decoración, que no son visibles para nadie o que son parte de una imagen cuyo contenido significativo es otro contenido visual, no tienen un requisito mínimo de contraste.

*Logotipos*: El texto que es parte de un logo o de un nombre de marca no tiene un requisito mínimo de contraste.

En general se incumple con este criterio al haber frecuentes textos cuyo color no contrasta sobre el fondo, por ejemplo en página de inicio el texto por defecto de los controles en color. Este error es común en muchas de las páginas con los placeholder de los `input`.

#### Foco

No es buena práctica eliminar el foco cuando el usuario navega por la página con la tecla de teclado TAB.

#### Redimensión del texto

Excepto para subtítulos e imágenes de texto, se puede variar el tamaño del texto sin necesidad de emplear una tecnología asistiva hasta un 200 por ciento sin pérdida de contenido o funcionalidad (Nivel AA).

## 4.2.	Principio 2: Operabilidad

Los componentes de la interfaz de usuario y la navegación deben ser operables.

## 4.3.	Principio 3: Contenido comprensible

+ Focusable
+ Se puede usar el método .focus() de JS
+ Keyboard accessible
+ Tab
+ Focus + Tab
+ Arrow keys: focus around component
+ Space
+ Enter
+ Tabindex
+ -1
+ 0
+ Más de uno
+ Roving Focus Technique
+ Skip Links
+ Skip Links in WebAim
+ Aria Authoring Practices (patterns section: 11)
+ POUR Principle
+ Perceivable - Information and user interface components must be presentable to users in ways they can perceive.
+ Operable - User interface components and navigation must be operable.
+ Understandable - Information and the operation of user interface must be understandable.
+ Robust - Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.

+ Screen reader element can have
+ Role
+ Name o Label
+ State
+ Value
+ Input (for) + Label (id) always 
+
+ Is usable in Windows High Contrast Mode.
+ Usable in screen readers
+ Enabling VoiceOver on OSX / MacOS
+ Enabling VoiceOver on iOS
+ Enabling Narrator on Windows
+ Enabling TalkBack on Android
+ Orca is available for GNOME
+ Download NVDA for Windows for free (a small donation would be nice of you)
+ JAWS is available as a free trial
+ Is still usable without images.
+ Uses progressive enhancement to account for broken/missing libraries.
+ Is still usable without custom typefaces, which includes icon fonts.
+ Is still functional when common ad blocking tools are used.
+ Disable offscreen content when collapsed
+ No usar color únicamente para mostrar errores o cosas satisfactorias, añadir a ser posible de texturas, iconografía y textos
+ Magnify the page to 200%, then to 500%
+ Minimum
+ Color contrast
+ Alt text in imgs
+ Headings
+ Focus
+ Tab order
+ Nav shortcuts
+ Forms
+ Without images
+ Touch targets
+ Accounts for multiple input types
+ Keyboard
+ Mouse
+ Touch
+ Stylus
+ Voice 
+ Landmarks
+ Do not depend on color
+ Do not block zoom: <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
+ Rediscover the alt attribute
+ Add subtitles and captions to your videos
+ Semantics = accessibility
+ Use roles when necessary
+ On hiding elements
+ 5 Fast accesibility tests you can do: https://openinclusion.com/blog/5-accessibility-tests/
+ Check that you can pause, stop or mute any dynamic content.
+ Check that you can pause, stop or mute any audio which autoplays.
+ Check that any video content has captions.
+ Check that if you increase the text size, that content does not appear broken.
+ Check that keyboard users can skip past repeated content.
+ W3C recomendations
+ Provide sufficient contrast between foreground and background.
+ Don’t use color alone to convey information.
+ Ensure that interactive elements are easy to identify.
+ Provide clear and consistent navigation options.
+ Ensure that form elements include clearly associated labels.
+ Provide easily identifiable feedback.
+ Use headings and spacing to group related content.
+ Create designs for different viewport sizes.
+ Include image and media alternatives in your design.
+ Provide controls for content that starts automatically.
+ Provide informative, unique page titles
+ Use headings to convey meaning and structure
+ Make link text meaningful
+ Write meaningful text alternatives for images
+ Create transcripts and captions for multimedia
+ SVG Accesibility
+ Icon Fonts vs SVGs - Which One Should You Use In 2018?: https://www.keycdn.com/blog/icon-fonts-vs-svgs
+ IMG de Twitter: https://twitter.com/IgnaciodeNuevo/status/960646272356093952
+ Inline SVG vs Icon Fonts: https://css-tricks.com/icon-fonts-vs-svg/
+ Tips for Creating Accessible SVG: https://www.sitepoint.com/tips-accessible-svg/
+ SVG, Icon Fonts, and Accessibility: A Case Study: https://www.24a11y.com/2017/svg-icon-fonts-accessibility-case-study/
+ Using ARIA to enhance SVG accessibility: https://developer.paciellogroup.com/blog/2013/12/using-aria-enhance-svg-accessibility/
+ Why Inline SVG is Best SVG: https://www.youtube.com/watch?v=af4ZQJ14yu8
+ #137: SVG is for Everybody: https://css-tricks.com/video-screencasts/137-svg-is-for-everybody/

+ [Accessibility testing tools](https://developer.paciellogroup.com/blog/2019/02/accessibility-testing-tools-we-use/)
+ W3C Nu HTML Checker: https://validator.w3.org/nu/
+ Tenon
+ aXe: https://www.deque.com/axe/
+ WAVE: https://wave.webaim.org/extension/
+ PowerMapper: https://www.powermapper.com/products/sortsite/checks/accessibility-checks/
+ Lighthouse accessibility audit: https://developers.google.com/web/tools/lighthouse/
+ Color Blind tool: https://www.toptal.com/designers/colorfilter
+ Chrome Accesibility Tool: https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb
+ CLI
+ Pa11y: http://pa11y.org/
+ AccessLint.js: https://github.com/AccessLint/accesslint.js
+ Bookmarklets
+ tota11y: http://khan.github.io/tota11y/
+ HTML CodeSniffer: http://squizlabs.github.io/HTML_CodeSniffer/

+ A11y  Project Checklist: ttps://a11yproject.com/checklist
+ Accessibility Cheatsheet: https://moritzgiessmann.de/accessibility-cheatsheet/

+ Can you get to the control via the keyboard?
+ Can you use the control with the keyboard?
+ Can you use the control with touch gestures? With assistive technology enabled?
+ Can you operate the control using the standard keys and/or touch gestures for the control type?
+ Can you easily see it when the control has focus?
+ The control has a text label that is exposed as an accessible name in accessibility APIs.
+ The control has an appropriate role exposed in accessibility APIs.
+ The control has any UI states and properties that it has exposed in accessibility APIs.
+ The control label/description/icon and its states are perceivable/usable for low vision users.
+ The control is perceivable/usable when High Contrast Mode is enabled.

+ 1.3.2 Meaningful Sequence
+ 2.1.2 No keyboard trap
+ Modals and Keyboard traps
+ 1.1Text alternatives for non text content
+ ARIA
+ Aria Roles
+ Aria States
+ Aria Properties
+ Firefox A11y Panel
+ a11y Landmarks
