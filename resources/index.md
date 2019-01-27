---
layout: default
title: "Resources"
excerpt: "Resouces for Web Developers."
---
<h1>Resources for Web Developers</h1>

List of resources to learn Frontend Web Design & Development curated by me, that I enjoyed reading, watching, listening to or using.

TL; DR

<section class="articles-list">
    <article class="article">
        <p id="books">Books</p>
        {% for resource in site.data.books %}
            <h3>{{ resource.name }}</h3>
            <p>
                {% include icons/external.html %}
                <a class="link link--special" href="{{ resource.url }}" target="_blank" rel="noopener">{{ resource.name }}'s Web</a>
            </p>
        {% endfor %}
    </article>
    <article class="article">
        <p id="newsletters">Newsletters</p>
        {% for resource in site.data.newsletters %}
            <h3>{{ resource.name }}</h3>
            <p>
                {% include icons/external.html %}
                <a class="link link--special" href="{{ resource.url }}" target="_blank" rel="noopener">{{ resource.name }}</a>
            </p>
        {% endfor %}
    </article>
    <article class="article">
        <p id="podcasts">Podcasts</p>
        {% for resource in site.data.podcasts %}
            <h3>{{ resource.name }}</h3>
            <p>
                {% include icons/external.html %}
                <a class="link link--special" href="{{ resource.url }}" target="_blank" rel="noopener">{{ resource.name }}'s Web</a>
            </p>
        {% endfor %}
    </article>
    <article class="article">
        <p>Slack Channels</p>
        {% for resource in site.data.slacks %}
            <h3>{{ resource.name }}</h3>
            <p>
                {% include icons/external.html %}
                <a class="link link--special" href="{{ resource.url }}" target="_blank" rel="noopener">{{ resource.name }}'s Slack Channel</a>
            </p>
        {% endfor %}
    </article>
    <article class="article">
        <p>Webs of Resources</p>
        {% for resource in site.data.resources %}
            <h3>{{ resource.name }}</h3>
            <p>
                {% include icons/external.html %}
                <a class="link link--special" href="{{ resource.url }}" target="_blank" rel="noopener">{{ resource.name }}'s Web</a>
            </p>
        {% endfor %}
    </article>
</section>
