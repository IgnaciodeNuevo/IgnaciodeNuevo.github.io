---
layout: post
title: "Escalado de tipografía en la Web"
tags:
  - Learning
  - Opinion
lang: es
page_class: post
description:
---

## ¿Por qué dedicas tiempo a la tipografía web?

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus interdum orci eget pellentesque. Nam a purus ullamcorper, malesuada ipsum eu, sagittis urna. Phasellus orci lectus, aliquam eu sem quis, luctus placerat ipsum. Donec mollis dolor lectus. Donec ut dui a mauris commodo sagittis et sed sem. In sodales urna ullamcorper ullamcorper congue. Maecenas suscipit, felis et molestie lobortis, mauris magna pulvinar sapien, sed rutrum arcu augue sit amet sapien.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus interdum orci eget pellentesque. Nam a purus ullamcorper, malesuada ipsum eu, sagittis urna. Phasellus orci lectus, aliquam eu sem quis, luctus placerat ipsum. Donec mollis dolor lectus. Donec ut dui a mauris commodo sagittis et sed sem. In sodales urna ullamcorper ullamcorper congue. Maecenas suscipit, felis et molestie lobortis, mauris magna pulvinar sapien, sed rutrum arcu augue sit amet sapien.

{% highlight scss %}

// SCSS
:root {
    font-size: 100%; // 16px
    line-height: var(--line-height-s);

    @media (min-width: $mq-m) {
        font-size: 120%;
        line-height: var(--line-height-m);
    }

    @media (min-width: $mq-xl) {
        font-size: 140%;
        line-height: var(--line-height-xl);
    }
}

// Headings font-size and line-height
h1,
h2,
h3,
h4,
h5,
h6,
.h1-like,
.h2-like,
.h3-like,
.h4-like,
.h5-like,
.h6-like {
    line-height: var(--line-height-xxs);

    @media (min-width: $mq-m) {
        line-height: var(--line-height-xs);
    }

    @media (min-width: $mq-xl) {
        line-height: var(--line-height-s);
    }
}

{% endhighlight %}
