---
layout: default
title: "Speaking"
---
<div class="header-section">
  <img src="/images/section-speaking.jpg" alt="Photography by Jeremy Yap" />
  <h1 class="header-section__h1">Speaking</h1>
</div>

It does not happen that often! Here are the talks I've given and slides.

If you like invite me to <a href="/faq/#will-i-speak-at-your-conferencecompany">speak</a> at a conference or your company.

<ul class="reset-bullet">
{% for talk in site.data.speaking %}
  <li class="speaking  container">
    <a class="article__link" href="/speaking/{{ talk.speaking_url }}"> 
      <h3 class="speaking__h3">{{ talk.name }}</h3>
      <time class="speaking__date">{{ talk.speaking_date }}</time>
      <p class="speaking__excerpt">{{ talk.description }}</p>
    </a>
  </li>
{% endfor %}
</ul>
