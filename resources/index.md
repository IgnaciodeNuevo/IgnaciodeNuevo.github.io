---
layout: list
title: 'Resources'
wrapper_class: resources-wrapper
---

<h1 class="main__title">Resources for Web Developers</h1>

<p class="main__text">List of resources to learn Frontend Web Design & Development curated by me, that I enjoyed reading, watching, listening to or using.</p>

<p class="main__title">TL; DR</p>

<section class="articles-list">
        <h2 id="books">Books</h2>
        {% for resource in site.data.books %}
            <article class="article">
                <div class="article__item" href="{{ resource.url }}" target="_blank" rel="noopener">
                    <h3 class="article__subtitle">{{ resource.name }}</h3>
                    <a class="btn btn--fill" href="{{ project.web }}">
                        <span class="btn__text"><span class="u-visually-hidden">{{ resource.name }}'s</span> Book</span>
                        {% include icons/external.html %}
                    </a>
                </div>
            </article>
        {% endfor %}
        <h2 id="newsletters">Newsletters</h2>
        {% for resource in site.data.newsletters %}
            <article class="article">
                <div class="article__item" href="{{ resource.url }}" target="_blank" rel="noopener">
                    <h3 class="article__subtitle">{{ resource.name }}</h3>
                    <a class="btn btn--fill" href="{{ project.web }}">
                        <span class="btn__text"><span class="u-visually-hidden">{{ resource.name }}'s</span> Newsletter</span>
                        {% include icons/external.html %}
                    </a>
                </div>
            </article>
        {% endfor %}
        <h2 id="podcasts">Podcasts</h2>
        {% for resource in site.data.podcasts %}
            <article class="article">
                <div class="article__item" href="{{ resource.url }}" target="_blank" rel="noopener">
                    <h3 class="article__subtitle">{{ resource.name }}</h3>
                    <a class="btn btn--fill" href="{{ project.web }}">
                        <span class="btn__text"><span class="u-visually-hidden">{{ resource.name }}' </span>Web</span>
                        {% include icons/external.html %}
                    </a>
                </div>
            </article>
        {% endfor %}
        <h2>Slack Channels</h2>
        {% for resource in site.data.slacks %}
            <article class="article">
                <div class="article__item" href="{{ resource.url }}" target="_blank" rel="noopener">
                    <h3 class="article__subtitle">{{ resource.name }}</h3>
                    <a class="btn btn--fill" href="{{ project.web }}">
                        <span class="btn__text"><span class="u-visually-hidden">{{ resource.name }}'s </span>Slack Channel</span>
                        {% include icons/external.html %}
                    </a>
                </div>
            </article>
        {% endfor %}
        <h2>Webs of Resources</h2>
        {% for resource in site.data.resources %}
            <article class="article">
                <div class="article__item" href="{{ resource.url }}" target="_blank" rel="noopener">
                    <h3 class="article__subtitle">{{ resource.name }}</h3>
                    <a class="btn btn--fill" href="{{ project.web }}">
                        <span class="btn__text"><span class="u-visually-hidden">{{ resource.name }}'s </span>Web</span>
                        {% include icons/external.html %}
                    </a>
                </div>
            </article>
        {% endfor %}
</section>
