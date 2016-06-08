---
layout: default
title: "Podcasts"
excerpt: "Lista de episodios que hemos publicado del podcast WeCodeSign Podcast"
tags:
  - projects
  - open-source
  - github
---
<div class="header-section">
  <img src="/images/section-podcast.jpg" alt="Photography by Kai Oberhäuser" />
  <h1 class="header-section__h1">Podcast</h1>
</div>

Realizo un Podcast sobre diseño y desarrollo Web en When I can, I try to invest a lot of time in open-source projects. Here are a few of them I initiated myself:

{% for podcast in site.data.podcast %}
<article class="article  container">
  <a class="article__link" href="/podcast/{{ podcast.podcast_url }}"> 
    <h3 class="article__h3">{{ podcast.name }}</h3>
    <time class="article__date" datetime="{{ podcast.date | date: "%Y-%m-%d" }}">{{ podcast.podcast_date }}</time>
    <p class="article__excerpt">{{ podcast.description }}</p>
    <img class="portrait--small" src="{{ podcast.image_url }}" alt="{{ podcast.name }} Image"/>
  </a>
  <p class="article__url">
    <a href="{{ podcast.podcast_web }}" target="_blank">Accede al post del episodio</a>
  </p>
</article>
{% endfor %}
