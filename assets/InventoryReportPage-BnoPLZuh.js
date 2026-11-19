import{a as j,u as v,b as k,r as m,j as e,D as N}from"./index-DLIqie0B.js";function d(n){return"Rp "+Math.round(n).toLocaleString("id-ID")}function w(){const n=j(),{user:r}=v(),{language:t}=k(),c=m.useRef(!1),p=sessionStorage.getItem("inventory_report_snapshot"),o=p?JSON.parse(p):null;if(m.useEffect(()=>{if(!o||c.current)return;c.current=!0;const i=setTimeout(()=>{window.print()},600);return()=>clearTimeout(i)},[o]),!o)return e.jsx("div",{className:"flex items-center justify-center min-h-screen bg-background",children:e.jsxs("div",{className:"text-center space-y-4",children:[e.jsx("p",{className:"text-muted-foreground font-semibold",children:t==="id"?"Data laporan inventaris tidak ditemukan.":"No inventory report data found."}),e.jsx("button",{onClick:()=>n("/inventory"),className:"px-6 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold",children:t==="id"?"Kembali ke Inventaris":"Back to Inventory"})]})});const{inventory:s,branchName:u,generatedAt:x}=o,b=s.length,h=s.reduce((i,a)=>i+(a.stock||0),0),g=s.reduce((i,a)=>i+(a.price||0)*(a.stock||0),0),f=s.filter(i=>(i.stock||0)<N).length;return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Inter', sans-serif;
          background: #f8fafc;
          color: #1e293b;
        }

        .report-wrapper {
          min-height: 100vh;
          background: #f1f5f9;
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
          box-shadow: 0 4px 30px rgba(0,0,0,0.08);
          overflow: hidden;
        }

        .report-header {
          background: linear-gradient(135deg, #1e3a5f 0%, #312e81 100%);
          color: #fff;
          padding: 40px 48px 36px;
        }

        .report-body {
          padding: 36px 48px;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .label-xs {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #94a3b8;
        }

        .section-title {
          font-size: 13px;
          font-weight: 800;
          color: #1e293b;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding-bottom: 10px;
          border-bottom: 2px solid #e2e8f0;
          margin-bottom: 16px;
        }

        .summary-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .summary-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 16px;
        }

        .summary-card .val {
          font-size: 18px;
          font-weight: 900;
          color: #1e293b;
          margin-top: 6px;
          line-height: 1.1;
        }

        .summary-card .sub {
          font-size: 10px;
          color: #64748b;
          font-weight: 600;
          margin-top: 4px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          font-size: 11px;
        }

        thead tr {
          background: #f1f5f9;
        }

        th {
          padding: 10px 12px;
          font-size: 9px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #64748b;
          text-align: left;
        }

        td {
          padding: 10px 12px;
          border-bottom: 1px solid #f1f5f9;
          color: #334155;
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
          background: #e0e7ff;
          color: #4338ca;
        }

        .badge-warning {
          display: inline-block;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 9px;
          font-weight: 800;
          background: #ffe4e6;
          color: #e11d48;
        }

        .badge-success {
          display: inline-block;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 9px;
          font-weight: 800;
          background: #d1fae5;
          color: #059669;
        }

        .report-footer {
          padding: 20px 48px;
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

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
          .summary-card .val { font-size: 15px; }
        }
      `}),e.jsxs("div",{className:"report-wrapper",children:[e.jsxs("div",{className:"no-print",children:[e.jsx("button",{onClick:()=>{sessionStorage.removeItem("inventory_report_snapshot"),n("/inventory")},style:{padding:"10px 20px",borderRadius:12,border:"1px solid #e2e8f0",background:"#fff",fontWeight:700,fontSize:13,cursor:"pointer",color:"#64748b"},children:t==="id"?"← Kembali":"← Back"}),e.jsx("button",{onClick:()=>window.print(),style:{padding:"10px 24px",borderRadius:12,border:"none",background:"#4f46e5",color:"#fff",fontWeight:700,fontSize:13,cursor:"pointer",boxShadow:"0 4px 14px rgba(79,70,229,0.3)"},children:t==="id"?"🖨 Cetak / Simpan PDF":"🖨 Print / Save PDF"})]}),e.jsxs("div",{className:"report-page",children:[e.jsx("div",{className:"report-header",children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:11,fontWeight:700,color:"#a5b4fc",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:10},children:"AutoCashier — Inventory Management"}),e.jsx("div",{style:{fontSize:26,fontWeight:900,letterSpacing:"-0.03em",lineHeight:1.1},children:t==="id"?"Laporan Inventaris Cabang":"Branch Inventory Report"}),e.jsx("div",{style:{fontSize:14,color:"#c7d2fe",marginTop:6,fontWeight:600},children:u})]}),e.jsxs("div",{style:{textAlign:"right"},children:[e.jsx("div",{style:{fontSize:11,color:"#a5b4fc",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:8},children:t==="id"?"Tanggal Cetak":"Print Date"}),e.jsx("div",{style:{fontSize:14,fontWeight:900,color:"#fff"},children:x}),e.jsxs("div",{style:{fontSize:10,color:"#818cf8",marginTop:12,fontWeight:600},children:[t==="id"?"Dicetak oleh:":"Printed by:"," ",(r==null?void 0:r.username)??"—"]}),e.jsxs("div",{style:{fontSize:10,color:"#818cf8",marginTop:2,fontWeight:600},children:["Role: ",(r==null?void 0:r.role)??"—"]})]})]})}),e.jsxs("div",{className:"report-body",children:[e.jsxs("div",{children:[e.jsx("div",{className:"section-title",children:t==="id"?"Ringkasan Inventaris":"Inventory Summary"}),e.jsxs("div",{className:"summary-grid",children:[e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"label-xs",children:t==="id"?"Total SKU Produk":"Total Product SKUs"}),e.jsxs("div",{className:"val",children:[b," SKU"]}),e.jsx("div",{className:"sub",children:t==="id"?"terdaftar di sistem":"registered in system"})]}),e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"label-xs",children:t==="id"?"Total Kuantitas Stok":"Total Stock Quantity"}),e.jsxs("div",{className:"val",children:[h.toLocaleString("id-ID")," unit"]}),e.jsx("div",{className:"sub",children:t==="id"?"unit fisik tersedia":"physical units available"})]}),e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"label-xs",children:t==="id"?"Total Nilai Aset":"Total Asset Value"}),e.jsx("div",{className:"val",children:d(g)}),e.jsx("div",{className:"sub",children:t==="id"?"berdasarkan harga jual":"based on retail price"})]}),e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"label-xs",children:t==="id"?"Stok Menipis":"Low Stock Items"}),e.jsxs("div",{className:"val",style:{color:f>0?"#e11d48":"#059669"},children:[f," ",t==="id"?"Produk":"Products"]}),e.jsx("div",{className:"sub",children:t==="id"?"stok di bawah 20 pcs":"stock below 20 pcs"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"section-title",children:t==="id"?"Rincian Stok Barang":"Detailed Stock List"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:30},children:"No"}),e.jsx("th",{children:t==="id"?"Nama Produk":"Product Name"}),e.jsx("th",{children:"SKU"}),e.jsx("th",{children:t==="id"?"Kategori":"Category"}),e.jsx("th",{style:{textAlign:"right"},children:t==="id"?"Harga Jual":"Retail Price"}),e.jsx("th",{style:{textAlign:"right"},children:t==="id"?"Stok":"Stock"}),e.jsx("th",{children:t==="id"?"Status AI":"AI Status"}),e.jsx("th",{style:{textAlign:"right"},children:t==="id"?"Nilai Aset":"Asset Value"})]})}),e.jsxs("tbody",{children:[s.length>0?s.map((i,a)=>{const y=(i.price||0)*(i.stock||0),l=(i.stock||0)<20;return e.jsxs("tr",{children:[e.jsx("td",{children:a+1}),e.jsx("td",{style:{fontWeight:700,color:"#1e293b"},children:i.name||"—"}),e.jsx("td",{className:"td-mono",children:i.sku||"—"}),e.jsx("td",{children:e.jsx("span",{className:"chip",children:i.category||"Local Product"})}),e.jsx("td",{className:"td-right td-mono",children:d(i.price||0)}),e.jsxs("td",{className:"td-right td-mono",style:{color:l?"#e11d48":"#1e293b",fontWeight:l?700:500},children:[i.stock??0," ",l&&e.jsx("span",{style:{fontSize:8,verticalAlign:"middle"},children:"⚠️"})]}),e.jsx("td",{children:i.ai_label?e.jsx("span",{className:"badge-success",children:i.ai_label}):e.jsx("span",{className:"badge-warning",children:"No Label"})}),e.jsx("td",{className:"td-right td-mono",style:{color:"#312e81",fontWeight:700},children:d(y)})]},i.id)}):e.jsx("tr",{children:e.jsx("td",{colSpan:8,className:"p-8 text-center text-xs font-semibold text-gray-400",children:t==="id"?"Tidak ada produk untuk ditampilkan.":"No products to display."})}),s.length>0&&e.jsxs("tr",{style:{background:"#f1f5f9"},children:[e.jsx("td",{colSpan:5,style:{fontWeight:800,fontSize:11},children:"TOTAL"}),e.jsx("td",{className:"td-right td-mono",style:{fontWeight:800},children:h.toLocaleString("id-ID")}),e.jsx("td",{}),e.jsx("td",{className:"td-right td-mono",style:{fontWeight:900,color:"#4f46e5"},children:d(g)})]})]})]})]})]}),e.jsxs("div",{className:"report-footer",children:[e.jsxs("div",{style:{fontSize:10,color:"#94a3b8",fontWeight:600},children:["AutoCashier Inventory · ",t==="id"?"Dokumen ini dibuat otomatis oleh sistem":"This document is auto-generated by the system"]}),e.jsxs("div",{style:{fontSize:10,color:"#94a3b8",fontWeight:600},children:[x," · Confidential"]})]})]})]})]})}export{w as default};
