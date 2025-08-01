# Peter Mark Ellis — Portfolio Website

A modern, responsive portfolio website showcasing visual design and development work. Built with Next.js 15, featuring smooth animations and optimized performance.

## 🎯 About

This is my personal portfolio website where I showcase my work as a Visual Designer and Developer. The site features a curated collection of projects from my collaborations with founders, enterprises, and visionary startups across the UK, Germany, Prague, and Denmark.

## ✨ Features

- **Responsive Design** - Mobile-first approach with adaptive sidebar layout
- **GSAP Animations** - Smooth staggered fade-in effects for portfolio images  
- **Live UK Time** - Real-time clock display with proper hydration handling
- **WebP Optimization** - All portfolio images optimized for fast loading
- **Comprehensive SEO** - Meta tags, Open Graph, Twitter cards, and structured data
- **PWA Support** - Installable with complete icon set and manifest
- **Contact Integration** - Email and Signal messaging options

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Animations**: [GSAP](https://greensock.com/gsap)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Icons**: [Tabler Icons](https://tabler-icons.io)
- **Fonts**: PP Neue Montreal Variable

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/petermarkellis/petermarkellis.com.git
cd petermarkellis.com
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
├── public/
│   ├── showcase/          # Portfolio images (WebP optimized)
│   ├── fonts/             # PP Neue Montreal font files
│   ├── favicon.ico        # Favicon and icons
│   ├── manifest.json      # PWA manifest
│   └── og-image.jpg       # Open Graph image
├── src/
│   ├── app/
│   │   ├── layout.tsx     # Root layout with metadata
│   │   ├── page.tsx       # Homepage with portfolio
│   │   ├── sitemap.ts     # Auto-generated sitemap
│   │   └── robots.ts      # Auto-generated robots.txt
│   ├── components/
│   │   ├── LenisProvider.tsx
│   │   └── StructuredData.tsx
│   └── styles/
│       └── fonts.css      # Font declarations
```

## 🎨 Design Philosophy

The website follows a minimal, professional aesthetic with:
- Clean typography using PP Neue Montreal
- Subtle animations that enhance without distracting
- Mobile-first responsive design
- Focus on showcasing work with minimal interface

## 🌐 SEO & Performance

- **Perfect Lighthouse scores** for performance and accessibility
- **Comprehensive meta tags** for social media sharing
- **Structured data** for search engine understanding
- **Auto-generated sitemap** and robots.txt
- **WebP image format** for optimal loading speeds
- **PWA capabilities** for mobile installation

## 📊 Current Work Experience

- **Founding Designer** at Super Useful Studio (UK, 2025)
- **Product Design Lead** at Mindfuel.ai (Germany, 2024)  
- **Design Lead** at McKinsey & Co (Prague, 2020)
- **Product Design Lead** at Widex & Signia (Denmark, 2018)

## 📬 Contact

- **Email**: [petermarkellis@gmail.com](mailto:petermarkellis@gmail.com?subject=Project%20Inquiry)
- **Signal**: [@petermarkellis](https://signal.me/#eu/petermarkellis)
- **Website**: [petermarkellis.com](https://petermarkellis.com)

## 🚀 Deployment

The site is optimized for deployment on:

- **Vercel** (recommended): Connect your GitHub repository for automatic deployments
- **Netlify**: Deploy directly from GitHub with build command `npm run build`
- **Any Node.js hosting**: Run `npm run build` and `npm run start`

## 📝 License

This project is for portfolio purposes. Please don't use the design or content without permission.

---

**Built with ❤️ in the UK**