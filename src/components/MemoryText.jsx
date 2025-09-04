import React from "react";

export default function MemoryText({ next }) {
  return (
    <div className="section" style={{background:"linear-gradient(180deg,#fff,#fff7f8)"}}>
      <h3 style={{fontFamily:"Dancing Script, cursive", color:"#F47297", marginBottom:2}}>
        A Page From My Heart
      </h3>
      <div style={{
        border:"1px solid rgba(200,150,160,0.18)",
        borderRadius:14,
        padding:"14px 16px",
        background:"rgba(255,255,255,0.9)"
      }}>
        <p>
          <em>My Dearest Sanuu,</em>
        </p>
        <p>
          I still remember that day like it was yesterday — when you opened the little gift box
          with the bracelet and earrings inside. The way your eyes sparkled, the way your smile
          lit up the whole moment… <em>meri rooh tak ko sukoon mila tha.</em>
        </p>
        <p>
          That was the first time in my life I had ever bought something for someone so special.
          And I realized — it wasn’t about the gift itself, it was about <strong>you</strong>.
        </p>
        <p>
          From that day, my heart made a silent dua:
          <br />
          <em>
            Ya Allah, keep her in my life forever. Let me be the reason for her smile, again and again.
          </em>
        </p>
        <p>
          Aaj bhi, when I think of that moment, I feel the same butterflies — knowing that this
          journey of ours started with such a small gift, but such a big love. 💖
        </p>
        <p style={{marginTop:14}}>
          <em>Forever yours,</em><br />
          <strong>Abdullah</strong> <span className="small">— tumhara Bauraha</span>
        </p>
      </div>

      <div className="center" style={{marginTop:14}}>
        <button className="btn btn-cta" onClick={next}>Continue the Journey ➜</button>
      </div>
    </div>
  );
}

