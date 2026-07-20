"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.body.classList.add("js");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <nav>
        <div className="wrap nav-inner">
          <a href="/" className="brand">
            <span className="mark">Liquid Ocean<sup>®</sup></span>
            <span className="by">by Studio NAVAKA</span>
          </a>
          <ul className="nav-links" id="nl">
            <li><a className="active" href="/">Home</a></li>
            <li><a href="https://www.studionavaka.com/apply-liquid-ocean">Apply Liquid Ocean</a></li>
            <li><a href="https://www.studionavaka.com/learn">Learn</a></li>
            <li><a href="https://www.studionavaka.com/results">Results</a></li>
            <li><a href="https://www.studionavaka.com/about">About Hari</a></li>
          </ul>
          <a className="nav-cta" href="https://cal.com/studionavaka">Work with Me</a>
          <button className="menu-toggle" onClick={() => { const el = document.getElementById("nl"); if (el) el.classList.toggle("open"); }}>MENU</button>
        </div>
      </nav>

      {/* HERO — monumental, centered, words only */}
      <header className="hero">
        <div className="wrap">
          <h1 className="rv">Every competitive advantage<br/>eventually disappears.</h1>
          <div className="tension rv">
            Markets don’t stand still.<br/>
            Customers don’t stand still.<br/>
            Technology doesn’t stand still.<br/>
            Business models don’t stand still.<br/>
            <span className="neither">Neither should we.</span>
            <span className="ask">Why should strategy?</span>
          </div>
        </div>
      </header>

      {/* THE REVEAL */}
      <section className="naming hairline">
        <div className="wrap">
          <p className="that rv">There is a name for this philosophy.</p>
          <div className="name rv">Liquid Ocean<sup>®</sup></div>
          <div className="sub rv">The Strategy of Continuous Reinvention</div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="hairline">
        <div className="wrap problem-grid">
          <div>
            <span className="eyebrow rv">The Problem</span>
            <h2 className="display rv">The half-life of competitive advantage is shrinking.</h2>
            <div className="body-copy rv">
              <p>Strategy was built for a world where competitive advantage lasted decades.</p>
              <p><strong>That world no longer exists.</strong></p>
            </div>
            <p className="question rv">What if reinvention became a capability instead of a response?</p>
          </div>
          <ul className="decay">
            <li className="rv">Markets <span>evolve</span></li>
            <li className="rv">Customers <span>evolve</span></li>
            <li className="rv">Technology <span>evolves</span></li>
            <li className="rv">Business models <span>evolve</span></li>
            <li className="rv">Advantages <span>expire</span></li>
          </ul>
        </div>
      </section>

      {/* EVOLUTION OF STRATEGY */}
      <section className="hairline" id="philosophy">
        <div className="wrap">
          <span className="eyebrow rv">The Evolution of Strategy</span>
          <h2 className="display rv measure">Liquid Ocean is not another methodology. It is the next chapter.</h2>
          <div className="timeline">
            <div className="era rv">
              <span className="when">First came the Red Ocean</span>
              <h3>Compete</h3>
              <p>Strategy as war — win existing markets.</p>
              <p className="asks">“How do we beat the competition?”</p>
            </div>
            <div className="era rv">
              <span className="when">Then came the Blue Ocean</span>
              <h3>Create</h3>
              <p>Strategy as escape — make competition irrelevant.</p>
              <p className="asks">“How do we create a market no one else sees?”</p>
            </div>
            <div className="era liquid rv">
              <span className="when">Now comes the Liquid Ocean</span>
              <h3>Reinvent</h3>
              <p>Strategy as motion — become what comes next.</p>
              <p className="asks">“How do we continuously reinvent ourselves?”</p>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE MOMENT */}
      <div className="moment hairline">
        <p className="line-one rv">Every Blue Ocean eventually becomes<br/>someone else’s Red Ocean.</p>
        <p className="line-two rv">Liquid Ocean begins at that moment.</p>
      </div>

      {/* PRINCIPLES */}
      <section className="hairline">
        <div className="wrap">
          <span className="eyebrow rv">The Philosophy</span>
          <h2 className="display rv measure">Four disciplines of continuous reinvention.</h2>
          <div className="principles">
            <div className="principle rv">
              <span className="ord">I — Sense</span>
              <h4>Read the water</h4>
              <p>Detect expiring advantage before it appears in the numbers.</p>
            </div>
            <div className="principle rv">
              <span className="ord">II — Decide</span>
              <h4>Choose what to become</h4>
              <p>Choose your next self before necessity chooses it for you.</p>
            </div>
            <div className="principle rv">
              <span className="ord">III — Move</span>
              <h4>Shift while you still can</h4>
              <p>Redeploy capital, talent, and identity while your current advantage still funds your future.</p>
            </div>
            <div className="principle rv">
              <span className="ord">IV — Repeat</span>
              <h4>Make it rhythm, not rescue</h4>
              <p>The organizations that endure reinvent on purpose, on schedule.</p>
            </div>
          </div>
          <a className="phil-link rv" href="#manifesto">The Manifesto explains →</a>
        </div>
      </section>

      {/* THE MODEL */}
      <section className="model">
        <div className="wrap">
          <span className="eyebrow rv">The Model</span>
          <h2 className="display rv">The Tide of Advantage™</h2>
          <div className="frame">
            <svg className="tide" viewBox="0 0 860 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The Tide of Advantage: successive waves of competitive advantage rise and fade, while the reinventing organization moves continuously across them">
              <line x1="40" y1="270" x2="820" y2="270" stroke="rgba(31,35,40,0.18)" stroke-width="1"/>
              <path d="M60,270 C120,270 140,110 210,110 C280,110 300,270 360,270" fill="none" stroke="#B8B4AA" stroke-width="1.4"/>
              <path d="M240,270 C300,270 320,90 390,90 C460,90 480,270 540,270" fill="none" stroke="#9C9890" stroke-width="1.4"/>
              <path d="M420,270 C480,270 500,75 570,75 C640,75 660,270 720,270" fill="none" stroke="#7E7A72" stroke-width="1.4"/>
              <path d="M600,270 C660,270 680,120 740,95" fill="none" stroke="#7E7A72" stroke-width="1.4" opacity="0.6" stroke-dasharray="4 6"/>
              <path d="M60,250 C110,220 150,128 210,118 C260,112 280,120 330,105 C370,95 390,98 440,88 C490,80 520,84 570,72 C620,62 660,80 740,60"
                    fill="none" stroke="#163D35" stroke-width="2.2"/>
              <circle cx="740" cy="60" r="4.5" fill="#163D35"/>
              <text x="195" y="95" font-family="IBM Plex Mono" font-size="10" letter-spacing="2" fill="#6E747B">ADVANTAGE I</text>
              <text x="372" y="75" font-family="IBM Plex Mono" font-size="10" letter-spacing="2" fill="#6E747B">ADVANTAGE II</text>
              <text x="548" y="60" font-family="IBM Plex Mono" font-size="10" letter-spacing="2" fill="#6E747B">ADVANTAGE III</text>
              <text x="700" y="40" font-family="IBM Plex Mono" font-size="10" letter-spacing="2" fill="#163D35">THE ORGANIZATION</text>
              <text x="40" y="300" font-family="IBM Plex Mono" font-size="10" letter-spacing="2" fill="#8A6A3B">TIME →</text>
              <text x="660" y="300" font-family="IBM Plex Mono" font-size="10" letter-spacing="2" fill="#8A6A3B">EVERY WAVE FADES</text>
            </svg>
            <p className="caption">Fig. 01 — The Tide of Advantage™</p>
          </div>
          <p className="reading rv">Every advantage rises and fades. The reinventing organization leaves each wave before its crest — and is already rising on the next.</p>
        </div>
      </section>

      {/* DIFFERENT QUESTIONS */}
      <section className="hairline">
        <div className="wrap">
          <span className="eyebrow rv">A Different Conversation</span>
          <h2 className="display rv measure">Organizations using Liquid Ocean begin asking different questions.</h2>
          <div className="questions">
            <div className="qpair rv">
              <div className="q-old">How do we beat competitors?</div>
              <div className="q-arrow">→</div>
              <div className="q-new">How do we become the next version of ourselves?</div>
            </div>
            <div className="qpair rv">
              <div className="q-old">How do we defend market share?</div>
              <div className="q-arrow">→</div>
              <div className="q-new">How do we reinvent before markets force us to?</div>
            </div>
            <div className="qpair rv">
              <div className="q-old">How do we optimize today?</div>
              <div className="q-arrow">→</div>
              <div className="q-new">What should we become tomorrow?</div>
            </div>
            <div className="qpair rv">
              <div className="q-old">How do we protect today’s business?</div>
              <div className="q-arrow">→</div>
              <div className="q-new">How do we build tomorrow’s while today’s still succeeds?</div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="hairline">
        <div className="wrap">
          <span className="eyebrow rv">Applications</span>
          <h2 className="display rv measure">One philosophy. Applied wherever reinvention is due.</h2>
          <div className="apps">
            <div className="app rv">
              <h4>Organizations</h4>
              <p>Business reinvention for companies whose advantage is quietly expiring.</p>
            </div>
            <div className="app rv">
              <h4>Products</h4>
              <p>Strategy, monetization, and growth for products approaching the end of their curve.</p>
            </div>
            <div className="app rv">
              <h4>Leadership</h4>
              <p>Decision-making for leaders navigating what to become next.</p>
            </div>
            <div className="app rv">
              <h4>Industries</h4>
              <p>Reinvention patterns across sectors facing structural change.</p>
            </div>
          </div>
          <p className="app-note rv">AI is an application of Liquid Ocean — not its foundation.</p>
        </div>
      </section>

      {/* THINKING */}
      <section className="hairline" id="thinking">
        <div className="wrap">
          <span className="eyebrow rv">Thinking</span>
          <h2 className="display rv measure">Everything we publish answers one question: what does this teach us about reinvention?</h2>
          <div className="think-list">
            <div className="think rv">
              <h4><a href="#">Nokia didn’t fail at phones. It failed at reinvention.</a></h4>
              <span className="thread">Nokia → Reinvention</span>
            </div>
            <div className="think rv">
              <h4><a href="#">A 120-year-old watchmaker keeps becoming new. Quietly.</a></h4>
              <span className="thread">Rolex → Reinvention</span>
            </div>
            <div className="think rv">
              <h4><a href="#">Netflix has died three times. On purpose.</a></h4>
              <span className="thread">Netflix → Reinvention</span>
            </div>
            <div className="think rv">
              <h4><a href="#">AI is not a strategy. It is a tide.</a></h4>
              <span className="thread">AI → Reinvention</span>
            </div>
          </div>
          <a className="think-all rv" href="#">All Thinking →</a>
        </div>
      </section>

      {/* THE INSTITUTE */}
      <section className="institute" id="institute">
        <div className="wrap">
          <span className="eyebrow rv">The Institute</span>
          <h2 className="display rv measure">Advancing the philosophy of continuous reinvention.</h2>
          <div className="research">
            <div className="r-item rv">
              <h4>The Liquid Ocean Index</h4>
              <p>An annual study of how organizations across markets build — or fail to build — the capability of reinvention.</p>
              <span className="status live">2026 Edition — In Progress</span>
            </div>
            <div className="r-item rv">
              <h4>The Book</h4>
              <p>The definitive account of Liquid Ocean: its principles, models, and the organizations that live by them.</p>
              <span className="status soon">In Writing</span>
            </div>
            <div className="r-item rv">
              <h4>Case Study Library</h4>
              <p>Documented reinventions — successes and failures — studied through the Liquid Ocean lens.</p>
              <span className="status soon">Coming Soon</span>
            </div>
            <div className="r-item rv">
              <h4>Research Papers</h4>
              <p>Working papers advancing the theory of continuous reinvention.</p>
              <span className="status soon">Coming Soon</span>
            </div>
            <div className="r-item rv">
              <h4>Annual Report on Reinvention</h4>
              <p>The state of reinvention across industries, published yearly.</p>
              <span className="status soon">Coming Soon</span>
            </div>
            <div className="r-item rv">
              <h4>The Future of Reinvention</h4>
              <p>Beyond AI: the next catalysts of change, and what they will demand of organizations.</p>
              <span className="status soon">Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO — the single green moment */}
      <section className="manifesto" id="manifesto">
        <div className="wrap">
          <span className="eyebrow rv">The Manifesto</span>
          <p className="m-line rv">We believe every competitive advantage eventually expires.</p>
          <p className="m-line rv">We believe reinvention is not an event.<br/><em>It is a capability.</em></p>
          <a className="m-link rv" href="#">Read the Manifesto</a>
        </div>
      </section>

      <footer>
        <div className="wrap foot">
          <div>
            <span className="brand">
              <span className="mark">Liquid Ocean<sup>®</sup></span>
              <span className="by">by Studio NAVAKA</span>
            </span>
            <small>BENGALURU · MELBOURNE · DUBAI</small>
          </div>
          <ul className="foot-links">
            <li><a href="https://www.studionavaka.com/apply-liquid-ocean">Apply Liquid Ocean</a></li>
            <li><a href="https://www.studionavaka.com/learn">Learn</a></li>
            <li><a href="https://www.studionavaka.com/results">Results</a></li>
            <li><a href="https://www.studionavaka.com/about">About Hari</a></li>
            <li><a href="https://cal.com/studionavaka">Work with Me</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
