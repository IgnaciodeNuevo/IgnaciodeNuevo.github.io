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
{% for event in site.data.event %}
  <li class="event  list__item{% if event.past %}  event--past{% endif %}">
    <span class="event__data  list__secondary-content">{{ event.date }} — {{ event.location }}</span>
    <a class="event__link  list__primary-content" href="{{ event.link }}" target="_blank">
      {{ event.event }}
    </a>
    {% if event.actions %}
    <ul class="event__actions">
    {% for action in event.actions %}
      <li><a target="_blank" href="{{ action.link }}">{{ action.name }}</a></li>
    {% endfor %}
    </ul>
    {% endif %}
  </li>
{% endfor %}
</ul>
