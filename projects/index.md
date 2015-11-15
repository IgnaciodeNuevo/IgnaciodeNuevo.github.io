---
layout: default
title: "Projects"
excerpt: "A list of all my open-sourced projects, all hosted on GitHub. Fair warning: some of them are not maintained anymore."
tags:
  - projects
  - open-source
  - github
---
<div class="header-section">
  <img src="/images/projects.jpg" alt="Photography by Negative Space" />
  <h1 class="header-section__h1">Development Projects</h1>
</div>

When I can, I try to invest a lot of time in open-source projects. Here are a few of them I initiated myself:

<ul class="list">
{% for project in site.data.projects %}
  <li class="list__item">
    <a href="/projects/{{ project.project_url }}"> 
        <h3 class="home-section__h3">{{ project.name }}</h3>
        <time class="home-section__date" datetime="{{ project.date | date: "%Y-%m-%d" }}">{{ project.project_date }}</time>
        <p>{{ project.description }}</p>
        <img class="portrait--small" src="{{ project.image_url }}" alt="{{ project.name }} Image"/>
      </a>
      <p>
        <a href="{{ project.project_web }}" target="_blank">{{ project.name }}'s Web</a>
      </p>
  </li>
{% endfor %}
