---
layout: default
title: "Developers Interviews"
excerpt: "Interviews with the most influential developers of the industry and people think interesting to follow because of their work."
tags:
  - writing
  - interviews
  - blog
---

# Developers Interviews

<img src="/images/developers-interviews.jpg" alt="Photography by Luis Llerena" />

It does not happen *that* often, but sometimes I have the pleasure to interview some of the most amazing people arround the globe!

<ul class="events  list">
{% for interview in site.data.dev-interviews %}
  <li class="event  list__item">
    <a href="{{ interview.interview_url }}" class="article--interview">
     <h3 class="home-section__link">{{ interview.name }}</h3>
      <time class="home-section__time" datetime="{{ interview.date | date: "%Y-%m-%d" }}">{{ interview.date }}</time>
      <p class="">{{ interview.excerpt }}</p>
      <p class="number--dev">{{ interview.number_dev }}</p>
      <img src="{{ interview.image_url }}" alt="{{ interview.name }}'s Photography" class="portrait"/>
    </a>
    <p>
      <a href="{{ interview.web }}">{{ interview.name }} Web</a> - <a href="{{ interview.twitter }}">{{ interview.name }} Twitter</a>
    </p>
  </li>
{% endfor %}
</ul>


