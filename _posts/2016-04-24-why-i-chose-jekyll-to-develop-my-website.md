---
layout: post
title: "Why I chose Jekyll to develop my website"
tags:
  - Frontend
  - Personal
lang: en
page_class: post
---

Today I'll be sharing why I chose Jekyll to develop my website and why it wasn't trivial for me.

I had problems, the biggest one was I want to <a class="link link--special" href="/2015/11/25/hello-world">write more</a> in English so I had the idea to start a development blog, where people could find me, read about my <a class="link link--special" href="/projects">projects</a> and my <a class="link link--special" href="/blog">blog</a> on frontend.

First I thougt to start blogging in WordPress, but after using it for some projects I felt like my idea of frontend and web development is to make things from scratch when possible.

I like making things, not using <a class="link link--special" href="http://getbootstrap.com/">Boostrap</a> or other frameworks which are good tools for some people or to solve some problems but not for this one. I made a list of things I would like to have after dismissing few ideas:

1 Blog
2 Projects
3 Interviews with web developers
4 About
5 Twitter
6 Github
7 RSS Feed
8 Email
9 FAQ
10. Search
11. Resources
12. Styleguide _(pending)_

I realized that having this _sections_ would easy be managed via static files so I started looking for a <a class="link link--special" href="https://www.staticgen.com">tool</a> and found one, <a class="link link--special" href="https://jekyllrb.com">Jekyll</a> a Static Site Generator, which isn’t officially supported on Windows but it is still possible to <a class="link link--special" href="http://jekyll-windows.juthilo.com/">run it</a> as I did because I use Windows 10 for now.

Having only static files on the server means its fast and secure and with no needs of data bases to serve assets dynamically.

## Advantages of static site generators over dynamic sites

While Jekyll manages your content, it is not a CMS in the way Wordpress is. Since there is no back-end GUI, Jekyll relies on hand coding which I love. This has its pros and cons depending on the site you want to build.

- _Speed_ – your website will perform much faster, as the server does not need to parse any content.
- _Security_ – your website will be much secure, since there is nothing that can be exploited server side.
- _Simplicity_ – there are no databases or programming languages to deal with. HTML and CSS is enough.
- _Flexibility_ – you know exactly how your site works, as you made it from scratch.

## How Jekyll works

Jekyll then works its magic by combining <a class="link link--special" href="http://yaml.org">YAML</a> front matter with the <a class="link link--special" href="https://shopify.github.io/liquid">Liquid</a> Tempting System. Jekyll will search for files with YAML front matter, any file that has it will be able to use variables from Liquid. That, in combination with your HTML, CSS, and JS files will tell the site how to look and behave.

Finally the importance of its modularity helping you follow the <a class="link link--special" href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself">DRY</a> principle of programming from a folder that begins with an underscore like so:

    _includes
    	layout-header.html
    	layout-footer.html
    	section-head.html
    	component-reading.html

Furthermore, any time I want to make a change to either, I only have to update it in one place and it’s pushed out to the entire site.

<a class="link link--special" href="/assets/images/post-sublimetext-2--fullscreen.jpg">
	<img src="/assets/images/post-sublimetext-2.jpg" alt="Sublime Text Editor">
</a>

Of course, dynamic sites have their advantages as well, with no back-end GUI tu manage updates, plugins and for no tech-savvy people would be more difficult to admin the website, write content and push changes to the server.

## Github Pages to the rescue

<a class="link link--special" href="https://pages.github.com">GitHub Pages</a> accepts static HTML but can’t execute languages like PHP, or use a database in the way you’re probably used to, so you’ll need to output static HTML files. You can host your static website for _free_ directly from your <a class="link link--special" href="{{ site.github }}/ignaciodenuevo.github.io">Github Repo</a>.

## Iterating is the key

I then spent the following 7 months <a class="link link--special" href="{{ site.github }}/ignaciodenuevo.github.io/commits">iterating and iterating</a>. During this period, other <a class="link link--special" href="/projects/">projects</a> fell by the wayside as I got distracted by yet another feature addition, performance improvement or design detail.

I have lot of things to do:

- _Refactor lot of CSS classes which aren't ok_. Classes aren't well suited defining the HTML structure.
- _Want to help people with disabilities_ to navigate my site in a better way, making it accesible which is not.
- _Optimize my website assets and code_ to get

<a class="link link--special" href="https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fignaciodenuevo.com&tab=desktop">100/100 on Google Pagespeed</a> which I have not.

<div>
    <h4>Jekyll resources and further reading</h4>
    <ul>
        <li><a class="link link--special" href="http://jekyllrb.com">Jekyll Official Website</a></li>
        <li><a class="link link--special" href="http://jekyll-windows.juthilo.com">Jekyll on Windows</a></li>
        <li><a class="link link--special" href="http://yaml.org">YAML</a></li>
        <li><a class="link link--special" href="https://shopify.github.io/liquid">Liquid</a></li>
        <li><a class="link link--special" href="https://docs.cloudcannon.com/editing/front-matter">Front Matter</a></li>
        <li><a class="link link--special" href="http://daringfireball.net/projects/markdown">Markdown Official Website</a></li>
        <li><a class="link link--special" href="https://pages.github.com">GitHub Pages</a></li>
        <li><a class="link link--special" href="http://jekyll.tips">Jekyll Tips</a></li>
        <li><a class="link link--special" href="http://jekyllthemes.org">Jekyll Themes</a></li>
        <li><a class="link link--special" href="http://jekyllsnippets.com/">Jekyll Snippets</a></li>
        <li><a class="link link--special" href="https://www.smashingmagazine.com/2016/02/content-modeling-with-jekyll">Content Modeling With Jekyll</a></li>
        <li><a class="link link--special" href="https://pages.github.com/versions">Dependency Versions</a></li>
        <li><a class="link link--special" href="https://help.github.com/articles/using-a-custom-domain-with-github-pages">Using a custom domain with GitHub Pages</a></li>
        <li><a class="link link--special" href="https://help.github.com/articles/troubleshooting-jekyll-builds">Troubleshooting Jekyll builds</a></li>
    </ul>
</div>

## What now?

Well, you can grab the <a class="link link--special" href="/feed.xml">RSS feed</a>, follow me on <a class="link link--special" href="{{ site.twitter }}">Twitter</a> and keep an eye on the project on <a class="link link--special" href="{{ site.github }}/ignaciodenuevo.github.io">GitHub</a>.

Thanks, Ignacio.
