# 📅 Facts by Date

> *"Every date has a legacy."*

A sleek, minimal **historical facts explorer** built with **Next.js 16** and **React 19**. Pick any day and month to instantly reveal the pivotal events, births, and milestones that happened on that date throughout history — powered by the **API Ninjas Historical Events API**.

🔗 **Live Demo:** [facts-by-date.vercel.app](https://facts-by-date.vercel.app)

---

## ✨ Features

- 📆 **Date picker** — select any day (1–31) and month from a clean, minimal form
- 🏛️ **Historical facts** — fetches real events from the API Ninjas Historical Events API
- 🎞️ **Smooth transitions** — animated entrance and exit effects between views
- 🌑 **Dark aesthetic UI** — deep black background with emerald green accents
- 🔮 **Glassmorphism card** — frosted glass input panel with ambient blur glows
- ♻️ **Reset flow** — one-click return to the date picker from the results view
- 📱 **Fully responsive** — optimized for mobile, tablet, and desktop
- ⚡ **Fast & modern** — built on Next.js App Router with React Server Components

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 |
| Styling | Tailwind CSS 4 |
| Icons | Lucide React |
| Language | TypeScript 5 |
| API | API Ninjas — Historical Events |
| Linting | ESLint 9 + eslint-config-next |
| Deployment | Vercel |

---

## 📁 Project Structure

```
facts-by-date/
├── app/
│   ├── layout.tsx              # Root layout with global styles
│   ├── page.tsx                # Home page — date picker UI & state logic
│   └── globals.css             # Global Tailwind CSS imports
├── components/
│   └── DateFactsResult.tsx     # Results view — fetches & displays historical facts
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind CSS configuration
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── eslint.config.mjs           # ESLint configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher
- An **API Ninjas** API key — [api-ninjas.com](https://api-ninjas.com)

### 1. Clone the repository

```bash
git clone https://github.com/Diyor-Khasanov/facts-by-date.git
cd facts-by-date
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root:

```env
NINJA_API_KEY=your_api_ninjas_key_here
```

> Get your free API key at [api-ninjas.com/profile](https://api-ninjas.com/profile)

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Build the app for production |
| `npm start` | Start the production server |
| `npm run lint` | Run ESLint checks |

---

## 🔌 API Integration

This project uses the **API Ninjas Historical Events** endpoint to fetch facts for a given date.

**Endpoint:**
```
GET https://api.api-ninjas.com/v1/historicalevents?month={month}&day={day}
```

**Request header:**
```
X-Api-Key: your_api_key
```

**Example response:**
```json
[
  {
    "year": "1969",
    "month": "7",
    "day": "20",
    "event": "Apollo 11 successfully lands on the Moon."
  }
]
```

The `DateFactsResult` component calls this endpoint with the selected day and month, then renders the returned events in a structured list.

---

## 🎨 Design Highlights

- **Background** — near-black `#050505` canvas with fixed ambient glow blobs (emerald + slate)
- **Accent color** — emerald green (`emerald-500`) for labels, borders, and interactive elements
- **Input card** — `backdrop-blur-xl` glassmorphism panel with subtle `border-emerald-900/20`
- **Typography** — tight tracking bold headers with a serif italic accent in the tagline
- **Animations** — `fade-in slide-in-from-bottom` on page load, `zoom-in-95 fade-in` on results reveal
- **Button states** — disabled with grayscale + low opacity, hover with glowing emerald drop shadow

---

## 🌐 Deployment

Deployed on **Vercel** with zero configuration. To deploy your own instance:

1. Fork this repository
2. Import the repo into [Vercel](https://vercel.com)
3. Add `NINJA_API_KEY` in the Vercel project's **Environment Variables** settings
4. Click **Deploy**

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 👤 Author

**Diyor Khasanov**
- GitHub: [@Diyor-Khasanov](https://github.com/Diyor-Khasanov)
- Live: [facts-by-date.vercel.app](https://facts-by-date.vercel.app)
