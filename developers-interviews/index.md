---
layout: default
title: "Developers Interviews"
excerpt: "Interviews with the most influential developers of the industry and people think interesting to follow because of their work."
tags:
  - writing
  - interviews
  - blog
---
<div class="header-section">
  <img src="/images/developers-interviews.jpg" alt="Photography by Alejandro Escamilla" />
  <h1 class="header-section__h1">Developers Interviews</h1>
</div>

It does not happen *that* often, but sometimes I have the pleasure to interview some of the most amazing web developers arround the globe!

<ul class="reset-bullet">
{% for interview in site.data.dev-interviews %}
  <li class="article  container">
    <a class="article__link" href="/developers-interviews/{{ interview.interview_url }}">
      <h3 class="article__h3">{{ interview.name }}</h3>
      <time class="article__date" datetime="{{ interview.date | date: "%Y-%m-%d" }}">{{ interview.interview_date }}</time>
      <p class="article__excerpt">{{ interview.excerpt }}</p>
      <img class="portrait--small" src="{{ interview.image_url }}" alt="{{ interview.interview }} Photography"/>
      <p class="article__number">{{ interview.interview_number }}</p>
    </a>
    <p class="article__url"><a href="{{ interview.interview_web }}" target="_blank">{{ interview.name }}'s Web</a></p>
    <p class="article__url"><a href="{{ interview.interview_twitter }}" target="_blank">{{ interview.name }}'s Twitter</a></p>
  </li>
{% endfor %}
</ul>
