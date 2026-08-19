# WAIT Network Official Website

> Official frontend website for **WAIT Network**, a competitive Minecraft FPS server focused on tactical gunplay, team strategy, and immersive combat experiences.

WAIT Network Official Website 是為 Minecraft 槍戰伺服器 **WAIT Network** 所設計與開發的官方網站。

本專案不僅作為伺服器的 Landing Page，同時整合遊戲模式、戰場地圖展示與 Wiki / Documentation 系統。整體 UI 以 **Military / Tactical HUD** 為設計方向，透過動態效果、資訊層級與響應式排版，建立符合 FPS 遊戲氛圍的網站體驗。

**Live Website:** [waitmc.vercel.app](https://waitmc.vercel.app)  
**Wiki:** [waitmc.vercel.app/wiki](https://waitmc.vercel.app/wiki)

<p align="center">
  <img src="https://duk.tw/FxXfj9.png" width="68%" />
  <img src="https://duk.tw/tzMJ8U.png" width="28%" />
</p>

## Tech Stack

| Category            | Technology                    |
| ------------------- | ----------------------------- |
| Framework           | Next.js 16 / App Router       |
| UI                  | React 19                      |
| Language            | TypeScript                    |
| Styling             | Tailwind CSS 4                |
| Animation           | Motion                        |
| Content             | Markdown / MDX                |
| Markdown Parser     | gray-matter / next-mdx-remote |
| Syntax Highlighting | rehype-highlight              |
| Markdown Plugins    | Rehype                        |
| Alert / Dialog      | SweetAlert2                   |
| Deployment          | Vercel                        |

## Features

### Tactical HUD Interface

以軍事、戰術 HUD 作為主要視覺語言和設計元素，將雷達、狀態資訊、網格與戰術介面元素融入網站 UI。

同時針對不同螢幕尺寸設計 Responsive Layout，使 Desktop 與 Mobile 裝置皆能維持一致的視覺層級與操作體驗。

### Interactive Map Information Preview

地圖圖片資訊預覽，支援依遊戲模式進行即時分類：

`ALL` · `SND` · `DUEL` · `REALISTIC`

透過資料驅動方式管理地圖資訊，使新增地圖時不需要重新設計 UI Component。

### Radar Animation

以 CSS 與 Motion 製作的 Radar 掃描動畫，包含：

- Radar sweep animation
- Dynamic targets
- HUD decorations
- Responsive positioning

在不依賴 Canvas 或外部動畫素材的情況下建立遊戲化視覺效果。

### Responsive CTA

首頁 Footer 前設計獨立的 Call-to-Action Banner，提供：

- Discord Community Entry
- Minecraft Server IP
- Copy-to-Clipboard interaction
- Responsive layout

讓網站的視覺設計展示自然導向玩家加入伺服器。

## Wiki & Documentation System

WAIT Network Wiki 是本專案內建的內容管理與文件系統。

文章以 **Markdown / MDX** 撰寫，並由 Next.js 動態產生頁面：

```text
/wiki/[type]/[slug]
```

不同內容可以依照類型分為下列：

```text
/wiki/guide/...
/wiki/devlog/...
/wiki/wiki/...
```

### Markdown Rendering

Wiki Rendering Pipeline 整合了：

- Frontmatter metadata
- Markdown / MDX rendering
- Syntax highlighting
- Heading slug generation
- Table of Contents parsing
- Custom Markdown syntax
- Responsive typography

並透過自訂 Rehype Plugins 擴充原始 Markdown，例如 `Spoiler` 等特殊內容格式。

### Dynamic SEO Metadata

每篇文章會根據 Frontmatter 動態產生：

- Page Title
- Description
- Open Graph Title
- Open Graph Description
- Preview Image

讓 Wiki 文章除了作為遊戲文件外，也能被獨立分享與索引。

## Content-Driven Architecture

網站中可重複使用的內容盡可能與 UI Component 分離。

例如地圖、文章與其他遊戲資訊皆透過資料來源生成，不使用 hard-code 於 UI 中。使內容能在不修改主要 Component 結構的情況下也能支援持續擴充。

## Project Structure

```text
WAITWeb/
├── app/
│   ├── components/          # Reusable UI components
│   ├── function/            # Frontend utilities / interactions
│   ├── section/             # Landing page sections
│   ├── wiki/                # Wiki routes and UI
│   │   └── [type]/
│   │       └── [slug]/      # Dynamic article routes
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── sitemap.ts
│
├── datas/                   # Data-driven content
├── libs/                    # Markdown & utility logic
├── posts/                   # Markdown / Wiki content
├── public/                  # Images and static assets
├── types/                   # TypeScript type definitions
└── package.json
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/yudong-0222/WAITWeb.git
cd WAITWeb
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

### Production Build

```bash
npm run build
npm run start
```
