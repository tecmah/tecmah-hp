---
layout: default
title: メンテナンス中 - TECMAH株式会社
description: サイト改修中です。しばらくお待ちください。
nav-menu: false
lang: ja
---

<style>
.maintenance-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
}

.maintenance-icon {
  font-size: 8rem;
  margin-bottom: 2rem;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.maintenance-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.maintenance-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.maintenance-message {
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 600px;
  margin-bottom: 2rem;
}

.code-block {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 1rem;
  margin: 2rem 0;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  text-align: left;
  border-left: 4px solid #00ff00;
}

.progress-bar {
  width: 100%;
  max-width: 400px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  overflow: hidden;
  margin: 2rem 0;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #00ff00, #ffff00);
  width: 0%;
  animation: progress 3s ease-in-out infinite;
}

@keyframes progress {
  0% { width: 0%; }
  50% { width: 75%; }
  100% { width: 0%; }
}

.contact-info {
  margin-top: 2rem;
  font-size: 1rem;
  opacity: 0.8;
}

.emoji {
  font-size: 1.5rem;
  margin: 0 0.5rem;
}

@media (max-width: 768px) {
  .maintenance-title {
    font-size: 2rem;
  }
  
  .maintenance-subtitle {
    font-size: 1.2rem;
  }
  
  .maintenance-icon {
    font-size: 5rem;
  }
}
</style>

<div class="maintenance-container">
  <div class="maintenance-icon">⚙️</div>
  
  <h1 class="maintenance-title">メンテナンス中</h1>
  <h2 class="maintenance-subtitle">Site Under Construction</h2>
  
  <div class="maintenance-message">
    <p>現在、サイトの改修作業を行っております。<br>
    より良いサービスを提供するため、システムをアップデート中です。</p>
  </div>
  
  <div class="code-block">
    <div>// 現在の状況</div>
    <div>const status = "メンテナンス中";</div>
    <div>const progress = "バックエンドの最適化中...";</div>
    <div>const eta = "もうしばらくお待ちください";</div>
    <div></div>
    <div>console.log("🚀 新しいサイトがもうすぐ公開されます！");</div>
  </div>
  
  <div class="progress-bar">
    <div class="progress-fill"></div>
  </div>
  
  <div class="maintenance-message">
    <p>エンジニアが全力で作業中です <span class="emoji">💻</span><br>
    しばらくしてから再度アクセスしてください。</p>
  </div>
  
  <div class="contact-info">
    <p>緊急のお問い合わせは以下まで：<br>
    <strong>contact@tecmah.com</strong></p>
  </div>
</div>

