---
layout: default
title: "Resources"
excerpt: "Resouces for Web Developers."
---
<div class="">
<img src="/images/section-resources.jpg" alt="Photography by Todd Quackenbush" />
<h1 class="">Resources for Web Developers</h1>
</div>

List of resources to learn Front-end Web Design & Development curated by me, that I enjoyed reading, watching, listening to or using.

TL; DR

<ul class="">
    <li class="">
        <p id="books" class="">Books</p>
        {% for resource in site.data.resource_books %}
            <h3 class="">{{ resource.name }}</h3>
            <p class="">
                {% include external-link.html %}
                <a href="{{ resource.url }}" target="_blank">{{ resource.name }}'s Web</a>
            </p>
        {% endfor %}
    </li>
    <li class="">
        <p class="">Courses</p>
        {% for resource in site.data.resource_courses %}
            <h3 class="">{{ resource.name }}</h3>
            <p class="">
                {% include external-link.html %}
                <a href="{{ resource.url }}" target="_blank">{{ resource.name }}'s Web</a>
            </p>
        {% endfor %}
    </li>
    <li class="">
        <p class="">Developers</p>
        {% for resource in site.data.resource_twitter %}
            <h3 class="">{{ resource.name }}</h3>
            <p class="">
                {% include external-link.html %}
                <a href="{{ resource.url }}" target="_blank">{{ resource.name }}'s Web</a>
            </p>
        {% endfor %}
    </li>
    <li class="">
        <p class="">Feeds</p>
        {% for resource in site.data.resource_feeds %}
            <h3 class="">{{ resource.name }}</h3>
            <p class="">
                {% include external-link.html %}
                <a href="{{ resource.url }}" target="_blank">{{ resource.name }}</a>
            </p>
        {% endfor %}
    </li>
    <li class="">
        <p id="newsletters" class="">Newsletters</p>
        {% for resource in site.data.resource_newsletters %}
            <h3 class="">{{ resource.name }}</h3>
            <p class="">
                {% include external-link.html %}
                <a href="{{ resource.url }}" target="_blank">{{ resource.name }}</a>
            </p>
        {% endfor %}
    </li>
    <li class="">
        <p id="podcasts" class="">Podcasts</p>
        {% for resource in site.data.resource_podcasts %}
            <h3 class="">{{ resource.name }}</h3>
            <p class="">
                {% include external-link.html %}
                <a href="{{ resource.url }}" target="_blank">{{ resource.name }}'s Web</a>
            </p>
        {% endfor %}
    </li>
    <li class="">
        <p class="">Slack Channels</p>
        {% for resource in site.data.resource_slacks %}
            <h3 class="">{{ resource.name }}</h3>
            <p class="">
                {% include external-link.html %}
                <a href="{{ resource.url }}" target="_blank">{{ resource.name }}'s Slack Channel</a>
            </p>
        {% endfor %}
    </li>
    <li class="">
        <p class="">Videos</p>
        {% for resource in site.data.resource_videos %}
            <h3 class="">{{ resource.name }}</h3>
            <p class="">
                {% include external-link.html %}
                <a href="{{ resource.url }}" target="_blank">{{ resource.name }}'s Web</a>
            </p>
        {% endfor %}
    </li>
    <li class="">
        <p class="">Webs</p>
        {% for resource in site.data.resource_webs %}
            <h3 class="">{{ resource.name }}</h3>
            <p class="">
                {% include external-link.html %}
                <a href="{{ resource.url }}" target="_blank">{{ resource.name }}'s Web</a>
            </p>
        {% endfor %}
    </li>
    <li class="">
        <p class="">Webs of Resources</p>
        {% for resource in site.data.resource_other %}
            <h3 class="">{{ resource.name }}</h3>
            <p class="">
                {% include external-link.html %}
                <a href="{{ resource.url }}" target="_blank">{{ resource.name }}'s Web</a>
            </p>
        {% endfor %}
    </li>
</ul>
