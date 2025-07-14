# 🛡️ CounterfeitAI — AI-Powered Fake Brand Detection System

> A cutting-edge AI system designed to detect counterfeit Walmart product listings across social media platforms through visual recognition, caption analysis, and automated takedown reporting.

---



## **🚀 Project Live:**
Visit the live site: [Click here](https://statuesque-puppy-b38f8b.netlify.app)



## **Project Demo Video**
[Click here](https://www.youtube.com/watch?v=2mxkNqkqzuw)



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



## 📸 Screenshots

### **📊 Dashboard Analytics**

<img width="1881" height="1074" alt="image" src="https://github.com/user-attachments/assets/864189a5-c6ab-445f-9a2c-824ee809aed1" />


### **🔍 AI Content Scanner**

<img width="1896" height="729" alt="image" src="https://github.com/user-attachments/assets/752569d4-cd2f-427f-91c8-7e9c06f90c54" />


### **🌍 Global Risk Heatmap**

<img width="1273" height="1396" alt="image" src="https://github.com/user-attachments/assets/5fe6abf1-130b-4bb0-84f1-726bbc92e299" />


### **📥 Takedown Management**

<img width="1904" height="807" alt="image" src="https://github.com/user-attachments/assets/c1d64613-d0b6-4f30-8520-4c367c74c091" />


### **💬 Feedback System**

<img width="1566" height="1302" alt="image" src="https://github.com/user-attachments/assets/7ec96fb9-c4e1-49ae-b3c4-ba42a01948c8" />





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




## 📌 Highlights
  - ✅ Enterprise-grade simulation of brand security operations
  - 🧠 AI + NLP fusion for counterfeit detection
  - 🌐 Geospatial visualization of global brand risks
  - 🛠️ Full-stack production-ready UI with modern tooling
