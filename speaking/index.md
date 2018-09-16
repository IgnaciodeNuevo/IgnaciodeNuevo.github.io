---
layout: default
title: "Speaking"
---
<div class="header-section">
  <img src="/images/section-speaking.jpg" alt="Photography by Jeremy Yap" />
  <h1 class="header-section__h1">Speaking</h1>
</div>

It does not happen that often! Here are the talks I've given and slides.

<ul class="reset-bullet">
{% for talk in site.data.speaking %}
  <li class="speaking  container">
    <article class="article__link">
      <h3 class="speaking__h3">{{ talk.name }}</h3>
      <time class="speaking__date">{{ talk.speaking_date }}</time>
      <p class="speaking__excerpt">{{ talk.description }}</p>
      <p class="speaking__excerpt">
        <a href="/speaking/{{ talk.speaking_url }}" target="_blank">
          Slides
          <svg class="speaking__link" viewBox="0 0 24 24">
            <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
          </svg>
        </a>
      </p>
      {% if talk.video %}
        <p class="speaking__excerpt">
        <a href="{{ talk.video }}" target="_blank">
          Video
          <svg class="speaking__link" viewBox="0 0 24 24">
            <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
          </svg>
        </a>
      </p>
      {% endif %}
    </article>
  </li>
{% endfor %}
</ul>
