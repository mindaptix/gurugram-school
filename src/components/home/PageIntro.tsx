import Image from "next/image";

export function PageIntro() {
  return (
    <div className="home-intro" aria-hidden="true">
      <div className="intro-panel intro-panel-green" />
      <div className="intro-panel intro-panel-gold" />
      <div className="intro-panel intro-panel-cream" />
      <div className="intro-content">
        <Image
          src="/logo11.png"
          alt="Delhi Public School SPR Gurugram logo"
          width={620}
          height={155}
          className="intro-logo"
          priority
        />
        <span className="intro-kicker">Delhi Public School</span>
        <span className="intro-title">SPR Gurugram</span>
        <span className="intro-line" />
      </div>
    </div>
  );
}
