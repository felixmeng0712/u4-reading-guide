const stages=[
 {name:'The assumptions',range:'Paras 1–2',start:0,end:1,q:'幸福测试和应用程序背后，预设了什么？',fn:'Introduce the topic',title:'Quantifying happiness and its assumptions',detail:'① Happiness can be quantified. ② Your mission in life is to maximize happiness and minimize whatever detracts from it.',relation:'Phenomenon → underlying assumptions',points:['Tests, scales and apps quantify contentment.','Assumption 1: happiness can be quantified.','Assumption 2: life’s mission is to maximize it and minimize whatever detracts from it.']},
 {name:'Views compared',range:'Paras 3–6',start:2,end:5,q:'对快乐的看法不同，是否意味着它们都排斥量化？',fn:'Compare views',title:'Different views of happiness and quantification',detail:'Hedonic view: pleasure is the primary aim. Virtue view: pleasure is a by-product of doing the right thing. Modern measures account for both pleasure and purpose; for the author, virtue ethics is also compatible with maximizing emotional well-being.',relation:'Comparison → compatibility with quantification',points:['Hedonic view: pleasure is the key to living well.','Virtue and purpose: pleasure is a by-product of doing the right thing.','Subjective well-being accounts for both.','Even Aristotle’s virtue ethics is compatible with quantification.']},
 {name:'The author’s turn',range:'Para 7',start:6,end:6,q:'作者现在追问的，还是怎样获得更多幸福吗？',fn:'Turn',title:'Rethinking emotions',detail:'Are emotions an index for evaluating life, or the very stuff of life itself? The author is drawn to the latter and loses interest in cultivating an optimal inner life.',relation:'Turning point: from optimizing to experiencing',points:['An index of life’s successes and failures, to be optimized?','Or the very stuff of life itself?','The author is drawn to the latter view.']},
 {name:'Being fully alive',range:'Paras 8–10',start:7,end:9,q:'如果情绪是生活的一部分，我们应该怎样对待悲伤和愤怒？',fn:'Conclude',title:'Notice and accept: being fully alive',detail:'Family life shows that sadness and anger can be as appropriate and important as love and joy. Attend to and accept experience, inner and outer, and inhabit it fully. The ending redefines “maximization” without offering a new numerical scale.',relation:'Personal experience → attitude to life → echo of the opening',points:['At home, emotion reigns: sadness and anger are part of who we are.','Being fully alive means attending to and accepting whatever you’re experiencing.','The one maximization that matters: how fully you inhabit your own experiences.']}
];
// Each entry: text in source, meaning, usage, role in the argument.
const vocabulary=[
  [
    [
      "realm",
      "领域",
      "in the realm of…：在……领域。",
      "限定讨论背景：积极心理学。"
    ],
    [
      "quantify",
      "量化",
      "quantify + 名词；名词形式为 quantification。",
      "从测量的做法，引向下一段的两个预设。"
    ],
    [
      "contentment",
      "满足，满意",
      "不可数名词；contentment with…：对……的满足。",
      "可指对生活的满足感，不仅是短暂的愉快。"
    ]
  ],
  [
    [
      "underlie",
      "构成……的基础",
      "underlie → underlay → underlain；这里作谓语。",
      "提示作者将从表面方法深入其背后的假设。"
    ],
    [
      "approaches",
      "方法",
      "approach 作名词表示方法；an approach to…：……的方法。",
      "like this 回指上一段的测试、量表和应用程序。"
    ],
    [
      "detracts from",
      "减损、降低……的价值",
      "detract from + 名词；whatever detracts from it：一切减损幸福的因素。",
      "it 回指 happiness；显示量化思路如何对待不愉快体验。"
    ]
  ],
  [
    [
      "aligns with",
      "与……一致",
      "align with…：与……相符。",
      "将幸福最大化与享乐取向联系起来。"
    ],
    [
      "hedonic",
      "享乐的",
      "a hedonic view：享乐取向的观点。",
      "此处强调将快乐视为生活的主要目标，不等于整日派对。"
    ],
    [
      "sets a seal on",
      "确认、印证",
      "set a seal on…：确认、使……确定下来。",
      "承接本段论述，表达作者对量化与道德追求关系的理解。"
    ],
    [
      "morality",
      "道德，品行",
      "morality 为不可数名词；形容词为 moral。",
      "在享乐取向的观点中，道德追求也被解释为幸福最大化。"
    ]
  ],
  [
    [
      "virtue",
      "美德",
      "virtue 表示美德；virtuous 表示有美德的。",
      "与 pleasure 对照，引出另一种理解幸福的方式。"
    ],
    [
      "purpose",
      "人生目的",
      "purpose 在这里指人生目的。",
      "与 virtue 并列，说明美德取向并不把快乐当作唯一目标。"
    ],
    [
      "as an end in itself",
      "作为目的本身",
      "treat A as B：把 A 视为 B；an end in itself：目的本身。",
      "与下一句的 a by-product（副产品）构成对照。"
    ],
    [
      "base",
      "低级的，卑劣的",
      "这里是形容词，修饰 satisfactions。",
      "体现美德取向对不同满足的价值区分。"
    ],
    [
      "self-indulgent",
      "自我放纵的",
      "self-indulgent satisfactions：自我放纵的满足。",
      "与 elevated delights of excellence 形成对比。"
    ],
    [
      "elevated",
      "高尚的",
      "elevated 在这里修饰 delights，表示高尚的。",
      "与 base、self-indulgent 形成价值高下的对比。"
    ]
  ],
  [
    [
      "account for",
      "解释，说明",
      "account for…：解释、说明；本句讨论一种试图解释或反映二者作用的衡量方法。",
      "this 回指快乐与人生目的都参与构成幸福。"
    ]
  ],
  [
    [
      "compatible",
      "相容的，一致的",
      "be compatible with…：与……相容。",
      "surprisingly 暗示：美德取向与量化相容，可能出乎读者预料。"
    ],
    [
      "prescriptive",
      "规定好的",
      "be prescriptive about…：对……作出规范性规定。",
      "说明作者如何理解古希腊对美德与情绪自控的要求。"
    ],
    [
      "emotional self-mastery",
      "情绪的自我控制",
      "self-mastery：自我控制；emotional 限定其涉及情绪。",
      "required to achieve it 修饰这个名词短语，it 回指 virtue。"
    ]
  ],
  [
    [
      "index",
      "指标",
      "an index of…：……的指标。",
      "作者开始追问：情绪是衡量生活的指标，还是生活本身？"
    ],
    [
      "wrestled into harmony",
      "费力地使之协调",
      "wrestle… into…：费力使……进入某种状态；此处为被动形式。",
      "动作感强，突出将情绪调整到理想状态所需的努力。"
    ],
    [
      "drawn to",
      "被……吸引",
      "be drawn to…：受到……吸引；find oneself + 过去分词。",
      "this latter view 指情绪是生活本身的组成。"
    ],
    [
      "optimal",
      "最理想的，最优的",
      "an optimal inner life：一种最优的内心生活。",
      "作者逐渐不再热衷于这种优化目标。"
    ]
  ],
  [
    [
      "hierarchy",
      "等级制度",
      "a hierarchy：等级体系；这里讨论思想与感受之间是否有高下之分。",
      "与 dichotomy 并列，作者否定两者的等级与对立关系。"
    ],
    [
      "dichotomy",
      "对立",
      "a dichotomy between A and B：A 与 B 之间的二分。",
      "作者不再将思想与感受视为存在高下或对立关系。"
    ],
    [
      "reigns",
      "占主导地位",
      "reign 原指统治，这里用于情绪。",
      "与 professional life 中的 words and reasons 对照。"
    ],
    [
      "ripple",
      "如涟漪般扩散，荡漾",
      "ripple through…：在……中如涟漪般扩散。",
      "形象呈现情绪在家人之间流动，既拉远又拉近距离。"
    ]
  ],
  [
    [
      "attending to",
      "关注，留意",
      "attend to…：关注或处理……；这里强调关注体验。",
      "与 accepting 并列，落到具体的生活态度。"
    ],
    [
      "exaltation",
      "兴高采烈",
      "名词，表示强烈的喜悦、兴奋。",
      "与 grief、pain 等并列，展示体验的多样性。"
    ],
    [
      "grief",
      "悲痛，悲伤",
      "grief 常指较深的悲伤。",
      "负面体验同样属于生活，不能只保留快乐。"
    ],
    [
      "rage",
      "暴怒，愤怒",
      "名词，表示强烈的愤怒。",
      "情绪列举包含不同强度与性质的体验。"
    ],
    [
      "make of it what you will",
      "按自己的意愿赋予生活意义或塑造生活",
      "make something of…：理解、赋予意义或塑造……；what you will 表示你愿意赋予的内容。",
      "it 回指 life，强调如何理解并塑造自己的生活。"
    ]
  ],
  [
    [
      "inhabit",
      "置身于，充分投入",
      "inhabit 原意为居住于，此处用于自身体验。",
      "强调充分经历生活，带有比喻色彩。"
    ]
  ]
];
// Lemma (only where it differs from the form in the text) and part of speech, keyed by the entry text.
const lexical={
 "realm":["","n."],"quantify":["","v."],"contentment":["","n."],
 "underlie":["","v."],"approaches":["approach","n."],"detracts from":["detract from","v. phr."],
 "aligns with":["align with","v. phr."],"hedonic":["","adj."],"sets a seal on":["set a seal on","v. phr."],"morality":["","n."],
 "virtue":["","n."],"purpose":["","n."],"as an end in itself":["","phr."],"base":["","adj."],"self-indulgent":["","adj."],"elevated":["","adj."],
 "account for":["","v. phr."],
 "compatible":["","adj."],"prescriptive":["","adj."],"emotional self-mastery":["","n. phr."],
 "index":["","n."],"wrestled into harmony":["wrestle into harmony","v. phr."],"drawn to":["be drawn to","v. phr."],"optimal":["","adj."],
 "hierarchy":["","n."],"dichotomy":["","n."],"reigns":["reign","v."],"ripple":["","v."],
 "attending to":["attend to","v. phr."],"exaltation":["","n."],"grief":["","n."],"rage":["","n."],"make of it what you will":["","v. phr."],
 "inhabit":["","v."]
};
function wordHeadHtml(w){const m=lexical[w]||['',''];return `<span class="word-head"><b lang="en">${esc(w)}</b>${m[0]?`<small class="word-lemma" lang="en">原形 ${esc(m[0])}</small>`:''}</span><i class="word-pos" lang="en">${esc(m[1])}</i>`}
const sentences=[
  {
    "p": 7,
    "kind": "ai",
    "label": "AI 改写练习 · 基于第8段",
    "quote": "Were we to treat sadness and anger, however unwelcome their presence in a household bound together by love might seem, as enemies whose elimination would make us more fully ourselves, we would risk overlooking the possibility that it is precisely those feelings we are most tempted to suppress that reveal what matters to us and that therefore deserve to be noticed rather than wished away.",
    "parts": "<mark>Were we to treat sadness and anger … as enemies …</mark>, <mark>we would risk overlooking the possibility</mark> [that it is precisely those feelings … that reveal … and that therefore deserve …].",
    "analysis": [
      "主干：Were we to treat A as B, we would risk overlooking C。前半部分相当于 If we were to treat…，省略 if 后将 were 提前，构成虚拟条件句；risk 后接动名词 overlooking。",
      "让步插入部分：however unwelcome their presence in a household bound together by love might seem；however + 形容词 + 主语 + 谓语。bound together by love 是过去分词短语，修饰 household。",
      "enemies 后的 whose elimination would make us more fully ourselves 是定语从句；whose elimination 作主语，make us … ourselves 是宾语与宾语补足语结构。",
      "possibility 后的 that 引导同位语从句，说明这种可能性的内容；其中 it is precisely those feelings … that … 是强调句。we are most tempted to suppress 是修饰 feelings 的定语从句，省略了作 suppress 宾语的关系代词。",
      "that reveal… 和 that therefore deserve… 并列承接强调部分；what matters to us 是 reveal 的宾语从句。deserve to be noticed 是被动不定式，rather than 后的 wished away 与 noticed 并列，共用 to be。"
    ]
  },
  {
    "p": 8,
    "kind": "source",
    "label": "原文长难句 · 第9段",
    "quote": "And at every single moment of that experience is your life, waiting for you to make of it what you will.",
    "parts": "And <mark>at every single moment of that experience</mark> <mark>is your life</mark>, [waiting for you to make of it what you will].",
    "analysis": [
      "倒装：时间介词短语 at every single moment of that experience 前置，主语 your life 位于 is 后。还原基本语序为 Your life is at every single moment of that experience。",
      "waiting for you… 是现在分词短语，补充描述 your life；wait for somebody to do something 中，you 是后面不定式动作的执行者。",
      "make of it what you will 可按 make [what you will] of it 理解。what you will 是名词性从句，will 后省略了与 make 相关的动作内容；of it 提到较长的宾语前。"
    ]
  },
  {
    "p": 9,
    "kind": "source",
    "label": "原文长难句 · 第10段",
    "quote": "There is, it suggests, one kind of maximization that matters more than any other: how fully you are able to inhabit your own experiences.",
    "parts": "<mark>There is</mark>, [it suggests], <mark>one kind of maximization</mark> [that matters more than any other]: [how fully you are able to inhabit your own experiences].",
    "analysis": [
      "主干是 There is one kind of maximization。it suggests 是插入语，可先括起来理解主干。",
      "that matters more than any other 是修饰 one kind of maximization 的定语从句，that 在从句中作主语；any other 后省略了 kind of maximization。",
      "冒号后的 how fully… 是解释性名词从句，说明这种 maximization 的具体内容。how fully 修饰 inhabit，you are able to inhabit… 是其余主干；inhabit your own experiences 中的 inhabit 使用比喻义。"
    ]
  }
];
const pronunciations={
 hedonic:{word:'hedonic',src:'audio/hedonic-us.mp3'},
 hierarchy:{word:'hierarchy',src:'audio/hierarchy-us.mp3'},
 dichotomy:{word:'dichotomy',src:'audio/dichotomy-us.mp3'},
 reigns:{word:'reign',src:'audio/reign-us.mp3'}
};
const pronunciationPlayer=document.createElement('audio');
pronunciationPlayer.id='pronunciation-player';
pronunciationPlayer.preload='none';
pronunciationPlayer.hidden=true;
document.body.append(pronunciationPlayer);
let pronunciationButton=null,pronunciationRequest=0;
function stopPronunciation(){
 pronunciationRequest++;pronunciationPlayer.pause();
 if(pronunciationButton){pronunciationButton.classList.remove('playing');pronunciationButton.setAttribute('aria-pressed','false')}
 pronunciationButton=null;
}
function pronunciationButtonHtml(key){
 const p=pronunciations[key];if(!p)return '';
 const label=`播放 ${p.word} 的美式发音`;
 return `<button class="pronunciation" data-pronounce="${key}" title="${label} · Cambridge Dictionary" aria-label="${label}" aria-pressed="false"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4V5Z"/><path d="M15 8a6 6 0 0 1 0 8M18 5a10 10 0 0 1 0 14"/></svg><span>US</span></button>`;
}
async function playPronunciation(button){
 const same=pronunciationButton===button;stopPronunciation();if(same)return;
 const p=pronunciations[button.dataset.pronounce];if(!p)return;
 const request=pronunciationRequest;pronunciationButton=button;
 const status=document.querySelector('#pronunciation-status');if(status)status.textContent='';
 pronunciationPlayer.src=p.src;button.classList.add('playing');button.setAttribute('aria-pressed','true');
 try{await pronunciationPlayer.play()}catch(error){
  if(request!==pronunciationRequest)return;
  stopPronunciation();if(status)status.textContent='音频暂时无法播放，请重试或查看词条中的发音来源。';
 }
}
pronunciationPlayer.addEventListener('ended',stopPronunciation);
let current=0,view='intro',language='words',word=null,hint=false,structure=false;const revealed=new Set();
const $=s=>document.querySelector(s);const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function stageIndex(){return stages.findIndex(s=>current>=s.start&&current<=s.end)}
function selectParagraph(n){current=Math.max(0,Math.min(9,n));word=null;hint=false;if(!sentences.some(s=>s.p===current))language='words';render()}
function currentSentence(){return sentences.find(s=>s.p===current)}
function renderOriginal(){
 const text=paragraphs[current].text,entries=vocabulary[current],sentence=currentSentence();
 const hits=entries.map((v,i)=>({start:text.toLowerCase().indexOf(v[0].toLowerCase()),length:v[0].length,i})).filter(x=>x.start>=0).sort((a,b)=>a.start-b.start);
 function fragment(start,end){let html='',pos=start;for(const h of hits.filter(h=>h.start>=start&&h.start+h.length<=end)){html+=esc(text.slice(pos,h.start));html+=`<button class="word-inline ${word===h.i?'selected':''}" data-word="${h.i}" aria-expanded="${word===h.i}">${esc(text.slice(h.start,h.start+h.length))}</button>`;pos=h.start+h.length}return html+esc(text.slice(pos,end))}
 if(sentence?.kind==='source'&&text.includes(sentence.quote)){
  const start=text.indexOf(sentence.quote),end=start+sentence.quote.length;
  $('#original').innerHTML=fragment(0,start)+`<span class="sentence-mark" id="marked-sentence">${fragment(start,end)}</span><button class="sentence-marker" data-open-sentence aria-label="查看本段长难句" aria-controls="language-content">长难句 ↗</button>`+fragment(end,text.length);
 }else $('#original').innerHTML=fragment(0,text.length);
 $('#sentence-entry').hidden=sentence?.kind!=='ai';
}
function renderLanguage(){
 stopPronunciation();
 const sentence=currentSentence();
 if(!sentence&&language==='sentences')language='words';
 document.querySelector('[data-language="sentences"]').hidden=!sentence;
 document.querySelectorAll('[data-language]').forEach(b=>{b.classList.toggle('active',b.dataset.language===language);b.setAttribute('aria-pressed',b.dataset.language===language)});
 $('#language-count').textContent=language==='words'?`${vocabulary[current].length} 个表达`:sentence.kind==='ai'?'AI 改写 · 非原文':'本段原文';
 if(language==='words'){
  const detail=v=>`<div class="word-detail"><p><span class="detail-label">用法</span>${esc(v[2])}</p><p><span class="detail-label">回到文本</span>${esc(v[3])}</p>${pronunciations[v[0]]?`<p class="pronunciation-source"><a href="https://dictionary.cambridge.org/pronunciation/english/${pronunciations[v[0]].word}" target="_blank" rel="noopener noreferrer">美式发音 · Cambridge Dictionary ↗</a></p>`:''}</div>`;
  const html='<div class="words">'+vocabulary[current].map((v,i)=>`<span class="word-item"><button class="word-chip ${word===i?'selected':''}" data-word="${i}" aria-expanded="${word===i}">${wordHeadHtml(v[0])}<span class="word-gloss">${esc(v[1])}</span></button>${pronunciationButtonHtml(v[0])}</span>${word===i?detail(v):''}`).join('')+'</div><p id="pronunciation-status" class="pronunciation-status" role="status"></p>';
  $('#language-content').innerHTML=html;
 }else{
  $('#language-content').innerHTML=`<div class="sentence"><p class="sentence-label">${esc(sentence.label)}</p>${sentence.kind==='ai'?`<blockquote lang="en">${esc(sentence.quote)}</blockquote>`:'<p class="sentence-note">正文中浅色标记的句子，先尝试找出主干。</p>'}<details class="sentence-analysis"><summary>展开结构解析</summary><p class="sentence-parts" lang="en">${sentence.parts}</p><ol>${sentence.analysis.map(part=>`<li>${esc(part)}</li>`).join('')}</ol></details></div>`;
 }
}
function renderMap(){const idx=stageIndex();$('#map-nodes').innerHTML=stages.map((s,i)=>`<div class="map-node ${i===idx?'current':''} ${revealed.has(i)?'':'locked'}"><button data-stage="${i}" aria-label="Go to ${s.range}"><h3>${revealed.has(i)?s.title:s.name}</h3></button><span class="map-range">${s.range}${revealed.has(i)?'':' · to be summed up'}</span>${revealed.has(i)?`${i===idx?`<p>${s.detail}</p>`:''}<span class="relation">${s.relation}</span>`:''}</div>`).join('');$('#reveal').textContent=revealed.has(idx)?'Hide this stage':'Reveal this stage';$('#structure-toggle').hidden=idx!==3;$('#structure-toggle').textContent=structure?'Hide full text structure':'View full text structure';$('#structure-toggle').setAttribute('aria-expanded',structure);$('#structure').hidden=!(structure&&idx===3);$('#reveal').setAttribute('aria-expanded',revealed.has(idx));$('#wrapup').hidden=!(current===9&&revealed.has(3));}
function render(){const idx=stageIndex();$('#stages').innerHTML=stages.map((s,i)=>`<button class="stage ${i===idx?'active':''}" data-stage="${i}" aria-current="${i===idx?'step':'false'}"><small>${s.range}</small><strong>${s.name}</strong></button>`).join('');$('#paragraph-label').textContent=`${String(current+1).padStart(2,'0')} / 10`;$('#question').textContent=stages[idx].q;$('#stage-name').textContent=stages[idx].name;$('#summary').textContent=paragraphs[current].summary;$('#summary').hidden=!hint;$('#hint').textContent=hint?'隐藏段意':'显示段意';$('#hint').setAttribute('aria-expanded',hint);$('#dots').innerHTML=paragraphs.map((_,i)=>`<button data-paragraph="${i}" class="${i===current?'active':''}" aria-label="第 ${i+1} 段" aria-current="${i===current?'step':'false'}">${i+1}</button>`).join('');$('#prev').disabled=current===0;$('#next').textContent=current===9?'进入写作':'下一段';renderOriginal();renderLanguage();renderMap()}
function setView(v){stopPronunciation();view=v;['intro','reading','writing'].forEach(id=>$('#'+id).hidden=id!==v);document.querySelectorAll('[data-view]').forEach(b=>{b.classList.toggle('active',b.dataset.view===v);b.setAttribute('aria-pressed',b.dataset.view===v)});}
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.pronounce){playPronunciation(b);return}const focusKey=['word','paragraph','stage','sentence'].find(k=>b.dataset[k]!==undefined);const focusClass=b.classList.contains('word-inline')?'.word-inline':b.classList.contains('word-chip')?'.word-chip':b.classList.contains('stage')?'.stage':'';if(b.dataset.paragraph!==undefined)selectParagraph(+b.dataset.paragraph);if(b.dataset.stage!==undefined)selectParagraph(stages[+b.dataset.stage].start);if(b.dataset.word!==undefined){const i=+b.dataset.word;word=word===i?null:i;language='words';renderOriginal();renderLanguage()}if(b.dataset.language){language=b.dataset.language;word=null;renderOriginal();renderLanguage()}if(b.hasAttribute('data-open-sentence')){language='sentences';word=null;renderOriginal();renderLanguage();$('.sentence-analysis summary').focus({preventScroll:true});$('.language').scrollIntoView({block:'nearest',behavior:'auto'})}if(b.dataset.jump!==undefined){selectParagraph(+b.dataset.jump)}if(b.dataset.view)setView(b.dataset.view);if(focusKey&&!b.isConnected){document.querySelector(`${focusClass}[data-${focusKey}="${b.dataset[focusKey]}"]`)?.focus({preventScroll:true})}});
$('#hint').onclick=()=>{hint=!hint;$('#summary').hidden=!hint;$('#hint').textContent=hint?'隐藏段意':'显示段意';$('#hint').setAttribute('aria-expanded',hint)};$('#prev').onclick=()=>selectParagraph(current-1);$('#next').onclick=()=>current===9?setView('writing'):selectParagraph(current+1);$('#structure-toggle').onclick=()=>{structure=!structure;renderMap();if(structure)$('#structure').scrollIntoView({block:'start',behavior:'auto'})};$('#reveal').onclick=()=>{const s=stageIndex();revealed.has(s)?revealed.delete(s):revealed.add(s);renderMap()};$('.brand').onclick=e=>{e.preventDefault();setView('reading')};$('#fullscreen').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen()}catch{$('#fullscreen').textContent='请使用浏览器全屏'}};document.addEventListener('fullscreenchange',()=>{$('#fullscreen').textContent=document.fullscreenElement?'退出全屏':'全屏演示'});document.addEventListener('keydown',e=>{if(view!=='reading'||e.altKey||e.metaKey||e.ctrlKey||['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)||!$('#tools-panel').hidden)return;if(e.key==='ArrowRight'&&current<9){e.preventDefault();selectParagraph(current+1)}if(e.key==='ArrowLeft'&&current>0){e.preventDefault();selectParagraph(current-1)}});$('#structure-flow').innerHTML=stages.map(s=>`<li><span class="structure-range">${s.range}</span><span class="structure-fn">${s.fn}</span><h4>${s.title}</h4><ul>${s.points.map(p=>`<li>${p}</li>`).join('')}</ul></li>`).join('');render();

$('#begin-reading').onclick=()=>{setView('reading');selectParagraph(0);$('#stages .stage').focus({preventScroll:true});window.scrollTo({top:0,behavior:'auto'})};

/* Classroom tools: lesson timer with a scheduled start, and a random picker. State stays in this browser. */
const store={get(k,d){try{return Object.assign({},d,JSON.parse(localStorage.getItem(k)||'{}'))}catch{return {...d}}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch{}}};
// Minute by which the opener and each paragraph should be finished in a 40-minute lesson; scaled to the chosen length.
const planLength=40,introDeadline=3.5,paragraphDeadlines=[5.75,8,10.5,13,15.5,18,22,27,32,39];
const timer=store.get('u4-timer',{startAt:null,paused:null,scheduledAt:null,total:planLength,visible:true});
const clock=ms=>{const s=Math.max(0,Math.floor(ms/1000));return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')};
const timerIdle=()=>timer.startAt===null&&timer.paused===null;
function saveTimer(){store.set('u4-timer',timer);renderTimerControls()}
function toggleTimer(){const now=Date.now();if(timer.startAt!==null){timer.paused=now-timer.startAt;timer.startAt=null}else{timer.startAt=now-(timer.paused||0);timer.paused=null;timer.scheduledAt=null}saveTimer();tickTimer()}
function showTime(now,total){const el=$('#timer');if(!el.firstElementChild)el.innerHTML='<span class="timer-now"></span><span class="timer-total"></span>';el.children[0].textContent=now;el.children[1].textContent=total}
function tickTimer(){
 const now=Date.now(),total=timer.total*60000,el=$('#timer');
 if(timer.scheduledAt!==null&&now>=timer.scheduledAt){if(timerIdle()&&now-timer.scheduledAt<total+3600000)timer.startAt=timer.scheduledAt;timer.scheduledAt=null;saveTimer()}
 el.hidden=!timer.visible;
 if(timerIdle()&&timer.scheduledAt!==null){showTime('−'+clock(timer.scheduledAt-now),'');el.dataset.state='waiting';el.title='距定时启动的时间；点击立即开始';return}
 const elapsed=timer.paused!==null?timer.paused:timer.startAt!==null?now-timer.startAt:0;
 const deadline=(view==='intro'?introDeadline:view==='reading'?paragraphDeadlines[current]:planLength)*timer.total/planLength*60000;
 showTime(clock(elapsed),' / '+clock(total));
 el.dataset.state=timerIdle()?'idle':timer.paused!==null?'paused':elapsed>=total?'over':total-elapsed<=300000?'ending':elapsed>deadline?'behind':'ontrack';
 el.title=timerIdle()?'点击开始计时':timer.paused!==null?'已暂停，点击继续':'点击暂停';
}
function renderTimerControls(){
 $('#timer-toggle').textContent=timer.startAt!==null?'暂停':timer.paused!==null?'继续':'开始';
 $('#timer-visible').checked=timer.visible;if(document.activeElement!==$('#timer-total'))$('#timer-total').value=timer.total;
 $('#timer-status').textContent=timer.scheduledAt!==null?`已设定 ${new Date(timer.scheduledAt).toLocaleString('zh-CN',{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'})} 自动开始`:timer.startAt!==null?'计时中':timer.paused!==null?'已暂停':'未开始';
}
$('#timer').onclick=toggleTimer;$('#timer-toggle').onclick=toggleTimer;
$('#timer-reset').onclick=()=>{timer.startAt=null;timer.paused=null;saveTimer();tickTimer()};
$('#timer-visible').onchange=e=>{timer.visible=e.target.checked;saveTimer();tickTimer()};
$('#timer-total').onchange=e=>{const n=Math.round(+e.target.value);if(n>=1&&n<=180)timer.total=n;saveTimer();tickTimer()};
$('#timer-schedule-set').onclick=()=>{const t=new Date($('#timer-schedule').value).getTime();if(!t||t<=Date.now()){$('#timer-status').textContent='请选择一个将来的时间';return}timer.scheduledAt=t;timer.startAt=null;timer.paused=null;saveTimer();tickTimer()};
$('#timer-schedule-clear').onclick=()=>{timer.scheduledAt=null;saveTimer();tickTimer()};
{const d=new Date();d.setHours(8,40,0,0);if(d<=new Date())d.setDate(d.getDate()+1);const p=n=>String(n).padStart(2,'0');$('#timer-schedule').value=`${d.getFullYear()}-${p(d.getMonth()+1)}-${p(d.getDate())}T08:40`}
renderTimerControls();tickTimer();setInterval(tickTimer,500);

const picker=store.get('u4-picker',{names:'',count:40,noRepeat:true,picked:[]});
let pickRun=0;
function pickPool(){const names=picker.names.split('\n').map(s=>s.trim()).filter(Boolean);return names.length?names:Array.from({length:picker.count},(_,i)=>`${i+1} 号`)}
function savePicker(){store.set('u4-picker',picker);const pool=pickPool();$('#pick-left').textContent=picker.noRepeat?`还剩 ${pool.filter(n=>!picker.picked.includes(n)).length} / ${pool.length}`:`共 ${pool.length} 人`}
function pick(){
 const pool=pickPool();let candidates=picker.noRepeat?pool.filter(n=>!picker.picked.includes(n)):pool;
 if(!candidates.length){picker.picked=[];candidates=pool}
 const chosen=candidates[Math.floor(Math.random()*candidates.length)],run=++pickRun,out=$('#pick-result');
 if(picker.noRepeat)picker.picked.push(chosen);savePicker();
 const stage=$('#pick-stage'),show=t=>{out.textContent=t;stage.textContent=t};
 clearTimeout(pickHide);stage.hidden=false;stage.classList.remove('settled');
 const settle=()=>{show(chosen);stage.classList.add('settled');pickHide=setTimeout(()=>{stage.hidden=true},3500)};
 if(matchMedia('(prefers-reduced-motion:reduce)').matches){settle();return}
 let n=0;(function spin(){if(run!==pickRun)return;if(n++<12){show(pool[Math.floor(Math.random()*pool.length)]);setTimeout(spin,45+n*7)}else settle()})();
}
let pickHide=0;document.body.insertAdjacentHTML('beforeend','<div id="pick-stage" class="pick-stage" role="status" hidden></div>');
$('#pick-stage').onclick=()=>{clearTimeout(pickHide);$('#pick-stage').hidden=true};
$('#pick-go').onclick=pick;
$('#pick-reset').onclick=()=>{pickRun++;clearTimeout(pickHide);$('#pick-stage').hidden=true;picker.picked=[];$('#pick-result').textContent='—';savePicker()};
$('#pick-norepeat').checked=picker.noRepeat;$('#pick-count').value=picker.count;$('#pick-names').value=picker.names;
$('#pick-norepeat').onchange=e=>{picker.noRepeat=e.target.checked;savePicker()};
$('#pick-count').onchange=e=>{const n=Math.round(+e.target.value);if(n>=1&&n<=200)picker.count=n;picker.picked=[];savePicker()};
$('#pick-names').onchange=e=>{picker.names=e.target.value;picker.picked=[];savePicker()};
savePicker();

function setTools(open){$('#tools-panel').hidden=!open;$('#tools').setAttribute('aria-expanded',open)}
$('#tools').onclick=()=>setTools($('#tools-panel').hidden);
document.addEventListener('click',e=>{if(!e.target.closest('#tools-panel,#tools'))setTools(false)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#tools-panel').hidden){setTools(false);$('#tools').focus()}});
