---
layout: default
title: "Resources"
excerpt: "Resouces for Web Developers."
---
<div class="">
<img src="/assets/images/section-resources.jpg" alt="Photography by Todd Quackenbush" />
<h1 class="">Resources for Web Developers</h1>
</div>

List of resources to learn Frontend Web Design & Development curated by me, that I enjoyed reading, watching, listening to or using.

TL; DR

<ul class="">
    <li class="">
        <p id="books" class="">Books</p>
        {% for resource in site.data.books %}
            <h3 class="">{{ resource.name }}</h3>
            <p class="">
                {% include icons/external.html %}
                <a class="link link--special" href="{{ resource.url }}" target="_blank" rel="noopener">{{ resource.name }}'s Web</a>
            </p>
        {% endfor %}
    </li>
    <li class="">
        <p id="newsletters" class="">Newsletters</p>
        {% for resource in site.data.newsletters %}
            <h3 class="">{{ resource.name }}</h3>
            <p class="">
                {% include icons/external.html %}
                <a class="link link--special" href="{{ resource.url }}" target="_blank" rel="noopener">{{ resource.name }}</a>
            </p>
        {% endfor %}
    </li>
    <li class="">
        <p id="podcasts" class="">Podcasts</p>
        {% for resource in site.data.podcasts %}
            <h3 class="">{{ resource.name }}</h3>
            <p class="">
                {% include icons/external.html %}
                <a class="link link--special" href="{{ resource.url }}" target="_blank" rel="noopener">{{ resource.name }}'s Web</a>
            </p>
        {% endfor %}
    </li>
    <li class="">
        <p class="">Slack Channels</p>
        {% for resource in site.data.slacks %}
            <h3 class="">{{ resource.name }}</h3>
            <p class="">
                {% include icons/external.html %}
                <a class="link link--special" href="{{ resource.url }}" target="_blank" rel="noopener">{{ resource.name }}'s Slack Channel</a>
            </p>
        {% endfor %}
    </li>
    <li class="">
        <p class="">Webs of Resources</p>
        {% for resource in site.data.resources %}
            <h3 class="">{{ resource.name }}</h3>
            <p class="">
                {% include icons/external.html %}
                <a class="link link--special" href="{{ resource.url }}" target="_blank" rel="noopener">{{ resource.name }}'s Web</a>
            </p>
        {% endfor %}
    </li>
</ul>
