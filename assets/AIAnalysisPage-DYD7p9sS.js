import{v as E,b as K,r as m,j as e,g as y,f as U,D as u,F as B}from"./index-DTMiaRda.js";import{C as I}from"./card-DhzZ4dPe.js";import{B as R}from"./button-ylflEir-.js";import{P as z}from"./PageTransition-iVgAngrT.js";import{L as V}from"./LottieSpinner-SxJs_Ume.js";import{S as L}from"./sparkles-DPSFHwMI.js";import{W as O,M as H}from"./index-CBzz7ehv.js";import{m as _}from"./proxy-DAck0ZCC.js";import{S as G}from"./send-DXxFNOIS.js";import{B as F}from"./brain-circuit-CKzszboz.js";import{c as W}from"./createLucideIcon-CBKBC6vh.js";import"./index.es-B9TZkRRb.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Y=W("database",q);function le(){const{currentLocation:$,locationName:r}=E(),{t:Q,language:n}=K(),[v,k]=m.useState(!1),[S,w]=m.useState(""),[d,D]=m.useState([]),[g,j]=m.useState(!0),[h,b]=m.useState([]),A=m.useRef(null),T=(t,i)=>t==="id"?`Halo, Manajer. Saya bisa membantu menganalisis data inventaris ${i}. Tanyakan soal stok menipis, nilai aset, atau cari produk tertentu.`:`Hello, Manager. I can help analyze ${i}'s inventory data. Ask about low stock, asset value, or search for a specific product.`,C=()=>{var t;(t=A.current)==null||t.scrollIntoView({behavior:"smooth"})};m.useEffect(()=>{C()},[h]),m.useEffect(()=>{h.length===0&&b([{role:"ai",content:T(n,r)}])},[n,r]),m.useEffect(()=>{(async()=>{j(!0);try{const i=await U("getInventory",{location_id:$});i.status==="success"&&D(i.data||[])}catch(i){console.error("Failed to load inventory for AI analysis",i)}finally{j(!1)}})()},[$]);const M=()=>{k(!0),setTimeout(()=>{k(!1);const t=d.filter(o=>(o.stock||0)<u),i=d.length,f=d.reduce((o,N)=>o+(N.price||0)*(N.stock||0),0),l=i>0?Math.round((i-t.length)/i*100):100,c=Array.from(new Set(d.map(o=>o.category||"Other"))),p=c.slice(0,3).join(", ")||"General",a=t.length>0?t.map(o=>n==="id"?`* **${o.name}**: Sisa stok **${o.stock}** unit (harga jual Rp ${o.price.toLocaleString("id-ID")})`:`* **${o.name}**: Remaining stock **${o.stock}** units (selling price Rp ${o.price.toLocaleString("id-ID")})`).join(`
`):n==="id"?"* **Tidak terdeteksi kekurangan stok mendesak.** Semua inventaris SKU aktif berjalan di atas margin kritis.":"* **No immediate stock shortage detected.** All active SKU inventories are running above critical margins.",s=t.length>0?n==="id"?`Buat replenishment order segera untuk item-item yang menipis (**${t.slice(0,2).map(o=>o.name).join(", ")}**) guna mencegah potensi lost sales.`:`Create replenishment order immediately for depleting items (**${t.slice(0,2).map(o=>o.name).join(", ")}**) to prevent potential lost sales.`:n==="id"?"Lakukan pemantauan berkala dan siapkan program bundling untuk memaksimalkan perputaran produk sehat.":"Perform regular monitoring and prepare bundling programs to maximize healthy product turnover.",x=n==="id"?`### **RINGKASAN INVENTARIS: ${r.toUpperCase()}**

**Ringkasan Eksekutif:**
Ringkasan ini dihitung langsung dari data inventaris **${r}**. Skor kesehatan stok saat ini **${l}%**.

* **Total SKU Aktif:** **${i}** tipe produk unik
* **Nilai Aset Operasional:** **Rp ${f.toLocaleString("id-ID")}**
* **Status Keamanan Stok:** ${l>=80?"OPTIMAL":"DIPERLUKAN PENGISIAN ULANG"}

**Diagnostik Database Real-Time:**
Kami memindai database inventaris langsung Anda dan mengidentifikasi faktor operasional berikut:

**Varians Stok & Peringatan:**
${a}

**Distribusi Kategori:**
* Inventaris cabang sebagian besar terdistribusi di: **${p}**.

**Saran Strategis yang Dapat Ditindaklanjuti:**
1. **Prioritas Restock:** ${s}
2. **Fokus Promosi:** Luncurkan paket reward pelanggan yang bergerak cepat dengan memusatkan pada kategori berkinerja terbaik Anda (**${c.length>0?c[0]:"Produk Utama"}**) untuk meningkatkan ukuran keranjang pelanggan rata-rata.
3. **Alokasi Staf:** Deploy penjadwalan barista yang dioptimalkan selama lalu lintas operasional puncak (berdasarkan lonjakan volume transaksi historis) untuk memaksimalkan throughput transaksi hingga 15%.`:`### **INVENTORY SUMMARY: ${r.toUpperCase()}**

**Executive Summary:**
This summary is computed directly from **${r}**'s inventory data. Current stock health score is **${l}%**.

* **Total Active SKUs:** **${i}** unique product types
* **Operational Asset Value:** **Rp ${f.toLocaleString("id-ID")}**
* **Stock Security Status:** ${l>=80?"OPTIMAL":"REPLENISHMENT REQUIRED"}

**Real-Time Database Diagnostics:**
We scanned your live inventory database and identified the following operational factors:

**Stock Variance & Alerts:**
${a}

**Category Distribution:**
* Branch inventory is primarily distributed across: **${p}**.

**Actionable Strategic Advice:**
1. **Restock Priority:** ${s}
2. **Promotional Focus:** Launch a fast-moving customer reward bundle centering on your top-performing categories (**${c.length>0?c[0]:"Main Products"}**) to increase average customer cart size.
3. **Staff Allocation:** Deploy optimized barista scheduling during peak operational traffic (predicted spike based on historical transaction volumes) to maximize transaction throughput by up to 15%.`;b(o=>[...o,{role:"ai",content:x}]),B.success(n==="id"?"Ringkasan Selesai":"Summary Ready",{description:n==="id"?`Ringkasan inventaris untuk ${r} berhasil dibuat.`:`Inventory summary generated for ${r}.`,duration:4e3})},2e3)},P=t=>{if(t==null||t.preventDefault(),!S.trim())return;const i=S,f=[...h,{role:"user",content:i}];b(f),w(""),k(!0),setTimeout(()=>{k(!1);const l=i.toLowerCase();let c="";const p=d.filter(a=>a.name.toLowerCase().includes(l)||a.category&&a.category.toLowerCase().includes(l));if(l.includes("stok")||l.includes("stock")||l.includes("reorder")||l.includes("tipis")||l.includes("sedikit")){const a=d.filter(s=>(s.stock||0)<u);a.length>0?c=n==="id"?`Saya mendeteksi **${a.length} produk** dengan stok di bawah batas aman (< ${u} unit):

`+a.map(s=>`* **${s.name}**: ${s.stock} unit (Rp ${s.price.toLocaleString("id-ID")})`).join(`
`)+`

Direkomendasikan untuk segera melakukan pengisian ulang.`:`I detected **${a.length} products** with stock below the safe margin (< ${u} units):

`+a.map(s=>`* **${s.name}**: ${s.stock} units (Rp ${s.price.toLocaleString("id-ID")})`).join(`
`)+`

It is recommended to restock immediately.`:c=n==="id"?`Seluruh **${d.length} produk** di database Anda berada dalam kondisi aman (stok di atas batas minimum). Tidak ada kebutuhan restock mendesak saat ini.`:`All **${d.length} products** in your database are in safe condition (stock above minimum limits). There is no urgent need for restocking at this time.`}else if(l.includes("total")||l.includes("aset")||l.includes("nilai")||l.includes("value")){const a=d.reduce((s,x)=>s+(x.price||0)*(x.stock||0),0);c=n==="id"?`Berdasarkan data riil di database Anda untuk **${r}**:
* **Total SKU Aktif:** ${d.length}
* **Total Nilai Aset Inventaris:** Rp ${a.toLocaleString("id-ID")}
* **Status Kesehatan:** ${d.filter(s=>s.stock<u).length>0?"Perlu perhatian khusus pada beberapa item.":"Sangat Sehat."}`:`Based on real data in your database for **${r}**:
* **Total Active SKU:** ${d.length}
* **Total Inventory Asset Value:** Rp ${a.toLocaleString("id-ID")}
* **Health Status:** ${d.filter(s=>s.stock<u).length>0?"Requires special attention on some items.":"Very Healthy."}`}else p.length>0?c=n==="id"?`Saya menemukan produk berikut di database **${r}** yang cocok dengan pencarian Anda:

`+p.slice(0,5).map(a=>`* **${a.name}**
  - Kategori: ${a.category}
  - Stok saat ini: **${a.stock}** unit
  - Harga satuan: **Rp ${a.price.toLocaleString("id-ID")}**
  - Status: ${a.stock<u?"🔴 KRITIS (perlu restock)":"🟢 AMAN"}`).join(`

`):`I found the following products in the **${r}** database that match your search:

`+p.slice(0,5).map(a=>`* **${a.name}**
  - Category: ${a.category}
  - Current Stock: **${a.stock}** units
  - Unit Price: **Rp ${a.price.toLocaleString("id-ID")}**
  - Status: ${a.stock<u?"🔴 CRITICAL (needs restock)":"🟢 SAFE"}`).join(`

`):c=n==="id"?`Saya telah memproses pertanyaan Anda tentang **"${i}"** di cabang **${r}**.

Berdasarkan data real-time database kami:
* Kami memonitor **${d.length} SKU** secara aktif.
* Total nilai stok tersimpan sebesar **Rp ${d.reduce((a,s)=>a+s.price*s.stock,0).toLocaleString("id-ID")}**.
* Tidak ditemukan produk spesifik dengan nama/kategori tersebut. Coba cari produk lain atau tanyakan tentang 'stok tipis' dan 'nilai aset'.`:`I have processed your question about **"${i}"** in the **${r}** branch.

Based on our real-time database data:
* We actively monitor **${d.length} SKU**.
* Total stored stock value is **Rp ${d.reduce((a,s)=>a+s.price*s.stock,0).toLocaleString("id-ID")}**.
* No specific product was found with that name/category. Try searching for other products or ask about 'depleting stock' and 'asset value'.`;b(a=>[...a,{role:"ai",content:c}])},1e3)};return e.jsxs(z,{className:"max-w-5xl mx-auto space-y-8 pb-12 font-sans",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-8",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-11 h-11 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl flex items-center justify-center",children:e.jsx(L,{className:"w-5 h-5 text-indigo-600 dark:text-indigo-400"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-bold text-foreground",children:n==="id"?"Analisis prediktif dan rekomendasi untuk cabang Anda":"Predictive analysis and recommendations for your branch"}),e.jsx("p",{className:"text-xs text-white/40 mt-0.5",children:n==="id"?"Insight otomatis berbasis data penjualan":"Automated insights based on sales data"})]})]}),e.jsxs(R,{onClick:M,disabled:v||g,className:"bg-indigo-600 hover:bg-indigo-700 h-14 px-8 rounded-2xl shadow-xl shadow-indigo-600/20 font-black uppercase tracking-widest text-[11px] text-white border-none transition-all hover:scale-[1.02] gap-3",children:[v?e.jsx(V,{size:"sm"}):e.jsx(O,{className:"w-5 h-5"}),v?n==="id"?"Memindai Cabang...":"Scanning Branch...":n==="id"?"Buat Analisis Otomatis":"Generate Auto-Analysis"]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8 items-start",children:[e.jsx("div",{className:"lg:col-span-2",children:e.jsxs(I,{className:"rounded-[40px] border-none shadow-2xl shadow-indigo-600/5 bg-card flex flex-col h-[650px] overflow-hidden",children:[e.jsxs("div",{className:"flex-1 overflow-y-auto p-10 space-y-8 scrollbar-hide",children:[h.map((t,i)=>e.jsxs(_.div,{initial:{opacity:0,scale:.95,y:10},animate:{opacity:1,scale:1,y:0},transition:{duration:.4},className:y("flex flex-col max-w-[90%]",t.role==="user"?"ml-auto items-end":"mr-auto items-start"),children:[e.jsx("div",{className:y("p-6 rounded-[32px] text-sm font-medium leading-relaxed shadow-sm whitespace-pre-wrap",t.role==="user"?"bg-indigo-600 text-white rounded-br-none":"bg-white/5 text-foreground rounded-bl-none border border-border"),children:e.jsx("div",{className:y("markdown-body max-w-none prose prose-slate",t.role==="user"?"prose-invert":""),children:e.jsx(H,{children:t.content})})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
                    .markdown-body h3 { font-size: 1.1rem; font-weight: 900; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: -0.025em; }
                    .markdown-body p { margin-bottom: 0.75rem; }
                    .markdown-body ul { list-style-type: disc; padding-left: 1.25rem; margin-bottom: 1rem; }
                    .markdown-body li { margin-bottom: 0.5rem; }
                    .markdown-body strong { font-weight: 800; }
                  `}}),e.jsx("span",{className:"text-[9px] font-black uppercase tracking-widest text-white/40 mt-2 px-2",children:t.role==="user"?n==="id"?"Akses Manajer":"Manager Access":n==="id"?"Sistem AI Utama":"Core AI System"})]},i)),e.jsx("div",{ref:A})]}),e.jsx("div",{className:"p-8 bg-white/5 border-t border-border",children:e.jsxs("form",{onSubmit:P,className:"relative",children:[e.jsx("input",{type:"text",value:S,onChange:t=>w(t.target.value),placeholder:g?n==="id"?"Menyinkronkan database cabang...":"Synchronizing branch database...":n==="id"?`Tanyakan apa saja tentang performa ${r}...`:`Ask anything about ${r} performance...`,disabled:g,className:"w-full bg-card border border-border rounded-3xl h-16 pl-8 pr-16 text-sm font-bold shadow-sm focus:ring-4 focus:ring-indigo-500/20 transition-all outline-none disabled:opacity-50 text-foreground placeholder:text-muted-foreground"}),e.jsx(R,{type:"submit",size:"icon",disabled:g,className:"absolute right-3 top-3 h-10 w-10 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white transition-all active:scale-90 disabled:opacity-50",children:e.jsx(G,{className:"w-4 h-4"})})]})})]})}),e.jsx("div",{className:"space-y-6",children:e.jsxs(I,{className:"rounded-[40px] border-none shadow-2xl shadow-indigo-600/5 bg-card p-10 group overflow-hidden relative",children:[e.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-indigo-50 dark:bg-indigo-500/10 blur-3xl rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"w-12 h-12 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6",children:e.jsx(F,{className:"w-6 h-6 text-indigo-600 dark:text-indigo-400"})}),e.jsx("h4",{className:"text-sm font-black uppercase tracking-widest text-muted-foreground mb-4",children:n==="id"?"Ikhtisar Neural":"Neural Overview"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"text-xl font-black tracking-tighter text-foreground leading-tight",children:n==="id"?"Kesehatan Cabang":"Branch Health"}),e.jsx("p",{className:"text-xs text-muted-foreground font-medium mt-3 leading-relaxed",children:n==="id"?`Pemantauan AI untuk ${r} aktif dan disinkronkan. Database inventaris lokal diurai secara real-time.`:`AI monitoring of ${r} is active and sync'd. Local inventory database parsed in real-time.`})]}),e.jsx("div",{className:"space-y-4 pt-4 border-t border-border",children:[{name:"Stock Sync",status:g?n==="id"?"Menyinkronkan...":"Syncing...":n==="id"?"Aktif":"Active",pulse:g?"bg-amber-500":"bg-emerald-500",Icon:Y},{name:"Predictive Link",status:n==="id"?"Aktif":"Active",pulse:"bg-indigo-500",Icon:L}].map(t=>e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t.Icon,{className:"w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400"}),e.jsx("span",{className:"text-xs font-bold text-foreground",children:t.name})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-[9px] font-black uppercase tracking-widest text-muted-foreground",children:t.status}),e.jsx("div",{className:y("w-2 h-2 rounded-full",t.pulse,t.pulse==="bg-emerald-500"&&"animate-pulse")})]})]},t.name))})]})]})]})})]})]})}export{le as default};
