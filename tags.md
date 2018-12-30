---
layout: list
page_class: tags
---

<!-- Get the tag name for every tag on the site and set them
to the `site_tags` variable. -->

{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}

<!-- `tag_words` is a sorted array of the tag names. -->

{% assign tag_words = site_tags | split:',' | sort %}

<!-- Build the Page -->
<h2>Topics I've written about:</h2>

<!-- List of all tags -->
<ul class="tags">
  {% for item in (0..site.tags.size) %}{% unless forloop.last %}
    {% capture this_word %}{{ tag_words[item] }}{% endcapture %}
    <li>
      <a href="#{{ this_word | cgi_escape }}" class="tag">{{ this_word }}
        <span>({{ site.tags[this_word].size }})</span>
      </a>
    </li>
  {% endunless %}{% endfor %}

</ul>
<!-- Posts by Tag -->


{% for item in (0..site.tags.size) %}{% unless forloop.last %}
{% capture this_word %}{{ tag_words[item] }}{% endcapture %}
<ul class="articles-list">
    <h3 id="{{ this_word | cgi_escape }}">{{ this_word }}</h3>
    {% for post in site.tags[this_word] %}
        {% if post.title != null %}
            {% if post.lang %}
                    <article class="article is-active" data-lang="{{ post.lang }}">
                {% else %}
                    <article class="article is-active">
                {% endif %}
                        <a class="article__link" href="{{ post.url }}" lang="es">
                            <time class="article__time" datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date: "%b %-d %Y" }}</time>
                            <h4 class="article__subtitle">{{ post.title }}</h4>
                        </a>
                    </article>
            {% endif %}
        {% endfor %}
</ul>
    {% endunless %}
{% endfor %}

