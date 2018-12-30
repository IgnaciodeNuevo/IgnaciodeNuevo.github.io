---
layout: default
title: 'Projects'
excerpt: 'A list of all my open-sourced projects, all hosted on GitHub. Fair warning: some of them are not maintained
anymore.'
---


<div class="">
    <img src="/assets/images/section-projects.jpg" alt="Photography by Negative Space" />
    <h1 class="">Development Projects</h1>
</div>

When I can, I try to invest a lot of time in open-source projects. Here are a few of them I initiated myself:

<ul class="">
    {% for project in site.data.projects %}
    <li class="">
        <a class="" href="/projects/{{ project.url }}">
            <h3 class="">{{ project.name }}</h3>
            <time class="" datetime="{{ project.date }}">{{ project.date | date: "%b %-d %Y" }} }}</time>
            <p class="">{{ project.description }}</p>
            <img class="" src="/assets/images/logo-WCD.svg" alt="{{ project.name }} Image" />
        </a>
        <p class="">
            <a href="{{ project.web }}" target="_blank">{{ project.name }}'s Web</a>
        </p>
    </li>
    {% endfor %}
</ul>
