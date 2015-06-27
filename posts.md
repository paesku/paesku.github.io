---
layout: page
title: Articles
permalink: /articles/
draft: true
---
<div class="home">
  <ul class="list-unstyled">
    {% for post in site.posts %}
      <li class="post-preview">
        <a href="{{ post.url }}" >
            <h2>{{ post.title }}</h2>
            <p>{{post.abstract}}</p>
        </a>
      </li>
    {% endfor %}
  </ul>
</div>
