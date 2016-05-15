---
layout: default
title: "Interviews"
excerpt: "Interviews with the most influential developers of the industry and people think interesting to follow because of their work."
tags:
  - writing
  - interviews
  - blog
---
<div class="header-section">
  <img src="/images/section-interviews.jpg" alt="Photography by Alejandro Escamilla" />
  <h1 class="header-section__h1">Interviews with Developers</h1>
</div>

It does not happen *that* often, but sometimes I have the pleasure to interview some of the most amazing web developers arround the globe!

Many will realize that I haven't interviewed any woman but as far as I have tried, no woman has accepted, so if you are one, let me interview you! We need #womenintech

<ul class="reset-bullet">
{% for interview in site.data.interviews %}
  <li class="article  container">
    <a class="article__link" href="/interviews/{{ interview.interview_url }}">
      <h3 class="article__h3">{{ interview.name }}</h3>
      <time class="article__date" datetime="{{ interview.date | date: "%Y-%m-%d" }}">{{ interview.interview_date }}</time>
      <p class="article__excerpt">{{ interview.excerpt }}</p>
      <img class="portrait--small" src="{{ interview.image_url }}" alt="{{ interview.interview }} Photography"/>
      <p class="article__number">{{ interview.interview_number }}</p>
    </a>
    <p class="article__url">
        <svg style="width:15px;height:15px; margin-right: 3px;" xmlns="http://www.w3.org/2000/svg" viewBox="-187 61.7 24 24">
            <path fill="#C5003E" d="M-172.3 61.7v2.7h4.8l-13.1 13.1 1.9 1.9 13.1-13.1v4.8h2.7v-9.3m-2.8 21.3h-18.7V64.4h9.3v-2.7h-9.3c-1.5 0-2.7 1.2-2.7 2.7v18.7c0 1.5 1.2 2.7 2.7 2.7h18.7c1.5 0 2.7-1.2 2.7-2.7v-9.3h-2.7v9.3z"/>
        </svg>
        <a href="{{ interview.interview_web }}" target="_blank">{{ interview.name }}'s Web</a>
    </p>
    <p class="article__url">
        <svg style="width:15px;height:15px; margin-right: 3px;" xmlns="http://www.w3.org/2000/svg" viewBox="-187 61.7 24 24">
            <path fill="#C5003E" d="M-172.3 61.7v2.7h4.8l-13.1 13.1 1.9 1.9 13.1-13.1v4.8h2.7v-9.3m-2.8 21.3h-18.7V64.4h9.3v-2.7h-9.3c-1.5 0-2.7 1.2-2.7 2.7v18.7c0 1.5 1.2 2.7 2.7 2.7h18.7c1.5 0 2.7-1.2 2.7-2.7v-9.3h-2.7v9.3z"/>
        </svg>
        <a href="{{ interview.interview_twitter }}" target="_blank">{{ interview.name }}'s Twitter</a>
    </p>
  </li>
{% endfor %}
</ul>
