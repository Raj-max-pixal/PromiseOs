# PromiseOS — Your commitments, not another chatbot

**PromiseOS** is a private, evidence-backed personal AI that turns messy notes, messages, and meeting scraps into a living commitment ledger. It uses **NVIDIA Nemotron via Nebius Token Factory** to extract promises, preserve the exact evidence that created them, surface conflicts, and create a realistic daily brief.

Built for the **Nebius x NVIDIA Global AI Hackathon — Personal AI Track**.

## The problem

Assistants answer a question and forget it. The expensive failures in personal work are commitments that quietly vanish: “I’ll send the draft Friday,” “we decided not to hire,” “ask Maya before publishing.” PromiseOS makes those durable, inspectable, and actionable without placing a person's life in a SaaS database.

## What works

- Local-first browser ledger — persisted only in `localStorage`; the server has no database.
- Raw capture inbox for notes, transcripts, and pasted messages.
- AI extraction of structured commitments, owners, dates, risks, and verbatim evidence.
- Human approval before any model proposal enters the ledger.
- Risk-ranked Today view and a concise AI daily plan.
- Grounded “Ask my memory” answers, constrained to saved evidence.
- Nebius Token Factory proxy: the browser does not call an LLM endpoint directly.
- Credential-free demo mode, so judges can explore every interaction.

## Architecture

```text
Browser (local-only ledger) ──> stateless Node proxy ──> Nebius Token Factory ──> NVIDIA Nemotron
        │                                 │
        └── user controls saved data      └── receives inference only, stores nothing
```

## Run locally

Requires Node.js 18+. No dependency install is needed.

```bash
git clone <your-public-repository-url>
cd promise-os
npm start
```

Open `http://localhost:3000`. It runs immediately in demo mode. For live AI, open **Model & privacy settings**, enter a Nebius Token Factory key, and choose the NVIDIA Nemotron model identifier enabled for your account. The key is held in `sessionStorage`, not committed or persisted; alternatively set `NEBIUS_API_KEY` in the process environment.

## Nebius and NVIDIA implementation

The included `server.js` calls the OpenAI-compatible `chat/completions` endpoint at `https://api.tokenfactory.nebius.com/v1` with an NVIDIA Nemotron model. The default identifier is `nvidia/Nemotron-3-Nano-30B-A3B` and is editable because account availability can differ. Nano is the fast extraction role; choose an available Nemotron Ultra identifier in Settings for more deliberative planning and grounded recall.

The model receives only the note being extracted or the user-controlled ledger needed to answer a question. The UI visibly labels local-first data storage, preserves evidence beside every claim, and asks humans to approve model-generated commitments.

## 3-minute demo storyboard

1. Start with the seeded **Today** page. Explain that these are commitments, not generic tasks.
2. Open **Capture**, paste a meeting note, and click **Extract commitments**. In live mode this is NVIDIA Nemotron on Nebius Token Factory; demo mode still shows the entire product flow.
3. Approve one proposal, then open the ledger and expand it to show the evidence quote.
4. Mark an item done. The dashboard updates immediately.
5. Ask “What do I owe Maya this week?” and point to the evidence-grounded answer.
6. Show the Settings panel and explain the key is session-only and the server is stateless.

## Zero-budget deployment

Run it locally for a flawless live demo with `npm start`. For a public URL, deploy this standard-library Node service to any free-tier Node host you already have access to; configure `NEBIUS_API_KEY` only in the host's secret manager. Do not put the key into browser code. A static showcase can be filmed in demo mode even before a hosted endpoint is configured.

## Product principles

- **Evidence over confidence:** every memory is traceable to a source quote.
- **Human agency:** extraction proposes; people approve.
- **Privacy by default:** no accounts, analytics, or application database.
- **Useful rather than chatty:** the outcome is a prioritized promise, not another conversation.

## License

[MIT](LICENSE)
