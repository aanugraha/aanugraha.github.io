---
layout: page
permalink: /publications/
title: publications
description: This page lists publications by categories in reversed chronological order. Asterisk symbols (*) indicate authors who contributed equally to an article. An up-to-date list is available on <a href="https://scholar.google.com/citations?user=j40T6joAAAAJ&hl=en">Google Scholar</a>. 
years: [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010]
nav: true
---

<div class="publications">

{% for y in page.years %}
  <h3 class="year">{{y}}</h3>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
