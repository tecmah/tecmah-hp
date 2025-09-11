---
layout: page
title: お問い合わせ
description: TECMAH株式会社へのお問い合わせはこちらから
image: assets/images/contact-hero.jpg
nav-menu: true
---

<div id="main" class="alt">
  <section id="one">
    <div class="inner">
      <header class="major">
        <h1>{{ page.title }}</h1>
      </header>
      <p>AI・データ活用、プロダクトマネジメント支援に関するご相談をお気軽にお寄せください。初回相談は無料です。</p>
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
                <input type="text" name="name" id="name" placeholder="お名前 *" autocomplete="name" required />
              </div>
              <div class="6u$ 12u$(xsmall)">
                <input type="email" name="email" id="email" placeholder="メールアドレス *" autocomplete="email" required />
              </div>
              <div class="6u 12u$(xsmall)">
                <input type="text" name="company" id="company" placeholder="会社名・組織名" autocomplete="organization" />
              </div>
              <div class="6u$ 12u$(xsmall)">
                <input type="text" name="position" id="position" placeholder="役職・部署" autocomplete="organization-title" />
              </div>
              <div class="12u$">
                <div class="select-wrapper">
                  <select name="inquiry_type" id="inquiry_type">
                    <option value="">お問い合わせ種別を選択してください</option>
                    <option value="ai-data">AI・データ活用について</option>
                    <option value="product-management">プロダクトマネジメント支援について</option>
                    <option value="consulting">コンサルティングについて</option>
                    <option value="partnership">パートナーシップについて</option>
                    <option value="other">その他</option>
                  </select>
                </div>
              </div>
              <div class="12u$">
                <textarea name="message" id="message" placeholder="お問い合わせ内容をできるだけ詳しくお書きください *" rows="6" required></textarea>
              </div>
              <div class="12u$">
                <input type="checkbox" id="privacy" name="privacy" required>
                <label for="privacy">
                  <a href="/policy/" target="_blank">プライバシーポリシー</a>に同意します *
                </label>
              </div>
              <div class="12u$">
                <ul class="actions">
                  <li><input type="submit" value="送信" class="primary" /></li>
                  <li><input type="reset" value="リセット" /></li>
                </ul>
              </div>
            </div>
          </form>
        </div>
        <div class="4u$ 12u$(small)">
          <div class="contact-info">
            <h3>お急ぎの場合</h3>
            <p>お急ぎのご相談は、メールにて直接お問い合わせください。</p>
            <ul class="contact">
              <li>
                <h3>Email</h3>
                <a href="mailto:contact@tecmah.co.jp">contact@tecmah.co.jp</a>
              </li>
              <li>
                <h3>所在地</h3>
                <span>東京都<br />
                (詳細はお問い合わせ時にお伝えします)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <hr class="major" />

  <!-- Services Overview -->
  <section id="services-overview">
    <div class="inner">
      <header>
        <h2>こんなお悩みございませんか？</h2>
      </header>
      <div class="row">
        <div class="6u 12u$(medium)">
          <h3>🤖 AI・データ活用</h3>
          <ul>
            <li>AIを導入したいが何から始めればよいかわからない</li>
            <li>データはあるが活用方法がわからない</li>
            <li>機械学習モデルの精度を改善したい</li>
            <li>データ分析基盤を構築したい</li>
          </ul>
        </div>
        <div class="6u$ 12u$(medium)">
          <h3>📊 プロダクトマネジメント</h3>
          <ul>
            <li>プロダクト戦略を明確にしたい</li>
            <li>開発チームの生産性を向上させたい</li>
            <li>データドリブンなプロダクト改善をしたい</li>
            <li>PM組織を強化したい</li>
          </ul>
        </div>
      </div>
      <p>これらの課題に対して、豊富な経験を持つ専門チームが最適なソリューションをご提案いたします。</p>
    </div>
  </section>

  <!-- Process -->
  <section id="process">
    <div class="inner">
      <header>
        <h2>ご相談からプロジェクト開始まで</h2>
      </header>
      <div class="row">
        <div class="3u 6u(medium) 12u$(small)">
          <div class="process-step">
            <span class="step-number">1</span>
            <h3>お問い合わせ</h3>
            <p>フォームまたはメールでお気軽にご相談ください</p>
          </div>
        </div>
        <div class="3u 6u$(medium) 12u$(small)">
          <div class="process-step">
            <span class="step-number">2</span>
            <h3>初回相談</h3>
            <p>課題をお聞きし、解決の方向性をご提案（無料）</p>
          </div>
        </div>
        <div class="3u 6u(medium) 12u$(small)">
          <div class="process-step">
            <span class="step-number">3</span>
            <h3>提案書作成</h3>
            <p>詳細な分析と具体的なソリューションをご提案</p>
          </div>
        </div>
        <div class="3u$ 6u$(medium) 12u$(small)">
          <div class="process-step">
            <span class="step-number">4</span>
            <h3>契約・開始</h3>
            <p>契約締結後、プロジェクトを開始します</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section id="faq">
    <div class="inner">
      <header>
        <h2>よくあるご質問</h2>
      </header>
      <div class="row">
        <div class="6u 12u$(small)">
          <h4>Q: 初回相談は有料ですか？</h4>
          <p>A: 初回相談（1時間程度）は無料です。お気軽にお問い合わせください。</p>
          
          <h4>Q: 小規模な案件でも対応可能ですか？</h4>
          <p>A: はい。規模に関わらず、お客様の課題に応じて最適なご提案をいたします。</p>
        </div>
        <div class="6u$ 12u$(small)">
          <h4>Q: リモートでの支援は可能ですか？</h4>
          <p>A: はい。リモートワークに対応しており、全国どこからでもサービスをご利用いただけます。</p>
          
          <h4>Q: 短期間での対応は可能ですか？</h4>
          <p>A: 案件の内容によりますが、可能な限り迅速に対応いたします。まずはご相談ください。</p>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
.process-step {
  text-align: center;
  margin-bottom: 2em;
}

.step-number {
  display: inline-block;
  width: 50px;
  height: 50px;
  line-height: 50px;
  background: #4acaa8;
  color: white;
  border-radius: 50%;
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 1em;
}

.contact-info {
  background: #f8f9fa;
  padding: 2em;
  border-radius: 5px;
}

.contact-info ul.contact {
  list-style: none;
  padding: 0;
}

.contact-info ul.contact li {
  margin-bottom: 1.5em;
}
</style>