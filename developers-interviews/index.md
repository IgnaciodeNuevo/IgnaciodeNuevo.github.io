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
      <a href="{{ interview.link }}" class="article--interview">
        <h2 class="article--h2">
          {{ interview.interview }}
        </h2>
        <time class="number">
          {{ interview.date }}
        </time>
        <p class="article--p">
          {{ interview.excerpt }}
        </p>
      </a>
      <p class="number--data">
        {{ interview.web }} — {{ interview.twitter }}
      </p>
      <p class="number--dev">
        {{ interview.number_dev }}
      </p>
      <img src="{{ interview.image_dev_url }}" alt="This idea must die" class="dev-portrait"/>
  </li>
{% endfor %}
</ul>
