"use client";

import "./leaders.css";

export default function ForLeaders() {
  return (
    <>
      <nav>
        <div className="wrap nav-inner">
          <a href="https://liquidocean.studionavaka.com/" className="brand">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SN%20Swami%20Logo%20TRN-6TTKR46ugNCrpKHkRbQDNq0wu6vfNV.png" alt="Studio NAVAKA" className="brand-logo" />
          </a>
          <ul className="nav-links" id="nl">
            <li><a href="https://liquidocean.studionavaka.com/#model">The Model</a></li>
            <li><a href="https://liquidocean.studionavaka.com/#journeys">Journeys</a></li>
            <li><a href="https://liquidocean.studionavaka.com/#frameworks">Frameworks</a></li>
            <li><a href="https://www.studionavaka.com" target="_blank">Studio NAVAKA</a></li>
          </ul>
          <a className="nav-cta" href="#connect">Start a Conversation</a>
          <button className="menu-toggle" onClick={() => { const e = document.getElementById("nl"); if (e) e.classList.toggle("open"); }}>MENU</button>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap">
          <span className="kicker">Liquid Ocean® for Leaders</span>
          <h1>Leadership is no longer about certainty. It is about readiness.</h1>
          <p className="sub">Develop leaders who can disrupt their own thinking — the ones who reinvent before they have to, and build organizations that keep finding better answers.</p>
          <div className="hero-ctas">
            <a className="btn-main" href="#connect">Start a Conversation</a>
            <a className="btn-quiet" href="#thinking">The Model That Disrupts Thinking →</a>
          </div>
          <div className="fromto">
            <span className="f">“How do I have all the answers?”</span>
            <span className="arr">→</span>
            <span className="t">“How do I build an organization that keeps finding better answers?”</span>
          </div>
        </div>
      </header>

      <section>
        <div className="wrap">
          <span className="eyebrow">Why This, Why Now</span>
          <div className="crisis-grid">
            <div>
              <h2 className="display">The comfort zone crisis.</h2>
              <div className="body-copy">
                <p>Your most senior leaders are experienced, capable, and stable — many have led for a decade or more. That stability is a genuine asset.</p>
                <p><strong>But it can quietly become a ceiling.</strong> For generations, leadership was measured by execution — efficiency, profit, market share, quarterly results. These still matter. They are no longer sufficient.</p>
              </div>
              <div className="pullbox">
                <p className="l1">The greatest risk facing mature organizations is not disruption.</p>
                <p className="l2">It is successful leaders becoming comfortable.</p>
              </div>
            </div>
            <ul className="traps">
              <li className="trap"><h4>The Success Trap</h4><p>What made them succeed for a decade is not what the next decade will reward.</p></li>
              <li className="trap"><h4>The Expertise Trap</h4><p>Deep mastery in one lane can quietly narrow ambition and the appetite for ambiguity.</p></li>
              <li className="trap"><h4>Corporate Dependency</h4><p>Long tenure inside one system can dull the instinct to create, not just execute.</p></li>
              <li className="trap"><h4>Identity Lock</h4><p>“I am my title” makes any bigger, less-defined challenge feel risky.</p></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="lt" id="thinking">
        <div className="wrap">
          <span className="eyebrow">The Model That Disrupts Thinking</span>
          <div className="intro">
            <h2 className="display">Liquid Thinking<span className="tm">™</span></h2>
            <p className="lede">Before leaders can change strategy, they must change perspective. Liquid Thinking is the operating system for that change — a discipline for breaking fixed assumptions and seeing possibilities others miss.</p>
            <p className="big-q">It does not begin with answers. It begins with better questions.</p>
          </div>
          <div className="pillars">
            <div className="pillar"><span className="pn">Pillar 1</span><h4>Challenge Assumptions</h4><p>Every business runs on assumptions — about markets, customers, technology, competition. They all have an expiry date. Great leaders question them before circumstances do.</p></div>
            <div className="pillar"><span className="pn">Pillar 2</span><h4>Reinterpret Reality</h4><p>Facts rarely change; interpretations do. A phone became a camera, a wallet, a bank, a map. The greatest innovations emerge when leaders reinterpret existing realities in new ways.</p></div>
            <div className="pillar"><span className="pn">Pillar 3</span><h4>Connect Possibilities</h4><p>Innovation rarely appears in isolation. It emerges from connecting ideas that seemed unrelated — looking across industries rather than within them.</p></div>
            <div className="pillar"><span className="pn">Pillar 4</span><h4>Reinvent Before You Have To</h4><p>Liquid Thinking is proactive, not reactive. It asks what should evolve before external pressure demands it. Organizations that practise this rarely experience disruption as a surprise — they create it.</p></div>
          </div>
          <div className="loop">
            <span className="loop-label">The Liquid Thinking Loop</span>
            <div className="loop-steps">
              <span className="s">Observe</span><span className="sep">→</span>
              <span className="s">Question</span><span className="sep">→</span>
              <span className="s">Reinterpret</span><span className="sep">→</span>
              <span className="s">Design</span><span className="sep">→</span>
              <span className="s">Learn</span>
            </div>
            <p className="again">Then begin again. Not a one-time exercise — a continuous discipline.</p>
          </div>
        </div>
      </section>

      <section className="def">
        <div className="wrap">
          <span className="eyebrow">Continuous Reinvention Leadership</span>
          <h2 className="display narrow" style={{marginLeft: "0"}}>The discipline of building an organization that keeps finding better answers.</h2>
          <p className="lede">It shifts leadership from directing work to enabling reinvention — and rests on five responsibilities that don’t change, even as everything else does.</p>
          <div className="resp">
            <div className="r"><span className="rn">Responsibility I</span><h4>Shape Perspective</h4><p>Every organization sees the world through its leaders. Before you change strategy, you change what people notice, question, and believe is possible. <span className="tag">Begins with Liquid Thinking™.</span></p></div>
            <div className="r"><span className="rn">Responsibility II</span><h4>Protect Purpose</h4><p>Products, models, and markets evolve. Purpose should endure — it provides stability while everything else changes, and reminds people why the organization exists.</p></div>
            <div className="r"><span className="rn">Responsibility III</span><h4>Create Psychological Safety</h4><p>People rarely resist change; they resist the fear of failure. Reinvention needs an environment where questioning is encouraged and thoughtful failure becomes learning.</p></div>
            <div className="r"><span className="rn">Responsibility IV</span><h4>Build Capability, Not Dependency</h4><p>Great leaders make the organization less dependent on themselves over time. The measure of leadership is not how much control you hold — it is how capable the organization becomes.</p></div>
            <div className="r" style={{borderRight: "none"}}><span className="rn">Responsibility V</span><h4>Leave It Better Than You Found It</h4><p>Every decision should strengthen the future. Every leader should ask one question: <span className="tag">is this organization becoming stronger because I am here?</span></p></div>
            <div className="r"></div>
          </div>
        </div>
      </section>

      <section className="persp">
        <div className="wrap">
          <span className="eyebrow">Shaping Perspective at Scale</span>
          <p className="line">The deepest reinventions don’t begin with a product. They begin with a change in how people see their own work.</p>
          <p className="body">The organizations that turn around are rarely the ones that rewrite strategy first. They are the ones that first move from a <em>“know-it-all”</em> culture to a <em>“learn-it-all”</em> one — rewarding curiosity over being right, and organizing around capability rather than silos. The product reinvention that gets the credit in hindsight is almost always downstream of a leadership decision to change perspective before anything else was written down. Perspective changes first. The results take years, not quarters.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <span className="eyebrow">The Seven Habits of a Liquid Ocean™ Leader</span>
          <h2 className="display narrow" style={{marginLeft: "0"}}>Leadership behaviours for continuous reinvention.</h2>
          <div className="habits">
            <div className="habit"><span className="hn">Habit 1</span><h4>Challenge Yesterday</h4><p>Never assume yesterday’s success guarantees tomorrow’s relevance.</p><span className="mean">Question assumptions continuously</span></div>
            <div className="habit"><span className="hn">Habit 2</span><h4>Seek Value, Not Products</h4><p>Always begin with the value people seek, not the products you create.</p><span className="mean">See beyond products</span></div>
            <div className="habit"><span className="hn">Habit 3</span><h4>See What Others Miss</h4><p>Train yourself to notice possibilities hidden in plain sight.</p><span className="mean">Liquid Thinking™</span></div>
            <div className="habit"><span className="hn">Habit 4</span><h4>Create Mutual Value</h4><p>Every interaction should make both the customer and the business stronger.</p><span className="mean">Value Exchange™</span></div>
            <div className="habit"><span className="hn">Habit 5</span><h4>Build Capability Daily</h4><p>Every decision should leave your organization wiser, stronger, or more capable than before.</p><span className="mean">Business Value</span></div>
            <div className="habit"><span className="hn">Habit 6</span><h4>Adapt Before You Must</h4><p>Reinvent while you are still successful.</p><span className="mean">Adaptive Organizations</span></div>
            <div className="habit wide"><span className="hn">Habit 7 · The Keystone</span><h4>Leave Tomorrow Better</h4><p>Build organizations that continue to improve long after your leadership ends. At every major decision, ask: will this strengthen capability, improve adaptability, encourage better thinking, and help future leaders inherit a better organization?</p><span className="mean">Leadership — leading beyond your own tenure</span></div>
          </div>
        </div>
      </section>

      <section className="practices-sec">
        <div className="wrap">
          <span className="eyebrow">The Practices</span>
          <h2 className="display">The 6 Practices of Liquid Ocean<span className="tm">™</span>.</h2>
          <p className="lede">The habits a leader must master. Unlike the seven leadership behaviours, these are universal — they hold just as true for a product and an organization as they do for a person.</p>
          <ul className="practices">
            <li className="practice"><span className="num">1</span><span className="txt">Reinvent before you have to.</span></li>
            <li className="practice"><span className="num">2</span><span className="txt">Describe your business without mentioning your product.</span></li>
            <li className="practice"><span className="num">3</span><span className="txt">Question one assumption every week.</span></li>
            <li className="practice"><span className="num">4</span><span className="txt">Evaluate every product as a Value Exchange.</span></li>
            <li className="practice"><span className="num">5</span><span className="txt">Measure what becomes stronger.</span></li>
            <li className="practice"><span className="num">6</span><span className="txt">Lead for the next generation, not the next quarter.</span></li>
          </ul>
          <p className="practice-note">Master these as a leader, and you carry the operating system of Liquid Ocean into every product you shape and every organization you build.</p>
        </div>
      </section>

      <section id="program" className="program-intro">
        <div className="wrap">
          <span className="eyebrow">The Program</span>
          <h2 className="display">How the thinking gets installed — and scaled.</h2>
          <p className="lede">A model only matters if it changes behaviour. Liquid Ocean for Leaders installs Liquid Thinking as a discipline, then scales it across your senior bench. A staircase, not a one-off event — each phase earns the right to the next.</p>
          <div className="staircase">
            <div className="step step-1"><span className="ph">Phase 1 · 1–2 Days</span><h4>Discovery Workshop</h4><span className="dur">In-house</span><p>A working session that installs Liquid Thinking and surfaces the gap between yesterday’s success and tomorrow’s relevance — producing a personal blueprint.</p></div>
            <div className="step step-2"><span className="ph">Phase 2 · 30 Days</span><h4>The Sprint</h4><span className="dur">From insight to action</span><p>Insight becomes behaviour: four weekly moves, two 1:1 touchpoints, and a sponsor briefing that reads the whole cohort.</p></div>
            <div className="step step-3"><span className="ph">Phase 3 · 6 Months</span><h4>The Leadership Circle</h4><span className="dur">Optional · evidence-led</span><p>A sustained rhythm that keeps reinvention from fading once the workshop energy wears off — proposed only if the evidence supports it.</p></div>
          </div>
          <p className="staircase-note">Phases 1 and 2 run as one package. Phase 3 is proposed separately, after the evidence is in.</p>

          <div className="phase">
            <span className="plabel">Phase 1 · The Discovery Workshop</span>
            <h3>Five modules. One consolidated artifact.</h3>
            <p className="plede">Every module feeds the participant’s personal Liquid Ocean Leader Workbook — built progressively across the day, not five separate handouts.</p>
            <div className="modules">
              <div className="module"><span className="mnum">Module 1</span><h5>The Comfort Zone Crisis</h5><p>Map your Leadership Life Curve — highest growth, highest learning, current state — and surface the gap.</p></div>
              <div className="module"><span className="mnum">Module 2</span><h5>The Liquid Ocean Framework</h5><p>Map Current Ocean → Emerging Ocean → Future Ocean: which capabilities matter a decade out.</p></div>
              <div className="module"><span className="mnum">Module 3</span><h5>My Value Engine</h5><p>Build your personal value architecture: value proposition, key assets, key activities, output logic.</p></div>
              <div className="module"><span className="mnum">Module 4</span><h5>CEO of Me Inc.</h5><p>Run “Me Inc.”: market value, innovation pipeline, what you’re known for now versus in five years.</p></div>
              <div className="module"><span className="mnum">Module 5</span><h5>Design Your Next Mountain</h5><p>Leave with a Personal Growth Blueprint and one ranked, public 30-day commitment.</p></div>
            </div>
            <div className="workbook">
              <div>
                <h4>The Liquid Ocean Leader Workbook</h4>
                <p>One consolidated take-home artifact per participant. Every module becomes a section inside it, closing with a personal, ranked commitment.</p>
              </div>
              <ul className="wb-sections">
                <li><b>1</b> &nbsp;Leadership Life Curve &amp; Gap Analysis</li>
                <li><b>2</b> &nbsp;Three-Horizon Ocean Map</li>
                <li><b>3</b> &nbsp;My Value Engine Map</li>
                <li><b>4</b> &nbsp;Relevance Scorecard</li>
                <li><b>5</b> &nbsp;Next Mountain Blueprint &amp; 30-Day Commitment</li>
              </ul>
            </div>
          </div>

          <div className="phase">
            <span className="plabel">Phase 2 · The 30-Day Sprint</span>
            <h3>From insight to action.</h3>
            <p className="plede">Four weekly moves that turn the workshop’s commitment into behaviour, supported by two individual touchpoints — closing with a sponsor briefing.</p>
            <div className="weeks">
              <div className="week"><span className="wk">Week 1</span><h5>Explore</h5><p>Learn something outside your expertise — AI, sustainability, systems thinking.</p></div>
              <div className="week"><span className="wk">Week 2</span><h5>Challenge</h5><p>Question one assumption — a process, a belief, an inefficiency.</p></div>
              <div className="week"><span className="wk">Week 3</span><h5>Create</h5><p>Design a new initiative, idea, or capability.</p></div>
              <div className="week"><span className="wk">Week 4</span><h5>Lead</h5><p>Influence others — build a coalition, present the idea.</p></div>
            </div>
            <div className="workbook" style={{marginTop: "32px"}}>
              <div>
                <h4>The Sponsor Briefing</h4>
                <p>A structured readout at the close of the Sprint — anonymized and aggregated, never individual. Team-level patterns, who is ready for stretch assignments now, and where the organization holds hidden capability versus hidden risk.</p>
              </div>
              <ul className="wb-sections">
                <li><b>·</b> &nbsp;Stretch-ready now</li>
                <li><b>·</b> &nbsp;Skill-strong, visibility-avoidant</li>
                <li><b>·</b> &nbsp;Needs structural support</li>
                <li style={{borderBottom: "none", color: "var(--green)"}}><b>→</b> &nbsp;The evidence-based bridge into Phase 3</li>
              </ul>
            </div>
          </div>

          <div className="phase">
            <span className="plabel">Phase 3 · The Leadership Circle · Optional</span>
            <h3>A sustained rhythm, proposed only on evidence.</h3>
            <p className="plede">Six months that keep reinvention from fading — monthly group coaching, applied leadership challenges, reflection journals, and peer accountability pods.</p>
            <div className="months">
              <div className="month"><span className="mo">Month 1</span><h5>Relevance</h5></div>
              <div className="month"><span className="mo">Month 2</span><h5>Strategic Thinking</h5></div>
              <div className="month"><span className="mo">Month 3</span><h5>Innovation</h5></div>
              <div className="month"><span className="mo">Month 4</span><h5>Influence</h5></div>
              <div className="month"><span className="mo">Month 5</span><h5>AI &amp; Future Readiness</h5></div>
              <div className="month"><span className="mo">Month 6</span><h5>Legacy</h5></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <span className="eyebrow">Measurement</span>
          <h2 className="display narrow" style={{marginLeft: "0"}}>What gets stronger, measured before and after.</h2>
          <div className="measure-grid">
            <div className="mcard lead">
              <h4>Leadership Vitality Index</h4>
              <ul><li>Growth mindset</li><li>Innovation mindset</li><li>Risk appetite</li><li>Strategic thinking</li><li>Cross-functional collaboration</li></ul>
              <span className="when">Measured before and after</span>
            </div>
            <div className="mcard">
              <h4>Innovation Metrics</h4>
              <ul><li>New initiatives proposed</li><li>Experiments launched</li><li>Ideas implemented</li></ul>
              <span className="when">Tracked through the Sprint</span>
            </div>
            <div className="mcard">
              <h4>Talent Metrics</h4>
              <ul><li>Internal mobility</li><li>Leadership readiness</li><li>Succession depth</li></ul>
              <span className="when">Visible across 6–12 months</span>
            </div>
          </div>
        </div>
      </section>

      <section className="ai">
        <div className="wrap">
          <span className="eyebrow">Leadership in the Age of AI</span>
          <p className="q">As AI becomes more capable, leadership becomes more human.</p>
          <p className="a">AI will automate decisions, generate insights, and accelerate execution. But leadership is not fundamentally about making decisions — it is about shaping people, culture, purpose, and possibility. Empathy, judgment, ethics, trust, curiosity, and purpose become the advantages technology cannot automate. The leaders of the future won’t compete with AI. They’ll build organizations where people and AI continuously strengthen one another.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <span className="eyebrow">The Path Forward</span>
          <h2 className="display narrow" style={{marginLeft: "0"}}>Evidence before commitment, at every step.</h2>
          <div className="path">
            <div className="pstep"><span className="pn">01</span><h4>Confirm Scope</h4><p>Align on workshop length, cohort size, and dates.</p></div>
            <div className="pstep"><span className="pn">02</span><h4>Run Phase 1 + 2</h4><p>Deliver the Discovery Workshop and the 30-Day Sprint, including the Sponsor Briefing.</p></div>
            <div className="pstep"><span className="pn">03</span><h4>Review Together</h4><p>Walk through the briefing findings — and decide whether Phase 3 makes sense.</p></div>
            <div className="pstep"><span className="pn">04</span><h4>Decide on Phase 3</h4><p>Engage the 6-month Leadership Circle only if the evidence supports it.</p></div>
          </div>
        </div>
      </section>

      <section className="finale" id="connect">
        <div className="wrap">
          <h2>Let’s help your leaders find their next ocean.</h2>
          <p>Leadership is no longer about certainty. It is about readiness — and readiness can be taught.</p>
          <a className="btn-main" href="mailto:hello@studionavaka.com?subject=Liquid%20Ocean%20for%20Leaders">Start a Conversation</a>
        </div>
      </section>

      <footer>
        <div className="wrap foot">
          <div>
            <img src="/images/navaka-logo.png" alt="Studio NAVAKA" style={{height: "40px"}} />
            <small>LIQUID OCEAN® FOR LEADERS · BENGALURU · MELBOURNE · DUBAI</small>
          </div>
          <ul className="foot-links">
            <li><a href="https://liquidocean.studionavaka.com/">The Compass</a></li>
            <li><a href="https://liquidocean.studionavaka.com/#model">The Model</a></li>
            <li><a href="https://www.studionavaka.com" target="_blank">Studio NAVAKA</a></li>
            <li><a href="#connect">Connect</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
