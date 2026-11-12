'use strict';
// Presentation-only catalog. Store prices, entitlements and balances must come from verified services.
const $=s=>document.querySelector(s);const img=(id,cls='')=>`<img src="${ASSETS[id]}" alt="" class="${cls}">`;
const boosters=[['rainbow-friend','Rainbow Friend','Turn matching Puffs into Rainbow Puffs.'],['precision-trail','Precision Trail','Aim, bounce and find the perfect spot.'],['soft-burst','Soft Burst','Clear an area with a fluffy burst.'],['cozy-save','Cozy Save','An optional helping hand for your level.']];
const cannons=[['cloud-sling','Cloud Sling'],['moonlight-cannon','Moonlight'],['bloom-launcher','Bloom Launcher'],['rainbow-launcher','Rainbow Launcher'],['starburst-cannon','Starburst']];
const families=['rosybuns','skydoodles','mossmops','sunpuffs','plumplets','peachpeeps'];
const tabs=[['featured','Featured','stars'],['boosters','Boosters','soft-burst'],['bundles','Bundles','gift'],['cosmetics','Cosmetics','frame-laurel'],['rewards','Rewards','gift']];
let active='featured',filter='Cannons',noticeTimer;
function notice(text){$('#notice').textContent=text;clearTimeout(noticeTimer);noticeTimer=setTimeout(()=>$('#notice').textContent='',6000)}
function modal(title,art,text,extra=''){ $('#dialog-body').innerHTML=`${img(art,'modal-art')}<h2>${title}</h2><p>${text}</p>${extra}`;$('#details').showModal(); }
function bundle(id){const large=id==='collection';modal(large?'Booster Collection':'Starter Adventure Bundle','bundles/'+id,'Everything inside, clearly listed. This preview uses illustrative quantities; the final offer will be shown before purchase.',`<ul>${boosters.slice(0,large?4:3).map(x=>`<li>${x[1]} <b>×${large?2:1}</b></li>`).join('')}</ul><button class="action secondary" disabled>Store unavailable</button><p>Purchases are not available in this preview.</p>`)}
function item(id,title,desc,action,label){return `<article class="item">${img(id)}<h3>${title}</h3><p>${desc}</p><button class="action" data-action="${action}">${label}</button></article>`}
function title(h,p=''){return `<div class="section-title"><h2>${h}</h2><p>${p}</p></div>`}
function boosterGrid(){return `<div class="grid">${boosters.map(x=>item(x[0],x[1],x[2],'booster:'+x[0],'View reward')).join('')}</div>`}
function hero(){return `<section class="hero"><div><span class="eyebrow">A BOOST FOR YOUR NEXT ADVENTURE</span><h2>Little helpers.<br><em>Big adventures.</em></h2><p>A familiar bundle of Puff Trails magic, ready when you want a little help.</p><button class="action" data-action="bundle:starter">View Bundle ›</button></div>${img('bundles/starter','hero-art')}</section>`}
function render(){
 $('#tabs').innerHTML=tabs.map(t=>`<button data-tab="${t[0]}" aria-pressed="${active===t[0]}">${img(t[2])}${t[1]}</button>`).join('');
 let html='';
 if(active==='featured')html=hero()+title('Your little helpers','Always optional')+boosterGrid()+title('Meet your cannon collection','Original designs')+`<div class="mini-grid">${cannons.map(x=>`<button data-action="preview:${x[0]}" aria-label="Preview ${x[1]}">${img(x[0])}<span>${x[1]}</span></button>`).join('')}</div>`;
 if(active==='boosters')html=title('A little boost, your way')+'<p class="intro">Choose a helper to see its reward details. Every adventure level can be completed without boosters.</p>'+boosterGrid();
 if(active==='bundles')html=title('A bundle of possibilities')+'<p class="intro">Fixed contents, familiar helpers. Browse every item before you decide.</p><div class="grid wide">'+item('bundles/starter','Starter Adventure Bundle','Rainbow Friend, Precision Trail and Soft Burst.','bundle:starter','View Bundle')+item('bundles/collection','Booster Collection','All four original helpers in one collection.','bundle:collection','View Bundle')+'</div>';
 if(active==='cosmetics'){
 const list=filter==='Cannons'?cannons:filter==='Characters'?families.map(x=>[x,x[0].toUpperCase()+x.slice(1)]):filter==='Frames'?['gold','violet','elite','laurel'].map(x=>['frame-'+x,x[0].toUpperCase()+x.slice(1)+' Frame']):[['sparkles','Golden Sparkles']];
 html=title('A collection full of character')+'<p class="intro">Explore the original looks. This gallery previews your collection; it does not offer cannon power or character unlocks for sale.</p><div class="subtabs">'+['Cannons','Characters','Frames','Effects'].map(x=>`<button data-filter="${x}" aria-pressed="${filter===x}">${x}</button>`).join('')+'</div><div class="grid">'+list.map(x=>item(x[0],x[1],'Original collection artwork','preview:'+x[0],'Preview')).join('')+'</div>';
 }
 if(active==='rewards')html=title('A little extra, only if you choose')+'<p class="intro">Optional video rewards never interrupt an adventure. Preview the exact reward before choosing to watch.</p><div class="grid wide">'+item('coins','Optional Coin Reward','An optional coin placement. Amount and availability will be confirmed when connected.','ad:coins','View reward')+item('rainbow-friend','Rainbow Friend Reward','One Rainbow Friend from an optional video reward.','ad:rainbow-friend','View reward')+'</div><div class="ribbon">No video is required to play, retry, or discover characters.</div>';
 $('#content').innerHTML=html;
}
document.addEventListener('click',e=>{
 const tab=e.target.closest('[data-tab]');if(tab){active=tab.dataset.tab;render();document.querySelector(`[data-tab="${active}"]`).focus();return}
 const sub=e.target.closest('[data-filter]');if(sub){filter=sub.dataset.filter;render();document.querySelector(`[data-filter="${filter}"]`).focus();return}
 const a=e.target.closest('[data-action]');if(!a)return;const [kind,id]=a.dataset.action.split(':');
 if(kind==='bundle')bundle(id);
 if(kind==='preview')modal(id.split('-').map(x=>x[0].toUpperCase()+x.slice(1)).join(' '),id,'Original Puff Trails collection artwork. Cosmetic offers will appear here when available.');
 if(kind==='booster'||kind==='ad'){
 const b=boosters.find(x=>x[0]===id);modal(b?b[1]:'Coin Reward',id,b?`${b[2]} Reward: 1 ${b[1]}.`:'The coin amount will be shown before an offer becomes available.',`<button class="action secondary" disabled>Video unavailable</button><p>You can continue playing without watching a video.</p>`);
 }
});
$('#details .close').onclick=()=>$('#details').close();$('#details').addEventListener('click',e=>{if(e.target===$('#details')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close()}});
$('#restore').onclick=()=>notice('The store is unavailable. Your existing purchases and progress are unchanged.');
document.querySelectorAll('[data-art]').forEach(x=>x.src=ASSETS[x.dataset.art]);render();
