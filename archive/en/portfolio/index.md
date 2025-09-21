---
layout: page
title: Services
description: Generative AI enablement, product leadership, and digital transformation consulting by TECMAH
image: assets/images/services-hero.jpg
nav-menu: true
permalink: /en/portfolio/
lang: en
---

<div class="container my-5">
  <div class="row justify-content-center mb-5">
    <div class="col-lg-10">
      <span class="badge-soft">Service Lineup</span>
      <h1 class="section-heading mt-3">Three capabilities to accelerate your roadmap</h1>
      <p class="lead">From strategy and PoC to delivery and enablement, TECMAH embeds with your team to deliver impact quickly while building long-term capability.</p>
    </div>
  </div>

  <div class="row g-4 mb-6">
    {% assign localized_services = site.portfolio | where: 'lang', 'en' %}
    {% for service in localized_services %}
      <div class="col-md-4">
        <div class="service service-summary h-100">
          <div class="service-content">
            <h2 class="service-title"><a href="{{ service.permalink | relative_url }}">{{ service.title }}</a></h2>
            <p>{{ service.excerpt }}</p>
            <a class="button button-primary mt-3" href="{{ service.permalink | relative_url }}">Learn More</a>
          </div>
        </div>
      </div>
    {% endfor %}
  </div>

  <div class="row g-4 align-items-stretch mb-6">
    <div class="col-lg-6">
      <div class="contact-card h-100">
        <h2 class="section-heading">Typical engagement flow</h2>
        <ol class="mt-3">
          <li><strong>Discovery & Scoping</strong> (1-2 weeks) Clarify goals, constraints, and stakeholders.</li>
          <li><strong>Planning</strong> (1-2 weeks) Align on roadmap, KPIs, resources, and governance.</li>
          <li><strong>Delivery</strong> (2-6 months) Operate as embedded PdM/PjM to drive execution.</li>
          <li><strong>Enablement</strong> (ongoing) Institutionalize knowledge, rituals, and tooling.</li>
        </ol>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="contact-card h-100">
        <h2 class="section-heading">Common engagement themes</h2>
        <ul class="mt-3">
          <li>Generative AI use case design, PoC, and ROI measurement</li>
          <li>Data platform, MLOps, and governance operating models</li>
          <li>Product leadership for multi-team delivery and prioritization</li>
          <li>New business validation and investment readiness</li>
        </ul>
        <a class="button button-primary mt-3" href="/en/contact/">Book a Consultation</a>
      </div>
    </div>
  </div>

  <div class="table-wrapper">
    <h2 class="section-heading mb-3">Selected outcomes</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Capability</th>
          <th scope="col">Focus</th>
          <th scope="col">Impact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Generative AI & Data</td>
          <td>Use case design, PoC delivery, governance, and monitoring</td>
          <td>+18% retention uplift, faster go/no-go, repeatable AI operations</td>
        </tr>
        <tr>
          <td>Product Leadership</td>
          <td>Roadmaps, agile delivery, KPI dashboards, stakeholder alignment</td>
          <td>35% faster lead time, 3x release frequency, higher CSAT</td>
        </tr>
        <tr>
          <td>New Business & DX</td>
          <td>Market validation, business planning, change management</td>
          <td>Investment-grade insights, successful multi-industry launches</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
