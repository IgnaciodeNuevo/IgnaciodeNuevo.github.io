---
layout: list
layout: list
title: 'Projects'
wrapper_class: projects-wrapper
---

<h1 class="main__title">Development Projects</h1>

<p class="main__text">When I can, I try to invest my in <a class="link link--special" href="{{ site.github }}">open-source projects</a>. Here are a few of them I initiated myself:</p>

<section class="articles-list">
    {% for project in site.data.projects %}
        {% if page.lang %}
            <article class="article" lang="{{ page.lang }}">
        {% else %}
            <article class="article" lang="en">
        {% endif %}
                <div class="article__item">
                    <time class="article__time" datetime="{{ project.date }}">{{ project.date | date: "%b %-d %Y"}}</time>
                    <h2 class="article__subtitle">{{ project.name }}</h2>
                    <p class="article__description">{{ project.description }}</p>
                    <div class="article__links">
                        {% if project.external %}
                            <a class="btn btn--fill" href="{{ project.web }}" target="_blank" rel="noopener">
                                <span class="btn__text">Web</span>
                                {% include icons/external.html %}
                            </a>
                        {% else %}
                            <a class="btn btn--fill" href="{{ project.web }}">
                                <span class="btn__text">Web</span>
                                {% include icons/arrow-enter.html %}
                            </a>
                        {% endif %}
                        {% if project.case_study %}
                            <a class="btn btn--fill" href="/projects/{{ project.case_study }}">
                                <span class="btn__text">Case Study</span>
                                {% include icons/arrow-enter.html %}
                            </a>
                        {% endif %}
                    </div>
                </div>
            </article>
    {% endfor %}
</section>
