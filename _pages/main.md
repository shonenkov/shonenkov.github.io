---
title: " "
layout: splash
permalink: /
date: 2016-03-23T11:48:41-04:00
header:
  overlay_image: /assets/images/main/header.jpg
  overlay_filter: rgba(255, 255, 0, 0.05)
  caption: "Photo credit: [**@shonenkov**](https://instagram.com/shonenkov)"
excerpt: ""
intro: 
  - excerpt: "Hi everyone! My name is Alex Shonenkov. It's my personal website."
    url: "/about/"
    btn_label: "Read More About Me"
    btn_class: "btn--warning"
feature_projects:
  - image_path: /assets/images/main/projects.jpg
    alt: "placeholder projects"
    title: "My Projects"
    excerpt: 'Here you can find my work'
    url: "/projects/"
    btn_label: "Read More"
    btn_class: "btn--warning"
feature_hobbies:
  - image_path: /assets/images/main/hobbies.jpg
    alt: "placeholder hobbies"
    title: "Hobbies"
    excerpt: 'Here you can find my hobbies'
    url: "/hobbies/"
    btn_label: "Read More"
    btn_class: "btn--warning"
feature_blog_posts:
  - image_path: /assets/images/main/blog-posts.jpg
    alt: "placeholder blog"
    title: "Blog Posts"
    excerpt: 'Here you can find my personal blog'
    url: "/blog-posts/"
    btn_label: "Read More"
    btn_class: "btn--warning"
---

{% include feature_row id="intro" type="center" %}

{% include feature_row id="feature_projects" type="left" %}

{% include feature_row id="feature_hobbies" type="right" %}

{% include feature_row id="feature_blog_posts" type="left" %}
