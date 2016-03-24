---
layout: default
title: "Resources"
excerpt: "Resouces for Web Developers."
tags:
  - Resources
  - Front-end
---
<div class="header-section">
  <img src="/images/section-resources.jpg" alt="Photography by Todd Quackenbush" />
  <h1 class="header-section__h1">Resources for Web Developers</h1>
</div>

List of resources to learn Front-end Web Design & Development curated by me, that I enjoyed reading, watching, listening to or using.

<ul class="reset-bullet">
  <li class="resource  container">
    <p class="resource__type">Books</p>
    {% for resource in site.data.resource_books %}
        <h3 class="resource__h3">{{ resource.name }}</h3>
        <p class="resource__url">
            <svg style="width:15px;height:15px; margin-right: 3px;" xmlns="http://www.w3.org/2000/svg" viewBox="-187 61.7 24 24">
                <path fill="#C5003E" d="M-172.3 61.7v2.7h4.8l-13.1 13.1 1.9 1.9 13.1-13.1v4.8h2.7v-9.3m-2.8 21.3h-18.7V64.4h9.3v-2.7h-9.3c-1.5 0-2.7 1.2-2.7 2.7v18.7c0 1.5 1.2 2.7 2.7 2.7h18.7c1.5 0 2.7-1.2 2.7-2.7v-9.3h-2.7v9.3z"/>
            </svg>
            <a href="{{ resource.url }}" target="_blank">{{ resource.name }}'s Web</a>
        </p>
    {% endfor %}
  </li>
  <li class="resource  container">
    <p class="resource__type">Courses</p>
    {% for resource in site.data.resource_courses %}
        <h3 class="resource__h3">{{ resource.name }}</h3>
        <p class="resource__url">
            <svg style="width:15px;height:15px; margin-right: 3px;" xmlns="http://www.w3.org/2000/svg" viewBox="-187 61.7 24 24">
                <path fill="#C5003E" d="M-172.3 61.7v2.7h4.8l-13.1 13.1 1.9 1.9 13.1-13.1v4.8h2.7v-9.3m-2.8 21.3h-18.7V64.4h9.3v-2.7h-9.3c-1.5 0-2.7 1.2-2.7 2.7v18.7c0 1.5 1.2 2.7 2.7 2.7h18.7c1.5 0 2.7-1.2 2.7-2.7v-9.3h-2.7v9.3z"/>
            </svg>
            <a href="{{ resource.url }}" target="_blank">{{ resource.name }}'s Web</a>
        </p>
    {% endfor %}
  </li>
  <li class="resource  container">
    <p class="resource__type">Developers</p>
    {% for resource in site.data.resource_twitter %}
        <h3 class="resource__h3">{{ resource.name }}</h3>
        <p class="resource__url">
            <svg style="width:15px;height:15px; margin-right: 3px;" xmlns="http://www.w3.org/2000/svg" viewBox="-187 61.7 24 24">
                <path fill="#C5003E" d="M-172.3 61.7v2.7h4.8l-13.1 13.1 1.9 1.9 13.1-13.1v4.8h2.7v-9.3m-2.8 21.3h-18.7V64.4h9.3v-2.7h-9.3c-1.5 0-2.7 1.2-2.7 2.7v18.7c0 1.5 1.2 2.7 2.7 2.7h18.7c1.5 0 2.7-1.2 2.7-2.7v-9.3h-2.7v9.3z"/>
            </svg>
            <a href="{{ resource.url }}" target="_blank">{{ resource.name }}'s Web</a>
        </p>
    {% endfor %}
  </li>
  <li class="resource  container">
    <p class="resource__type">Feeds</p>
    {% for resource in site.data.resource_feeds %}
        <h3 class="resource__h3">{{ resource.name }}</h3>
        <p class="resource__url">
            <svg style="width:15px;height:15px; margin-right: 3px;" xmlns="http://www.w3.org/2000/svg" viewBox="-187 61.7 24 24">
                <path fill="#C5003E" d="M-172.3 61.7v2.7h4.8l-13.1 13.1 1.9 1.9 13.1-13.1v4.8h2.7v-9.3m-2.8 21.3h-18.7V64.4h9.3v-2.7h-9.3c-1.5 0-2.7 1.2-2.7 2.7v18.7c0 1.5 1.2 2.7 2.7 2.7h18.7c1.5 0 2.7-1.2 2.7-2.7v-9.3h-2.7v9.3z"/>
            </svg>
            <a href="{{ resource.url }}" target="_blank">{{ resource.name }}</a>
        </p>
    {% endfor %}
  </li>
  <li class="resource  container">
    <p class="resource__type">Newsletters</p>
    {% for resource in site.data.resource_newsletters %}
        <h3 class="resource__h3">{{ resource.name }}</h3>
        <p class="resource__url">
            <svg style="width:15px;height:15px; margin-right: 3px;" xmlns="http://www.w3.org/2000/svg" viewBox="-187 61.7 24 24">
                <path fill="#C5003E" d="M-172.3 61.7v2.7h4.8l-13.1 13.1 1.9 1.9 13.1-13.1v4.8h2.7v-9.3m-2.8 21.3h-18.7V64.4h9.3v-2.7h-9.3c-1.5 0-2.7 1.2-2.7 2.7v18.7c0 1.5 1.2 2.7 2.7 2.7h18.7c1.5 0 2.7-1.2 2.7-2.7v-9.3h-2.7v9.3z"/>
            </svg>
            <a href="{{ resource.url }}" target="_blank">{{ resource.name }}</a>
        </p>
    {% endfor %}
  </li>
  <li class="resource  container">
    <p class="resource__type">Podcasts</p>
    {% for resource in site.data.resource_podcasts %}
        <h3 class="resource__h3">{{ resource.name }}</h3>
        <p class="resource__url">
            <svg style="width:15px;height:15px; margin-right: 3px;" xmlns="http://www.w3.org/2000/svg" viewBox="-187 61.7 24 24">
                <path fill="#C5003E" d="M-172.3 61.7v2.7h4.8l-13.1 13.1 1.9 1.9 13.1-13.1v4.8h2.7v-9.3m-2.8 21.3h-18.7V64.4h9.3v-2.7h-9.3c-1.5 0-2.7 1.2-2.7 2.7v18.7c0 1.5 1.2 2.7 2.7 2.7h18.7c1.5 0 2.7-1.2 2.7-2.7v-9.3h-2.7v9.3z"/>
            </svg>
            <a href="{{ resource.url }}" target="_blank">{{ resource.name }}'s Web</a>
        </p>
    {% endfor %}
  </li>
  <li class="resource  container">
    <p class="resource__type">Slack Channels</p>
    {% for resource in site.data.resource_slacks %}
        <h3 class="resource__h3">{{ resource.name }}</h3>
        <p class="resource__url">
            <svg style="width:15px;height:15px; margin-right: 3px;" xmlns="http://www.w3.org/2000/svg" viewBox="-187 61.7 24 24">
                <path fill="#C5003E" d="M-172.3 61.7v2.7h4.8l-13.1 13.1 1.9 1.9 13.1-13.1v4.8h2.7v-9.3m-2.8 21.3h-18.7V64.4h9.3v-2.7h-9.3c-1.5 0-2.7 1.2-2.7 2.7v18.7c0 1.5 1.2 2.7 2.7 2.7h18.7c1.5 0 2.7-1.2 2.7-2.7v-9.3h-2.7v9.3z"/>
            </svg>
            <a href="{{ resource.url }}" target="_blank">{{ resource.name }}'s Web</a>
        </p>
    {% endfor %}
  </li>
  <!-- <li class="resource  container">
    <p class="resource__type">Tools</p>
    {% for resource in site.data.resource_tools %}
        <h3 class="resource__h3">{{ resource.name }}</h3>
        <p class="resource__url">
            <svg style="width:15px;height:15px; margin-right: 3px;" xmlns="http://www.w3.org/2000/svg" viewBox="-187 61.7 24 24">
                <path fill="#C5003E" d="M-172.3 61.7v2.7h4.8l-13.1 13.1 1.9 1.9 13.1-13.1v4.8h2.7v-9.3m-2.8 21.3h-18.7V64.4h9.3v-2.7h-9.3c-1.5 0-2.7 1.2-2.7 2.7v18.7c0 1.5 1.2 2.7 2.7 2.7h18.7c1.5 0 2.7-1.2 2.7-2.7v-9.3h-2.7v9.3z"/>
            </svg>
            <a href="{{ resource.url }}" target="_blank">{{ resource.name }}'s Web</a>
        </p>
    {% endfor %}
  </li> -->
  <li class="resource  container">
    <p class="resource__type">Videos</p>
    {% for resource in site.data.resource_videos %}
        <h3 class="resource__h3">{{ resource.name }}</h3>
        <p class="resource__url">
            <svg style="width:15px;height:15px; margin-right: 3px;" xmlns="http://www.w3.org/2000/svg" viewBox="-187 61.7 24 24">
                <path fill="#C5003E" d="M-172.3 61.7v2.7h4.8l-13.1 13.1 1.9 1.9 13.1-13.1v4.8h2.7v-9.3m-2.8 21.3h-18.7V64.4h9.3v-2.7h-9.3c-1.5 0-2.7 1.2-2.7 2.7v18.7c0 1.5 1.2 2.7 2.7 2.7h18.7c1.5 0 2.7-1.2 2.7-2.7v-9.3h-2.7v9.3z"/>
            </svg>
            <a href="{{ resource.url }}" target="_blank">{{ resource.name }}'s Web</a>
        </p>
    {% endfor %}
  </li>
  <li class="resource  container">
    <p class="resource__type">Webs</p>
    {% for resource in site.data.resource_webs %}
        <h3 class="resource__h3">{{ resource.name }}</h3>
        <p class="resource__url">
            <svg style="width:15px;height:15px; margin-right: 3px;" xmlns="http://www.w3.org/2000/svg" viewBox="-187 61.7 24 24">
                <path fill="#C5003E" d="M-172.3 61.7v2.7h4.8l-13.1 13.1 1.9 1.9 13.1-13.1v4.8h2.7v-9.3m-2.8 21.3h-18.7V64.4h9.3v-2.7h-9.3c-1.5 0-2.7 1.2-2.7 2.7v18.7c0 1.5 1.2 2.7 2.7 2.7h18.7c1.5 0 2.7-1.2 2.7-2.7v-9.3h-2.7v9.3z"/>
            </svg>
            <a href="{{ resource.url }}" target="_blank">{{ resource.name }}'s Web</a>
        </p>
    {% endfor %}
  </li>
  <li class="resource  container">
    <p class="resource__type">Webs of Resources</p>
    {% for resource in site.data.resource_other %}
        <h3 class="resource__h3">{{ resource.name }}</h3>
        <p class="resource__url">
            <svg style="width:15px;height:15px; margin-right: 3px;" xmlns="http://www.w3.org/2000/svg" viewBox="-187 61.7 24 24">
                <path fill="#C5003E" d="M-172.3 61.7v2.7h4.8l-13.1 13.1 1.9 1.9 13.1-13.1v4.8h2.7v-9.3m-2.8 21.3h-18.7V64.4h9.3v-2.7h-9.3c-1.5 0-2.7 1.2-2.7 2.7v18.7c0 1.5 1.2 2.7 2.7 2.7h18.7c1.5 0 2.7-1.2 2.7-2.7v-9.3h-2.7v9.3z"/>
            </svg>
            <a href="{{ resource.url }}" target="_blank">{{ resource.name }}'s Web</a>
        </p>
    {% endfor %}
  </li>
</ul>


