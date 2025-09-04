import React from "react";
import { motion } from "framer-motion";

export default function VideoMemory1({ next }) {
  return (
    <div className="section">
      <h3>First Memory — The Very First Video</h3>
      <p className="small" style={{marginTop:6}}>
        The first time I captured you on camera — my heart still remembers every second.
      </p>

      <motion.div
        initial={{opacity:0, y:10}}
        animate={{opacity:1, y:0}}
        className="center"
        style={{marginTop:12}}
      >
        <video
          src="/assets/media/firstvideo.mp4"
          controls
          autoPlay
          muted
          playsInline
          style={{maxWidth:"100%", borderRadius:12, border:"1px solid rgba(200,150,160,0.12)"}}
        />
      </motion.div>

      <div className="center" style={{marginTop:14}}>
        <button className="btn btn-cta" onClick={next}>Next Memory 💖</button>
      </div>
    </div>
  );
}

