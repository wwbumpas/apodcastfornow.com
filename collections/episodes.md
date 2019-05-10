---
layout: page
title: Episodes
permalink: /episodes/
exclude: false
---
{%- assign isFirst = true -%}
{%- for episodes in site.episodes -%}
{%- unless isFirst -%}, {%- endunless -%}
{%- assign isFirst = false -%}
<div class="row">
  <div class="col col-collection-title" id="anchor{{episodes.number}}">
    <h2>{{ episodes.title }}</h2> <em>&#35;{{ episodes.number }}</em>
    <pre>{{ episodes.date }}</pre>
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