---
layout: post
title: "Ironhack journal - Week[6]"
excerpt: "My Ironhack journal for Week[6], Advanced Ruby on Rails with Harek"
post_number: 14
tags:
  - Ironhack
  - TDD
  - JavaScript
  - jQuery
---

### Advanced Ruby on Rails

Week 6 was our last theory week, theory if you can say that we learn by listening, which is not. We are doers, cause we spent more than a half of our day coding.

On monday we met Harek (nobody calls him by his name), my second favourite teacher during this Bootcamp so far. He is the kind of person that motivates you with his attitude and talking about Ruby on Rails you can say that he loves his job, so him as Jake did before is the people you ever would like to have as a teacher.

<img src="/assets/images/post-irnohack-week-six-b.jpg" alt="Harek showing us something in Rails console">

<blockquote class="">
    <p>Harek showing us something in Rails console</p>
</blockquote>

We reviewed what is an API and how use it and to integrate the data in a full-stack development workflow.

We learnt that using forms to add things to our Data Base is not the fastest way to test APIs so we've been introduced to [Postman](https://www.getpostman.com){:target="_blank"}.

<blockquote class="">
    <p>Postman Cloud lets you work together on APIs, better and faster. Collaborate in real-time over your team’s shared APIs. Postman Cloud is the secure API testing and collaboration solution that developers love and trust. Create and send any HTTP request using the awesome Postman request builder. Write your own test cases to confirm response data, response times, and more!</p>
    <cite>Postman Website</cite>
</blockquote>

<img src="/assets/images/post-irnohack-week-six-c.jpg" alt="Postman Testing">

<blockquote class="">
    <p>Postman Testing</p>
</blockquote>

We tested Spotify API through Postman less time than I wanted to, but enought to learn waht is this tool for, how to change verbs and so on. We also learnt only a bit how to use RSpec to test APIs and during the afternoon we did our own API to test Sandwiches (as everyday we practice more during the afternoon about we learnt during the morning).

#### Monday recap

- APIs
- APIs testing with Postman
- APIs testing with RSpec
- Sandwicher Advanced

Tuesday was so different... we started with security a big part of Web Development and how to implement an authentication system manually, such a pain in *\*\* *s and how to authorize different profiles of users to access some parts of the web if they where logged.

After two hours or so; Harek told us about [Devise GEM](https://github.com/plataformatec/devise){:target="_blank"} and how to configure it. It was a pleasure to have so many things to do with password management and profiles access. So easy... it would be helpful to some of my classmates in their projects.

#### Tuesday recap

- Authentication
- Authorization
- Devise
- Sandwicher Advanced pt. 2
- Auth Exercise

We were introduced on Wednesday to Rails management of Data Bases, how it does things behind the scenes and how `add_column` or remove them via Rails console and what data types to use in specific use cases. We also learnt how SQL manages same things as Rails does but using some SQL specific commands.

#### Wednesday recap

- ActiveRecord & SQL
- Auction site & SQL
- StarCraft matches API exercise

Last day with Harek taught us how to deploy our own [Heroku APP](https://www.heroku.com){:target="_blank"}.

### Git CLI usage

We also learnt about Git Branches, so I did a small recap of commands to use

`git checkout <branch>` => changes from the current branch to the <branch>

`git checkout -b <branch>` => creates and changes to a new branch (-b) creates the new branch

`git branch -d <branch>` => deletes the <branch> (you can only do this after merging it)

`git branch -D <branch>` => deletes the <branch> (you can do this without merging it)

`git rebase branch_from_where_the_new_branch_cames` => Reapply commits on top of another base tip - [Rebase](https://git-scm.com/docs/git-rebase){:target="_blank"}

`git push origin <branch>` => A branch is not available to others unless you push the branch to your remote repository

`git diff <source_branch> <target_branch>` => Before merging changes, you can also preview them by using

`git push origin master` => pushes the code to GitHub

`git push heroku master`=> pushes the code to Heroku

#### Thursday recap

- Advanced Git
- Heroku Deployment

Friday we did a BBQ Planner to help people organize barbecues but it's got a few problems and after ending the class we went to a Scape Room. A fun experience helping each other to win Raúl, Marcos, Tristán, Fernanda and Reinier!

<img src="/assets/images/post-irnohack-week-six-d.jpg" alt="Group Photo at the Scape Room">

<blockquote class="">
    <p>Group Photo at the Scape Room</p>
</blockquote>

#### Friday recap

- [BBQ Planner]({{ site.github }}/Ironhack/tree/master/Week%206/Day%205){:target="_blank"}

### GEMS

- [Paperclip](https://github.com/thoughtbot/paperclip){:target="_blank"} - (files management)
- [Imagemagick](https://github.com/ImageMagick/ImageMagick){:target="_blank"} - (image management)
- [Figaro](https://github.com/laserlemon/figaro){:target="_blank"} - (simple Rails app configuration)
- [Devise](https://github.com/plataformatec/devise){:target="_blank"} - (Flexible authentication solution for Rails with Warden)
- [bcrypt](https://github.com/codahale/bcrypt-ruby){:target="_blank"} - (Ruby binding for the OpenBSD bcrypt() password hashing algorithm, allowing you to easily store a secure hash of your users' passwords)

### Introduction to React

Saturday we went back to have an introduction to React by Javi Velasco our JavaScript teacher. I cant wait to finish Ironhack's Bootcamp and start playing with React again and learn how to use it.

<img src="/assets/images/post-irnohack-week-six-a.jpg" alt="Javi Velasco teaching us React">

<blockquote class="">
    <p>Javi Velasco teaching us React</p>
</blockquote>

### React resources

- [React](https://facebook.github.io/react){:target="_blank"}
- [JSX](https://jsx.github.io){:target="_blank"}
- [Redux](http://redux.js.org)
- [webpack](https://webpack.github.io){:target="_blank"}
- [Browserify](http://browserify.org){:target="_blank"}
- [ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla){:target="_blank"}

Next week starts the hard part. Final project is comming.

Until next post.
