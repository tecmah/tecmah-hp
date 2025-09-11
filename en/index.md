---
layout: home
title: TECMAH Inc.
description: Startup specializing in AI, Data Analytics & Product Management Support
image: assets/images/hero-bg.jpg
nav-menu: true
permalink: /en/
---

<div id="main">
  <!-- Hero Section -->
  <section id="hero" class="major">
    <div class="inner">
      <header class="major">
        <h1>{{ site.company.name_en }}</h1>
      </header>
      <div class="content">
        <p style="font-size: 1.5em; margin-bottom: 2em;">{{ site.company.tagline_en }}</p>
        <p class="lead">We support digital transformation of companies through data-driven decision making and effective product management.</p>
        <ul class="actions">
          <li><a href="#mission" class="button next scrolly">Learn More</a></li>
          <li><a href="/en/contact/" class="button primary">Contact Us</a></li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Mission Section -->
  <section id="mission">
    <div class="inner">
      <header class="major">
        <h2>Our Mission</h2>
      </header>
      <p>TECMAH Inc. is a startup that supports corporate decision-making through AI technology and data analysis, and realizes business growth through effective product management.</p>
      <p>We maximize business value for our customers through data-driven strategic approaches and practical PM/PdM support.</p>
    </div>
  </section>

  <!-- Services Section -->
  <section id="services" class="spotlights">
    <section>
      <div class="content">
        <div class="inner">
          <header class="major">
            <h3>AI & Data Analytics Support</h3>
          </header>
          <p>Comprehensive support for AI adoption from machine learning algorithm development to operation. We cover data analysis infrastructure construction, predictive model development, and AI system optimization.</p>
          <ul class="actions">
            <li><a href="/en/services/" class="button">Learn More</a></li>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <div class="content">
        <div class="inner">
          <header class="major">
            <h3>Product Management Support</h3>
          </header>
          <p>From strategy formulation to execution, we provide skills and processes necessary for PdM/PM. Comprehensive support including user research, requirements definition, development process management, and release strategy.</p>
          <ul class="actions">
            <li><a href="/en/services/" class="button">Learn More</a></li>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <div class="content">
        <div class="inner">
          <header class="major">
            <h3>Data-Driven Strategy Consulting</h3>
          </header>
          <p>Support for building and operating data-driven decision-making frameworks. Achieve continuous improvement through KPI design, data visualization, and performance analysis.</p>
          <ul class="actions">
            <li><a href="/en/services/" class="button">Learn More</a></li>
          </ul>
        </div>
      </div>
    </section>
  </section>

  <!-- Case Studies Section -->
  <section id="case-studies" class="case-studies">
    <div class="inner">
      <header class="major">
        <h2>Our Track Record</h2>
      </header>
      <div class="grid-wrapper">
        {% for case in site.case_studies %}
        <div class="col-4">
          <div class="case-study-item">
            <h3 class="case-study-title">{{ case.title.en }}</h3>
            <p class="case-study-description">{{ case.description.en }}</p>
            <p class="case-study-result">{{ case.result.en }}</p>
          </div>
        </div>
        {% endfor %}
      </div>
      <ul class="actions">
        <li><a href="{{ '/en/work/' | relative_url }}" class="button">View Case Studies</a></li>
      </ul>
    </div>
  </section>

  <!-- Mid-page CTA Section -->
  <section id="mid-cta" class="main special">
    <div class="inner">
      <header class="major">
        <h2>We Support Your Business Growth</h2>
      </header>
      <p>If you have any concerns about AI, data utilization, or product management, please feel free to contact us.</p>
      <ul class="actions uniform">
        <li><a href="{{ site.cta.free_consultation.url_en }}" class="button primary">{{ site.cta.free_consultation.text_en }}</a></li>
        <li><a href="/en/about/" class="button">About Us</a></li>
      </ul>
    </div>
  </section>

  <!-- Final CTA Section -->
  <section id="final-cta" class="main special">
    <div class="inner">
      <header class="major">
        <h2>Ready to Get Started?</h2>
      </header>
      <p>Let us know about your challenges in our free consultation. We'll propose the optimal solution for your business.</p>
      <ul class="actions uniform">
        <li><a href="{{ site.cta.free_consultation.url_en }}" class="button primary">{{ site.cta.free_consultation.text_en }}</a></li>
        <li><a href="/en/contact/" class="button">Contact Us</a></li>
      </ul>
    </div>
  </section>
</div>