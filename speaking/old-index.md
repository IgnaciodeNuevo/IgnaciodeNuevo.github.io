---
layout: default
title: "Speaking"
---
<div class="header-section">
  <img src="/images/section-speaking.jpg" alt="Photography by Jeremy Yap" />
  <h1 class="header-section__h1">Speaking</h1>
</div>

It does not happen that often!

Here are the talks I've given and slides.

<ul class="reset-bullet">
{% for talk in site.data.speaking %}
  <li class="article  container">
    <a class="article__link" href="/speaking/{{ talk.speaking_url }}"> 
      <h3 class="article__h3">{{ talk.name }}</h3>
      <time class="article__date">{{ talk.speaking_date }}</time>
      <p class="article__excerpt">{{ talk.description }}</p>
    </a>
  </li>
{% endfor %}
