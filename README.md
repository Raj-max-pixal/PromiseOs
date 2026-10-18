<div align="center">

# 🌿🧠 PROMISEOS — THE VERIFIABLE COMMITMENT LEDGER 🧠🌿

<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Green%20Apple.png" width="35" height="35" /> **Your commitments, not another chat bot.** <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Green%20Apple.png" width="35" height="35" />

<br>

[![Nebius x NVIDIA Hackathon](https://img.shields.io/badge/🏆_Nebius_x_NVIDIA-Global_AI_Hackathon-76B900?style=for-the-badge&logo=nvidia&logoColor=black)](https://nebius.com)
[![NVIDIA Nemotron](https://img.shields.io/badge/🤖_Powered_by-NVIDIA_Nemotron-76B900?style=for-the-badge&logo=nVIDIA&logoColor=white)](https://build.nvidia.com)
[![Nebius Token Factory](https://img.shields.io/badge/⚡_Inference-Nebius_Token_Factory-00E5FF?style=for-the-badge&logo=cloud&logoColor=black)](https://nebius.ai)
[![License: MIT](https://img.shields.io/badge/📜_License-MIT-success?style=for-the-badge)](LICENSE)

<br>

### *Turn messy notes, chat logs, and meeting scraps into a living, verifiable commitment ledger with automated team sync and autonomous agent swarms!* ✨🚀

[🌐 **Explore Live Application**](https://nebius-nvidia-hackathon-seven.vercel.app) • [⚡ **Quick Start Guide**](#-quick-start) • [🏗️ **Architecture**](#-architecture)

---

</div>

<br>

## 🌟 What is PromiseOS?

<div align="center">
  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Robot.png" width="60" height="60" />
</div>

Standard AI assistants chat, hallucinate, and forget. **PromiseOS** is different. It is a privacy-first personal AI operating system built for strict accountability across three powerful milestones:

* **Part 1 (Core Intelligence):** Captures raw inputs, utilizes state-of-the-art **NVIDIA Nemotron** models via the blazing-fast **Nebius Token Factory**, and maintains a strict, browser-local verifiable ledger (`localStorage`).
* **Part 2 (Advanced Integrations):** Scales accountability with production-grade calendar synchronization, recurring habit detection, and collaborative team delegation workflows.
* **Part 3 (Autonomous Agent Swarms):** Deploys proactive multi-agent follow-up loops that autonomously monitor progress, synthesize cross-source context, and nudge stakeholders before deadlines slip.

---

## 🎨 The Green Theme & Cartoon Data Flow Storyboard

📥 Raw Capture           🤖 NVIDIA Nemotron           🛡️ Human Review          📋 Ledger & Swarms
(Notes, Chats, Scraps) ────> (Nebius Token Factory) ────> (You Verify/Approve) ────> (Sync, Cal & Agents)


* 🟢 **Zero SaaS Bloat:** Your raw notes and commitments remain securely stored inside your browser's local sandbox. The backend proxy is 100% stateless!
* 🟢 **Evidence-Backed Guarantees:** Every extracted promise points directly back to a verifiable highlight or quote from your text source.
* 🟢 **High-Trust Neon Aesthetics:** Designed with crisp neon green accents, dark-mode sleekness, and fluid animated feedback loops.

---

## 🚀 Complete Feature Matrix (Parts 1, 2 & 3)

| Feature Module | Description | Status |
| :--- | :--- | :--- |
| **🧠 AI Extraction Engine (Part 1)** | Powered by **NVIDIA Nemotron** to parse structured tasks, owners, and dates. | `🟢 Active` |
| **🛡️ Human Approval Gate (Part 1)** | Model proposals *never* enter your ledger automatically. You review and click accept! | `🟢 Active` |
| **📊 Risk-Ranked Today View (Part 1)** | Instantly surfaces what truly matters right now alongside concise AI daily plans. | `🟢 Active` |
| **🗓️ Calendar & Deadline Sync (Part 2)** | Automatically map extracted commitments directly into time blocks with buffer estimation. | `🟢 Active` |
| **🔄 Recurring Commitment Engine (Part 2)** | Detects habits and repeating obligations (e.g., weekly syncs, daily check-ins). | `🟢 Active` |
| **👥 Collaborative Delegation (Part 2)** | Safely route commitments to teammates with secure handoff tokens. | `🟢 Active` |
| **🤖 Autonomous Agent Swarms (Part 3)** | Proactive background agents that monitor deadlines, synthesize context, and automate follow-ups. | `🚀 Deploying` |
| **🔑 Credential-Free Demo Mode** | Judges and visitors can explore the full interface right out of the box. | `🟢 Active` |

---

## 🏗️ Technical Architecture

```mermaid
graph TD
    A[🌐 Client Browser / Local Ledger] -->|Stateless Proxy Request| B[⚙️ Node.js Backend Server]
    B -->|API Request| C[☁️ Nebius Token Factory]
    C -->|High-Speed Inference| D[🤖 NVIDIA Nemotron Model]
    D -->|Structured Extracted JSON| B
    B -->|Verified Payload / Sync / Agents| A
Client Layer: Vanilla JS / HTML5 local single-page app utilizing localStorage.

Proxy Layer: Lightweight Node.js server (local-server.js / server.js) designed for secure key routing without persistence.

Inference Layer: High-throughput GPU infrastructure powered by Nebius running NVIDIA Nemotron.

⚙️ Quick Start (Run Locally in 60 Seconds)
Get PromiseOS up and running on your local machine instantly!

Bash
# 1. Clone the repository
git clone [https://github.com/Raj-max-pixal/PromiseOs.git](https://github.com/Raj-max-pixal/PromiseOs.git)
cd PromiseOs

# 2. Install dependencies (Requires Node.js 18+)
npm install

# 3. Start the local server
npm start
🌐 Open your browser and point to http://localhost:3000!

💡 Tip: To test live AI extractions, open the Model & Privacy Settings inside the app UI and paste your Nebius Token Factory API key.

🗺️ Master Roadmap & Evolution
[x] Part 1: Core Intelligence — Local-first ledger, NVIDIA Nemotron integration, and Nebius Token Factory proxy pipeline.

[x] Part 2: Advanced Integrations — Real-time calendar syncing, recurring obligations, and team delegation workflows.

[x] Part 3: Autonomous Agent Swarms — Proactive background follow-up agents and multi-source context synthesis. (Current Release)

Built with passion & code for the Nebius x NVIDIA Global AI Hackathon
© 2026 T. Raja Saranya · Released under the MIT License.
