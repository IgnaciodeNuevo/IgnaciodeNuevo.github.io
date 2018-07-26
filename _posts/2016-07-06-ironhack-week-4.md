---
layout: post
title: "Ironhack journal - Week[4]"
excerpt: "My Ironhack journal for Week[4], Ruby on Rails with Patricia Gao"
post_date: "July 6, 2016"
post_number: 12
tags:
  - Back-end
  - Ironhack
---

### Ruby on Rails

On monday we had the opportunity to meet [Patricia Gao](https://twitter.com/patriciagao){:target="_blank"} currently working as Rails Back-end Developer at [Cabify](https://www.cabify.com/){:target="_blank"}.

She started introducing us what is [Ruby on Rails](http://rubyonrails.org){:target="_blank"}, a Ruby framework, what is cool about Rails is that it makes web applications using HTML, CSS, and JavaScript that runs on a web server.

We also learnt what is an MVC (model–view–controller) framework:

- _Model:_ stores data that is retrieved according to commands from the controller and displayed in the view.
- _View:_ generates new output to the user based on changes in the model.
- _Controller:_ can send commands to the model to update the model's state. It can also send commands to its associated view to change the view's presentation of the model.

It went from 0 to 30, now; a week before I have the feeling that this week was the best one so far, slow but consistently growing. My strategy was to learn the small but unconnected chunks of Rails and in the last few days I put the parts together and make something. That said I'm more a visual person, thats why I like more Front-end but seems that Ruby would be good for side projects.

I still need tons of practice to be able to express what is in my mind, but felt pretty good about myself. Even with a little experience of programming, I found Ruby on Rails powerful and it blew my mind.

In this journey, one of things that I have been focusing is to keep my excitement and spirit high. Seriously I still can't believe that I am actually enjoying the overall experience.

More than 50% of the program is already over while writing this blog post, we are on Wednesday of the 5th week.

One good thing about Monday morning was that we had time to ask lot of questions because we finished the lesson twenty minutes before one o'clock.

#### Monday recap

- Intro to RoR
- Our First Routes
- Views, layout and assets
- Rails Params
- Asset Pipeline for CSS / JS / Images
- Path helpers & link_to
- Lot of exercises

On Tuesday at 18:30h, I went to a non Ironhack Meetup, actually a [Front-end Developers](http://www.meetup.com/Front-end-Developers-Madrid){:target="_blank"} Madrid Meetup. They've talked about [Google Analytics](https://twitter.com/IgnaciodeNuevo/status/747843215663955968){:target="_blank"}, it was such a great event.

#### Tuesday recap

- Models
- Intro to Relational Databases
- Create and Read with Models
- Seeds
- Migrations
- Lot of exercises

On Wednesday some of the Ironhackers had a Yoga class (see photograph below), and a twenty User Experience talk (so short). As I'm not a Yoga guy, I went home to review the lesson and exercises.

<img src="/images/post-irnohack-week-four.jpg" alt="Yoga time">

#### Wednesday and Thursday recap

- Create Action (Project)
- Associations
- Nested Routes
- Create Action
- Validations
- Auctions site (the never ended project)
- Update/Delete entries (Put/Patch)
- Partials
- Delete Action
- Flash messages
- Application Helpers

On Friday I had a one-on-one meeting with Raul who gave me feedback about how I'm doing in the Bootcamp. He told me that I have typo errors and problems finding them. He also told me that I know more than I think which is something interesting to keep in mind.

I've found something interesting this week. Rails give IDs to some elements automatically and this is not a good practice! I.E:

`<input type="text" name="project[name]" id="project_name">`

We've been doing with Patricia a [Timetracking](https://github.com/IgnaciodeNuevo/Ironhack/tree/master/Week%204/timetracking) weekly project.

<blockquote class="">
    <span>The Podcast is in Spanish.</span>
</blockquote>

I've also published yesterday [WeCodeSign Podcast - 1x05](http://wecodesignpodcast.com/2016/07/05/episodio-5) about UX & UI.

I've maded a Rails Cheetsheet for everyone who likes to start with a new project.

## New project Cheetsheet

`rails new 'name_of_the_project'`=> It creates a new folder with the skeleton of the project inside

### New controller

`rails g controller 'name_of_the_controller'` => Plural, 1st in MixedCase

### New model

`rails g model "name_of_the_model"` => Singular, MixedCase

### Rake

`rake db:create` => starts the Data Base

`dake db:migrate` => Rails then adds it to an internal list of migrations that you have, so that it can tell whether they are pending or have been run already.

`rails g migration < migration_name > 'attribute:type'` => When you generate a migration yourself.

`rake db:rollback` => Destroy the migration

#### Add username to User model

`rails g migration add_username_to_users username:string`

#### Remode username to User model

`rails g migration remove_username_from_users username:string`

#### Add price to Product model

`rails g migration add_price_to_products price:float`

#### Remove price from Product model

`rails g migration remove_price_from_products price:float`

#### Add shipping details to Order model

`rails g migration add_shipping_details_to_orders user_id:integer address:string phone_number:string`

#### Remove shipping details from Order model

`rails g migration remove_shipping_details_from_orders user_id:integer address:string phone_number:string`

#### Here are some of the most used migration commands that you will see.

- add_column
- remove_column
- rename_column
- add / remove reference (We will talk about references shortly)
- create_table
- create_join_table

#### RENAME COLUMN

`rename_column :<table>, :<current_column_name>, :<new_column_name>`

`rails g migration fix_brand_name_in_cars`

So, I’m a happy Ruby developer this week.

See you in a week!
