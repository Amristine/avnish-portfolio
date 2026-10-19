"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Aperture, Check, Clapperboard,
  Menu, Scissors, X, Layers3, Mail, MapPin, Instagram,
  Youtube, Linkedin
} from "lucide-react";

const projects = [
  {
    number: "01", title: "Video Project 01", category: "Video", services: "Editing · Color Grading",
    video: "/videoav.mp4"
  },
  {
    number: "02", title: "Video Project 02", category: "Video", services: "Editing · Color Grading",
    video: "/videoav1.mp4"
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const reduceMotion = useReducedMotion();

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormSent(true);
  }

  return (
    <main>
      <header className="nav-shell">
        <a href="#home" className="brand" aria-label="Avnish Yadav home">
          <span className="brand-name">AVNISH</span><span className="brand-rule" />
          <span className="brand-sub">VIDEO EDITOR<br />& COLORIST</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#work">Work</a><a href="#about">About</a><a href="#services">Services</a><a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={13} /></a>
        <button className="menu-toggle" onClick={() => setMobileMenu(!mobileMenu)} aria-label={mobileMenu ? "Close menu" : "Open menu"}>{mobileMenu ? <X /> : <Menu />}</button>
      </header>
      <AnimatePresence>
        {mobileMenu && <motion.nav className="mobile-nav" initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}>
          {["Work","About","Services","Contact"].map((label)=><a key={label} href={"#"+label.toLowerCase()} onClick={()=>setMobileMenu(false)}>{label}<ArrowUpRight size={15}/></a>)}
        </motion.nav>}
      </AnimatePresence>

      <section className="hero dark portfolio-hero" id="home">
        <div className="portfolio-hero-top">
        </div>
        <div className="portfolio-wordmark" aria-hidden="true">AVNISH</div>
        <div className="portfolio-portrait">
          <img src="/portrait3.png" alt="Portrait of Avnish Yadav" />
        </div>
        <div className="portfolio-hero-copy">
          <p className="eyebrow">VIDEO EDITOR &amp; COLORIST</p>
          <h1>Stories shaped<br />through <em>motion.</em></h1>
          <p>I turn raw footage into clear, cinematic stories with thoughtful editing and color.</p>
          <a className="btn btn-paper" href="#work">Explore selected work <ArrowRight size={14}/></a>
        </div>
        <div className="portfolio-hero-side">EDITING / COLOR / STORY</div>
        <div className="portfolio-hero-bottom"><span>BASED IN INDIA · AVAILABLE WORLDWIDE</span><a href="#work">SCROLL TO EXPLORE <ArrowDownRight size={13}/></a></div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="wrap">
          <div className="work-layout">
            <motion.div className="section-intro" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{once:true,amount:.2}}>
              <p className="eyebrow muted">A selection of recent work</p>
              <h2 className="section-title serif">Stories I&apos;ve<br />helped bring<br />to life<span className="period">.</span></h2>
              <span className="short-rule" />
              <p className="body-copy">A few selected projects for brands, artists, and people with a story to tell.</p>
              <div className="more-work-links">
                <p className="eyebrow muted">More work · Google Drive</p>
                <a href="https://drive.google.com/drive/folders/1FhMHQ9o2X-rF_xX-snW7dnosL8DdSkoi" target="_blank" rel="noreferrer">Additional work 01 <ArrowUpRight size={14}/></a>
                <a href="https://drive.google.com/drive/folders/1nst6TjwDmUlAzXijmCoykf4rq8k3WtWv" target="_blank" rel="noreferrer">Additional work 02 <ArrowUpRight size={14}/></a>
                <a href="https://drive.google.com/drive/folders/1rwTMpDWSTgnWToox-sgUorVteweaFt-E" target="_blank" rel="noreferrer">Additional work 03 <ArrowUpRight size={14}/></a>
                <a href="https://drive.google.com/drive/folders/1ciDIhZFQc5V5TBkzcRv-9DzSm99_iPaN" target="_blank" rel="noreferrer">Additional work 04 <ArrowUpRight size={14}/></a>
                <a href="https://drive.google.com/drive/folders/1VQH6IfBTGMBaymnKoNJtXDAoBCBKTMQS" target="_blank" rel="noreferrer">Additional work 05 <ArrowUpRight size={14}/></a>
              </div>
              <a href="#contact" className="text-link">Have something in mind? <ArrowRight size={14}/></a>
            </motion.div>
            <div className="project-grid video-project-grid">
              {projects.map((project) => (
                <article className="project-card video-project-card" key={project.number}>
                  <span className="project-image-wrap video-project-player">
                    <video controls playsInline preload="metadata" src={project.video} aria-label={project.title}>
                      Your browser does not support video playback.
                    </video>
                  </span>
                  <span className="project-meta"><span className="project-name">{project.title}</span><span className="project-number">{project.number}</span></span>
                  <span className="project-type">{project.category} <span>·</span> {project.services}</span>
                </article>
              ))}
            </div>
          </div>
          <div className="work-footer"><span className="eyebrow muted">Selected projects / 2024—2026</span><a className="text-link" href="#contact">Discuss a project <ArrowUpRight size={14}/></a></div>
        </div>
      </section>

      <section className="showreel dark" id="showreel">
        <div className="showreel-image" role="img" aria-label="Atmospheric cinematic close-up" />
        <div className="showreel-overlay"/>
        <div className="wrap showreel-content">
          <p className="eyebrow bronze">The showreel · 2026</p>
          <h2 className="serif showreel-title">A thousand decisions.<br /><em>One seamless story.</em></h2>
          <p className="showreel-copy">A short journey through frames, moods, and moments.<br className="desktop-only"/> A little of everything I love to make.</p>
          <a className="reel-play" href="#work"><span className="round-play"><ArrowDownRight size={15}/></span><span className="eyebrow">View selected work</span><span className="reel-duration">02 VIDEOS</span></a>
        </div>
        <span className="reel-side-label">EDIT / COLOR / FEEL</span>
      </section>

      <section className="about-section" id="about">
        <div className="about-image"><img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1500&q=85" alt="Film editing suite with multiple screens" loading="lazy"/><span className="image-stamp"><Aperture size={18}/> FRAME NOTES / 01</span></div>
        <div className="about-copy">
          <p className="eyebrow muted">A little about me</p>
          <h2 className="section-title serif">Not just cutting clips.<br /><em>Finding the story.</em></h2>
          <p className="body-copy">I&apos;m an independent video editor and colorist focused on creating visuals that hold attention, build emotion, and make every second count.</p>
          <p className="body-copy">From the first rough cut to the final grade, I work closely with creators and brands to turn ideas into thoughtful, cinematic stories.</p>
          <a className="text-link" href="#contact">Let&apos;s get to know each other <ArrowRight size={14}/></a>
          <div className="about-stats"><div><strong>100<span>+</span></strong><small>Projects</small></div><div><strong>5<span>+</span></strong><small>Years experience</small></div><div><strong>Worldwide</strong><small>Working remotely</small></div></div>
          <p className="fineprint">Replace these sample stats with verified personal details.</p>
        </div>
      </section>

      <section className="services-section section-pad dark" id="services">
        <div className="wrap">
          <div className="services-heading">
            <div><p className="eyebrow bronze">What I can help with</p><h2 className="section-title serif">From raw footage<br />to <em>something you feel.</em></h2></div>
            <div className="services-aside"><p>Post-production for brands, creators, and artists who care about quality, storytelling, and visual impact.</p><a className="text-link light-link" href="#contact">Discuss your project <ArrowUpRight size={14}/></a></div>
          </div>
          <div className="service-grid">
            <article className="service-item"><Scissors size={21}/><span className="service-index">01</span><h3>Video editing</h3><p>Story-driven edits for films, brand content, YouTube, and social media.</p></article>
            <article className="service-item"><Aperture size={21}/><span className="service-index">02</span><h3>Color grading</h3><p>Cinematic looks that set the right mood and bring your story to life.</p></article>
            <article className="service-item"><Layers3 size={21}/><span className="service-index">03</span><h3>Post-production</h3><p>Finishing, sound design coordination, and delivery in multiple formats.</p></article>
            <article className="service-item"><Clapperboard size={21}/><span className="service-index">04</span><h3>Creative support</h3><p>A second pair of eyes to help shape the strongest version of your footage.</p></article>
          </div>
        </div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="wrap contact-layout">
          <div className="contact-intro">
            <p className="eyebrow muted">Have a project in mind?</p>
            <h2 className="section-title serif">Let&apos;s make something<br /><em>worth watching.</em></h2>
            <p className="body-copy">Tell me a little about what you&apos;re creating. I&apos;d love to hear the idea and how I can help bring it to the screen.</p>
            <a className="contact-detail" href="mailto:hello@framestudio.com"><Mail size={15}/> hello@framestudio.com <ArrowUpRight size={13}/></a>
            <div className="contact-detail"><MapPin size={15}/> Available worldwide</div>
            <div className="social-links"><a href="https://instagram.com" aria-label="Instagram"><Instagram size={17}/></a></div>
          </div>
          <aside className="contact-visual" aria-label="Contact invitation">
            <span className="contact-visual-index">AVNISH YADAV <span>·</span> VIDEO EDITOR</span>
            <div className="contact-orbit" aria-hidden="true"><span /><span /><span /></div>
            <p className="contact-visual-kicker">GOOD STORIES START<br />WITH A CONVERSATION.</p>
            <a className="contact-visual-link" href="mailto:hello@framestudio.com">Start a conversation <ArrowUpRight size={18}/></a>
            <span className="contact-visual-foot">AVAILABLE WORLDWIDE · 2026</span>
          </aside>
        </div>
      </section>

      <footer className="site-footer">
        <a href="#home" className="brand footer-brand"><span className="brand-name">AVNISH</span><span className="brand-rule"/><span className="brand-sub">VIDEO EDITOR<br/>& COLORIST</span></a>
        <nav className="footer-nav"><a href="#work">Work</a><a href="#about">About</a><a href="#services">Services</a><a href="#contact">Contact</a></nav>
        <span className="copyright">© {new Date().getFullYear()} AVNISH YADAV. ALL RIGHTS RESERVED.</span>
      </footer>

    </main>
  );
}
