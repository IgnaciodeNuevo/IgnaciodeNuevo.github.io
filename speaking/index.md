---
layout: default
title: "Speaking"
---

<div class="">
    <img src="/assets/images/section-speaking.jpg" alt="Photography by Jeremy Yap" />
    <h1 class="">Speaking</h1>
</div>

It does not happen that often! Here are the talks I've given and slides.

<ul class="">
    {% for talk in site.data.speaking %}
        <li class="">
            <article class="">
                <h3 class="">{{ talk.name }}</h3>
                <time class="">{{ talk.date }}</time>
                <p class="">{{ talk.description }}</p>
                <p class="">
                    <a href="/speaking/{{ talk.url }}" target="_blank">
                        Slides
                        <svg class="" viewBox="0 0 24 24">
                            <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                        </svg>
                    </a>
                </p>
                {% if talk.video %}
                    <p class="">
                        <a href="{{ talk.video }}" target="_blank">
                            Video
                            <svg class="" viewBox="0 0 24 24">
                                <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                            </svg>
                        </a>
                    </p>
                {% endif %}
                {% if talk.codepen %}
                    <p class="">
                        <a href="{{ talk.codepen }}" target="_blank">
                            Codepen
                            <svg class="" viewBox="0 0 24 24">
                                <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                            </svg>
                        </a>
                    </p>
                {% endif %}
            </article>
        </li>
    {% endfor %}
</ul>
