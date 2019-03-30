---
layout: list
title: "Speaking"
wrapper_class: speaking-wrapper
---

<h1 class="main__title">Speaking</h1>

<p class="main__text">It does not happen that often! Here are the talks I've given and slides.</p>

<section class="articles-list">
    {% for talk in site.data.speaking %}
        {% if page.lang %}
            <article class="article" lang="{{ page.lang }}">
                <div class="article__item">
                    <time class="article__time" datetime="{{ talk.date | date: '%F' }}">{{ talk.date | date: "%b %-d %Y"}}</time>
                    <h2 class="article__subtitle">{{ talk.name }}</h2>
                    <p class="article__description">{{ talk.description }}</p>
                    <!-- <p class="article__description u-mb-xs">{{ talk.venue }}</p> -->
                    <div class="article__links">
                        <a class="btn btn--fill" href="/speaking/{{ talk.url }}" hreflang="{{ page.lang }}">
                            <span class="btn__text"><span class="u-visually-hidden">{{ talk.name }}'s</span> Slides</span>
                            {% include icons/external.html %}
                        </a>
                        {% if talk.video %}
                            <a class="btn btn--fill" href="{{ talk.video }}" target="_blank" rel="noopener noreferrer" hreflang="{{ page.lang }}">
                                <span class="btn__text"><span class="u-visually-hidden">{{ talk.name }}'s</span> Video</span>
                                {% include icons/external.html %}
                            </a>
                        {% endif %}
                        {% if talk.workshop %}
                            <a class="btn btn--fill" href="{{ talk.workshop }}" target="_blank" rel="noopener noreferrer" hreflang="{{ page.lang }}">
                                <span class="btn__text"><span class="u-visually-hidden">{{ talk.name }}'s</span> Workshop</span>
                                {% include icons/external.html %}
                            </a>
                        {% endif %}
                        {% if talk.codepen %}
                            <a class="btn btn--fill" href="{{ talk.codepen }}" target="_blank" rel="noopener noreferrer" hreflang="{{ page.lang }}">
                                <span class="btn__text"><span class="u-visually-hidden">{{ talk.name }}'s</span> Codepen</span>
                                {% include icons/external.html %}
                            </a>
                        {% endif %}
                    </div>
                </div>
        {% else %}
            <article class="article">
                <div class="article__item">
                    <time class="article__time" datetime="{{ talk.date | date: '%F' }}">{{ talk.date | date: "%b %-d %Y"}}</time>
                    <h2 class="article__subtitle">{{ talk.name }}</h2>
                    <p class="article__description">{{ talk.description }}</p>
                    <!-- <p class="article__description u-mb-xs">{{ talk.venue }}</p> -->
                    <div class="article__links">
                        <a class="btn btn--fill" href="/speaking/{{ talk.url }}">
                            <span class="btn__text"><span class="u-visually-hidden">{{ talk.name }}'s</span> Slides</span>
                            {% include icons/external.html %}
                        </a>
                        {% if talk.video %}
                            <a class="btn btn--fill" href="{{ talk.video }}" target="_blank" rel="noopener noreferrer">
                                <span class="btn__text"><span class="u-visually-hidden">{{ talk.name }}'s</span> Video</span>
                                {% include icons/external.html %}
                            </a>
                        {% endif %}
                        {% if talk.workshop %}
                            <a class="btn btn--fill" href="{{ talk.workshop }}" target="_blank" rel="noopener noreferrer">
                                <span class="btn__text"><span class="u-visually-hidden">{{ talk.name }}'s</span> Workshop</span>
                                {% include icons/external.html %}
                            </a>
                        {% endif %}
                        {% if talk.codepen %}
                            <a class="btn btn--fill" href="{{ talk.codepen }}" target="_blank" rel="noopener noreferrer">
                                <span class="btn__text"><span class="u-visually-hidden">{{ talk.name }}'s</span> Codepen</span>
                                {% include icons/external.html %}
                            </a>
                        {% endif %}
                    </div>
                </div>
        {% endif %}
            </article>
    {% endfor %}
</section>
