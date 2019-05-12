---
layout: page
title: Blog
permalink: /blog/
exclude: true
order: 0
---
{% for post in site.posts limit:3 %}
<article itemscope itemtype="http://schema.org/BlogPosting">
  <div class="row">
    <div class="col">
      <header>
        <h1 itemprop="name headline">{{ post.title }}</h1>
        {%- assign date_format = site.minima.date_format | default: "%B %-d, %Y" -%}
        <p><time datetime="{{ post.date }}">{{ post.date | date: date_format }}</time> by {{ post.author }}. <a href="{{ post.url | relative_url }}">Link</a>.</p>
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