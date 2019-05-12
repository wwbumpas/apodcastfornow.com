---
layout: page
title: Episodes
permalink: /episodes/
exclude: false
order: 1
---
{%- assign isFirst = true -%}
{%- for episodes in site.episodes -%}
{%- unless isFirst -%}, {%- endunless -%}
{%- assign isFirst = false -%}
<div class="row">
  <div class="col col-collection-title" id="anchor{{episodes.number}}">
    <h1>{{ episodes.title }}</h1>
    {%- assign date_format = site.minima.date_format | default: "%B %-d, %Y" -%}
    <p><time datetime="{{ episodes.date }}">{{ episodes.date | date: date_format }}</time></p>
    <hr>
  </div>
</div>
<div class="row">
  <div class="col-md-6 col-sm-12">
    <strong>Notes</strong>
    <p>{{ episodes.notesLong }}</p>
  </div>
  <div class="col-md-6 col-sm-12">
    <strong>Credits</strong>
    <ul>
    {%- for credits in episodes.credits -%}
      <li>{{ credits }}</li>
    {%- endfor -%}
    </ul>
  </div>
</div>
{%- endfor -%}