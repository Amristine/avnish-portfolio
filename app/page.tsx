"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Aperture, Check, Clapperboard,
  Menu, Play, Scissors, X, Layers3, Mail, MapPin, Instagram,
  Youtube, Linkedin, MoveHorizontal
} from "lucide-react";

const projects = [
  {
    number: "01", title: "A Study in Motion", category: "Brand Film", services: "Editing · Color Grading",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1500&q=85",
    description: "A restrained automotive film built around detail, movement, and the rhythm between shots.",
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  },
  {
    number: "02", title: "After Hours", category: "Music Video", services: "Editing · Color Grading",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1500&q=85",
    description: "A performance-led visual with rich shadows, warm highlights, and an edit that follows the music.",
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  },
  {
    number: "03", title: "Into the Unknown", category: "Travel Film", services: "Story · Editing · Grade",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1500&q=85",
    description: "A quiet, cinematic travel story shaped around changing light and a slower pace.",
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  },
  {
    number: "04", title: "The Quiet Hours", category: "Short Film", services: "Editing · Color Grading",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1500&q=85",
    description: "A character-focused short, shaped through pauses, close details, and a naturalistic grade.",
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
    const reduceMotion = useReducedMotion();

  return (
    <main>
      <header className="nav-shell">
        <a href="#home" className="brand" aria-label="FRAME home">
          <span className="brand-name">FRAME</span><span className="brand-rule" />
          <span className="brand-sub">VIDEO EDITOR<br />& COLORIST</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#work">Work</a><a href="#about">About</a><a href="#services">Services</a>
        </nav>
        <a className="nav-cta" href="#work">Explore work <ArrowUpRight size={13} /></a>
        <button className="menu-toggle" onClick={() => setMobileMenu(!mobileMenu)} aria-label={mobileMenu ? "Close menu" : "Open menu"}>{mobileMenu ? <X /> : <Menu />}</button>
      </header>
      <AnimatePresence>
        {mobileMenu && <motion.nav className="mobile-nav" initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}>
          {["Work","About","Services"].map((label)=><a key={label} href={"#"+label.toLowerCase()} onClick={()=>setMobileMenu(false)}>{label}<ArrowUpRight size={15}/></a>)}
        </motion.nav>}
      </AnimatePresence>

      <section className="hero dark" id="home">
        <div className="hero-image" role="img" aria-label="Cinematic city skyline at golden hour" />
        <div className="hero-gradient" />
        <div className="hero-content">
          <motion.p className="eyebrow hero-kicker" initial={reduceMotion?false:{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:.5}}>Independent video editor &amp; colorist</motion.p>
          <motion.h1 className="hero-title" initial={reduceMotion?false:{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.65,delay:.08}}>
            EDITED WITH<br /><span>INTENTION.</span>
          </motion.h1>
          <motion.p className="hero-copy" initial={reduceMotion?false:{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.55,delay:.2}}>I shape footage into clear, cinematic stories for artists, brands, and creators.</motion.p>
          <div className="hero-actions">
            <a className="btn btn-paper" href="#work">Explore selected work <ArrowRight size={14}/></a>
            <span className="hero-availability"><span className="availability-dot" /> Available for select projects</span>
          </div>
        </div>
        <div className="hero-bottom"><a href="#work" className="scroll-cue"><span className="scroll-line" /> Scroll to explore <ArrowDownRight size={13}/></a><span className="hero-location">EDITING&nbsp; / &nbsp;COLOR&nbsp; / &nbsp;STORY</span></div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="wrap">
          <div className="work-layout">
            <motion.div className="section-intro" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{once:true,amount:.2}}>
              <p className="eyebrow muted">A selection of recent work</p>
              <h2 className="section-title serif">Stories I&apos;ve<br />helped bring<br />to life<span className="period">.</span></h2>
              <span className="short-rule" />
              <p className="body-copy">A few selected projects for brands, artists, and people with a story to tell.</p>
              <a href="#work" className="text-link">Have something in mind? <ArrowRight size={14}/></a>
            </motion.div>
            <div className="project-grid">
              {projects.map((project, index) => (
                <motion.button className="project-card" key={project.number} onClick={() => setActiveProject(project)} initial={reduceMotion?false:{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.14}} transition={{duration:.6,delay:index*.08}} aria-label={"Open project "+project.title}>
                  <span className="project-image-wrap"><img src={project.image} alt={project.title + " cinematic still"} className="project-image" loading={index < 2 ? "eager" : "lazy"} /><span className="project-play"><Play size={14} fill="currentColor"/></span><span className="project-open"><ArrowUpRight size={16}/></span></span>
                  <span className="project-meta"><span className="project-name">{project.title}</span><span className="project-number">{project.number}</span></span>
                  <span className="project-type">{project.category} <span>·</span> {project.services}</span>
                </motion.button>
              ))}
            </div>
          </div>
          <div className="work-footer"><span className="eyebrow muted">Selected projects / 2024—2026</span><a className="text-link" href="#work">Discuss a project <ArrowUpRight size={14}/></a></div>
        </div>
      </section>

      <section className="showreel dark" id="showreel">
        <div className="showreel-image" role="img" aria-label="Atmospheric cinematic close-up" />
        <div className="showreel-overlay"/>
        <div className="wrap showreel-content">
          <p className="eyebrow bronze">The showreel · 2026</p>
          <h2 className="serif showreel-title">A thousand decisions.<br /><em>One seamless story.</em></h2>
          <p className="showreel-copy">A short journey through frames, moods, and moments.<br className="desktop-only"/> A little of everything I love to make.</p>
          <button className="reel-play" onClick={()=>setActiveProject({ ...projects[0], title:"Showreel — 2026", description:"Replace this sample video with your actual showreel when it's ready." })}><span className="round-play"><Play size={15} fill="currentColor"/></span><span className="eyebrow">Play showreel</span><span className="reel-duration">00:60</span></button>
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
          <a className="text-link" href="#work">Let&apos;s get to know each other <ArrowRight size={14}/></a>
          <div className="about-stats"><div><strong>100<span>+</span></strong><small>Projects</small></div><div><strong>5<span>+</span></strong><small>Years experience</small></div><div><strong>Worldwide</strong><small>Working remotely</small></div></div>
          <p className="fineprint">Replace these sample stats with verified personal details.</p>
        </div>
      </section>

      <section className="services-section section-pad dark" id="services">
        <div className="wrap">
          <div className="services-heading">
            <div><p className="eyebrow bronze">What I can help with</p><h2 className="section-title serif">From raw footage<br />to <em>something you feel.</em></h2></div>
            <div className="services-aside"><p>Post-production for brands, creators, and artists who care about quality, storytelling, and visual impact.</p><a className="text-link light-link" href="#work">Discuss your project <ArrowUpRight size={14}/></a></div>
          </div>
          <div className="service-grid">
            <article className="service-item"><Scissors size={21}/><span className="service-index">01</span><h3>Video editing</h3><p>Story-driven edits for films, brand content, YouTube, and social media.</p></article>
            <article className="service-item"><Aperture size={21}/><span className="service-index">02</span><h3>Color grading</h3><p>Cinematic looks that set the right mood and bring your story to life.</p></article>
            <article className="service-item"><Layers3 size={21}/><span className="service-index">03</span><h3>Post-production</h3><p>Finishing, sound design coordination, and delivery in multiple formats.</p></article>
            <article className="service-item"><Clapperboard size={21}/><span className="service-index">04</span><h3>Creative support</h3><p>A second pair of eyes to help shape the strongest version of your footage.</p></article>
          </div>
        </div>
      </section>



      <footer className="site-footer">
        <a href="#home" className="brand footer-brand"><span className="brand-name">FRAME</span><span className="brand-rule"/><span className="brand-sub">VIDEO EDITOR<br/>& COLORIST</span></a>
        <nav className="footer-nav"><a href="#work">Work</a><a href="#about">About</a><a href="#services">Services</a><a href="#work">Contact</a></nav>
        <span className="copyright">© {new Date().getFullYear()} FRAME STUDIO. REPLACE WITH YOUR NAME.</span>
      </footer>

      <AnimatePresence>
        {activeProject && <motion.div className="project-modal" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setActiveProject(null)} role="presentation">
          <motion.div className="modal-panel" initial={{opacity:0,y:20,scale:.98}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:10,scale:.98}} onClick={(e)=>e.stopPropagation()} role="dialog" aria-modal="true" aria-label={activeProject.title}>
            <button className="modal-close" onClick={()=>setActiveProject(null)} aria-label="Close project"><X size={20}/></button>
            <div className="modal-video"><video controls playsInline poster={activeProject.image} src={activeProject.video}>Your browser does not support the video tag.</video></div>
            <div className="modal-details"><div><p className="eyebrow muted">{activeProject.category} / {activeProject.number}</p><h2 className="serif">{activeProject.title}</h2><p>{activeProject.description}</p></div><span className="eyebrow muted">{activeProject.services}</span></div>
            <p className="modal-note">Sample preview only — replace with a project you have permission to display.</p>
          </motion.div>
        </motion.div>}
      </AnimatePresence>
    </main>
  );
}
