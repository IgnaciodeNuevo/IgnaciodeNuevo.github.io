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

It does not happen *that* often, but sometimes I have the pleasure to interview some of the most amazing web developers arround the globe!

<ul class="events  list">
{% for interview in site.data.dev-interviews %}
  <li class="event  list__item">
    <a href="/developers-interviews/{{ interview.interview_url }}">
      <h3 class="home-section__h3">{{ interview.name }}</h3>
      <time class="home-section__date" datetime="{{ interview.date | date: "%Y-%m-%d" }}">{{ interview.interview_date }}</time>
      <p>{{ interview.excerpt }}</p>
      <img class="portrait--small" src="{{ interview.image_url }}" alt="{{ interview.interview }} Photography"/>
      <p>{{ interview.interview_number }}</p>
    </a>
    <p>
      <a href="{{ interview.interview_web }}" target="_blank">{{ interview.name }}'s Web</a> - <a href="{{ interview.interview_twitter }}" target="_blank">{{ interview.name }}'s Twitter</a>
    </p>
  </li>
{% endfor %}
</ul>
