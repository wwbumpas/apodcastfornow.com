---
layout: page
title: Blog
permalink: /blog/
exclude: false
---
{% for post in site.posts limit:3 %}
<article itemscope itemtype="http://schema.org/BlogPosting">
<div class="row">
  <div class="col col-collection-title">
    <header>
      <h2 itemprop="name headline">{{ post.title }}</h2> <a href="{{ post.url | relative_url }}">Link</a>
      <pre>{{ post.date }}</pre>
      <hr>
    </header>
  </div>
</div>
<div class="row">
  <div class="col" itemprop="articleBody">
    {{ post.content }}
  </div>
</div>
</article>
{% endfor %}
