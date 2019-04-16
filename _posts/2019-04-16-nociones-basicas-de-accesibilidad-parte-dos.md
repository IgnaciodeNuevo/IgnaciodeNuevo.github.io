---
layout: post
title: "Nociones básicas de accesibilidad, parte dos de dos."
tags:
  - Accessibility
lang: es
page_class: post
description: En el último artículo sobre accesibilidad hablaba de quienes debemos tener en cuenta a la hora de desarrollar nuestras webs o algunos  consejos del Consorcio W3C ¿Qué más podemos hacer para crear webs más accesibles? Te lo cuento.
---

## Es necesario entender unas bases

Como decía en mi <a class="link link--special" href="/2019/03/20/nociones-basicas-de-accesibilidad-parte-uno/" target="_blank" rel="noopener noreferrer">anterior artículo de accesibilidad</a> (la parte uno, siendo éste la segunda); creo que es necesario conocer unos mínimos sobre accesibilidad donde escribía sobre a quienes debemos tener en cuenta a la hora de desarrollar (a toda la gente posible), algunos <a class="link link--special" href="/2019/03/20/nociones-basicas-de-accesibilidad-parte-uno/#consejos-del-consorcio-w3c" target="_blank" rel="noopener noreferrer">consejos del Consorcio W3C</a> y teniendo en cuenta las llamadas Pautas de Accesibilidad al Contenido Web <a class="link link--special" href="https://www.w3.org/TR/WCAG21/" target="_blank" rel="noopener noreferrer">(WCAG) 2.1</a>.

##  ¿Qué debemos tener en nuestras webs y aplicaciones?

Partamos de la base que esto es <abbr title="Cascading Style Sheets">CSS</abbr>, <abbr title="Hypertext Markup Language">HTML</abbr> y JavaScript, sin tener en cuenta como deberemos implementar la solución de forma específica, así pues si se usa Vue.js, React, Angular o cualquier otra librería o framework de desarrollo es posible que haya pequeños o grandes detalles que cambien.

Deberemos tener muy presente en usar elementos semánticos siempre que podamos ya que, componentes con los que podemos interactuar como los botones, links o elementos de formulario: `inputs`, `dropdowns`, `datepickers`… son _«focusables»_ si no lo cambiamos (cosa que no deberíamos).

Dichos elementos interactuables suelen usar unas teclas por defecto de forma nativa para navegar por ellos y si hacemos algún componente a medida deberemos intentar salvo que desarrollemos una ayuda contextual usar las que por defecto usan los controles nativos.

<b>Ejemplos:</b>

  +	`Tab` (para avanzar al siguiente elemento)
  +	`Shift + Tab` (para retroceder al elemento anterior)
  +	`Teclas de flecha` (para moverte dentro del componente como en un dropdown)
  +	`Espacio` (para activar elementos como los checkboxes)
  +	`Intro` (para activar elementos como los botones de submit)

Una vez hayamos pensado bien las necesidades de un componente a medida existen multitud de ideas que pueden ayudar a mejorar la accesibilidad, más allá de añadir `alt` a las etiquetas `img`, tener en cuenta el contraste de color, que nuestro texto tenga un tamaño mínimo para su buena lectura...

Se dan multitud de situaciones en las que necesitamos que el contenido sea visible en dispositivos de pantalla pequeños como los móviles, por ello debemos añadir la etiqueta correcta en el `<head></head>` del <abbr title="Hypertext Markup Language">HTML</abbr> evitando en la medida de lo posible cosas como la siguiente: `maximum-scale=1`.

{% highlight css %}

/**
* Metatag en el <head></head>
*/
<meta name="viewport" content="width=device-width, initial-scale=1">

{% endhighlight %}

Otro de los habituales para mi se da cuando necesitamos añadir contenido oculto a la vista del usuario vidente para que sea accesible para lectores de pantalla, para ello podemos usar una clase de CSS que evita que nuestro contenido (textos por ejemplo) sean visibles porque no existen en diseño.

{% highlight css %}

/**
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

<span class="link">Slides <span class="u-visually-hidden">sobre: Nociones sobre fuentes Web</span></span>

{% endhighlight %}

## Elementos de formulario

En los elementos de formulario cada `input` debe tener cuatro factores claramente interpretables por el usuario con el sistema que utilice y que a su vez serán expuestos al <abbr title="Application programming interface">API</abbr> de accesibilidad. Sin olvidarnos de añadir (aunque sea oculto visualmente si el diseño así lo necesita), como ya vimos antes un `label`.

<b>Nota:</b>

  + `role`
  + `name` o `label`
  + `state`
  + `value`

Sabiendo esto, ya tenemos como movernos con las teclas habituales de un control nativo, podemos ocultar contenido visualmente y tenemos en cuenta los cuatro factores que debemos exponer al <abbr title="Application programming interface">API</abbr> de accesibildad. Así que vamos manos a la obra con un breve checklist.

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

Por tanto, deberemos hacer que todos los elementos interaccionables de nuestra página web han de poder hacérseles foco (como ya dije antes) y verse claramente. Si debemos hacerlos vía JavaScript podremos usar el método nativo `.focus()`, pero no está de más recordar que no debemos eliminar el `:focus` _«porque quede feo»_. Podemos cambiarlo, hacerlo más elegante o hacerlo usable cuando nuestro usuario <a class="link link--special" href="https://hackernoon.com/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2" hreflang="en" target="_blank" rel="noopener noreferrer">navegue con teclado</a> únicamente.

<b>Nota:</b>

  +	Focusable
  +	Se puede usar el método `.focus()` de JavaScript

¿Qué más? Todos estos elementos por defecto tienen de forma implícita un `TAB` order, que no es ni más ni menos que irán haciéndose foco uno detrás de otro en el mismo orden que se encuentran en el <abbr title="Document Object Model">DOM</abbr> si no lo cambiamos activamente.

<b>Nota:</b>

  +	Posibles valores del `tabindex`
    + `-1` (no son focusables)
    + `0` (el estado normal)
    + `Más de uno` (aparecerán en dicho orden)

Otro tema a tener en cuenta son los skip-links que sirven para saltar de cosas no tan importantes como una barra de navegación o un aside con diferentes elementos al contenido al que queremos acceder.

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

¿Te ha gustado? Espero que así sea. ¿Crees que se echa de menos algo? Si es algo que sea básico y no esté repetido una y otra vez en cada artículo sobre accesibilidad no dudes en decírmelo en <a class="link link--special" href="{{ site.twitter }}" target="_blank" rel="noopener noreferrer me">Twitter</a>.

## Checklists

  + <a class="link link--special" href="https://a11yproject.com/checklist/" target="_blank" rel="noopener noreferrer">A11y Project Checklist</a>

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
    <li><a class="link link--special" href="https://www.w3.org/TR/2006/WD-WCAG20-20060427/appendixB.html" target="_blank" rel="noopener noreferrer">WCAG 2.0 Checklist</a></li>
</ol>
</div>
