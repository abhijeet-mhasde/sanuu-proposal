const panels = ["intro","story","dreams","promises","chat","proposal","forever"];
let idx = 0;
function show(i){
  panels.forEach((p,pi)=>{
    const el = document.getElementById(p);
    if(!el) return;
    if(pi===i) el.classList.add('active'); else el.classList.remove('active');
  });
  idx = i;
}
document.getElementById('startBtn').addEventListener('click', ()=> show(1) );
document.querySelectorAll('[data-next]').forEach(btn=> btn.addEventListener('click', ()=> show(Math.min(idx+1, panels.length-1))));

// timeline
const timeline = [
  {date:'May 13, 2023', title:'First voice call', text:'I was on my scooty traveling to the village — you said you wished you were with me on that ride.', photo:'assets/media/photo1.jpg'},
  {date:'May 15, 2023', title:'First video call', text:'The first time I saw your face on screen — my heart knew something was beginning.', photo:'assets/media/photo2.jpg'},
  {date:'First meeting', title:'Ahmedabad — first meeting', text:'When you stood in front of me, I was speechless. I didn’t tell you then, but I was in awe.', photo:'assets/media/photo3.jpg'}
];
const timelineEl = document.getElementById('timeline');
timeline.forEach(t => {
  const div = document.createElement('div'); div.className='tcard';
  div.innerHTML = `<div class="small">${t.date}</div><h4>${t.title}</h4><p>${t.text}</p><div style="margin-top:8px"><img src="${t.photo}" style="width:100%;border-radius:8px" /></div>`;
  timelineEl.appendChild(div);
});

// promises
const promises = [
  {title:'Love as Rent', text:"I can't pay kiraya with money, but I'll pay it with endless love, care, and dua. Kiraya hamesha pyaar aur dua se bharta rahunga."},
  {title:'Warm Meals', text:"I'll cook with pyaar and feed you gently — khana with love and a smile."},
  {title:'Laughter as Light', text:"I'll keep your days bright, tease you gently and hold you when the world feels heavy."},
  {title:'Care, Always', text:"From small worries to big dreams — I'll stand by you and keep you safe."}
];
const pg = document.getElementById('promisesGrid');
promises.forEach(p=>{
  const d = document.createElement('div'); d.className='promise'; d.innerHTML=`<div class="title">${p.title}</div><div class="body">${p.text}</div>`;
  d.addEventListener('click', ()=> alert(p.text));
  pg.appendChild(d);
});

// chat
const chat = [
  {who:'Abhijeet', time:'10:57 PM', text:'Would you mind sharing your closet space with me for the next 60 years or so?', me:true},
  {who:'Sanuu', time:'10:59 PM', text:'Okay. Kiraya de dena 😉', me:false},
  {who:'Abhijeet', time:'11:03 PM', text:'I’ll pay the rent with love, laughter, and a little warmth for the years ahead.', me:true},
  {who:'Abhijeet', time:'11:06 PM', text:'Khana bhi—ab maine seekh liya. Bana kar pyaar se khilaunga.', me:true}
];
const chatbox = document.getElementById('chatbox');
chat.forEach(m=>{
  const el = document.createElement('div'); el.className = 'msg ' + (m.me ? 'me' : 'them');
  el.innerHTML = `<div style="font-weight:700">${m.who} · <span style="font-weight:400">${m.time}</span></div><div style="margin-top:6px">${m.text}</div>`;
  chatbox.appendChild(el);
});

// proposal
const yesBtn = document.getElementById('yesBtn');
const nudgeBtn = document.getElementById('nudgeBtn');
const accepted = document.getElementById('accepted');
let nudgeCount = 0;
const nudgeTexts = [
  'Kiraya love, laughter & warmth 💗',
  'Free unlimited hugs included 🤗',
  'Chef-mode: khana with pyaar 🍲',
  'Lifetime maintenance of your smile ✨',
  'Okay fine, adding flowers too 🌸'
];
nudgeBtn.addEventListener('click', ()=>{
  nudgeCount = Math.min(nudgeCount+1, nudgeTexts.length-1);
  nudgeBtn.textContent = nudgeTexts[nudgeCount];
});
yesBtn.addEventListener('click', ()=>{
  accepted.hidden = false;
  localStorage.setItem('sanuuAccepted','true');
  setTimeout(()=> show(6), 1400);
});

// gallery
const gallery = document.getElementById('gallery');
const photos = [
  'assets/media/photo1.jpg','assets/media/photo2.jpg','assets/media/photo3.jpg',
  'assets/media/photo4.jpg','assets/media/photo5.jpg','assets/media/photo6.jpg'
];
photos.forEach(p=>{
  const d = document.createElement('div'); d.className='thumb';
  d.innerHTML = `<img src="${p}" style="width:100%;height:100%;object-fit:cover" />`;
  gallery.appendChild(d);
});

// replay
document.getElementById('replay').addEventListener('click', ()=> show(0));

// music
const music = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
musicToggle.addEventListener('click', ()=>{
  if(music.paused){ music.play(); musicToggle.textContent='Music On'; }
  else { music.pause(); musicToggle.textContent='Music Off'; }
});

show(0);
