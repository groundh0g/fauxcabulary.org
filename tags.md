---
layout: page
title: Tags
showTitle: true
---

This is a list of the tags that are used in the posts. They're listed alphabetically.

{% assign sorted = site.tags | sort %}
{% for tag in sorted %}
{% assign tagName = tag | first | uri_escape | downcase %}
### <a name="{{ tagName | slugify }}-ref"></a><a href="{{ site.baseurl }}tags#{{ tagName | slugify }}-ref"><i class="fa fa-link"></i></a> {{ tagName | capitalize }} <small>(&times;{{ tag | last | size }})</small>
{% for post in site.tags[tagName] | sort: "title" %}
* [{{ post.title }}]({{ site.baseurl }}{{ post.url }})
{% endfor %}
{% endfor %}