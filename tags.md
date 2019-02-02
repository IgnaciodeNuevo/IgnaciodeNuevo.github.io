---
layout: list
page_class: tags
wrapper_class: tags-wrapper
---

<!-- Get the tag name for every tag on the site and set them
to the `site_tags` variable. -->

{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}

<!-- `tag_words` is a sorted array of the tag names. -->

{% assign tag_words = site_tags | split:',' | sort %}

<!-- Build the Page -->
<h1 class="main__title">Topics I've written about:</h1>

<!-- List of all tags -->
<div class="tags__list">
  {% for item in (0..site.tags.size) %}{% unless forloop.last %}
    {% capture this_word %}{{ tag_words[item] }}{% endcapture %}
      <a class="btn btn--fill" href="#{{ this_word | cgi_escape }}">
        {% include icons/tag.html %}
        <span>{{ this_word }} ({{ site.tags[this_word].size }})</span>
      </a>
  {% endunless %}{% endfor %}
</div>
<!-- Posts by Tag -->


{% for item in (0..site.tags.size) %}{% unless forloop.last %}
{% capture this_word %}{{ tag_words[item] }}{% endcapture %}
<ul class="articles-list">
    <div class="u-hook" id="{{ this_word | cgi_escape }}"></div>
    <h2>{{ this_word }}</h2>
    {% for post in site.tags[this_word] %}
        {% if post.title != null %}
            {% if post.lang %}
                <article class="article" lang="{{ post.lang }}">
                    <a class="article__item" href="{{ post.url }}">
                        <time class="article__time" datetime="{{ post.date }}">{{ post.date | date: "%b %-d %Y" }}</time>
                        <h4 class="article__subtitle">{{ post.title }}</h4>
                    </a>
                </article>
            {% endif %}
        {% endif %}
    {% endfor %}
</ul>
    {% endunless %}
{% endfor %}

