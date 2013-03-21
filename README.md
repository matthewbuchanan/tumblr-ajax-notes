Tumblr Ajax Notes
=================

Most Tumblr themes support the native display of notes on each post page. The approach detailed here allows visitors to your blog to view notes (via Ajax) on index pages as well, and is recommended for intermediate to expert users.

## Introduction

In 2008, I released a plugin to display notes for any Tumblr post, just as the Dashboard does. At the time, in order to display the notes count, the script preloaded all notes for every post on the page, which was massively inefficient. In February 2009, Tumblr added custom theme tags for notes, allowing for the native display of note counts, however my plugin still required a proxy server to get around Ajax’s cross-domain limitations. With a recent change to Tumblr’s API, notes are now served from the same domain as your blog, so I’ve removed the proxy and simplified the installation instructions.

The benefit of this approach over that of most themes is the ability to display notes on the index page of your blog, not possible using the custom notes tags alone.

## Installation

In the `<head>` of your custom theme, include links to jQuery and the `jquery.tumblr-ajax-notes.js` file as follows:

```html
	<script src="http://code.jquery.com/jquery.js"></script>
	<script src="https://raw.github.com/matthewbuchanan/tumblr-ajax-notes/master/jquery.tumblr-ajax-notes.js"></script>
```

In your custom theme, for every post type, include a Notes link:

```html
	{block:NoteCount}
	    <a href="{postNotesURL}" rel="{postID}" class="notes-button">{NoteCountWithLabel}</a>
	{/block:NoteCount}
```

This link loads an HTML fragment from Tumblr containing the notes for the post (or a subset thereof). If JavaScript is disabled, the link will instead open the unstyled notes view as a new HTML page.

Near the Notes link, add a container for the imported markup:

```html
	<div class="notes-container" id="notes-{postID}">
	    <p class="loading">Loading...</p>
	    <div class="notes-loader"></div>
	</div>
```

The “Loading…” paragraph element is optional, and is hidden based on its class once the notes are loaded from the server. I styled mine with an animated spinner from [Ajaxload](http://ajaxload.info).

Add styles to your CSS for the classes `.notes-button`, `.notes-container` (and its child `ol` element containing the notes), and `.notes-hide` (the button that closes the notes container). The style for the notes-container element must be set to `display: none;` initially. If there are 15 or more notes, the button element inherits a class of `.fave`, which I’ve used to style my notes icon differently for popular posts. Here’s the bare minimum CSS:

```css
	.notes-container { display: none; }
	.notes-container ol { list-style: none; }
```

That’s it. [Email me](http://mattbu.ch) if you have feedback or encounter problems.

## Version history

**1.0g**
- Initial Github release.

**1.0**
- Now a jQuery plugin. ([Jul 7, 2010](http://matthewbuchanan.name/tumblr/ajax-notes/))

**0.9**
- Updated to use new Tumblr custom theme tags for notes. ([Jul 8, 2009](http://matthewbuchanan.name/137565830/))

**0.8**
- Initial public release. ([Jan 19, 2009](http://matthewbuchanan.name/71515023/))

## License

The Tumblr Ajax Notes source is copyright © 2013 by [Matthew Buchanan](http://matthewbuchanan.name) and released under the [WTFPL license](http://sam.zoy.org/wtfpl/).