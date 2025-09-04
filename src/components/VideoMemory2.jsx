import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { WEBHOOK_URL } from "../config";

export default function VideoMemory2({ next }) {
  const [answered, setAnswered] = useState(null); // "yes" | "no"
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function sendChoice(choice) {
    try {
      setSending(true);
      setError("");
      const payload = {
        choice: choice === "yes" ? "Yes — she still has it" : "No — it’s lost",
        page: "gift-question",
        ts: new Date().toISOString(),
        ua: typeof navigator !== "undefined" ? navigator.userAgent : "server",
      };
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        mode: "no-cors", // Apps Script accepts without CORS preflight; prevents errors from blocking UI
      });
      // Fallback local record so you can see later too:
      localStorage.setItem("giftAnswer", choice);
      setAnswered(choice);
    } catch (e) {
      setError("Couldn’t send notification, but your choice is saved locally.");
      localStorage.setItem("giftAnswer", choice);
      setAnswered(choice);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="section">
      <h3>That First Gift — Bracelet & Earrings</h3>

      <div className="center" style={{marginTop:10}}>
        <video
          src="/assets/media/giftvideo.mp4"
          controls
          muted
          playsInline
          style={{maxWidth:"100%", borderRadius:12, border:"1px solid rgba(200,150,160,0.12)"}}
        />
      </div>

      <div style={{marginTop:12}}>
        <p>
          That bracelet and those earrings were the first things I ever bought for someone so
          special. Sanuu, do you still have them? If yes… could you please wear them for me today?
        </p>
      </div>

      {!answered && (
        <div className="center" style={{gap:10, marginTop:10, flexWrap:"wrap"}}>
          <button className="btn btn-cta" disabled={sending} onClick={() => sendChoice("yes")}>
            Yes. I still have it 💝
          </button>
          <button className="btn btn-ghost" disabled={sending} onClick={() => sendChoice("no")}>
            I have lost that one 😔
          </button>
        </div>
      )}

      {error && <div className="small" style={{color:"#b64b4b", marginTop:8}}>{error}</div>}

      {/* Reactions */}
      <AnimatePresence>
        {answered === "yes" && (
          <motion.div
            key="yes"
            initial={{opacity:0, scale:0.9}}
            animate={{opacity:1, scale:1}}
            exit={{opacity:0}}
            transition={{duration:0.35}}
            className="center"
            style={{marginTop:16, textAlign:"center"}}
          >
            <Confetti numberOfPieces={200} recycle={false} />
            <div className="big-emoji" aria-live="polite" style={{fontSize:64, lineHeight:1}}>
              🥰😍😘💖💞✨
            </div>
            <div style={{marginTop:8, color:"#F47297", fontWeight:700}}>
              My heart is blushing! Thank you, jaan.
            </div>
          </motion.div>
        )}

        {answered === "no" && (
          <motion.div
            key="no"
            initial={{opacity:0, y:10}}
            animate={{opacity:1, y:0}}
            exit={{opacity:0}}
            transition={{duration:0.35}}
            className="section"
            style={{marginTop:12, background:"#fff7f8"}}
          >
            <p style={{margin:0}}>
              It’s okay, meri jaan. Gifts can be lost — but *you* are Allah’s most precious gift to me.
              Tum ho sabse khoobsurat yaad. Jo cheez kho jaye, uski kami mehsoos hoti hai — par
              tumhari muskurahat aur pyaar hi meri asli zewar hain. 💗
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="center" style={{marginTop: answered ? 14 : 18}}>
        <button className="btn btn-cta" onClick={next}>Go to the next page ➜</button>
      </div>
    </div>
  );
}

