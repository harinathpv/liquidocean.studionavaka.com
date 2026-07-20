"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const tabs = document.querySelectorAll(".tab");
    const handler = (e) => {
      tabs.forEach((x) => x.classList.remove("active"));
      e.currentTarget.classList.add("active");
    };
    tabs.forEach((t) => t.addEventListener("click", handler));
    return () => tabs.forEach((t) => t.removeEventListener("click", handler));
  }, []);

  return (
    <>
      <nav>
        <div className="wrap nav-inner">
          <a href="#" className="brand">
            <img src="/images/navaka-logo.png" alt="Studio NAVAKA" className="brand-logo" />
          </a>
          <ul className="nav-links" id="nl">
            <li><a href="#model">The Model</a></li>
            <li><a href="#journeys">Journeys</a></li>
            <li><a href="#frameworks">Frameworks</a></li>
            <li><a href="#hub">Learning</a></li>
            <li><a href="#assessment">Assessment</a></li>
            <li><a href="https://www.studionavaka.com" target="_blank">Studio NAVAKA</a></li>
          </ul>
          <a className="nav-cta" href="#newsletter">Continue the Journey</a>
          <button className="menu-toggle" onClick={() => { const e = document.getElementById("nl"); if (e) e.classList.toggle("open"); }}>MENU</button>
        </div>
      </nav>

      {/* HERO — welcomes a reader who already owns the book */}
      <header className="hero">
        <div className="wrap">
          <span className="welcome rv">Welcome, reader — the Compass continues here</span>
          <h1 className="rv">Liquid Ocean<span className="tm">®</span></h1>
          <p className="triad rv">Build lasting products.<br/>Build lasting businesses.<br/>Build lasting leaders.</p>
          <p className="sub rv">You’ve read the book. This is where the methodology stays alive — the frameworks, the assessments, and the thinking that keep evolving between editions.</p>
          <div className="hero-ctas rv">
            <a className="btn-main" href="#model">Explore the Model</a>
            <a className="btn-quiet" href="#assessment">Take the Assessment →</a>
          </div>
          <p className="living-note rv">More than a book. A living body of knowledge.</p>
        </div>
      </header>

      {/* EXPIRY SPLIT */}
      <section>
        <div className="wrap split">
          <div className="rv">
            <span className="eyebrow">The Premise</span>
            <p className="big">Every competitive advantage has an expiry date.</p>
          </div>
          <div className="lines rv">
            <div className="body-copy">
              <p>Today’s products become tomorrow’s commodities.</p>
              <p>Today’s business models become tomorrow’s constraints.</p>
              <p>Today’s leadership practices become tomorrow’s bottlenecks.</p>
              <p><strong>Organizations that thrive aren’t the ones that predict change.</strong></p>
            </div>
            <p className="turn">They’re the ones that reinvent continuously.</p>
          </div>
        </div>
      </section>

      {/* THE LIQUID OCEAN MODEL — centerpiece with functional color */}
      <section className="model-section" id="model">
        <div className="wrap">
          <span className="eyebrow rv">The Framework</span>
          <h2 className="display rv">The Liquid Ocean Model™</h2>
          <div className="model-frame rv">
            <img src="/images/liquid-ocean-model.png" alt="The Liquid Ocean Model™ — four concentric layers: 7 Principles of Liquid Ocean at the core, surrounded by 7 Habits of Liquid Ocean Leaders, 7 Habits of Lasting Products, and 7 Habits of Lasting Businesses." className="model-img" />
            <p className="model-caption">Fig. 03 — The Liquid Ocean Model™</p>
          </div>
          <p className="model-note rv">From Principles to Leaders. From Leaders to Products. From Products to Lasting Businesses.<br/>One ocean. Four levels. Endless possibilities.</p>
          <div className="principles-row rv">
            <span className="pr">1 · Customer Value First</span>
            <span className="pr">2 · Continuous Reinvention</span>
            <span className="pr">3 · Value Exchange</span>
            <span className="pr">4 · Agility in Motion</span>
            <span className="pr">5 · Learning Over Knowing</span>
            <span className="pr">6 · Trust &amp; Transparency</span>
            <span className="pr">7 · Long-term Impact</span>
          </div>
          <p className="model-legend-line rv"><strong>Principles</strong> (Why) · <strong>Leaders</strong> (Who) · <strong>Products</strong> (What) · <strong>Businesses</strong> (How)</p>
        </div>
      </section>

      {/* JOURNEYS */}
      <section id="journeys">
        <div className="wrap">
          <span className="eyebrow rv">Choose Your Journey</span>
          <h2 className="display rv narrow" style={{marginLeft: "0"}}>Where do you need to reinvent?</h2>
          <div className="journeys">
            <div className="journey j-lead rv">
              <span className="jnum">Layer 01 · Leaders</span>
              <h4>I’m developing leaders</h4>
              <p>Build leaders who reinvent before they have to.</p>
              <a className="go" href="#">Explore the habits →</a>
            </div>
            <div className="journey j-prod rv">
              <span className="jnum">Layer 02 · Products</span>
              <h4>I’m building products</h4>
              <p>Build products customers continue choosing.</p>
              <a className="go" href="#">Explore the habits →</a>
            </div>
            <div className="journey j-biz rv">
              <span className="jnum">Layer 03 · Businesses</span>
              <h4>I’m growing a business</h4>
              <p>Build organizations that remain relevant.</p>
              <a className="go" href="#">Explore the habits →</a>
            </div>
          </div>
        </div>
      </section>

      {/* FRAMEWORK LIBRARY */}
      <section id="frameworks">
        <div className="wrap">
          <span className="eyebrow rv">The Framework Library</span>
          <h2 className="display rv narrow" style={{marginLeft: "0"}}>The tools from the book — living, and ready to use.</h2>
          <div className="frameworks">
            <div className="fw rv">
              <svg className="ficon" viewBox="0 0 24 24" fill="none" stroke="#2A5FA8" strokeWidth="1.4"><path d="M4 12h16M12 4v16"/><circle cx="12" cy="12" r="9"/></svg>
              <h4>Value Exchange Canvas<span className="tm">™</span></h4>
              <p>Map how value flows between an organization and those it serves.</p>
              <a className="learn" href="#">Learn more →</a>
            </div>
            <div className="fw rv">
              <svg className="ficon" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.4"><path d="M12 3a9 9 0 1 0 9 9"/><path d="M12 3v9l6 3"/></svg>
              <h4>Liquid Ocean Flywheel<span className="tm">™</span></h4>
              <p>The self-reinforcing loop that compounds reinvention over time.</p>
              <a className="learn" href="#">Learn more →</a>
            </div>
            <div className="fw rv">
              <svg className="ficon" viewBox="0 0 24 24" fill="none" stroke="#B0742F" strokeWidth="1.4"><path d="M21 12a9 9 0 1 1-6.2-8.5"/><path d="M21 4v5h-5"/></svg>
              <h4>Adaptive Organisation Loop<span className="tm">™</span></h4>
              <p>How an organization senses, decides, and shifts as conditions change.</p>
              <a className="learn" href="#">Learn more →</a>
            </div>
            <div className="fw rv">
              <svg className="ficon" viewBox="0 0 24 24" fill="none" stroke="#2A5FA8" strokeWidth="1.4"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
              <h4>Reinvention Leadership Cycle<span className="tm">™</span></h4>
              <p>The rhythm by which leaders renew themselves and their teams.</p>
              <a className="learn" href="#">Learn more →</a>
            </div>
            <div className="fw rv">
              <svg className="ficon" viewBox="0 0 24 24" fill="none" stroke="#163D35" strokeWidth="1.4"><path d="M3 12h4l3 8 4-16 3 8h4"/></svg>
              <h4>Leadership Assessment<span className="tm">™</span></h4>
              <p>Gauge how ready your leaders are to reinvent ahead of necessity.</p>
              <a className="learn" href="#assessment">Take it →</a>
            </div>
            <div className="fw rv">
              <svg className="ficon" viewBox="0 0 24 24" fill="none" stroke="#163D35" strokeWidth="1.4"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 12l2 2 4-4"/></svg>
              <h4>Business Assessment<span className="tm">™</span></h4>
              <p>Measure your organization’s capability for continuous reinvention.</p>
              <a className="learn" href="#assessment">Take it →</a>
            </div>
          </div>
        </div>
      </section>

      {/* LEARNING HUB */}
      <section id="hub">
        <div className="wrap">
          <span className="eyebrow rv">The Learning Hub</span>
          <h2 className="display rv narrow" style={{marginLeft: "0"}}>Keep studying between editions.</h2>
          <div className="tabs rv">
            <button className="tab active">Articles</button>
            <button className="tab">Case Studies</button>
            <button className="tab">Videos</button>
            <button className="tab">Research</button>
            <button className="tab">Book Notes</button>
          </div>
          <div className="hub-grid">
            <div className="entry rv">
              <span className="meta">Article · Principle III</span>
              <h4><a href="#">Reading the water: sensing advantage before it expires</a></h4>
              <p>A deeper look at the first discipline — applied to a mid-market manufacturer.</p>
            </div>
            <div className="entry rv">
              <span className="meta">Case Study · Products</span>
              <h4><a href="#">How a 15-year-old SaaS product reinvented its core loop</a></h4>
              <p>The Flywheel, applied when the original growth engine stalled.</p>
            </div>
            <div className="entry rv">
              <span className="meta">Book Notes · Chapter 7</span>
              <h4><a href="#">The seven habits of a Liquid Ocean leader, in practice</a></h4>
              <p>Working notes and reader questions from the leadership layer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ASSESSMENT — the green moment */}
      <section className="assessment" id="assessment">
        <div className="wrap">
          <span className="eyebrow rv">The Assessment</span>
          <svg className="score rv" width="140" height="140" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Reinvention readiness score dial">
            <circle cx="70" cy="70" r="60" fill="none" stroke="rgba(250,249,246,0.18)" strokeWidth="6"/>
            <circle cx="70" cy="70" r="60" fill="none" stroke="#B08D57" strokeWidth="6" strokeLinecap="round" strokeDasharray="377" strokeDashoffset="132" transform="rotate(-90 70 70)"/>
            <text x="70" y="66" textAnchor="middle" fontFamily="Fraunces" fontSize="34" fill="#FAF9F6">65</text>
            <text x="70" y="90" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="9" letterSpacing="2" fill="rgba(250,249,246,0.6)">READINESS</text>
          </svg>
          <h2 className="rv">How ready is your organization for continuous reinvention?</h2>
          <p className="rv">A short diagnostic across the four layers of the Model — your readiness, scored, with the disciplines to strengthen next.</p>
          <a className="btn-main rv" href="#">Take the Liquid Ocean Assessment™</a>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter" id="newsletter">
        <div className="wrap narrow">
          <span className="eyebrow rv">Continue the Journey</span>
          <h2 className="display rv">The methodology keeps evolving. So can your practice.</h2>
          <p className="rv">Thoughtful notes on leadership, products, AI strategy, and business reinvention — from the desk behind the Compass.</p>
          <div className="nl-cta rv">
            <a className="btn-main" href="https://liquidocean.beehiiv.com" target="_blank" rel="noopener">Subscribe on Beehiiv</a>
          </div>
          <p className="nl-powered">Powered by Beehiiv · liquidocean.beehiiv.com</p>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="foot-top">
            <p className="foot-motto">Think liquid.<br/>Design value.<br/>Reinvent continuously.</p>
          </div>
          <div className="foot">
            <div>
              <span className="brand">
                <span className="mark" style={{fontFamily: "'Fraunces',serif", fontSize: "19px", fontWeight: "500"}}>The Liquid Ocean Compass</span>
              </span>
              <small>A STUDIO NAVAKA BOOK · BENGALURU · MELBOURNE · DUBAI</small>
            </div>
            <ul className="foot-links">
              <li><a href="#model">The Model</a></li>
              <li><a href="#frameworks">Frameworks</a></li>
              <li><a href="#assessment">Assessments</a></li>
              <li><a href="#hub">Resources</a></li>
              <li><a href="#newsletter">Newsletter</a></li>
              <li><a href="https://www.studionavaka.com" target="_blank">Studio NAVAKA</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
