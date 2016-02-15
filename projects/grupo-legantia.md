---
layout: post
title: "Grupo Legantia"
tags:
  - project
  - web
---

## The project

The many-device web we use today has tought us to design in very different ways.

Designing one website for small and large screens could be very tricky. So in the agency I was working for, one of our clients camed with a big problem. They wanted to create a platform where legal professionals such as notaries, lawyers, attorneys and law students in Spain could attend networking events organized by [Grupo Legantia](http://grupolegantia.com), share their knowlage and debate in the forum, read articles published by reputed professionals, teach people through our MOOC section, post or find a job and also create professional relationships through the social network.

{% for project in site.data.projects %}
<a href="{{ project.project_web }}" target="_blank"><img src="/images/project-grupo-legantia-1.jpg" alt="Grupo Legantia's Home Page"></a>
{% endfor %}

## The process

We were a small agency of five guys, one project director, two designers, one back-end and me as the front-end, so our processes were easy enough to work in parallel while wireframing, doing information architecture, researching and designing/building websites.

We started researching the legal sector, a sober one, and we end with the idea of designing the look and feel with a white, blue and beige colours palette, also with our reserch the designers ended with a column capital maded by the G and the L of the finnal logo.

<img class="pull-image--left" src="/images/project-grupo-legantia-2.jpg" alt="Grupo Legantia's Blog">

The design team dedided to start wireframing the desktop homepage, first because our client only need a desktop platform, since its public, according to the study of the typical user who should use the website would be during working / university hours. 

In a second phase, due to budget, arise a redesign of the web to make it responsive.

We set up a four months calendar to meet client's dedline and finish the project in September. We had a few meetings with the client to know what functionality should be implemented and the needs for the platform.

Having the content already there we got straight into code.

## The tech

<img class="pull-image--right" src="/images/project-grupo-legantia-3.jpg" alt="Grupo Legantia's Forum">

In the agency, at first, when I joined them front-end code was a mess, was uncommented and a terrible to find things so I helped them to structure and comment every pice of code and tought to use CSS BEM and OOCSS classes. As well using CSS BEM and OOCSS classes architecture lends itself well to scalability and manageable code on long-running product.

We decided to use [Joomla](https://www.joomla.org) to built [Grupo Legantia](http://grupolegantia.com), a great Sass-based [CMS](https://en.wikipedia.org/wiki/Content_management_system) because it has lots of customizable modules such as payment gateways, MOOCs platforms, pre-built forums and kind of social network. And we used Bitbucket as a private repos to manage code and code reviews and versions.

As mentioned, the platform was built on top of Joomla, which was hosted on [webempresa](http://www.webempresa.com) one of the best Spanish hosting companies.

The site was not responsive—mobile-first so we started a first-step redesign in my last fifteen days. As we knew this was not a good idea, building a desktop only first and then iterate to build a responsive website but customers sent.

## Final Thoughts

Now, I would have done things another way.

First we did not have enought time for wireframing and testing the unfinished site.

Second I would have built the platform from scratch and not using Joomla as a CMS.

The awesome people that are still working at the agency on the project are tackling a massive redesign.

<!-- {% for project in site.data.projects %}
<p class="btn--hire">
  <a href="{{ project.project_web }}" target="_blank">Visit {{ project.name }}'s Web</a>
</p>
{% endfor %} -->
