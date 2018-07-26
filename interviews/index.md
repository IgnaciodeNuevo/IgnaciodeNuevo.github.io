---
layout: default
title: "Interviews"
excerpt: "Interviews with the most influential developers of the industry and people think interesting to follow because of their work."
---

<div class="">
  <img src="/images/section-interviews.jpg" alt="Photography by Alejandro Escamilla" />
  <h1 class="">Interviews with Developers</h1>
</div>

It does not happen _that_ often, but sometimes I have the pleasure to interview some of the most amazing web developers arround the globe!

Many will realize that I haven't interviewed any woman but as far as I have tried, no woman has accepted, so if you are one, let me interview you! We need #womenintech

<ul class="">
    {% for interview in site.data.interviews %}
        <li class="">
            <a class="" href="/interviews/{{ interview.interview_url }}">
                <h3 class="">{{ interview.name }}</h3>
                <time class="" datetime="{{ interview.date | date: "%Y-%m-%d" }}">{{ interview.interview_date }}</time>
                <p class="">{{ interview.excerpt }}</p>
                    <img class="" src="{{ interview.image_url }}" alt="{{ interview.interview }} Photography"/>
                <p class="">{{ interview.interview_number }}</p>
            </a>
            <p class="">
                <svg style="width:15px;height:15px; margin-right: 3px;" xmlns="http://www.w3.org/2000/svg" viewBox="-187 61.7 24 24">
                    <path fill="#0047BB" d="M-172.3 61.7v2.7h4.8l-13.1 13.1 1.9 1.9 13.1-13.1v4.8h2.7v-9.3m-2.8 21.3h-18.7V64.4h9.3v-2.7h-9.3c-1.5 0-2.7 1.2-2.7 2.7v18.7c0 1.5 1.2 2.7 2.7 2.7h18.7c1.5 0 2.7-1.2 2.7-2.7v-9.3h-2.7v9.3z"/>
                </svg>
                <a href="{{ interview.interview_web }}" target="_blank">{{ interview.name }}'s Web</a>
            </p>
            <p class="">
                <svg style="width:15px;height:15px; margin-right: 3px;" xmlns="http://www.w3.org/2000/svg" viewBox="-187 61.7 24 24">
                    <path fill="#0047BB" d="M-172.3 61.7v2.7h4.8l-13.1 13.1 1.9 1.9 13.1-13.1v4.8h2.7v-9.3m-2.8 21.3h-18.7V64.4h9.3v-2.7h-9.3c-1.5 0-2.7 1.2-2.7 2.7v18.7c0 1.5 1.2 2.7 2.7 2.7h18.7c1.5 0 2.7-1.2 2.7-2.7v-9.3h-2.7v9.3z"/>
                </svg>
                <a href="{{ interview.interview_twitter }}" target="_blank">{{ interview.name }}'s Twitter</a>
            </p>
        </li>
    {% endfor %}
</ul>
