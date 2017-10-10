---
layout: post
title: "CSS Grid Layout con un ejemplo real."
excerpt: "CSS Grid Layout ha llegado para cambiarlo todo. Para ello veremos un ejemplo real con fallbacks para navegadores antiguos."
post_date: "Octubre 18, 2017"
post_number: 19
tags: 
  - CSS
---

# Un poco de historia

Resulta curioso como la inmensa mayoría de la gente que trabajamos en la web hemos tenido que maquetar alguna vez pero hasta ahora, tras tantos años no ha habido ningún módulo de CSS especialmente dedicado a ordenar nuestras estructuras de HTML para crear layouts complejos sin usar 'hacks'.

Llevamos tanto tiempo dedicándonos a usar 'trucos' en maquetación para crear layouts que me sorprende enormemente cuando alguien dice que el CSS es fácil. Fácil es aprenderse la sintaxis y el usar la cascada decentemente pero te encuentras con que a algunas personas les resulta complicado y no porque el CSS en si lo sea, si no porque bajo mi punto de vista hay que tener visión espacial y saber pensar en como colocar cajas en una pantalla. Esto no quita que a cada uno se nos de mejor una cosa que otra o nos guste más maquetar o programar. Esto no es malo, que conste 😊.

Si nos remontamos a la antiguedad del CSS todo comenzó allá por 1996 y tras pasar por el uso de tablas, floats, flexbox ahora podemos decir que CSS se ha tranformado en uno de los standards más amados y a su vez más odiados en la web.

Hoy 18 de octubre podemos decir que los principales navegadores al fin, tienen soporte para la especificación oficial de [CSS Grid](http://caniuse.com/#feat=css-grid), la cual veía la luz gracias a la gente de [Mozilla](https://www.mozilla.org) con su navegador Firefox cuando el 7 de marzo de este mismo año lanzaban por primera vez la versión final tras muchas semanas bajo 'flag'.

Pero ojo, nos reimos porque el último siempre es nuestro amigo Internet Explorer. Pero esta vez ha sido el último en su versión [Microsoft Edge](https://www.microsoft.com/es-es/windows/microsoft-edge). Aún así, no nos podemos olvidar que fue Microsoft con Internet Explorer 10 allá por 2012 quien impulsó por primera vez este standard donde ninguno del resto de los navegadores parecía creer.

Siete meses han pasado y Firefox, Chrome, Opera, Safari y Edge (los principales navegadores que usamos en occidente y parte del mundo) ya pueden usar CSS Grid Layout. ¡Vivimos un momento maravilloso en la web!

## Flexbox vs CSS Grid

La diferencia es clara, [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) y [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) es que el primero permite la alineación de elementos en una dirección, horizontal o vertical y el segundo que usa tanto las verticales como las horizontales.

## Propiedades

No creo que tenga sentido escribir otro artículo más sobre como funciona cada propieda (puesto que se han escrito infinidad) por ello os dejaré una serie de recursos extra al pie de este artículo para que podáis aprender a usar cada propiedad.

Cuando hablamos de un grid podemos pensar en una rejilla de elementos con espacios (`gaps`) entre ellos. Ejemplos clásicos son [Bootstrap Grid](https://getbootstrap.com/docs/3.3/css/#grid-intro) o el archiconocido [960 grid system](https://github.com/nathansmith/960-Grid-System).  

Aunque todos habremos usado alguna librería CSS para crear grids siempre hemos tenido repercusiones al no ser algo nativo.

+ El peso de la librería aumentaba considerablemente nuestras hojas de estilos.
+ Añadíamos multitud de clases CSS a nuestro HTML que lo ensuciaba en exceso.

Por no entrar en la [especificación](https://www.w3.org/TR/css-grid-1/) os invito a leer la documentación en castellano de [CSS Grid de la MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout) o ver una serie de videos en inglés llamada [Grid by Example](https://gridbyexample.com/) creada por [Rachel Andrew](https://twitter.com/rachelandrew) o leer la estupenda guía que han creado en CSS-Tricks llamada [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/).

Es una de los módulos de CSS más amplios que se han creado hasta la fecha y tiene muchas propiedades. La mayoría son exactamente iguales para la vertical como la horizontal.

Os dejo unos [ejemplos](https://codepen.io/collection/DYpVoJ/) de cada propiedad que he creado hará algún tiempo y una [galería de elementos ficticia](http://ignaciodenuevo.com/examples/css-grid-en-un-proyecto-real.html) en la que podéis ver como está comentada la siguiente línea `.wrapper { display: grid; }`. Podéis encontrar el [código de ejemplo aquí](https://raw.githubusercontent.com/IgnaciodeNuevo/IgnaciodeNuevo.github.io/master/examples/css-grid-en-un-proyecto-real.html).

## ¿Sabemos y debemos usar ya CSS Grid?

Parece que cuando hablamos de una especificación tan moderna como esta tendemos a pensar dos cosas, la primera que todo el mundo ya sabe usarla pero en la realidad nos podemos llevar enormes sorpresas cuando vemos encuestas como la que realizaron en [Smashing Magazine](https://www.smashingmagazine.com/) donde con 
1.573 votos un increible 61% comentó no haber tocado aún CSS Grid.

<blockquote class="twitter-tweet" data-lang="es"><p lang="en" dir="ltr">Did you have a chance to play with CSS Grid already? What do you find most confusing or difficult?</p>&mdash; Smashing Magazine (@smashingmag) <a href="https://twitter.com/smashingmag/status/907936156368752640?ref_src=twsrc%5Etfw">13 de septiembre de 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Días después comentaba con unos conocidos que había tenido la oportunidad de usar Grid en un proyecto real y ellos decían que no lo usarían jamás debida a su baja adopción por parte de los navegadores así que quise preguntaros si pensáis que es correcto hacerlo (y no hablamos de un proyecto personal), si no en uno profesional.

Estos fueron los resultados.

<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">📊ENCUESTA para un artículo.<br><br>¿Es correcto usar <a href="https://twitter.com/hashtag/CSSGrid?src=hash&amp;ref_src=twsrc%5Etfw">#CSSGrid</a> Layout en producción en un proyecto del trabajo? 🤔<br><br>Soporte: 68.14%+4.35%=72.49%</p>&mdash; Ignacio Villanueva (@IgnaciodeNuevo) <a href="https://twitter.com/IgnaciodeNuevo/status/911166331399131136?ref_src=twsrc%5Etfw">22 de septiembre de 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Bajo mi opinión se puede usar, pero ojo, depende. Depende del proyecto y obviamente depende de si nuestra empresa puede y quiere permitirse el tiempo extra que nos llevará dar soporte a otros navegadores usando un Grid basado en floats o dar soporte a navegadores antiguos pero se puede usar perfectamente ya que según los navegadores modernos vayan teniendo más y más adopción, nuestros proyectos estarán más que preparados para ello.

## Grid Inspector

Antes de empezar comentar me gustaría decir que, al menos en este momento la mejor forma de inspeccionar CSS Grid en el navegador es con el inpector que incorpora [Firefox Developer Edition](https://www.mozilla.org/es-ES/firefox/developer/).

Como podeís ver en el video si inspeccionamos el elemento padre y clicamos en el icono que aparece a la izquierda de la propiedad `display: grid;` se nos mostrarán unas líneas que representan los 'grid-items' y los 'grid-gaps' entre elementos.

Podemos ir al panel 'Disposición' ('Layout' en inglés) para mostrar u ocultar opciones o cambiar el color de dichas lineas para que se vean mejor si el fondo sobre el que están nos dificulta verlas. Así mismo podemos pasar el puntero del ratón por el grid que se ha creado debajo y ver en que posición se encuentra, que 'grid-area' tiene asignada y las dimensiones del elemento.

CSS Grid Inspector (FF - Devloper Edition) - video

[Ejemplo en CodePen](https://codepen.io/primalivet/pen/ryjKmV/)

## Manos a la obra

<div>
  <blockquote class="container  alert">
    <h4>Documentación extra</h4>
    <ul>
      <li><a href="https://github.com/valentinogagliardi/awesome-css-grid" target="_blank">Awesome CSS Grid</a></li>
      <li><a href="https://gridbyexample.com/" target="_blank">Grid by Example</a></li>
      <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank">A Complete Guide to Grid</a></li>
      <li><a href="https://www.smashingmagazine.com/2017/09/css-grid-gotchas-stumbling-blocks/" target="_blank">CSS Grid Gotchas And Stumbling Block</a></li>
      <li><a href="https://rachelandrew.co.uk/css/cheatsheets/grid-fallbacks" target="_blank">Grid “fallbacks” and overrides</a></li>
      <li><a href="https://www.chenhuijing.com/blog/basic-grid-with-fallbacks" target="_blank">Basic grid layout with fallbacks using feature queries</a></li>
      <li><a href="https://github.com/rachelandrew/gridbugs" target="_blank">A curated list of Grid interop issues</a></li>
      <li><a href="https://www.smashingmagazine.com/2016/11/css-grids-flexbox-box-alignment-new-layout-standard/" target="_blank">TheNew Layout Standard For The Web: CSS Grid, Flexbox And Box Alignment</a></li>
      <li><a href="https://daverupert.com/2017/09/breaking-the-grid/" target="_blank">Breakingthe Grid</a></li>
      <li><a href="https://codepen.io/julesforrest/" target="_blank">CodePen examples by Jules Forrest</a></li>
      <li><a href="https://codepen.io/collection/nvggZM/" target="_blank">Aysha Anggraini</a></li>
      <li><a href="https://www.youtube.com/watch?v=dU7xtnzfqxQ" target="_blank">CSS Grid Inspector in Firefox Nightly, July 2017</a></li>
      <li><a href="https://github.com/ademilter/chrome-css-grid-highlighter" target="_blank">CSS Grid Highlighter for Chrome</a></li>
      <li><a href="https://www.smashingmagazine.com/2017/10/css-grid-challenge-2017-winners/" target="_blank">CSS Grid Challenge: Winners and Template</a></li>
    </ul>
  </blockquote>
</div>