---
layout: default
title: "Podcasts"
excerpt: "Lista de episodios que hemos publicado del podcast WeCodeSign Podcast"
---
<div class="header-section">
  <img src="/images/section-podcast.jpg" alt="Photography by Kai Oberhäuser" />
  <h1 class="header-section__h1">Podcast</h1>
</div>

Lista a los episodios del Podcast del cual soy creador y Co-Host sobre front-end, diseño web y UX:

{% for podcast in site.data.podcast %}
<article class="article  container">
  <a class="article__link" href="{{ podcast.podcast_web }}" target="_blank">
    <h3 class="article__h3">{{ podcast.name }}</h3>
    <time class="article__date">{{ podcast.podcast_date }}</time>
    <p class="article__excerpt">{{ podcast.description }}</p>
    <img class="portrait--small" src="{{ podcast.image_url }}" alt="{{ podcast.name }} Image"/>
  </a>
  <p class="article__url">
    <a href="{{ podcast.podcast_web }}" target="_blank">Accede al post del episodio</a>
  </p>
</article>
{% endfor %}
