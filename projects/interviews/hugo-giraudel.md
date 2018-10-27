---
layout: interview
title: "Hugo Giraudel"
---
<img class="" src="/assets/images/portrait-hugo-giraudel.jpg" alt="Photo Hugo Giraudel"/>
{% if page.title %}
  <h1 class="">{{ page.title }}</h1>
{% endif %}

## To all those who have not meet you yet, how do you describe yourself?

My name is Hugo. I am a French frontend developer about to turn 24 and living in Berlin, Germany. I am working at [Edenspiekermann](http://edenspiekermann.com), where I can play with HTML, CSS (Sass & CSS Modules) and JavaScript (React) on a daily basis.

## When you started developing, what were some common mistakes you made along the way?

I think my biggest problem, as for any junior developer, was to over-engineer everything. More than once, I have been trying to be too smart about a problem and ended up with a solution that could have been way simpler. Thankfully, I learnt to go for the easy solution over the years.

Another mistake, again very tied to the unexperience, is to rush into the code. When building something, coding is actually not that a big part of the bigger picture. It is tempting to get started right away but is often a bad decision. Taking some time to thing it through before getting started prevents doing things in a poor way.

## Frontend seems to be easy until you start to learn. How do you face the challenge of learning new things?

Learning new things is actually what makes our profession fun. It is because we can always learn something new (especially given how fast things are going these days) that frontend development is super interesting.

That being said, I tend to learn what I want to learn, and not necessarily what I should learn. For instance, I should probably learn more about SVG as it is a very powerful technology that is present in basically any frontend stack, yet I recently decided to learn about [Redux](http://rackt.org/redux/), even if I could do without it. We learn what we fancy learning, and there is no point in trying to enforce something to our brain. It will come when it will come.

## What would you qualify as the top few problems facing developers today?

Complexity, compatibility and performance.

Complexity, because the amount of tools and technologies we have to deal with is getting much and much bigger. Even a few years back only, we use to run with HTML, CSS, JavaScript and a task runner ([Grunt](http://gruntjs.com/), [Gulp](http://gulpjs.com/) or whatever), and that was pretty much it. You’d just pack all these things in your big ol’ framework and be done with it! Now we have [Babel](http://babeljs.io/), [webpack](https://github.com/webpack/webpack), [React](https://facebook.github.io/react/index.html), [Autoprefixer](https://github.com/postcss/autoprefixer), [Sass](http://sass-lang.com/), [CSS Modules](http://glenmaddern.com/articles/css-modules), [PostCSS](https://github.com/postcss/postcss), and what else. It is getting out of control, it can be overwhelming, but it is a part a big part of our daily job.

Compatibility, and it really always has been a big issue in frontend development. It started with (and still really much is about) browsers, and how they all understand different things from specifications, implement different things, making developers’ life very hard, which ends up harming the user. And then came responsive web design, and the bazillion of various viewport sizes we have to deal with. Compatibility has always been and will probably always be one of the largest challenges of frontend development. Thankfully, we are getting better are dealing with it, and we no longer claim “Best viewed in …”. Or do we? :)

And performance, because this is a neverending story. Before mobile became a thing, I remember (some) sites being slow as hell. We soon realised that a site has to be fast in order to be good. And now it’s not that much about making it fast for your brand new iPhone, it’s about making it quick so that these people on the other side of the world, stuck on shitty mobiles and crappy 2G connection can access content, because this is the only way for them to access internet. This is a great challenge, but it is a tough one. Performance is hard.

## How would you recommend somebody to start learning web development?

Start with a project. Seriously, do not “learn web development” to learn web development. You will get frustrated very quick, and will drop in no time. Learn in order to build something you care about. Whatever it is! It could be your own website, an app for your cooking recipes, a sweet video game or a way for you to keep track and rate all the burger places you have ever tried. As long as it is something you want to build.

Then, prepare for failure. There will be a massive amount of failure, disappointment and frustration. You will not find a single developer that did not burn in a hot rage because something that *should* work did not. It happens to everybody, everyday. We just learn to deal with this kind of things. It is the way we get better.

Finally, get help. Try things, fail and if you end up being stuck, ask a friend of yours to help you. Not to do it for you; just to give you some hints; to sit with you and tell you what could go wrong with your way of doing. Even when everything works fine, ask somebody to review the code for you. There are always things to improve; it is a rabbit hole.

## What are the things you would have known when you first started?

That it was this much fun. I would have probably started sooner. :)

## When starting a new project, if you feel stuck where do you look for inspiration?

“Inspiration” is a strange word to me. In my opinion, this is very much tied to design. I do not need inspiration to make something work; I need a solution. Now if “inspiration” indeed means “solution”, I just ask Google. Which asks Stack Overflow. Stack Overflow has all the answers. And if it’s not on Stack Overflow, well… I guess there is Twitter left.

## What was your first development job and how you faced it?

My very first position as a 19 year old developer was an internship in a very small company of 3 persons focused on print design for outdoor activities, events and businesses. I was in charge of setting up a WordPress site for the company. It was bad, obviously but not as bad as a first site can get.

## What was the most challenging project you ever faced and why?

I have litterally no idea. I guess all projects are challenging in one way or the other. I remember spending 3 nights in a row writing [SassyJSON](https://github.com/HugoGiraudel/SassyJSON), a JSON parser entirely made out of Sass (no programming language such as Ruby or JavaScript). I basically converted the Java parser from Firefox to Sass, and it was challenging. Because Sass is not made for this, obviously. Very fun though (not meant for production by the way).

## Can you describe your workflow when you create HTML, CSS and JavaScript from scratch?

It really depends on what I am trying / asked to build. At Edenspiekermann, we usually go with Sass (node-sass powered) for the CSS layer (although I would like to try to push CSS Modules a bit more) compiled with Gulp. When then use Gulp for other things as well, such as SVG spriting, code linting, test running, and so on. On the JavaScript side, most of our projects are running React, through webpack. Long story short: a Gulpfile (or simply npm scripts if I can skip Gulp altogether) and npm dependencies is usually my way to go.

## What excites you most these days?

I am getting more and more into the JavaScript world. I don’t find CSS challenging enough anymore. It will come back eventually, but unless I end up writing CSS for a massive code base, there is nothing really interesting for me there. On the plus side, JavaScript is much deeper than CSS and I find it much more challenging (hence fun) on a daily basis. Currently diving into React and Redux.

## What is the most important thing that you’ve learned?

Simple trumps DRY (*Don’t Repeat Yourself*). Sometimes, if not often, a simple way is much better than a complex or obscure solution that saves a few lines. Not everything needs to be abstracted. Not everything needs to handle all the edge cases. Going simple is nice. Smart code is harmful.

## Do you have any favorite books, videos, or resources that you could share with the readers?

On the CSS side, I would highly recommend *CSS Secrets* from Lea Verou. Definitely the best book ever written on CSS, although probably not suited for beginners. For JavaScript, the *You Don’t Know JavaScript* series by Kyle Simpson. Simply brilliant, for absolutely anybody, even seasoned developers.

## Do you have any advice for new developers just starting their career journey?

“It is dangerous to go alone!” — unnamed old man from the Legend of Zelda
Nobody gets good by themselves. We get good by working with other people. Have your own projects, write code, experiment, but talk to people. Ask about how to tackle issues. Ask for code reviews. Ask about their opinion. Soon enough, you’ll realise you are not the key to get better. Peers are.

## What can we expect from Hugo in the future? Anything you want to share?

Well, I am currently writing a book about Sass for beginners, published by SitePoint in the “Jump Start” collection. It should be ready by February I guess, so there is that. I will also probably get back to public speaking next year, if I can find a few opportunities. And, of course, a lot of open source. :)
