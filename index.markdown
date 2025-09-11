---
layout: home
title: TECMAH株式会社
description: AI・データ活用・PdM/PM支援を行うスタートアップ
image: assets/images/hero-bg.jpg
nav-menu: true
lang: ja
---

<div id="main">
  <!-- Hero Section -->
  <section id="hero" class="major">
    <div class="inner">
      <header class="major">
        <h1>{{ site.company.name }}</h1>
      </header>
      <div class="content">
        <p style="font-size: 1.5em; margin-bottom: 2em;">{{ site.company.tagline }}</p>
        <p class="lead">データドリブンな意思決定と効果的なプロダクトマネジメントで、企業のデジタル変革を支援します。</p>
        <ul class="actions">
          <li><a href="#mission" class="button next scrolly">詳しく見る</a></li>
          <li><a href="/contact/" class="button primary">お問い合わせ</a></li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Mission Section -->
  <section id="mission">
    <div class="inner">
      <header class="major">
        <h2>私たちのミッション</h2>
      </header>
      <p>TECMAH株式会社は、AI技術とデータ分析の力で企業の意思決定を支援し、効果的なプロダクトマネジメントを通じて事業成長を実現するスタートアップです。</p>
      <p>データに基づいた戦略的アプローチと実践的なPM/PdMサポートにより、お客様のビジネス価値を最大化します。</p>
    </div>
  </section>

  <!-- Services Section -->
  <section id="services" class="spotlights">
    <section>
      <div class="content">
        <div class="inner">
          <header class="major">
            <h3>AI・データ活用支援</h3>
          </header>
          <p>機械学習アルゴリズムの開発から運用まで、企業のAI導入を包括的にサポート。データ分析基盤の構築、予測モデルの開発、AIシステムの最適化まで対応します。</p>
          <ul class="actions">
            <li><a href="/services/" class="button">詳細を見る</a></li>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <div class="content">
        <div class="inner">
          <header class="major">
            <h3>プロダクトマネジメント支援</h3>
          </header>
          <p>戦略策定から実行まで、PdM/PMとして必要なスキルとプロセスを提供。ユーザー調査、要件定義、開発プロセス管理、リリース戦略まで総合的にサポートします。</p>
          <ul class="actions">
            <li><a href="/services/" class="button">詳細を見る</a></li>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <div class="content">
        <div class="inner">
          <header class="major">
            <h3>データドリブン戦略コンサルティング</h3>
          </header>
          <p>データに基づいた意思決定フレームワークの構築と運用支援。KPI設計、データ可視化、パフォーマンス分析を通じて継続的な改善を実現します。</p>
          <ul class="actions">
            <li><a href="/services/" class="button">詳細を見る</a></li>
          </ul>
        </div>
      </div>
    </section>
  </section>

  <!-- Case Studies Section -->
  <section id="case-studies" class="case-studies">
    <div class="inner">
      <header class="major">
        <h2>これまでの実績</h2>
      </header>
      <div class="grid-wrapper">
        {% for case in site.case_studies %}
        <div class="col-4">
          <div class="case-study-item">
            <h3 class="case-study-title">{{ case.title.ja }}</h3>
            <p class="case-study-description">{{ case.description.ja }}</p>
            <p class="case-study-result">{{ case.result.ja }}</p>
          </div>
        </div>
        {% endfor %}
      </div>
      <ul class="actions">
        <li><a href="/work/" class="button">実績詳細を見る</a></li>
      </ul>
    </div>
  </section>

  <!-- Mid-page CTA Section -->
  <section id="mid-cta" class="main special">
    <div class="inner">
      <header class="major">
        <h2>お客様のビジネス成長を支援します</h2>
      </header>
      <p>AI・データ活用やプロダクトマネジメントでお困りのことがございましたら、お気軽にご相談ください。</p>
      <ul class="actions uniform">
        <li><a href="{{ site.cta.free_consultation.url }}" class="button primary">{{ site.cta.free_consultation.text }}</a></li>
        <li><a href="/about/" class="button">会社概要</a></li>
      </ul>
    </div>
  </section>

  <!-- Final CTA Section -->
  <section id="final-cta" class="main special">
    <div class="inner">
      <header class="major">
        <h2>今すぐ始めませんか？</h2>
      </header>
      <p>無料相談でお客様の課題をお聞かせください。最適なソリューションをご提案いたします。</p>
      <ul class="actions uniform">
        <li><a href="{{ site.cta.free_consultation.url }}" class="button primary">{{ site.cta.free_consultation.text }}</a></li>
        <li><a href="/contact/" class="button">お問い合わせ</a></li>
      </ul>
    </div>
  </section>
</div>

