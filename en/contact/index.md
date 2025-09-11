---
layout: page
title: Contact Us
description: Contact TECMAH Inc. for AI, Data Analytics & Product Management Support
permalink: /en/contact/
nav-menu: true
---

<div id="main" class="alt">
  <section id="one">
    <div class="inner">
      <header class="major">
        <h1>{{ page.title }}</h1>
      </header>
      <p>Feel free to contact us for consultation on AI, data utilization, and product management support. Initial consultation is free.</p>
    </div>
  </section>

  <!-- Contact Form -->
  <section id="contact-form">
    <div class="inner">
      <div class="row">
        <div class="8u 12u$(small)">
          <form method="post" action="https://formspree.io/f/your-form-id">
            <div class="row uniform">
              <div class="6u 12u$(xsmall)">
                <input type="text" name="name" id="name" placeholder="Name *" autocomplete="name" required />
              </div>
              <div class="6u$ 12u$(xsmall)">
                <input type="email" name="email" id="email" placeholder="Email *" autocomplete="email" required />
              </div>
              <div class="6u 12u$(xsmall)">
                <input type="text" name="company" id="company" placeholder="Company/Organization" autocomplete="organization" />
              </div>
              <div class="6u$ 12u$(xsmall)">
                <input type="text" name="position" id="position" placeholder="Position/Department" autocomplete="organization-title" />
              </div>
              <div class="12u$">
                <div class="select-wrapper">
                  <select name="inquiry_type" id="inquiry_type">
                    <option value="">Please select inquiry type</option>
                    <option value="ai-data">AI & Data Analytics</option>
                    <option value="product-management">Product Management Support</option>
                    <option value="consulting">Consulting</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div class="12u$">
                <textarea name="message" id="message" placeholder="Please describe your inquiry in detail *" rows="6" required></textarea>
              </div>
              <div class="12u$">
                <input type="checkbox" id="privacy" name="privacy" required>
                <label for="privacy">
                  I agree to the <a href="/en/policy/" target="_blank">Privacy Policy</a> *
                </label>
              </div>
              <div class="12u$">
                <ul class="actions">
                  <li><input type="submit" value="Send" class="primary" /></li>
                  <li><input type="reset" value="Reset" /></li>
                </ul>
              </div>
            </div>
          </form>
        </div>
        <div class="4u$ 12u$(small)">
          <div class="contact-info">
            <h3>Direct Contact</h3>
            <p>For urgent inquiries, please contact us directly via email.</p>
            <ul class="contact">
              <li>
                <h3>Email</h3>
                <a href="mailto:contact@tecmah.co.jp">contact@tecmah.co.jp</a>
              </li>
              <li>
                <h3>Location</h3>
                <span>Tokyo, Japan<br />
                (Details provided upon inquiry)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Overview -->
  <section id="services-overview">
    <div class="inner">
      <header>
        <h2>How Can We Help?</h2>
      </header>
      <div class="row">
        <div class="6u 12u$(medium)">
          <h3>🤖 AI & Data Analytics</h3>
          <ul>
            <li>Want to implement AI but don't know where to start</li>
            <li>Have data but don't know how to utilize it</li>
            <li>Want to improve machine learning model accuracy</li>
            <li>Need to build data analysis infrastructure</li>
          </ul>
        </div>
        <div class="6u$ 12u$(medium)">
          <h3>📊 Product Management</h3>
          <ul>
            <li>Want to clarify product strategy</li>
            <li>Need to improve development team productivity</li>
            <li>Want data-driven product improvement</li>
            <li>Need to strengthen PM organization</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</div>
