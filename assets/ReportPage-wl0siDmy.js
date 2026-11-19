import{a as R,u as F,b as L,r as T,j as e}from"./index-DdM14i5l.js";function o(n){return"Rp "+Math.round(n).toLocaleString("id-ID")}function P(n){return n.toFixed(1)+"%"}const K=n=>({weekly:n==="id"?"Mingguan":"Weekly",monthly:n==="id"?"Bulanan":"Monthly",yearly:n==="id"?"Tahunan":"Yearly"});function $(){const n=R(),{user:p}=F(),{t:B,language:t}=L(),j=T.useRef(!1),b=sessionStorage.getItem("report_snapshot"),c=b?JSON.parse(b):null;if(T.useEffect(()=>{if(!c||j.current)return;j.current=!0;const i=setTimeout(()=>{window.print()},600);return()=>clearTimeout(i)},[c]),!c)return e.jsx("div",{className:"flex items-center justify-center min-h-screen bg-background",children:e.jsxs("div",{className:"text-center space-y-4",children:[e.jsx("p",{className:"text-muted-foreground font-semibold",children:t==="id"?"Data laporan tidak ditemukan.":"No report data found."}),e.jsx("button",{onClick:()=>n("/overview"),className:"px-6 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold",children:t==="id"?"Kembali ke Overview":"Back to Overview"})]})});const{data:r,branchName:y,timeframe:h,selectedMonth:v,selectedYear:g,selectedWeek:W,generatedAt:N}=c,k=(r==null?void 0:r.topProducts)??[],m=(r==null?void 0:r.productsList)??[],S=(r==null?void 0:r.categorySalesBreakdown)??[],d=(r==null?void 0:r.chartData)??[],x=(r==null?void 0:r.revenue)??0,f=(r==null?void 0:r.revenueChange)??0,z=(r==null?void 0:r.sales)??0,A=(r==null?void 0:r.inventoryCount)??0,w=(r==null?void 0:r.totalStock)??0,l=(r==null?void 0:r.healthScore)??0,D=K(t)[h]??h;return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Inter', sans-serif;
          background: #f0f2f4;
          color: #0F172A;
        }

        /* Screen: centred A4 card */
        .report-wrapper {
          min-height: 100vh;
          background: #e8ebed;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
          gap: 16px;
        }

        .no-print {
          display: flex;
          gap: 12px;
          margin-bottom: 8px;
        }

        .report-page {
          width: 210mm;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 30px rgba(22,34,42,0.12);
          overflow: hidden;
        }

        /* ── Sections ── */
        .report-header {
          background: linear-gradient(135deg, #0F172A 0%, #E11D48 100%);
          color: #fff;
          padding: 40px 48px 36px;
        }

        .report-body {
          padding: 36px 48px;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        /* ── Typography ── */
        .label-xs {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #6b7280;
        }

        .section-title {
          font-size: 13px;
          font-weight: 800;
          color: #0F172A;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding-bottom: 10px;
          border-bottom: 2px solid #e8ebed;
          margin-bottom: 16px;
        }

        /* ── Summary cards ── */
        .summary-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .summary-card {
          background: #f7f9fb;
          border: 1px solid #e0e4e8;
          border-radius: 12px;
          padding: 16px;
        }

        .summary-card .val {
          font-size: 20px;
          font-weight: 900;
          color: #0F172A;
          margin-top: 6px;
          line-height: 1;
        }

        .summary-card .sub {
          font-size: 10px;
          color: #5a6d7a;
          font-weight: 600;
          margin-top: 4px;
        }

        .badge-up   { color: #059669; font-weight: 700; font-size: 11px; }
        .badge-down { color: #dc2626; font-weight: 700; font-size: 11px; }

        /* ── Tables ── */
        table {
          width: 100%;
          border-collapse: collapse;
          font-size: 11px;
        }

        thead tr {
          background: #f0f4f6;
        }

        th {
          padding: 10px 12px;
          font-size: 9px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #5a6d7a;
          text-align: left;
        }

        td {
          padding: 10px 12px;
          border-bottom: 1px solid #f0f4f6;
          color: #2d3f4a;
          font-weight: 500;
        }

        tr:last-child td { border-bottom: none; }

        .td-right { text-align: right; font-weight: 700; }
        .td-mono  { font-family: monospace; }

        .chip {
          display: inline-block;
          padding: 2px 8px;
          border-radius: 999px;
          font-size: 9px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          background: rgba(58,96,115,0.12);
          color: #0F172A;
        }

        /* ── Category progress ── */
        .cat-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 10px;
        }

        .cat-label {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          font-weight: 600;
          color: #2d3f4a;
        }

        .cat-bar-bg {
          height: 6px;
          background: #e0e4e8;
          border-radius: 999px;
          overflow: hidden;
        }

        .cat-bar-fill {
          height: 100%;
          border-radius: 999px;
          background: #E11D48;
        }

        /* ── Footer ── */
        .report-footer {
          padding: 20px 48px;
          background: #f7f9fb;
          border-top: 1px solid #e0e4e8;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* ── Print overrides ── */
        @media print {
          @page {
            size: A4 portrait;
            margin: 0;
          }

          body { background: #fff; }

          .report-wrapper {
            background: #fff;
            padding: 0;
            display: block;
          }

          .no-print { display: none !important; }

          .report-page {
            width: 100%;
            border-radius: 0;
            box-shadow: none;
            page-break-after: avoid;
          }

          .report-body { padding: 24px 36px; gap: 20px; }
          .report-header { padding: 28px 36px 24px; }
          .report-footer { padding: 14px 36px; }
          .summary-card .val { font-size: 16px; }
        }
      `}),e.jsxs("div",{className:"report-wrapper",children:[e.jsxs("div",{className:"no-print",children:[e.jsx("button",{onClick:()=>{sessionStorage.removeItem("report_snapshot"),n("/overview")},style:{padding:"10px 20px",borderRadius:12,border:"1px solid #d0d7dc",background:"#fff",fontWeight:700,fontSize:13,cursor:"pointer",color:"#E11D48"},children:t==="id"?"← Kembali":"← Back"}),e.jsx("button",{onClick:()=>window.print(),style:{padding:"10px 24px",borderRadius:12,border:"none",background:"linear-gradient(135deg,#0F172A,#E11D48)",color:"#fff",fontWeight:700,fontSize:13,cursor:"pointer",boxShadow:"0 4px 14px rgba(22,34,42,0.25)"},children:t==="id"?"🖨 Cetak / Simpan PDF":"🖨 Print / Save PDF"})]}),e.jsxs("div",{className:"report-page",children:[e.jsx("div",{className:"report-header",children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.55)",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:10},children:"AutoCashier — Enterprise"}),e.jsx("div",{style:{fontSize:28,fontWeight:900,letterSpacing:"-0.03em",lineHeight:1.1},children:t==="id"?"Laporan Ringkasan":"Summary Report"}),e.jsx("div",{style:{fontSize:14,color:"rgba(255,255,255,0.65)",marginTop:6,fontWeight:600},children:y==="All Branches"?t==="id"?"Semua Cabang (Konsolidasi)":"All Branches (Consolidated)":y})]}),e.jsxs("div",{style:{textAlign:"right"},children:[e.jsx("div",{style:{fontSize:11,color:"rgba(255,255,255,0.5)",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:8},children:t==="id"?"Periode":"Period"}),e.jsx("div",{style:{fontSize:15,fontWeight:900,color:"#fff"},children:D}),e.jsx("div",{style:{fontSize:12,color:"rgba(255,255,255,0.65)",marginTop:4,fontWeight:600},children:h==="weekly"?`${W}, ${v} ${g}`:h==="monthly"?`${v} ${g}`:g}),e.jsxs("div",{style:{fontSize:10,color:"rgba(255,255,255,0.4)",marginTop:12,fontWeight:600},children:[t==="id"?"Dibuat:":"Generated:"," ",N]}),e.jsxs("div",{style:{fontSize:10,color:"rgba(255,255,255,0.4)",marginTop:2,fontWeight:600},children:[t==="id"?"Oleh:":"By:"," ",(p==null?void 0:p.username)??"—"]})]})]})}),e.jsxs("div",{className:"report-body",children:[e.jsxs("div",{children:[e.jsx("div",{className:"section-title",children:t==="id"?"Ringkasan Kinerja":"Performance Summary"}),e.jsxs("div",{className:"summary-grid",children:[e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"label-xs",children:t==="id"?"Total Pendapatan":"Total Revenue"}),e.jsx("div",{className:"val",children:o(x)}),e.jsxs("div",{className:"sub",children:[e.jsxs("span",{className:f>=0?"badge-up":"badge-down",children:[f>=0?"▲":"▼"," ",Math.abs(f).toFixed(1),"%"]})," ",t==="id"?"vs periode lalu":"vs last period"]})]}),e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"label-xs",children:t==="id"?"Total Transaksi":"Total Transactions"}),e.jsx("div",{className:"val",children:z.toLocaleString("id-ID")}),e.jsx("div",{className:"sub",children:t==="id"?"transaksi tercatat":"transactions recorded"})]}),e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"label-xs",children:t==="id"?"Total Produk":"Total Products"}),e.jsx("div",{className:"val",children:A.toLocaleString("id-ID")}),e.jsx("div",{className:"sub",children:t==="id"?`stok: ${w.toLocaleString("id-ID")} unit`:`stock: ${w.toLocaleString("en-US")} units`})]}),e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"label-xs",children:"Network Health"}),e.jsxs("div",{className:"val",style:{color:l>=70?"#059669":l>=40?"#d97706":"#dc2626"},children:[l,"/100"]}),e.jsx("div",{className:"sub",children:l>=70?t==="id"?"Sehat":"Healthy":l>=40?t==="id"?"Perlu Perhatian":"Needs Attention":t==="id"?"Kritis":"Critical"})]})]})]}),d.length>0&&e.jsxs("div",{children:[e.jsx("div",{className:"section-title",children:t==="id"?"Tren Pendapatan per Periode":"Revenue Trend per Period"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t==="id"?"Periode":"Period"}),e.jsx("th",{style:{textAlign:"right"},children:t==="id"?"Pendapatan":"Revenue"}),e.jsx("th",{style:{textAlign:"right"},children:t==="id"?"Kontribusi":"Contribution"}),e.jsx("th",{children:t==="id"?"Keterangan":"Notes"})]})}),e.jsxs("tbody",{children:[(()=>{const i=Math.max(...d.map(s=>s.total),1),a=d.reduce((s,u)=>s+u.total,0);return d.map((s,u)=>{const C=a>0?s.total/a*100:0,E=s.total===i&&s.total>0;return e.jsxs("tr",{children:[e.jsx("td",{style:{fontWeight:700},children:s.name}),e.jsx("td",{className:"td-right td-mono",children:s.total>0?o(s.total):"—"}),e.jsx("td",{className:"td-right",style:{color:"#E11D48",fontWeight:700},children:s.total>0?P(C):"—"}),e.jsxs("td",{children:[E&&e.jsx("span",{style:{fontSize:9,fontWeight:800,color:"#059669",background:"#d1fae5",padding:"2px 8px",borderRadius:999},children:t==="id"?"★ Tertinggi":"★ Highest"}),s.total===0&&e.jsx("span",{style:{fontSize:9,fontWeight:700,color:"#9aafbb"},children:t==="id"?"Tidak ada transaksi":"No transactions"})]})]},u)})})(),e.jsxs("tr",{style:{background:"#eef2f4"},children:[e.jsx("td",{style:{fontWeight:800},children:"TOTAL"}),e.jsx("td",{className:"td-right td-mono",style:{fontWeight:900,color:"#E11D48"},children:o(d.reduce((i,a)=>i+a.total,0))}),e.jsx("td",{className:"td-right",style:{fontWeight:800},children:"100%"}),e.jsx("td",{})]})]})]})]}),k.length>0&&e.jsxs("div",{children:[e.jsx("div",{className:"section-title",children:t==="id"?"Top 5 Produk Terlaris":"Top 5 Best Selling Products"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:t==="id"?"Produk":"Product"}),e.jsx("th",{children:t==="id"?"Kategori":"Category"}),e.jsx("th",{children:t==="id"?"Harga":"Price"}),e.jsx("th",{children:t==="id"?"Terjual":"Sold"}),e.jsx("th",{style:{textAlign:"right"},children:t==="id"?"Pendapatan":"Revenue"})]})}),e.jsx("tbody",{children:k.slice(0,5).map((i,a)=>e.jsxs("tr",{children:[e.jsx("td",{style:{fontWeight:800,color:"#E11D48",width:28},children:a+1}),e.jsxs("td",{children:[e.jsx("div",{style:{fontWeight:700,color:"#0F172A"},children:i.name}),e.jsxs("div",{style:{fontSize:9,color:"#7a9aaa",fontWeight:600},children:["SKU: ",i.sku]})]}),e.jsx("td",{children:e.jsx("span",{className:"chip",children:i.category})}),e.jsx("td",{className:"td-mono",children:o(i.price)}),e.jsxs("td",{style:{fontWeight:700,color:"#E11D48"},children:[i.quantitySold," unit"]}),e.jsx("td",{className:"td-right td-mono",children:o(i.revenue)})]},i.id))})]})]}),S.length>0&&e.jsxs("div",{children:[e.jsx("div",{className:"section-title",children:t==="id"?"Kontribusi Kategori":"Category Contribution"}),S.map((i,a)=>{const s=x>0?i.value/x*100:0;return e.jsxs("div",{className:"cat-row",children:[e.jsxs("div",{className:"cat-label",children:[e.jsx("span",{children:i.name}),e.jsxs("span",{style:{color:"#E11D48",fontWeight:700},children:[P(s)," — ",o(i.value)]})]}),e.jsx("div",{className:"cat-bar-bg",children:e.jsx("div",{className:"cat-bar-fill",style:{width:`${s}%`,background:["#0F172A","#E11D48","#4d8fa8","#2c5f75","#1a4a5c","#497184"][a%6]}})})]},i.name)})]}),m.length>0&&e.jsxs("div",{children:[e.jsx("div",{className:"section-title",children:t==="id"?"Tabel Penjualan Produk":"Product Sales Table"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t==="id"?"Produk":"Product"}),e.jsx("th",{children:"SKU"}),e.jsx("th",{children:t==="id"?"Kategori":"Category"}),e.jsx("th",{children:t==="id"?"Harga Dasar":"Base Price"}),e.jsx("th",{children:t==="id"?"Terjual":"Sold"}),e.jsx("th",{style:{textAlign:"right"},children:t==="id"?"Total Pendapatan":"Total Revenue"})]})}),e.jsxs("tbody",{children:[m.map(i=>e.jsxs("tr",{children:[e.jsx("td",{style:{fontWeight:600},children:i.name}),e.jsx("td",{className:"td-mono",style:{color:"#64748b"},children:i.sku}),e.jsx("td",{children:e.jsx("span",{className:"chip",children:i.category})}),e.jsx("td",{className:"td-mono",children:o(i.price)}),e.jsxs("td",{style:{fontWeight:700},children:[i.quantitySold," unit"]}),e.jsx("td",{className:"td-right td-mono",children:o(i.revenue)})]},i.id)),e.jsxs("tr",{style:{background:"#eef2f4"},children:[e.jsx("td",{colSpan:4,style:{fontWeight:800,fontSize:11},children:"TOTAL"}),e.jsxs("td",{style:{fontWeight:800},children:[m.reduce((i,a)=>i+a.quantitySold,0)," unit"]}),e.jsx("td",{className:"td-right td-mono",style:{fontWeight:900,color:"#E11D48"},children:o(x)})]})]})]})]})]}),e.jsxs("div",{className:"report-footer",children:[e.jsx("div",{style:{fontSize:10,color:"#7a9aaa",fontWeight:600},children:t==="id"?"AutoCashier Enterprise · Dokumen ini dibuat otomatis oleh sistem":"AutoCashier Enterprise · This document is auto-generated by the system"}),e.jsxs("div",{style:{fontSize:10,color:"#7a9aaa",fontWeight:600},children:[N," · Confidential"]})]})]})]})]})}export{$ as default};
