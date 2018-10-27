---
layout: default
title: "Podcasts"
excerpt: "Lista de episodios que hemos publicado del podcast WeCodeSign Podcast"
---

<div class="">
<img src="/assets/images/section-podcast.jpg" alt="Photography by Kai Oberhäuser" />
<h1 class="">Podcast</h1>
</div>

Lista a los episodios del Podcast del cual soy creador y Co-Host sobre frontend, diseño web y UX:

{% for podcast in site.data.wecodesign %}
    <article class="">
        <a class="" href="{{ podcast.podcast_web }}" target="_blank">
            <h3 class="">{{ podcast.name }}</h3>
            <time class="">{{ podcast.project_date }}</time>
            <p class="">{{ podcast.description }}</p>
            <img class="" src="/assets/images/logo-WCD.svg" alt="{{ podcast.name }} Image"/>
        </a>
        <p class="">
            <a href="{{ podcast.podcast_web }}" target="_blank">Accede al post del episodio</a>
        </p>
    </article>
{% endfor %}
