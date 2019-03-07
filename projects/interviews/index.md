---
layout: list
title: 'Projects'
wrapper_class: interviews-wrapper
---

<h1 class="main__title">Interviews with Developers</h1>

<p class="main__text">It does not happen <em>that</em> often, but sometimes I have the pleasure to interview some of the most amazing web developers arround the globe!</p>

<p class="main__text">Many will realize that I haven't interviewed any woman but as far as I have tried, no woman has accepted, so if you are one, let me interview you! We need #womenintech</p>

<section class="articles-list">
    {% for interview in site.data.interviews %}
        {% if page.lang %}
                <article class="article" lang="{{ page.lang }}">
            {% else %}
                <article class="article">
            {% endif %}
                    <div class="article__item">
                        <time class="article__time" datetime="{{ interview.date | date: '%F' }}">{{ interview.date | date: "%b %-d %Y"}}</time>
                        <div class="article__data">
                            <img class="portrait" src="{{ interview.portrait }}" alt="{{ interview.name }}'s portrait" />
                            <div>
                                <h2 class="article__subtitle">{{ interview.name }}</h2>
                                <p class="article__description">{{ interview.excerpt }}</p>
                            </div>
                        </div>
                        <div class="article__links">
                            <a class="btn btn--fill" href="/projects/interviews/{{ interview.url }}" hreflang="{{ page.lang }}">
                                <span class="btn__text"><span class="u-visually-hidden">{{ interview.name }}'s</span> Interview</span>
                                {% include icons/arrow-enter.html %}
                            </a>
                            <a class="btn btn--fill" href="{{ interview.twitter }}" target="_blank" rel="noopener noreferrer" hreflang="{{ page.lang }}">
                                <span class="btn__text"><span class="u-visually-hidden">{{ interview.name }}'s</span> Twitter</span>
                                {% include icons/twitter.html %}
                            </a>
                        </div>
                    </div>
                </article>
    {% endfor %}
</section>
