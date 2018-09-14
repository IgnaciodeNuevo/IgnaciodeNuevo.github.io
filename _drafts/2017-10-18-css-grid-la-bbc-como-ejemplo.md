---
layout: post
title: "CSS Grid: La BBC como ejemplo"
excerpt: "CSS Grid Layout ha llegado para cambiarlo todo. Para ello veremos un ejemplo real con fallbacks para navegadores antiguos."
tags:
  - CSS
---

# Un poco de historia

Resulta curioso como la inmensa mayoría de las personas que trabajamos en la web hemos tenido que maquetar alguna vez, pero hasta ahora, tras tantos años no ha habido ningún módulo de CSS especialmente dedicado a ordenar nuestras estructuras HTML para crear layouts complejos sin usar 'hacks'.

Llevamos tanto tiempo dedicándonos a usar 'trucos' en maquetación para crear layouts que me sorprende enormemente cuando alguien dice que el CSS es fácil. Fácil es aprenderse la sintaxis y el usar la cascada decentemente, pero te encuentras con que a algunas personas les resulta complicado. No porque el CSS en si lo sea, si no porque bajo mi punto de vista hay que tener visión espacial y saber pensar en como colocar "cajas" en una pantalla. Esto no quita que a cada uno se nos de mejor una cosa que otra o nos guste más maquetar o programar 😊.

Si nos remontamos a la antiguedad del CSS todo comenzó allá por 1996 y tras pasar por el uso de tablas, floats y `Flexbox` ahora podemos decir que CSS se ha tranformado en uno de los standards más amados en la web.

Hoy 18 de octubre podemos decir que los principales navegadores al fin, tienen soporte para la especificación oficial de [CSS Grid](http://caniuse.com/#feat=css-grid), la cual veía la luz gracias a la gente de [Mozilla](https://www.mozilla.org) (_con la especificación moderna_) con su navegador Firefox cuando el 7 de marzo de este mismo año lanzaban por primera vez la versión final tras muchas semanas bajo 'flag'.

Pero ojo, nos reimos porque el último siempre es nuestro amigo Internet Explorer, en su versión [Microsoft Edge](https://www.microsoft.com/es-es/windows/microsoft-edge). Aún así, no nos podemos olvidar que fue Microsoft con Internet Explorer 10 allá por 2012 quien impulsó por primera vez este standard cuando el resto de los navegadores no parecía creer en ello.

Siete meses han pasado y Firefox, Chrome, Opera, Safari y Edge (_los principales navegadores que usamos en occidente y parte del mundo_) ya pueden usar `CSS Grid Layout`. ¡Vivimos un momento maravilloso en la web!

## Flexbox vs CSS Grid

La diferencia es clara entre [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) y [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/). El primero permite la alineación de elementos en una dirección (_filas o columnas_), horizontal o vertical y el segundo que usa tanto filas como columnas a la vez.

Os dejo un ejemplo sencillo en el que podéis ver la diferencia entre `Flexbox` (_arriba_) y `CSS Grid` (_abajo_) en el que ambos tienen cuatro hijos (_elementos_).

<p data-height="265" data-theme-id="0" data-slug-hash="oGaeXR" data-default-tab="html,result" data-user="IgnaciodeNuevo" data-embed-version="2" data-pen-title="oGaeXR" data-preview="true" class="">See the Pen <a href="https://codepen.io/IgnaciodeNuevo/pen/oGaeXR/">oGaeXR</a> by Ignacio Villanueva (<a href="https://codepen.io/IgnaciodeNuevo">@IgnaciodeNuevo</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Propiedades

No creo que tenga sentido escribir otro artículo más sobre como funciona cada propieda (_puesto que se han escrito infinidad_), por ello os dejaré una serie de recursos extra al pie de este artículo para que podáis aprender a usar cada una de ellas.

Cuando hablamos de un grid podemos pensar en una rejilla de elementos con espacios (`gaps`) entre ellos. Ejemplos clásicos son [Bootstrap Grid](https://getbootstrap.com/docs/3.3/css/#grid-intro) o el archiconocido [960 grid system](https://github.com/nathansmith/960-Grid-System).

Aunque todos habremos usado alguna librería CSS para crear grids, siempre hemos tenido repercusiones al hacerlo.

- El peso de la librería aumentaba considerablemente nuestras hojas de estilos.
- Añadíamos multitud de clases CSS a nuestro HTML que lo ensuciaba en exceso.

Por no entrar en la [especificación](https://www.w3.org/TR/css-grid-1/) os invito a leer la documentación en castellano de [CSS Grid de la MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout), ver la serie de videos en inglés llamada [Grid by Example](https://gridbyexample.com/) creada por [Rachel Andrew](https://twitter.com/rachelandrew) o echar un vistazo la estupenda guía que han creado en CSS-Tricks llamada [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/).

`CSS Grid` es uno de los módulos de CSS más amplios que se han creado hasta la fecha y tiene muchas propiedades. La mayoría funcionan exactamente igual para la vertical como la horizontal.

Os dejo unos [ejemplos](https://codepen.io/collection/DYpVoJ/) de cada propiedad que he creado hará algún tiempo y una [galería de elementos ficticia]({{ site.url }}/examples/css-grid-en-un-proyecto-real.html) en la que podéis ver como está comentada la siguiente línea `.wrapper { display: grid; }`. Podéis encontrar el [código de ejemplo aquí](https://raw.githubusercontent.com/IgnaciodeNuevo/IgnaciodeNuevo.github.io/master/examples/css-grid-en-un-proyecto-real.html).

## ¿Sabemos y debemos usar ya CSS Grid?

Parece que cuando hablamos de una especificación tan moderna como esta tendemos a pensar dos cosas, la primera que todo el mundo ya sabe usarla pero en la realidad nos podemos llevar enormes sorpresas cuando vemos encuestas como la que realizaron en [Smashing Magazine](https://www.smashingmagazine.com/) donde con 1.573 votos un increible 61% comentó no haber usado aún `CSS Grid`.

<blockquote class="" data-lang="es"><p lang="en" dir="ltr">Did you have a chance to play with CSS Grid already? What do you find most confusing or difficult?</p>&mdash; Smashing Magazine (@smashingmag) <a href="https://twitter.com/smashingmag/status/907936156368752640?ref_src=twsrc%5Etfw">13 de septiembre de 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Días después comentaba con unos conocidos que había tenido la oportunidad de usar `Grid` en un proyecto real y ellos decían que no lo usarían jamás debida a su baja adopción por parte de los navegadores así que quise preguntaros si pensáis que es correcto hacerlo (_y no hablamos de un proyecto personal_), si no en uno profesional.

Estos fueron los resultados.

<blockquote class="" data-lang="es"><p lang="es" dir="ltr">📊ENCUESTA para un artículo.<br><br>¿Es correcto usar <a href="https://twitter.com/hashtag/CSSGrid?src=hash&amp;ref_src=twsrc%5Etfw">#CSSGrid</a> Layout en producción en un proyecto del trabajo? 🤔<br><br>Soporte: 68.14%+4.35%=72.49%</p>&mdash; Ignacio Villanueva (@IgnaciodeNuevo) <a href="{{ site.twitter }}/status/911166331399131136?ref_src=twsrc%5Etfw">22 de septiembre de 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Bajo mi opinión se puede usar, pero ojo, depende. Depende del proyecto y obviamente depende de si nuestra empresa puede y quiere permitirse el tiempo extra que nos llevará dar soporte a otros navegadores usando un grid basado en floats o dar soporte a navegadores antiguos. Esto no quita que se pueda usar perfectamente ya que según los navegadores modernos vayan teniendo más y más adopción, nuestros proyectos ya estarán preparados.

## Inspector de CSS Grid

Antes de empezar con el ejemplo que os tengo preparado, me gustaría comentar que, al menos en este momento la mejor forma de inspeccionar `CSS Grid` en el navegador es con el inpector que incorpora [Firefox Developer Edition](https://www.mozilla.org/es-ES/firefox/developer/).

Como podeís ver en el video si inspeccionamos el elemento padre y clicamos en el icono que aparece a la izquierda de la propiedad `display: grid;` se nos mostrarán unas líneas que representan los `grid-items` y los `grid-gaps` entre elementos.

Podemos ir al panel "_Disposición_" ("_Layout_" en inglés) para mostrar u ocultar opciones; o cambiar el color de dichas lineas para que se vean mejor si el fondo sobre el que están nos dificulta verlas.

Así mismo podemos pasar el puntero del ratón por el grid que se ha creado debajo y ver en que posición se encuentra cada elemento , que `grid-area` tiene asignada y las dimensiones del elemento.

<iframe src="https://player.vimeo.com/video/238628559" width="640" height="358" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/238628559">FF - DevloperEdition</a> from <a href="https://vimeo.com/ignaciodenuevo">Ignacio Villanueva</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

<p data-height="265" data-theme-id="0" data-slug-hash="ryjKmV" data-default-tab="css,result" data-user="primalivet" data-embed-version="2" data-pen-title="CSS Grid Layout with @support flexbox fallback" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/primalivet/pen/ryjKmV/">CSS Grid Layout with @support flexbox fallback</a> by Gustaf Holm (<a href="https://codepen.io/primalivet">@primalivet</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Manos a la obra

Después de haber hablado sobre la historia, la diferencia frente a `Flexbox`, sobre si debemos o no usarlo en producción y el inspector de `Grid` de Firefox es momento de empezar a trabajar.

Tened en cuenta que no se han usado ni prefijos que podríamos escribir manualmente o con Autoprefixer, así como el uso de unidades relativas como `EM` o `REM`.

Podéis ver el ejemplo [aquí]({{ site.url }}/examples/bbc).

### Conclusiones

Espero que os sea de utilidad y entendais un poco más como podemos usar `CSS Grid`, `Flexbox`, `@supports` y como aplicar progressive enhancement para dar soporte a distintos navegadores.

<div>
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
</div>
