"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Aperture, Check, Clapperboard,
  Menu, Play, Scissors, Sparkles, X, Layers3, Mail, MapPin, Instagram,
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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [grade, setGrade] = useState(50);
  const [formSent, setFormSent] = useState(false);
  const reduceMotion = useReducedMotion();

  function submitInquiry(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormSent(true);
  }

  return (
    <main>
      <header className="nav-shell">
        <a href="#home" className="brand" aria-label="FRAME home">
          <span className="brand-name">FRAME</span><span className="brand-rule" />
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

      <section className="hero dark" id="home">
        <div className="hero-image" role="img" aria-label="Cinematic city skyline at golden hour" />
        <div className="hero-gradient" />
        <div className="hero-content">
          <motion.p className="eyebrow" initial={reduceMotion?false:{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:.6}}>Cinematic editing · Color grading · Storytelling</motion.p>
          <motion.h1 className="hero-title" initial={reduceMotion?false:{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.1}}>
            EVERY FRAME.<br />A FEELING.
          </motion.h1>
          <motion.p className="hero-script" initial={reduceMotion?false:{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.24}}>Every story, a world.</motion.p>
          <motion.p className="hero-copy" initial={reduceMotion?false:{opacity:0}} animate={{opacity:1}} transition={{duration:.8,delay:.4}}>Cinematic editing and color grading for<br className="desktop-only" /> brands, creators, and stories that deserve to be seen.</motion.p>
          <div className="hero-actions">
            <a className="btn btn-paper" href="#showreel"><Play size={13} fill="currentColor" /> Watch showreel</a>
            <a className="text-link light-link" href="#work">View my work <ArrowRight size={14}/></a>
          </div>
        </div>
        <div className="hero-bottom"><a href="#work" className="scroll-cue"><span className="scroll-line" /> Scroll to explore <ArrowDownRight size={13}/></a><span className="eyebrow">Available for projects worldwide</span></div>
        <span className="hero-index">01 / 05</span>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="wrap">
          <div className="work-layout">
            <motion.div className="section-intro" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{once:true,amount:.2}}>
              <p className="eyebrow muted">A selection of recent work</p>
              <h2 className="section-title serif">Stories I&apos;ve<br />helped bring<br />to life<span className="period">.</span></h2>
              <span className="short-rule" />
              <p className="body-copy">A few selected projects for brands, artists, and people with a story to tell.</p>
              <a href="#contact" className="text-link">Have something in mind? <ArrowRight size={14}/></a>
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
          <button className="reel-play" onClick={()=>setActiveProject({ ...projects[0], title:"Showreel — 2026", description:"Replace this sample video with your actual showreel when it's ready." })}><span className="round-play"><Play size={15} fill="currentColor"/></span><span className="eyebrow">Play showreel</span><span className="reel-duration">00:60</span></button>
        </div>
        <span className="reel-side-label">EDIT / COLOR / FEEL</span>
      </section>

      <section className="grade-section section-pad" id="grading">
        <div className="wrap grade-layout">
          <div className="grade-intro">
            <p className="eyebrow muted">Color grading</p>
            <h2 className="section-title serif">Same footage.<br />A different world<span className="period">.</span></h2>
            <p className="body-copy">Color is more than a look. It&apos;s where the emotion finds its voice. Move the handle to compare the treatment.</p>
            <div className="grade-presets"><button className={grade===0?"preset active":"preset"} onClick={()=>setGrade(0)}>Original</button><button className={grade===50?"preset active":"preset"} onClick={()=>setGrade(50)}>Cinematic</button><button className={grade===100?"preset active":"preset"} onClick={()=>setGrade(100)}>Moody</button></div>
          </div>
          <div className="grade-demo">
            <div className="grade-image grade-final" style={{backgroundImage:"url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=90')",filter:grade===0?"saturate(.55) brightness(1.16) contrast(.78)":grade===100?"saturate(.8) brightness(.64) contrast(1.22) hue-rotate(-8deg)":"saturate(.92) brightness(.83) contrast(1.12) sepia(.13)"}}/>
            <div className="grade-image grade-original" style={{width:(100-grade)+"%"}}><div className="grade-original-inner" style={{backgroundImage:"url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=90')"}}/></div>
            <span className="grade-label label-left">Original footage</span><span className="grade-label label-right">Final grade</span>
            <input className="grade-range" type="range" min="0" max="100" value={grade} onChange={(e)=>setGrade(Number(e.target.value))} aria-label="Compare original and graded image"/>
            <span className="grade-handle" style={{left:(100-grade)+"%"}}><MoveHorizontal size={16}/></span>
          </div>
        </div>
        <div className="wrap grade-caption"><span className="eyebrow muted">01 — 03</span><span className="eyebrow muted">Contrast · Tone · Atmosphere</span></div>
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
            <div className="social-links"><a href="https://instagram.com" aria-label="Instagram"><Instagram size={17}/></a><a href="https://youtube.com" aria-label="YouTube"><Youtube size={18}/></a><a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin size={17}/></a></div>
          </div>
          <form className="contact-form" onSubmit={submitInquiry}>
            {formSent ? <div className="form-success"><span className="success-icon"><Check size={24}/></span><h3 className="serif">Thanks for reaching out.</h3><p>This demo form isn&apos;t connected to email yet. Connect it to your preferred form service to receive enquiries.</p><button type="button" className="btn btn-dark" onClick={()=>setFormSent(false)}>Send another inquiry</button></div> : <>
              <div className="form-row"><label>Your name *<input name="name" placeholder="Jane Doe" required autoComplete="name"/></label><label>Email address *<input name="email" type="email" placeholder="you@example.com" required autoComplete="email"/></label></div>
              <div className="form-row"><label>Project type *<select name="type" defaultValue="" required><option value="" disabled>Select a project</option><option>Brand film / commercial</option><option>Music video</option><option>Short film / documentary</option><option>YouTube / creator content</option><option>Color grading</option><option>Other</option></select></label><label>Budget range<select name="budget" defaultValue=""><option value="" disabled>Select a range</option><option>Under $500</option><option>$500–$1,500</option><option>$1,500–$5,000</option><option>$5,000+</option><option>Let's discuss</option></select></label></div>
              <label>Tell me about the project *<textarea name="details" placeholder="The idea, the timeline, the kind of feeling you're after..." rows={4} required/></label>
              <button className="btn btn-dark submit-btn" type="submit">Send inquiry <ArrowRight size={15}/></button>
              <p className="form-note">This is a front-end demo. Add a form endpoint before publishing.</p>
            </>}
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <a href="#home" className="brand footer-brand"><span className="brand-name">FRAME</span><span className="brand-rule"/><span className="brand-sub">VIDEO EDITOR<br/>& COLORIST</span></a>
        <nav className="footer-nav"><a href="#work">Work</a><a href="#about">About</a><a href="#services">Services</a><a href="#contact">Contact</a></nav>
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
