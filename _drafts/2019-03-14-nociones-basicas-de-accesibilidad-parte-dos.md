---
layout: post
title: "Nociones básicas de accesibilidad: Parte dos de dos."
tags:
  - Accessibility
lang: es
page_class: post
description:
---

## Es necesario entender unas bases

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
    <li><a class="link link--special" href="https://www.w3.org/TR/2006/WD-WCAG20-20060427/appendixB.html" target="_blank" rel="noopener noreferrer">WCAG 2.0 Checklist</a></li>
</ol>
</div>
