'use client';

import { useEffect } from "react";
import { BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";

export default function Home() {
  useEffect(() => {
    // const handleMove = (e: MouseEvent) => {
    //   const centerX = window.innerWidth / 2;
    //   const centerY = window.innerHeight / 2;
    //   const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);
    //   const maxDist = Math.min(window.innerWidth, window.innerHeight) / 2;
    //   const proximity = Math.max(0, 1 - dist / maxDist);
    //   document.documentElement.style.setProperty("--proximity", proximity.toFixed(3));
    // };
    // window.addEventListener("mousemove", handleMove);
    // return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <main className="page">
      {/* <div className="sphere" /> */}
      <div className="hero">
        <h1 className="hero-heading">Bon di, I&apos;m Ralph.</h1>

        <div className="contact">
          <a href="mailto:runggaldier.ralph@gmail.com">runggaldier.ralph@gmail.com</a>
          <span className="dot">·</span>
          <a href="tel:+39 351 237 4621">+39 351 237 4621</a>
        </div>

        <div className="socials">
          <a
            href="https://www.instagram.com/ralph.runggaldier/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <BsInstagram />
          </a>

          <a
            href="https://www.tiktok.com/@ralph.runggaldier"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <BsTiktok />
          </a>

          <a
            href="https://www.youtube.com/channel/UCb-x5JWI3QP-uRZeNu-m2iA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <BsYoutube />
          </a>
        </div>
      </div>
    </main>
  );
}