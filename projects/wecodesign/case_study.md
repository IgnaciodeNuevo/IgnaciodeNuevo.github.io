---
layout: post
title: "WeCodeSign Podcast"
page_class: case-study
---

## The project

Podcasting was something I always liked. I use to hear many of them, I spend the time when traveling listening to <a class="link link--special" href="/resources/#podcasts/"  target="_blank" rel="noopener noreferrer">Web Development Podcasts</a> or reading <a class="link link--special" href="/resources/#books"  target="_blank" rel="noopener noreferrer">Books</a> so... Why not to start a podcast?

I thought to start one in English but as I wrote before I don't feel that confortable speaking in English.

I decided to chat about this with a friend who is Publicist and Ilustrator and decided to start one, first to force us when writing the script to investigate the _topics_ and learn new things and second to chat with developers, designers, UXers etc who otherwise we could not meet them, Spanish-speaking people we admire from other countries or cities where we live, a new kind of networking!

We send several emails to people we wanted to interview and everyone with only one exception (_because he don't want to expose himself to Internet_) said yes (_I feel amazed how web people are so close_).

<figure class="picture">
    <img src="/assets/images/proyecto-wecodesign-1.jpg" alt="Portada en iTunes de WeCodeSign.">
    <figcaption class="caption">
        <b title="encima">Encima</b>
        &mdash;iTunes de WeCodeSign cover
    </figcaption>
</figure>

## The process

Here is started digging what Podcasting platforms to be and what to do, so Gabriel started wireframing (_it is a shame not to have our first sketches, they were so ugly..._).

We figured out that our main purpose is to be at <a class="link link--special" href="https://itunes.apple.com/es/podcast/wecodesign-podcast/id1113501272?l=en"  target="_blank" rel="noopener noreferrer">iTunes</a>, <a class="link link--special" href="http://www.ivoox.com/escuchar-audios-wecodesign-podcast_al_5101204_1.html"  target="_blank" rel="noopener noreferrer">iVoox</a> and <a class="link link--special" href="http://www.spreaker.com/user/8737490"  target="_blank" rel="noopener noreferrer">Spreaker</a> and at <a class="link link--special" href="https://play.google.com/music/podcasts/publish?u=0&hl=es"  target="_blank" rel="noopener noreferrer">Google Podcast</a> when available in Spain and to have good sound quality so we recorded our first episode which I'm 70% satisfied because is the first one but to be honest we have learned a lot from our mistakes.

## The tech

We decided to use <a class="link link--special" href="https://sourceforge.net/projects/audacity/" target="_blank" rel="noopener noreferrer">Audacity</a> as our Free Audio Editor, <a class="link link--special" href="https://www.podtrac.com/" target="_blank" rel="noopener noreferrer">Podtrack</a> as our stadistics tracker and bought <a class="link link--special" href="http://www.ecamm.com/mac/callrecorder/" target="_blank" rel="noopener noreferrer">Call Recorder</a> for Skype recording.

With no idea we started asking some friends what to use and Gabriel decided to buy a <a class="link link--special" href="http://www.bluemic.com/products/yeti/" target="_blank" rel="noopener noreferrer">Blue Yeti</a> a condenser microphone recommended by <a class="link link--special" href="http://emilcar.fm/" target="_blank" rel="noopener noreferrer">Emilcar.fm</a> a Spanish Podcaster because Gabriel didn't like the idea to buy a Mixer and a dynamic microphone. What is de difference you might ask, well, the condenser one is really sensitive so sensitive that everytime somene yells near my Co-Host house or someone on the floor below or someone that opens the water tap, the mic captures the sound. I had the terrible idea to start Podcasting with my <a class="link link--special" href="http://en-us.sennheiser.com/professional-gamer-headset-super-noise-cancellation-pc-350" target="_blank" rel="noopener noreferrer">Sennheiser PC 350</a> which sounds good on Skype but as devil when I edit.

I want to thank Emilio Cano from <a class="link link--special" href="https://twitter.com/emilcar"  target="_blank" rel="noopener noreferrer">Emilcar.fm</a>, Joss Green from <a class="link link--special" href="https://twitter.com/jossgreen"  target="_blank" rel="noopener noreferrer">Punto Primario</a>, Isra from <a class="link link--special" href="https://twitter.com/diogenesdigita1"  target="_blank" rel="noopener noreferrer">Diógenes Digital</a> and Jesús from <a class="link link--special" href="https://twitter.com/Jarypod"  target="_blank" rel="noopener noreferrer">Jarras y Podcast</a> for all the help they have given us.

I decided to buy some equipment:

<ul>
	<li><a class="link link--special" href="https://www.amazon.es/Shure-SM57LCE-micr%C3%B3fono-profesional-sm-57lc/dp/B000CZ0R3S?ie=UTF8&ref_=pe_386191_132656271_TE_item" target="_blank" rel="noopener noreferrer">Shure SM57 Microphone</a></li>
	<li><a class="link link--special" href="https://www.amazon.es/Behringer-Mesa-mezclas-Xenyx-302USB/dp/B005EHILV4?ie=UTF8&ref_=pe_386191_132656271_TE_item" target="_blank" rel="noopener noreferrer">Behringer - Mixer Xenyx 302USB</a></li>
	<li><a class="link link--special" href="https://www.amazon.es/Soporte-micr%C3%B3fono-sobremesa-negro-Cablematic/dp/B00FDX3VXW?ie=UTF8&ref_=pe_386191_132656271_TE_item" target="_blank" rel="noopener noreferrer">Table stand for Mic</a></li>
	<li><a class="link link--special" href="https://www.amazon.es/Lindy-6042-Cable-hembra-metros/dp/B000QUQKLM?ie=UTF8&ref_=pe_386191_132656271_TE_item" target="_blank" rel="noopener noreferrer">Lindy 6042 Audio XLR cable</a></li>
	<li><a class="link link--special" href="https://www.amazon.es/Wanway-Filter-Filtro-Micr%C3%B3fono-Estudio/dp/B00K5NH0KA?ie=UTF8&ref_=pe_386191_132656271_TE_item" target="_blank" rel="noopener noreferrer">Wanway Anti Pop Sopro Filter</a></li>
</ul>

In the web technologies I decided to use <a class="link link--special" href="http://jekyllrb.com" target="_blank" rel="noopener noreferrer">Jekyll</a> as our platform to get hosted at <a class="link link--special" href="https://github.com/WeCodeSign/wecodesign.github.io" target="_blank" rel="noopener noreferrer">GitHub Pages</a>. It solves some problems we had, first it is a static generator website which means we have no need of databases which is more secure as we will serve static assets like .mp3 files hosted at <a class="link link--special" href="https://archive.org/" target="_blank" rel="noopener noreferrer">Archive.org</a> with a Creative Commons <a class="link link--special" href="http://creativecommons.org/licenses/by-nd/3.0/" target="_blank" rel="noopener noreferrer">Attribution-No Derivative Works 3.0</a> liscence.

Looking for help at <a class="link link--special" href="https://talk.jekyllrb.com/" target="_blank" rel="noopener noreferrer">Jekyll Talk</a> someone give me the idea of using liquid templating engine with my HTML but as far as I need to use as background-image I had to add a <code>forloop</code> for every image.

I added a <code>style</code> element to allow embed style information on each loop.

<figure class="picture">
    <img src="/assets/images/proyecto-wecodesign-2.jpg" alt="WeCodeSign's screenshot.">
    <figcaption class="caption">
        <b title="encima">Encima</b>
        &mdash;Code of WeCodeSign
    </figcaption>
</figure>

This is a terrible idea because it adds a <code>style</code> element for _every_ new episode of our Podcast but solves the problem.

## Final Thoughts

I'm happy with this project.

I wouldn't change anything except for possible code errors or accesibility issues.

<a class="link link--special" href="http://wecodesign.github.io/" target="_blank" rel="noopener noreferrer">Listen my Podcast</a>
