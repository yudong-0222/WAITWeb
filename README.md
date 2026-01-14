# WAIT Network Official Website

---

WAIT Network 是一個專為高品質槍戰與玩家競技而設計的 Minecraft 伺服器。此 Repo 為官方網頁，旨在提供優良的 SPA 使用體驗與視覺 UI 設計。

---

## Technology Stack

- Framework: Next.js 16
- Animation: Framer Motion
- Style: Tailwind CSS
- Alert: SweetAlert2

## Feature

- HUD: 基本的 RWD 響應式設計；以及以軍事、戰術為主題的 UI/HUD。
- BattleGround Preview: 動態展示地圖樣貌，且支援類別過濾（ALL、SND、DUEL、REALISTIC）。
- Rader Animation: 基於 CSS 與 Framer Motion 實作的雷達掃描 UI。
- Responsive Banner: FOOTER 上方的 CTA 橫幅。
- Wiki & Docs(Under Development)。

## Project Structure

```
├── app/                # Next.js App Router 核心邏輯
├── components/         # 可複用 UI 組件 (Radar, MapPreview, etc.)
├── datas/              # JSON 數據驅動中心 (Maps, Keywords)
├── libs/               # 業務邏輯與工具函數 (SweetAlert 處理器)
├── public/             # 靜態資源 (地圖截圖、WebP 影像)
└── styles/             # 全域 CSS 與 Tailwind 設定
```
