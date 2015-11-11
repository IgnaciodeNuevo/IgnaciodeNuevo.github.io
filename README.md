# IgnaciodeNuevo.com

This is the uncompiled source from [my site](http://ignaciodenuevo.com) which is built on [Jekyll](http://jekyllrb.com), which was originally a fork of [Hugo Giraudel's site](https://github.com/HugoGiraudel/hugogiraudel.github.com).

If you find any bug or want to make a suggestion, please open an issue on the [bug tracker](https://github.com/IgnaciodeNuevo/ignaciodenuevo.github.com/issues).

Despite being open sourced, all code and content remain copyright of Ignacio Villanueva and all the articles licensed under [CC BY-NC-SA 4.0](http://creativecommons.org/licenses/by-nc-sa/4.0/) and code licensed under [The MIT License (MIT)](/license/index.md).

You'll need to get Jekyll running every time you make changes to the project.

## File Structure

The `_site` folder contains the generated HTML files. **Do not make any changes here**. They will get overwritten every time Jekyll builds the site. All the folders beginning with an underscore do not get output into the `_site` folder by Jekyll.

* **_config** Settings for Jekyll.
    * **_includes** Contains the apologize, footer, head, header, post-list, reading_time, recommendations and sidebar.
    * **_layouts** Jekyll files for templating.
    * **css** for css files.
    * **js** for javascript files.
    * **style**
        * **_sass** There's a sass file for every pattern. When adding new sass patterns, you'll need to import these into the `main.css` file.
        * **main.scss** imports all the sass files into one file. This is output in css/main.css
    * **index.html** The Website index.
* **_site** The generated site files. **do not edit!**
* **CNAME** You'll want to change this if you want to host your style guide on GitHub Pages using your own domain.
* **README.md** Documentation (this)
* **favicon.ico** Replace with your own favicon
* **icon.png** Used for some device home screens

## Thanks

Thanks to [@anna_debenham](http://twitter.com/anna_debenham) for letting me use her README.md with minor modifications to adapt it to my site.
