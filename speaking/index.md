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
                        {% include icons/external.html %}
                    </a>
                </p>
                {% if talk.video %}
                    <p class="">
                        <a href="{{ talk.video }}" target="_blank">
                            Video
                            {% include icons/external.html %}
                        </a>
                    </p>
                {% endif %}
                {% if talk.codepen %}
                    <p class="">
                        <a href="{{ talk.codepen }}" target="_blank">
                            Codepen
                            {% include icons/external.html %}
                        </a>
                    </p>
                {% endif %}
            </article>
        </li>
    {% endfor %}
</ul>
