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

Desafortunadamente no siempre sabemos qué situación tiene cada uno de nuestros usuarios. Por ello vamos a quién deberíamos tener especial cuenta:

## ¿A qué usuarios tengo que dar soporte?

  +	Personas que usan teclado.
  +	Personas invidentes y con baja visión.
  +	Personas daltónicas.
  +	Personas sordas y con problemas de audición.
  +	Personas con dificultades de aprendizaje y limitaciones cognitivas.
  +	Personas con problemas de movilidad.
  +	Personas con discapacidades del habla.
  +	Personas con transtornos cognitivos.

Puede parecer exagerado pensar en este tipo de personas pero en muchos casos debemos saber que gran parte de nuestros usuarios tendrán en algún momento problemas temporales que les impedirán usar nuestra plataforma adecuadamente.

Puede ocurrir que en un simple accidente se fracturen una mano, un dedo, que por una revisión ocular se le dilaten las pupilas y pierda temporalmente la visión y su capacidad de ver nítidamente y así con numerables situaciones que no tenemos en cuenta porque no las vivimos y que pueden hacer que el buen uso de nuestra plataforma sea un suplicio para aquella persona habituada a usarla.

## El principio _POUR_ (es un principio que está en inglés).

  +	Perceptible (Perceivable) - La información y los componentes de la interfaz de usuario deben ser presentables a los usuarios de manera que puedan percibirlos.
  +	Usable (Operable) - Los componentes de la interfaz de usuario y la navegación deben ser usables.
  +	Comprensible (Understandable) - La información y el funcionamiento de la interfaz de usuario deben ser comprensibles.
  +	Robusto (Robust) - El contenido debe ser lo suficientemente robusto como para que pueda ser interpretado de forma fiable por una amplia variedad de _user agents_, incluidas las tecnologías de asistencia.

## Recomendaciones básicas de la W3C

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

## Recomendaciones básicas generales

  +	Deberíamos usar el _progressive enhancement_ para que si fallan las librerías que usamos la aplicación siga funcionando con unos mínimos.
  +	La web o aplicación debe tener _fallbacks_ para las tipografías custom que usemos por si falla la cargue una sustituta.
  +	La web o aplicación debe poder seguir funcionando de forma correcta aún si se usan herramientas de bloqueo de anuncios como Ad Blocker, Privacy Badger, uBlock Origin…
  +	No usar color únicamente para mostrar mensajes, añadir a ser posible de texturas, iconografía y textos.
  +	Las web o aplicación debe verse bien, debemos tener en cuenta el contraste de color.
  +	En los formularios debemos asociar cada `label` a su `input` y nunca debemos tener un `input` de forma aislada.
  +	La web o aplicación debe verse correctamente con un zoom de 200%, posteriormente deberíamos probar que también se ve bien a 500%
  +	Usar la `metatag` que ayuda al responsive correctamente, no bloquear el zoom del siguiente modo:
    +	<meta name="viewport" content="width=device-width, initial-scale=1">

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

  + [Skip Links](https://webaim.org/techniques/skipnav/)

## Documentación adicional sobre SVGs inline accesibles:

  + [Icon Fonts vs SVGs - Which One Should You Use In 2018?](https://www.keycdn.com/blog/icon-fonts-vs-svgs).
  + [IMG de Twitter](https://twitter.com/IgnaciodeNuevo/status/960646272356093952).
  + [Inline SVG vs Icon Fonts](https://css-tricks.com/icon-fonts-vs-svg/).
  + [Tips for Creating Accessible SVG](https://www.sitepoint.com/tips-accessible-svg/).
  + [SVG, Icon Fonts, and Accessibility: A Case Study](https://www.24a11y.com/2017/svg-icon-fonts-accessibility-case-study/).
  + [Using ARIA to enhance SVG accessibility](https://developer.paciellogroup.com/blog/2013/12/using-aria-enhance-svg-accessibility/).
  + [Why Inline SVG is Best SVG](https://www.youtube.com/watch?v=af4ZQJ14yu8).
  + [SVG is for Everybody](https://css-tricks.com/video-screencasts/137-svg-is-for-everybody/).

## Checklists

  + [A11y Project Checklist](https://a11yproject.com/checklist/)
  + [Accessibility Cheatsheet](https://moritzgiessmann.de/accessibility-cheatsheet/)

## Herramientas de validación y testeo

  + [W3C Nu HTML Checker](https://validator.w3.org/nu/)
  + [Tenon](https://www.tenon.io/)
  + [aXe](https://www.deque.com/axe/)
  + [WAVE](https://wave.webaim.org/extension/)
  + [PowerMapper](https://www.powermapper.com/products/sortsite/checks/accessibility-checks/)
  + [Lighthouse accessibility audit](https://developers.google.com/web/tools/lighthouse/)
  + [Color Blind tool](https://www.toptal.com/designers/colorfilter/)
  + [Chrome Accesibility Tool](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb)
  + CLI
    + [Pa11y](http://pa11y.org/)
    + [AccessLint.js](https://github.com/AccessLint/accesslint.js)
  + Bookmarklets
    + [tota11y](http://khan.github.io/tota11y/)
    + [HTML CodeSniffer](http://squizlabs.github.io/HTML_CodeSniffer/)



-------------------------------------------------------------------------------



{% highlight css %}

// CSS
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



-------------------------------------------------------------------------------



{% highlight css %}
// CSS

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



-------------------------------------------------------------------------------



  + Aria Authoring Practices (patterns section: 11)
  + Landmarks
  + Use roles when necessary

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
