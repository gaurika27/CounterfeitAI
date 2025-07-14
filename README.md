# 🛡️ CounterfeitAI — AI-Powered Fake Brand Detection System

**🚀 Project Live:** [Visit the App]([https://thriving-axolotl-cbe8b8.netlify.app/](https://statuesque-puppy-b38f8b.netlify.app/))

> A cutting-edge AI system designed to detect counterfeit Walmart product listings across social media platforms through visual recognition, caption analysis, and automated takedown reporting.

---

## 📌 Project Description

**CounterfeitAI** is a full-stack AI-powered platform built to identify and mitigate fake brand content online. It simulates the brand protection process by detecting counterfeit product listings (via images, videos, and captions), analyzing trends, and generating takedown reports across platforms like Instagram, TikTok, Facebook, and YouTube.

This solution helps retail brands like **Walmart** preserve their brand integrity, reduce fraud, and take automated legal action in response to fake product listings.

---

## 🎯 Real-World Use Case

- Walmart wants to monitor fake product promos on Instagram or TikTok.
- User uploads the media or pastes a social media post URL.
- CounterfeitAI performs visual + caption-based analysis.
- Displays risk scores, platform breakdown, and generates reports.
- Brand team takes legal action via the generated DMCA forms.

---

## 🚀 Features

### 🧠 Smart Detection Engine
- YOLOv8 + OCR for logo detection and watermarking
- ViLT transformer for image-text brand match
- NLP-based caption analysis using LLMs

### 📥 Content Scanner
- Upload JPG, PNG, MP4, or MOV
- Social media post URL input support
- AI analysis with real-time risk result

### 📊 Brand Dashboard
- Total detections, high-risk items, takedown stats
- Weekly growth trend + accuracy rate tracking
- Platform-wise counterfeit distribution

### 🌍 World Map Visualization
- Global counterfeit activity heatmap
- Country-specific case count and risk levels
- Regional risk insights and platform trends

### 📨 Takedown Generator
- Auto-generate DMCA or brand violation reports
- Track report status (Approved / Rejected / Pending)

### 💬 AI Feedback Panel
- Submit feedback on AI predictions
- Track model accuracy and feedback stats
- Display model improvement rate

---

## 🧰 Tech Stack

| Layer         | Tech Used                                                  |
|---------------|------------------------------------------------------------|
| Frontend      | React.js, TailwindCSS, ShadCN UI, Lucide Icons             |
| AI Models     | YOLOv8, ViLT, Tesseract OCR, OpenAI (GPT)                  |
| Backend       | Firebase Functions (mocked API)                            |
| Database      | Firebase Firestore                                         |
| Deployment    | Netlify, Firebase Hosting                                  |
| Maps          | D3.js + react-simple-maps + GeoJSON                        |

---

## 🧩 System Architecture

```text
📤 User Upload / Social URL
       ↓
⚙️ React Frontend Interface
       ↓
🧠 AI Engine (YOLOv8 + ViLT + GPT)
       ↓
📊 Risk Score + Report Generator
       ↓
🖥️ Dashboard, Map, and Feedback Display

```
## 🧑‍💻 Local Setup
```bash
git clone https://github.com/gaurika27/CounterfeitAI.git
cd CounterfeitAI
npm install
npm run dev
```
⚠️ Node.js v18+ recommended. All detection data is simulated.

## 📂 Project Structure
```bash
CounterfeitAI/
│
├── src/                             # Core frontend application
│   ├── components/                  # Reusable UI components
│   ├── hooks/                       # Custom React hooks
│   ├── services/                    # API/service logic
│   ├── utils/                       # Utility functions
│       ├── App.tsx                      # Main App component
│       ├── index.css                    # Global styles
│       ├── main.tsx                     # Application entry point
│       └── vite-env.d.ts                # Vite TypeScript declarations
│
├── public/                          # Static public assets (optional)
    ├── .gitignore                       # Files and folders to ignore by Git
    ├── README.md                        # Project documentation
    ├── config.json                      # App-level configuration
    ├── eslint.config.js                 # Linting rules
    ├── index.html                       # Root HTML template
    ├── package.json                     # Project dependencies and scripts
    ├── package-lock.json                # Lock file for npm install
    ├── postcss.config.js                # PostCSS processing
    ├── tailwind.config.js               # Tailwind CSS configuration
    ├── tsconfig.json                    # TypeScript configuration
    ├── tsconfig.app.json                # App-specific TS config
    ├── tsconfig.node.json               # Node-specific TS config
    └── vite.config.ts                   # Vite build and dev server config

```




