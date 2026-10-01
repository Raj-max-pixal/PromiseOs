/* PromiseOS agentic layer: local retrieval, explicit reasoning, and confirmed actions. */
(() => {
  const memoryKey = 'promiseos-memories';
  const now = () => new Date().toISOString();
  const makeMemory = (type, title, content, extra = {}) => ({
    id: `${type}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    type, title, content, timestamp: new Date().toLocaleString(), source: 'PromiseOS user workspace',
    importance: extra.importance || 'medium', status: extra.status || 'saved', relatedMemoryIds: extra.relatedMemoryIds || [], createdAt: now(), updatedAt: now(), ...extra
  });
  const saved = () => JSON.parse(localStorage.getItem(memoryKey) || '[]');
  const device = () => {
    let id = localStorage.getItem('promiseos-device-id'), secret = localStorage.getItem('promiseos-device-secret');
    if (!id) { id = crypto.randomUUID(); secret = crypto.randomUUID() + crypto.randomUUID(); localStorage.setItem('promiseos-device-id', id); localStorage.setItem('promiseos-device-secret', secret); }
    return { id, secret };
  };
  const sync = memory => { const d = device(); return fetch('/api/memories', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({...memory, deviceId:d.id, deviceSecret:d.secret}) }).catch(() => null); };
  const persist = memories => { localStorage.setItem(memoryKey, JSON.stringify(memories)); memories.slice(0, 2).forEach(sync); };
  function commitmentsAsMemory() {
    return (typeof items !== 'undefined' ? items : []).map(item => makeMemory('COMMITMENT', item.title, item.evidence || 'Saved commitment', {
      id: `commitment-${item.id}`, status: item.status, importance: item.risk ? 'high' : 'medium', due: item.due, risk: !!item.risk, source: 'Commitment ledger'
    }));
  }
  function retrieve(question) {
    const words = question.toLowerCase().match(/[a-z]{3,}/g) || [];
    const all = [...commitmentsAsMemory(), ...saved()];
    const ranked = all.map(memory => {
      const text = `${memory.title} ${memory.content} ${memory.type}`.toLowerCase();
      let score = words.reduce((n, word) => n + (text.includes(word) ? 3 : 0), 0);
      if (memory.risk || memory.importance === 'high') score += 4;
      if (memory.status === 'open') score += 2;
      if (/focus|now|priority|risk/.test(question.toLowerCase()) && memory.type === 'COMMITMENT') score += 3;
      if (/focus|now|priority|progress/.test(question.toLowerCase()) && /FOCUS_SESSION|REFLECTION/.test(memory.type)) score += 3;
      return { memory, score };
    });
    return ranked.sort((a,b) => b.score - a.score).slice(0, 5).map(x => x.memory);
  }
  function demoDecision(question, evidence) {
    const top = evidence.find(x => x.type === 'COMMITMENT' && x.status === 'open');
    if (!top) return { text: 'SUPPORTED FACT: I do not have an open commitment with enough saved context to prioritize. AI RECOMMENDATION: capture the next concrete promise first.', action: null };
    const why = [top.due && `due ${top.due}`, top.risk && 'currently at risk', top.importance === 'high' && 'high importance'].filter(Boolean).join(', ') || 'an open commitment';
    const recentLearning = evidence.find(x => x.type === 'FOCUS_SESSION' || x.type === 'REFLECTION');
    const learningLine = recentLearning ? ` SUPPORTED FACT: I also considered your recent ${recentLearning.type.toLowerCase().replace('_',' ')}: “${recentLearning.title}.”` : '';
    if (/focus|now|do/.test(question.toLowerCase())) return { text: `SUPPORTED FACT: “${top.title}” is saved in your ledger (${why}).${learningLine} AI RECOMMENDATION: protect one 25-minute session for it before taking on lower-priority work.`, action: { type: 'START_FOCUS', commitmentId: top.id, title: top.title } };
    if (/risk/.test(question.toLowerCase())) return { text: `SUPPORTED FACT: ${evidence.filter(x => x.risk).map(x => x.title).join(', ') || 'No saved item is marked at risk'}. AI RECOMMENDATION: resolve the earliest external dependency first.`, action: null };
    return { text: `SUPPORTED FACT: I found ${evidence.length} relevant saved memories. AI RECOMMENDATION: start with “${top.title}” because it is ${why}.`, action: { type: 'START_FOCUS', commitmentId: top.id, title: top.title } };
  }
  function showDecision(decision, evidence) {
    const chat = document.querySelector('#chat');
    const card = document.createElement('section'); card.className = 'agent-decision';
    card.innerHTML = `<p class="eyebrow">${sessionStorage.getItem('nebius-key') ? 'NEMOTRON • LIVE CONTEXT' : 'NEMOTRON • DEMO MODE'}</p><p>${decision.text}</p><details><summary>Why did PromiseOS say this?</summary><ul>${evidence.map(m => `<li><b>${m.type}</b> · ${m.title}<small>${m.source} · ${m.timestamp}</small></li>`).join('')}</ul></details>${decision.action ? `<button class="primary agent-action" data-action="${decision.action.type}" data-title="${decision.action.title}">Start 25-minute focus</button>` : ''}`;
    chat.append(card); chat.scrollTop = chat.scrollHeight;
    card.querySelector('.agent-action')?.addEventListener('click', () => {
      document.querySelector('#focusCommitment').textContent = decision.action.title;
      document.querySelector('#focus').click();
    });
  }
  document.addEventListener('submit', event => {
    if (event.target.id !== 'askForm') return;
    // Preserve the existing real Nebius/Nemotron request path whenever a session key exists.
    if (sessionStorage.getItem('nebius-key')) return;
    event.preventDefault(); event.stopImmediatePropagation();
    const field = document.querySelector('#question'), question = field.value.trim(); if (!question) return;
    const chat = document.querySelector('#chat'); chat.insertAdjacentHTML('beforeend', `<div class="bubble user">${question.replace(/[<>&]/g, '')}</div>`); field.value = '';
    const evidence = retrieve(question);
    document.querySelector('#aiStatus').textContent = sessionStorage.getItem('nebius-key') ? 'NEMOTRON • THINKING' : 'NEMOTRON • DEMO MODE';
    const pipeline = document.querySelector('#pipeline'); pipeline.classList.add('visible');
    document.querySelectorAll('.pipe').forEach((stage, i) => setTimeout(() => { stage.classList.add('done'); }, i * 110));
    setTimeout(() => { pipeline.classList.remove('visible'); document.querySelector('#aiStatus').textContent = sessionStorage.getItem('nebius-key') ? 'NEMOTRON • LIVE' : 'NEMOTRON • DEMO MODE'; showDecision(demoDecision(question, evidence), evidence); }, 760);
  }, true);
  document.querySelector('#saveReflection')?.addEventListener('click', () => {
    const text = document.querySelector('#reflectionText').value.trim(); if (!text) return;
    const focus = makeMemory('FOCUS_SESSION', '25-minute focus session', 'Completed a protected focus session.', { importance: 'high', status: 'completed' });
    const reflection = makeMemory('REFLECTION', 'Focus reflection', text, { relatedMemoryIds: [focus.id], status: 'saved' });
    persist([focus, reflection, ...saved()]);
    const chat = document.querySelector('#chat');
    chat.insertAdjacentHTML('beforeend', `<section class="memory-updated"><b>🧠 MEMORY UPDATED</b><span>Focus session completed</span><span>+ Reflection saved</span><small>This memory can influence future PromiseOS recommendations.</small></section>`);
    chat.scrollTop = chat.scrollHeight;
  });
})();
