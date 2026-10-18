<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=200&color=0:00E5FF,50:4169E1,100:7B2FF7&text=PROMISE_OS&fontSize=55&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Your%20commitments%2C%20not%20another%20chatbot.&descAlignY=60&descSize=18" width="100%" alt="PromiseOS Animated Header">

<br>

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=22&duration=3000&pause=800&color=00E5FF&center=true&vCenter=true&width=700&lines=Capture+the+promise.;Verify+the+commitment.;Complete+the+mission.;AI-powered+personal+accountability." alt="Animated PromiseOS Taglines">

<br><br>

[![Nebius x NVIDIA Hackathon](https://img.shields.io/badge/Nebius_x_NVIDIA-Global_AI_Hackathon-76B900?style=for-the-badge\&logo=nvidia\&logoColor=white)](https://nebius.com)
[![NVIDIA Nemotron](https://img.shields.io/badge/AI-NVIDIA_Nemotron-76B900?style=for-the-badge\&logo=nvidia\&logoColor=white)](https://build.nvidia.com)
[![Nebius Token Factory](https://img.shields.io/badge/Inference-Nebius_Token_Factory-00E5FF?style=for-the-badge)](https://nebius.ai)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<br>

### 🌐 [LIVE DEMO](https://nebius-nvidia-hackathon-seven.vercel.app) · [💻 SOURCE CODE](https://github.com/Raj-max-pixal/PromiseOs)

</div>

---

## 🎬 Experience PromiseOS

<div align="center">

<!-- Replace this image with your actual application demo GIF -->

<img src="assets/promiseos-demo.gif" width="90%" alt="PromiseOS Application Demo">

**From scattered conversations to structured commitments.**

</div>

> **Note:** Add your actual demonstration GIF at `assets/promiseos-demo.gif`. The image will not appear until that file exists in your repository.

---

## ⚡ What Is PromiseOS?

PromiseOS is an AI-powered commitment management platform that transforms unstructured notes, conversations, and ideas into actionable commitments.

Powered by **NVIDIA Nemotron through Nebius Token Factory**, PromiseOS combines AI extraction, human approval, and a local-first commitment ledger.

Instead of generating another conversation, PromiseOS helps users identify what they promised, determine what needs attention, and track what remains unfinished.

<div align="center">

|       🧠 AI Intelligence      |       🔒 Privacy First      |     🎯 Accountability     |
| :---------------------------: | :-------------------------: | :-----------------------: |
| Extract commitments from text |  Browser-based local ledger | Track tasks and deadlines |
|    Structured AI responses    | Server-side API credentials |   Human-approved actions  |
|   Evidence-backed proposals   |   User-controlled approval  | Risk-aware prioritization |

</div>

---

## ✨ Features in Action

### 🧠 01 — AI Commitment Extraction

<img src="assets/ai-extraction.gif" width="100%" alt="AI Commitment Extraction Animation">

Transform ordinary sentences into structured tasks with relevant details, owners, deadlines, and supporting source excerpts.

### 🛡️ 02 — Human Approval Gate

<img src="assets/approval-workflow.gif" width="100%" alt="Human Approval Workflow Animation">

AI-generated proposals are reviewed before being accepted into the commitment ledger.

### 📊 03 — Smart Daily Priorities

<img src="assets/today-dashboard.gif" width="100%" alt="Daily Priorities Dashboard Animation">

Organize commitments around urgency, deadlines, and outstanding responsibilities.

### 🔄 04 — Recurring Commitments

<img src="assets/recurring-tasks.gif" width="100%" alt="Recurring Commitments Animation">

Support recurring obligations and habit-related workflows.

### 🤖 05 — Autonomous Agent Vision

<img src="assets/agent-workflow.gif" width="100%" alt="Autonomous Agent Workflow Animation">

Build toward proactive deadline monitoring, context-aware follow-ups, and user-controlled automation.

> These GIFs are intended as visual placeholders for demonstrations. Replace them with recordings of the corresponding implemented features. Do not present planned capabilities as completed functionality.

---

## 🏗️ System Architecture

<div align="center">

```mermaid
flowchart TD
    A["📝 Raw Input"] --> B["🧠 AI Extraction"]
    B --> C["⚡ Nebius Token Factory"]
    C --> D["🟢 NVIDIA Nemotron"]
    D --> E["📦 Structured Response"]
    E --> F["🛡️ Human Approval"]
    F --> G["📒 Local Commitment Ledger"]
    G --> H["📊 Priorities & Tracking"]

    style A fill:#172554,stroke:#00E5FF,color:#fff
    style B fill:#1e1b4b,stroke:#7B2FF7,color:#fff
    style C fill:#164e63,stroke:#00E5FF,color:#fff
    style D fill:#14532d,stroke:#76B900,color:#fff
    style E fill:#172554,stroke:#00E5FF,color:#fff
    style F fill:#713f12,stroke:#facc15,color:#fff
    style G fill:#312e81,stroke:#818cf8,color:#fff
    style H fill:#14532d,stroke:#76B900,color:#fff
```

</div>

### Technology Stack

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)
![NVIDIA](https://img.shields.io/badge/NVIDIA_Nemotron-76B900?style=for-the-badge\&logo=nvidia\&logoColor=white)
![Nebius](https://img.shields.io/badge/Nebius_Token_Factory-00E5FF?style=for-the-badge)

</div>

---

## 🚀 Quick Start

### Requirements

* Node.js 18 or later
* npm
* Git
* Nebius Token Factory API key for live AI inference

### Installation

```bash
git clone https://github.com/Raj-max-pixal/PromiseOs.git
cd PromiseOs
npm install
npm start
```

Open your browser:

```text
http://localhost:3000
```

Configure the inference credentials using the application's supported settings or the backend's environment configuration.

**Security:** Never commit API keys or secrets to your repository.

---

## 🔐 Privacy & Security

* 📒 Commitment records can be stored in browser `localStorage`.
* 🔑 API credentials should remain on the server.
* 🛡️ Users review extracted commitments before approval.
* 🔍 Source excerpts support verification of AI-generated proposals.
* 🚫 Production deployments should validate inputs, restrict access where necessary, and avoid logging sensitive data.

**Privacy note:** Data sent to a hosted inference provider leaves the browser. Local storage is not encrypted by default.

---

## 🗺️ Development Roadmap

* [x] Core commitment management interface
* [x] AI extraction integration
* [x] Human approval workflow
* [x] Browser-based ledger
* [x] Backend inference proxy
* [ ] Production-grade calendar synchronization
* [ ] Robust multi-user delegation
* [ ] Reliable background agent execution
* [ ] Auditable automated follow-ups
* [ ] Enhanced security and synchronization

Update the checklist to match the actual implementation in the repository.

---

## 🌟 Project Vision

<div align="center">

### A promise should not disappear into a chat history.

**Capture it. Verify it. Track it. Complete it.**

PromiseOS aims to make personal accountability a first-class part of AI-powered productivity.

<br>

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=18&duration=2500&pause=1000&color=76B900&center=true&vCenter=true&width=600&lines=Less+forgetting.;More+follow-through.;Built+for+real-world+commitments." alt="Animated Project Vision">

</div>

---

## 🤝 Contributing

Contributions, bug reports, and feature suggestions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Implement and test your changes.
4. Submit a pull request.

## 📄 License

Released under the MIT License. See [`LICENSE`](LICENSE) for details.

---

<div align="center">

### ⚡ PROMISE_OS

**Built by Raj for the Nebius x NVIDIA Global AI Hackathon.**

[🌐 Live Demo](https://nebius-nvidia-hackathon-seven.vercel.app) · [💻 GitHub](https://github.com/Raj-max-pixal/PromiseOs)

<img src="https://capsule-render.vercel.app/api?type=waving&height=120&color=0:7B2FF7,50:4169E1,100:00E5FF&section=footer" width="100%" alt="Animated Footer">

</div>
