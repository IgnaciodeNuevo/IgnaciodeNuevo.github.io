# IgnaciodeNuevo.com

This is the uncompiled source from [my site](http://ignaciodenuevo.com) which is built on [Jekyll](http://jekyllrb.com), which was originally a fork of [Hugo Giraudel's site](https://github.com/HugoGiraudel/hugogiraudel.github.com).

Code comments shamelessly borrowed and refactored a little from [Hugo Giraudel's site code](https://github.com/HugoGiraudel/hugogiraudel.github.com), (this is for me one of the most difficult things to do, as well as naming classes).

If you find any bug or want to make a suggestion, please open an issue on the [bug tracker](https://github.com/IgnaciodeNuevo/ignaciodenuevo.github.com/issues).

Despite being open sourced, all code and content remain copyright of Ignacio Villanueva and all the articles licensed under [CC BY-NC-SA 4.0](http://creativecommons.org/licenses/by-nc-sa/4.0/) and code licensed under [The MIT License (MIT)](/license/index.md).

You'll need to get Jekyll running every time you make changes to the project.

## File Structure

The `_site` folder contains the generated HTML files. **Do not make any changes here**. They will get overwritten every time Jekyll builds the site. All the folders beginning with an underscore do not get output into the `_site` folder by Jekyll.

* **_config** Settings for Jekyll.
		* **_data** Contains a kind of static data base of dev-interviews, nav and projects.
    * **_includes** Contains the apologize, footer, head, header, motto, post-list, reading_time, recommendations and sidebar.
    * **_layouts** Jekyll files for templating.
    * **_posts** Contains all the compiled posts and technical articles.
    * **_sass** Contains all the uncomipled file patterns.
    * **about** Contains my about page.
    * **css** for css files.
   		  * **_sass** There's a sass file for every pattern. When adding new sass patterns, you'll need to import these into the `main.css` file.
        * **main.scss** imports all the sass files into one file. This is output in css/main.css
    * **developers-interviews** Contains the Developers Interviews I have done to some of the most amazing web developers arround the globe! (WIP).
    * **FAQ** Contains questions that may help you before sending me an email.
    * **images** Contains all images and icons.
    * **index.html** The Website index.
    * **js** for javascript files.
    * **license** Contains the code license.
    * **projects** Contains most relevant projects I have done.
* **_site** The generated site files. **do not edit!**
* **CNAME** You'll want to change this if you want to host your style guide on GitHub Pages using your own domain.
* **README.md** Documentation (this)
* **favicon.ico** Replace with your own favicon
* **icon.png** Used for some device home screens
* **humans.txt** A TXT file that contains the information about the people who have been involved in the website.
* **robots.txt** Robots exclusion standard file.

## Thanks

Thanks to [@anna_debenham](http://twitter.com/anna_debenham) for letting me use her README.md with minor modifications to adapt it to my site.
