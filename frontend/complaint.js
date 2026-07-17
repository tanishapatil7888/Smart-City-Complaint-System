<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>File a Municipal Complaint</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap" rel="stylesheet">
<style>

  /* ============================
     TOKENS
  ============================ */
  :root{
    --charcoal:      #1E2228;
    --charcoal-soft: #2B303A;
    --concrete:      #E4E6E0;
    --paper:         #FBFAF7;
    --amber:         #F2A61B;
    --amber-dark:    #B9790C;
    --municipal:     #234F68;
    --municipal-soft:#3E7191;
    --safety-red:    #C1432C;
    --safety-red-soft:#E7DAD6;
    --ink:           #1B1F24;
    --ink-soft:      #565D66;
    --line:          #CFCDC3;
    --radius:        4px;
  }

  *{ box-sizing: border-box; }

  @media (prefers-reduced-motion: reduce){
    *{ animation: none !important; transition: none !important; }
  }

  body{
    margin:0;
    background: var(--concrete);
    background-image:
      radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0);
    background-size: 22px 22px;
    color: var(--ink);
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  .page{
    max-width: 1040px;
    margin: 0 auto;
    padding: 0 20px 64px;
  }

  /* ============================
     HAZARD STRIP + NOTICE HEADER
  ============================ */
  .hazard-strip{
    height: 10px;
    width: 100%;
    background: repeating-linear-gradient(
      45deg,
      var(--charcoal) 0 14px,
      var(--amber) 14px 28px
    );
  }

  .notice-bar{
    background: var(--charcoal);
    color: var(--paper);
    padding: 40px 32px 34px;
    border-radius: 0 0 var(--radius) var(--radius);
    margin-bottom: 28px;
    position: relative;
    overflow: hidden;
  }

  .notice-bar::after{
    content:"";
    position:absolute;
    right: -60px; top: -60px;
    width: 220px; height: 220px;
    border: 2px solid rgba(242,166,27,0.14);
    border-radius: 50%;
  }

  .eyebrow{
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    letter-spacing: 0.14em;
    color: var(--amber);
    text-transform: uppercase;
    display: inline-block;
    padding: 4px 10px;
    border: 1px solid rgba(242,166,27,0.4);
    border-radius: 2px;
  }

  .notice-bar h1{
    font-family: 'Oswald', sans-serif;
    font-weight: 600;
    font-size: 34px;
    letter-spacing: 0.01em;
    margin: 16px 0 8px;
  }

  .notice-bar p{
    margin: 0;
    max-width: 560px;
    color: #C9CDD3;
    font-size: 15px;
    line-height: 1.55;
  }

  .ref-tag{
    position: absolute;
    right: 32px;
    bottom: 26px;
    text-align: right;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: #8B929C;
  }

  .exit-btn{
    position: absolute;
    top: 28px;
    right: 32px;
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 9px 16px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    letter-spacing: 0.04em;
    text-decoration: none;
    color: #C9CDD3;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.18);
    border-radius: 3px;
    transition: background .15s ease, color .15s ease, border-color .15s ease;
  }

  .exit-btn:hover{
    background: var(--amber);
    color: var(--charcoal);
    border-color: var(--amber);
  }

  .exit-btn:focus-visible{
    outline: 2px solid var(--amber);
    outline-offset: 2px;
  }

  @media (max-width: 720px){
    .exit-btn{
      position: static;
      display: inline-flex;
      margin-top: 18px;
    }
  }

  /* ============================
     FORM CARD
  ============================ */
  .form-card{
    background: var(--paper);
    border: 1px solid var(--line);
    border-radius: var(--radius);
    box-shadow: 0 1px 0 rgba(0,0,0,0.04);
    padding: 36px 36px 32px;
  }

  .grid{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 22px 28px;
    margin-bottom: 26px;
  }

  .form-group{ display:flex; flex-direction:column; }
  .form-group.full-width{ grid-column: 1 / -1; }

  label{
    font-size: 13px;
    font-weight: 600;
    color: var(--ink);
    margin-bottom: 7px;
  }

  input[type="text"],
  select,
  textarea{
    font-family: 'Inter', sans-serif;
    font-size: 14.5px;
    padding: 12px 14px;
    border: 1.5px solid var(--line);
    border-radius: var(--radius);
    background: #fff;
    color: var(--ink);
    outline: none;
    transition: border-color .15s ease, box-shadow .15s ease;
  }

  input[type="text"]:focus,
  select:focus,
  textarea:focus{
    border-color: var(--municipal);
    box-shadow: 0 0 0 3px rgba(35,79,104,0.15);
  }

  input[type="text"]::placeholder,
  textarea::placeholder{ color: #9AA0A8; }

  textarea{ resize: vertical; min-height: 130px; font-family: inherit; }

  select{ appearance: none; cursor: pointer;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='9'><path d='M1 1l6 6 6-6' stroke='%23565D66' stroke-width='2' fill='none' stroke-linecap='round'/></svg>");
    background-repeat: no-repeat;
    background-position: right 14px center;
    padding-right: 36px;
  }

  /* ---------- Upload box ---------- */
  .upload-box{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
    border: 2px dashed var(--line);
    border-radius: var(--radius);
    padding: 22px 14px;
    cursor: pointer;
    background: repeating-linear-gradient(135deg, rgba(0,0,0,0.015) 0 10px, transparent 10px 20px);
    transition: border-color .15s ease, background .15s ease;
  }

  .upload-box:hover{ border-color: var(--municipal-soft); }

  .upload-icon{ font-size: 26px; margin-bottom: 6px; }

  .upload-text{
    font-size: 13.5px;
    color: var(--ink-soft);
    line-height: 1.5;
  }

  .upload-text small{ color: #9AA0A8; }

  /* ============================
     PRIORITY PREVIEW STRIP (signature element)
  ============================ */
  .priority-strip{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap: 16px;
    padding: 14px 18px;
    border: 1px solid var(--line);
    border-radius: var(--radius);
    background: #F4F3EE;
    margin-bottom: 26px;
  }

  .priority-strip .ps-label{
    font-family: 'JetBrains Mono', monospace;
    font-size: 11.5px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ink-soft);
  }

  .priority-strip .ps-hint{
    display:block;
    font-family: 'Inter', sans-serif;
    font-size: 12.5px;
    letter-spacing: 0;
    text-transform: none;
    color: #8B929C;
    margin-top: 2px;
  }

  .badge-diamond{
    width: 46px; height: 46px;
    background: #C6C8C2;
    transform: rotate(45deg);
    display:flex; align-items:center; justify-content:center;
    border-radius: 3px;
    transition: background .2s ease;
    flex-shrink: 0;
  }

  .badge-diamond span{
    transform: rotate(-45deg);
    font-family: 'Oswald', sans-serif;
    font-size: 10.5px;
    font-weight: 600;
    letter-spacing: 0.03em;
    color: #fff;
    text-transform: uppercase;
  }

  .badge-diamond[data-level="High"]{ background: var(--safety-red); }
  .badge-diamond[data-level="Medium"]{ background: var(--amber-dark); }
  .badge-diamond[data-level="Low"]{ background: var(--municipal); }

  /* ============================
     BOTTOM SECTION
  ============================ */
  .bottom-section{
    display:grid;
    grid-template-columns: 1.1fr 1fr;
    gap: 24px;
    margin-bottom: 30px;
  }

  .preview-box, .guidelines{
    border: 1px solid var(--line);
    border-radius: var(--radius);
    padding: 20px;
    background: #F9F8F5;
  }

  .preview-box h3, .guidelines h3{
    font-family: 'Oswald', sans-serif;
    font-size: 15px;
    font-weight: 600;
    margin: 0 0 14px;
    color: var(--ink);
  }

  #previewText{
    color: #9AA0A8;
    font-size: 13.5px;
    text-align:center;
    border: 1.5px dashed var(--line);
    border-radius: var(--radius);
    padding: 34px 10px;
    margin: 0;
  }

  #preview{ border: 1px solid var(--line); }

  .guidelines ul{
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .guidelines li{
    font-size: 13.5px;
    color: var(--ink-soft);
    padding: 7px 0;
    border-bottom: 1px dashed var(--line);
  }

  .guidelines li:last-child{ border-bottom: none; }

  /* ============================
     SUBMIT + MESSAGE
  ============================ */
  .submit-btn{
    width: 100%;
    padding: 15px;
    font-family: 'Oswald', sans-serif;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.03em;
    color: var(--charcoal);
    background: var(--amber);
    border: none;
    border-radius: var(--radius);
    cursor: pointer;
    transition: background .15s ease, transform .1s ease;
  }

  .submit-btn:hover{ background: var(--amber-dark); color: #fff; }
  .submit-btn:active{ transform: translateY(1px); }
  .submit-btn:focus-visible{ outline: 3px solid var(--municipal); outline-offset: 2px; }

  #message{
    text-align:center;
    font-size: 14px;
    font-weight: 600;
    margin-top: 16px;
    min-height: 20px;
  }

  /* ============================
     RESPONSIVE
  ============================ */
  @media (max-width: 720px){
    .grid{ grid-template-columns: 1fr; }
    .bottom-section{ grid-template-columns: 1fr; }
    .notice-bar h1{ font-size: 26px; }
    .form-card{ padding: 26px 20px; }
    .ref-tag{ display:none; }
  }
</style>
</head>
<body>

<div class="hazard-strip"></div>

<div class="page">

  <header class="notice-bar">
    <a href="dashboard.html" class="exit-btn">⏏ Exit to Dashboard</a>
    <span class="eyebrow">Civic Reporting System</span>
    <h1>File a Municipal Complaint</h1>
    <p>Report potholes, garbage, drainage, street lighting, and road damage directly to your local ward office. Every complaint is logged, prioritized, and tracked through to resolution.</p>
    <div class="ref-tag">FORM&nbsp;NO. CRS-07</div>
  </header>

  <div class="form-card">

    <form id="complaintForm">

        <div class="grid">

            <div class="form-group">
                <label>👤 Name</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    required
                >
            </div>

            <div class="form-group">
                <label>📍 Location</label>
                <input
                    type="text"
                    id="location"
                    placeholder="Enter complaint location"
                    required
                >
            </div>

            <div class="form-group">
                <label>📂 Category</label>

                <select id="category" required>

                    <option value="">Select Category</option>

                    <option value="Pothole">🕳 Pothole</option>

                    <option value="Garbage">🗑 Garbage</option>

                    <option value="Street Light">💡 Street Light</option>

                    <option value="Water Leakage">🚰 Water Leakage</option>

                    <option value="Drainage">🌊 Drainage</option>

                    <option value="Road Damage">🚧 Road Damage</option>

                </select>
            </div>

            <div class="form-group">

                <label>🖼 Upload Complaint Image</label>

                <label for="image" class="upload-box">

                    <div class="upload-icon">📷</div>

                    <div class="upload-text">
                        Click to upload image
                        <br>
                        <small>PNG, JPG, JPEG</small>
                    </div>

                </label>

                <input
                    type="file"
                    id="image"
                    accept="image/*"
                    required
                    hidden
                >

            </div>

        </div>

        <div class="form-group full-width">

            <label>📝 Complaint Description</label>

            <textarea
                id="description"
                rows="6"
                placeholder="Describe your complaint in detail..."
                required
            ></textarea>

        </div>

        <div class="priority-strip">
          <div class="ps-label">
            Estimated Priority
            <span class="ps-hint">Based on the category you select — set automatically on submission</span>
          </div>
          <div class="badge-diamond" id="priorityBadge" data-level="">
            <span id="priorityBadgeText">—</span>
          </div>
        </div>

        <div class="bottom-section">

            <!-- Image Preview -->

            <div class="preview-box">

                <h3>🖼 Image Preview</h3>

                <img
                    id="preview"
                    style="
                        display:none;
                        width:100%;
                        max-height:320px;
                        object-fit:cover;
                        border-radius:4px;
                    "
                >

                <p id="previewText">
                    No Image Selected
                </p>

            </div>

            <!-- Guidelines -->

            <div class="guidelines">

                <h3>📋 Complaint Guidelines</h3>

                <ul>

                    <li>✅ Upload a clear image.</li>

                    <li>✅ Select the correct category.</li>

                    <li>✅ Enter the exact complaint location.</li>

                    <li>✅ Write a detailed description.</li>

                    <li>✅ One complaint per issue.</li>

                    <li>✅ Avoid duplicate complaints.</li>

                    <li>✅ Images should be less than 5 MB.</li>

                </ul>

            </div>

        </div>
        <button type="submit" class="submit-btn">

            🚀 Submit Complaint

        </button>

    </form>

    <p id="message"></p>

  </div>

</div>

<script src="complaint.js"></script>

</body>
</html>
