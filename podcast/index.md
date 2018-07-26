---
layout: default
title: "Podcasts"
excerpt: "Lista de episodios que hemos publicado del podcast WeCodeSign Podcast"
---

<div class="">
<img src="/images/section-podcast.jpg" alt="Photography by Kai Oberhäuser" />
<h1 class="">Podcast</h1>
</div>

Lista a los episodios del Podcast del cual soy creador y Co-Host sobre front-end, diseño web y UX:

{% for podcast in site.data.podcast %}
    <article class="">
        <a class="" href="{{ podcast.podcast_web }}" target="_blank">
            <h3 class="">{{ podcast.name }}</h3>
            <time class="">{{ project.project_date }}</time>
            <p class="">{{ podcast.description }}</p>
            <img class="" src="{{ podcast.image_url }}" alt="{{ podcast.name }} Image"/>
        </a>
        <p class="">
            <a href="{{ podcast.podcast_web }}" target="_blank">Accede al post del episodio</a>
        </p>
    </article>
{% endfor %}
