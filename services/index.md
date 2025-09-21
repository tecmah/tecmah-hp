---
layout: page
title: サービス
description: TECMAHが提供する生成AI・データ活用・プロダクトマネジメント支援
image: assets/images/services-hero.jpg
nav-menu: true
lang: ja
---

<div class="container my-5">
  <div class="row justify-content-center mb-5">
    <div class="col-lg-10">
      <span class="badge-soft">Service Lineup</span>
      <h1 class="section-heading mt-3">生成AIとPdMで事業の“前進”をつくる3つのケイパビリティ</h1>
      <p class="lead">戦略策定〜実装〜内製化までを一気通貫で支援する伴走型スタイル。柔軟な稼働アサインで、短期間でも確かなビジネス成果につなげます。</p>
    </div>
  </div>

  <div class="row g-4 mb-6">
    {% assign localized_services = site.services | where: 'lang', 'ja' %}
    {% for service in localized_services %}
      <div class="col-md-4">
        <div class="service service-summary h-100">
          <div class="service-content">
            <h2 class="service-title"><a href="{{ service.permalink | relative_url }}">{{ service.title }}</a></h2>
            <p>{{ service.excerpt }}</p>
            <a class="button button-primary mt-3" href="{{ service.permalink | relative_url }}">詳しく見る</a>
          </div>
        </div>
      </div>
    {% endfor %}
  </div>

  <div class="row g-4 align-items-stretch mb-6">
    <div class="col-lg-6">
      <div class="contact-card h-100">
        <h2 class="section-heading">エンゲージメントの進め方</h2>
        <ol class="mt-3">
          <li><strong>ヒアリング＆スコーピング</strong>（1-2週間）課題・体制・意思決定プロセスを把握し、支援ゴールを定義します。</li>
          <li><strong>プランニング</strong>（1-2週間）ロードマップ、KPI、リソース、成果指標をすり合わせます。</li>
          <li><strong>実行フェーズ</strong>（2-6ヶ月）PdM/PjMとして並走し、成果物創出にコミットします。</li>
          <li><strong>定着化・内製化</strong>（継続）ナレッジ化、仕組み整備、トレーニングを実施します。</li>
        </ol>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="contact-card h-100">
        <h2 class="section-heading">よくあるご相談テーマ</h2>
        <ul class="mt-3">
          <li>生成AIをサービス・業務に組み込む際の企画／PoC設計</li>
          <li>データ分析基盤・MLOps・ガバナンスの設計と運用</li>
          <li>PdM/PjM不在のプロジェクトマネジメント、ロードマップ策定</li>
          <li>新規事業の市場検証〜投資判断材料の整備</li>
        </ul>
        <a class="button button-primary mt-3" href="/contact/">まずは無料相談</a>
      </div>
    </div>
  </div>

  <div class="table-wrapper">
    <h2 class="section-heading mb-3">主な支援領域と成果例</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">領域</th>
          <th scope="col">実施内容</th>
          <th scope="col">成果</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>生成AI・データ活用</td>
          <td>ユースケース選定、PoC、評価指標設計、運用ガバナンス整備</td>
          <td>PoC成功率向上、継続利用率+18%、意思決定スピード短縮</td>
        </tr>
        <tr>
          <td>PdM/PM伴走</td>
          <td>ロードマップ策定、開発プロセス設計、KPIダッシュボード化</td>
          <td>開発リードタイム35%短縮、リリース頻度3倍、顧客満足度向上</td>
        </tr>
        <tr>
          <td>新規事業・DX</td>
          <td>市場検証、事業計画づくり、アライアンス戦略、チェンジマネジメント</td>
          <td>投資判断材料の整備、複数業界でのローンチ成功、内製支援体制構築</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
