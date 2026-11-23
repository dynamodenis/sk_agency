import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "#/components/ContactForm";
import { Footer } from "#/components/Footer";
import { Header } from "#/components/Header";
import { img, site } from "#/lib/site";

export const Route = createFileRoute("/")({ component: Home });

const trustItems = [
  { icon: "✧", title: "Personal attention", text: "Advice shaped around you" },
  { icon: "◇", title: "Clear guidance", text: "Understand your options" },
  { icon: "♡", title: "People first", text: "Relationships built on trust" },
  { icon: "✦", title: "Ongoing support", text: "Here beyond the first call" },
];

const services = [
  {
    icon: "⌁",
    title: "Motor Insurance",
    text: "Cover for your car on Kenyan roads, from daily commutes to upcountry trips.",
  },
  {
    icon: "✚",
    title: "Medical Insurance",
    text: "Medical cover designed to help keep quality healthcare within reach for you and your family.",
  },
  {
    icon: "♡",
    title: "Life Insurance",
    text: "Protect the people who depend on you and provide a little more certainty for their tomorrow.",
  },
  {
    icon: "⌂",
    title: "Property Protection",
    text: "Protection for your home, belongings and the things you have worked hard to build.",
  },
  {
    icon: "✎",
    title: "Education Savings",
    text: "Plan ahead for school fees and keep your children's learning goals on track.",
  },
  {
    icon: "▤",
    title: "Corporate Solutions",
    text: "Group life, employee medical, staff benefits and business risk protection.",
  },
  {
    icon: "◷",
    title: "Financial Planning",
    text: "Budgeting support, financial needs assessments, savings goals and protection reviews.",
  },
  {
    icon: "✧",
    title: "Financial Education",
    text: "Practical financial literacy sessions for young professionals, families, chamas and teams.",
  },
];

const values = [
  { title: "Integrity", text: "Honest advice and responsible guidance." },
  { title: "Trust", text: "Relationships that grow over time." },
  { title: "Clarity", text: "Clear options, without the jargon." },
  { title: "Care", text: "Your goals and circumstances come first." },
];

const steps = [
  {
    title: "Listen",
    text: "We begin with your needs, priorities, responsibilities and goals.",
  },
  {
    title: "Understand",
    text: "We look at your circumstances, existing protection and the risks you want to prepare for.",
  },
  {
    title: "Explore",
    text: "I explain suitable options, costs and important details in clear, straightforward language.",
  },
  {
    title: "Support",
    text: "We stay connected for questions, reviews and support as life changes.",
  },
];

const articles = [
  {
    topic: "Financial wellbeing",
    title: "Building a savings habit that lasts",
    text: "Simple ways to set realistic goals, create consistency and make your money work towards what matters.",
  },
  {
    topic: "Family protection",
    title: "Understanding the value of life cover",
    text: "Explore how life insurance can help provide financial support for the people who count on you.",
  },
  {
    topic: "Planning ahead",
    title: "Preparing for education costs",
    text: "Why starting early and choosing a clear savings target can make education planning more manageable.",
  },
];

function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Protect. Plan. Prosper.</div>
              <h1>Confidence for every chapter of your life.</h1>
              <p>
                Thoughtful insurance guidance and practical financial solutions,
                shaped around you. I help individuals, families and businesses
                make confident decisions about protecting what matters and
                planning what comes next.
              </p>
              <div className="hero-actions">
                <a className="btn" href="#quote">
                  Let's talk about your goals
                </a>
                <a className="btn btn-outline" href="#services">
                  Explore my services
                </a>
              </div>
              <div className="hero-note">
                <span className="gold-line" />
                <span>
                  Personal guidance. Clear choices. A future you can feel good
                  about.
                </span>
              </div>
            </div>
            <div className="hero-photo">
              <img
                src={img("shantel-1.jpg")}
                alt="S.K. Wairimu, insurance and financial solutions adviser"
                fetchPriority="high"
              />
              <div className="photo-caption">
                <strong>S.K. Wairimu</strong>
                <span>Your partner in thoughtful planning</span>
              </div>
            </div>
          </div>
        </section>

        <section className="truststrip">
          <div className="container trust-grid">
            {trustItems.map((item) => (
              <div className="trust-item" key={item.title}>
                <span className="trust-icon">{item.icon}</span>
                <div>
                  <strong>{item.title}</strong>
                  <small>{item.text}</small>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section belief">
          <div className="container belief-grid">
            <div className="belief-photo">
              <img
                src={img("shantel-2.jpg")}
                alt="S.K. Wairimu in a professional setting"
                loading="lazy"
              />
            </div>
            <div className="belief-copy">
              <div className="eyebrow">A more personal approach</div>
              <h2>
                Because your future deserves more than a one-size-fits-all plan.
              </h2>
              <p>
                Money and protection are personal. Your responsibilities,
                ambitions and season of life are unique, and the guidance you
                receive should reflect that.
              </p>
              <div className="belief-quote">
                “My role is to listen first, make the complex feel simple, and
                help you take your next step with confidence.”
              </div>
              <div className="signature">S.K. Wairimu</div>
              <p>
                Whether you are protecting your family, preparing for education
                costs, growing your savings or safeguarding a business, we can
                work through the options together.
              </p>
              <a className="btn btn-outline" href="#about">
                Get to know me
              </a>
            </div>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">What I can help with</div>
              <h2>Protection and planning, made practical.</h2>
              <p>
                Good financial decisions begin with the right questions. Explore
                the areas where I can help you find cover and solutions that fit
                your needs.
              </p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <div className="service-card" key={service.title}>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="container about-grid">
            <div>
              <div className="eyebrow">A little about me</div>
              <h2>Real conversations. Thoughtful solutions.</h2>
              <p>
                I am S.K. Wairimu, and I believe financial confidence grows when
                people feel heard, respected and well-informed. I bring a
                personal, approachable touch to insurance and financial
                guidance, taking time to understand what matters to you before
                exploring possible solutions.
              </p>
              <p>
                My promise is to make every conversation useful: explain the
                choices in plain language, be transparent about the details, and
                support you as your needs change.
              </p>
              <div className="values">
                {values.map((value) => (
                  <div className="value" key={value.title}>
                    <strong>{value.title}</strong>
                    <span>{value.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-side">
              <div className="about-photo">
                <img
                  src={img("shantel-3.jpg")}
                  alt="S.K. Wairimu in Nairobi"
                  loading="lazy"
                />
              </div>
              <div className="about-card">
                <div className="eyebrow">My commitment to you</div>
                <h3>Building confidence. Securing futures.</h3>
                <p>
                  I want you to leave every conversation with a clearer
                  understanding of your options and a practical next step.
                </p>
                <p>
                  <strong>My vision</strong>
                  <br />
                  To be a trusted partner in helping people and businesses
                  secure their financial futures.
                </p>
                <p>
                  <strong>My mission</strong>
                  <br />
                  To understand your needs and connect you with appropriate,
                  practical protection and planning solutions.
                </p>
                <a className="btn" href="#quote">
                  Start a conversation
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section process" id="approach">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">How we work together</div>
              <h2>A clear journey, at your pace.</h2>
              <p>
                There is no pressure to have all the answers before we speak. We
                take things one step at a time.
              </p>
            </div>
            <div className="steps">
              {steps.map((step, index) => (
                <div className="step" key={step.title}>
                  <div className="step-num">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section quote" id="quote">
          <div className="container quote-grid">
            <div className="quote-intro">
              <div className="eyebrow">Your next step</div>
              <h2>Let's find a solution that feels right for you.</h2>
              <p>
                Tell me a little about what you are looking for and I will get
                back to you personally.
              </p>
              <p>
                <strong>Prefer a call?</strong>
                <br />
                <a href={site.phoneHref}>{site.phoneDisplay}</a>
              </p>
              <p>
                <strong>Email</strong>
                <br />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
              <div className="quote-photo">
                <img
                  src={img("shantel-4.jpg")}
                  alt="S.K. Wairimu smiling"
                  loading="lazy"
                />
              </div>
            </div>
            <ContactForm />
          </div>
        </section>

        <section className="section learning" id="learn">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Learn with confidence</div>
              <h2>Small steps. Stronger financial foundations.</h2>
              <p>
                Helpful conversations and practical learning can make a real
                difference to the decisions you make today.
              </p>
            </div>
            <div className="learn-grid">
              {articles.map((article) => (
                <article className="learn-card" key={article.title}>
                  <div className="eyebrow">{article.topic}</div>
                  <h3>{article.title}</h3>
                  <p>{article.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container cta-inner">
            <div>
              <div className="eyebrow">
                Your future deserves a thoughtful plan
              </div>
              <h2>Let's talk about what matters to you.</h2>
              <p>
                No pressure. Just a helpful conversation and a clear place to
                begin.
              </p>
            </div>
            <a className="btn" href="#quote">
              Request a call back
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <a
        className="whatsapp"
        href={site.whatsapp}
        target="_blank"
        rel="noopener"
      >
        WhatsApp ↗
      </a>
    </>
  );
}
