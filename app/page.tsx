import Image from "next/image";
import Link from "next/link";

import { Icon, type IconName } from "@/components/icons";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { apps, featureColumns, getFeaturedGames, heroMetrics, partners, publisherReasons } from "@/lib/site-data";

const featureIcons: IconName[] = ["smartphone", "tv", "groups"];
const publisherIcons: IconName[] = ["bolt", "cloudUpload", "analytics"];
const featuredGames = getFeaturedGames();
const homeHeroMedia = {
  boardible: {
    image: "/assets/home/boardible-hero.png",
    alt: "Boardible promotional screenshot",
  },
  ineuj: {
    image: "https://boardible-app.s3.us-east-1.amazonaws.com/ineuj-app/prod/games/ineuj/en/card.png",
    alt: "This is Not a Game English cover",
  },
};

export default function Home() {
  const [boardibleApp, ineujApp, monsticApp] = apps;

  return (
    <main>
      <SiteHeader homeAnchors />

      <header id="top" className="hero-section-v2">
        <div className="hero-blob hero-blob-right" aria-hidden="true" />
        <div className="hero-blob hero-blob-left" aria-hidden="true" />

        <div className="content-wrap hero-grid-v2">
          <div className="hero-copy-v2">
            <h1>
              The Ultimate Digital <span>Board Game</span> Ecosystem.
            </h1>
            <p>
              Boardible brings 20 real board and card experiences to phones, shared screens, and standalone products across three live consumer apps.
            </p>
            <div className="hero-cta-row">
              <a className="btn btn-primary tactile-primary" href="#apps">
                Explore the Apps
              </a>
              <a className="btn btn-aqua tactile-aqua" href="#games">
                See the Catalog
              </a>
            </div>
            <p className="hero-proofline">100K+ downloads on Boardible • 20 live titles • Available in 110+ countries</p>
          </div>

          <div className="hero-visual-v2">
            <div className="floating-card floating-card-left">
              <Image src={monsticApp.heroPath} alt={monsticApp.heroAlt} fill sizes="(max-width: 1024px) 240px, 260px" />
              <span className="floating-card-label">{monsticApp.shortName}</span>
            </div>

            <div className="hero-device-card">
              <div className="hero-device-screen hero-device-screen-boardible hero-device-shot">
                <Image src={homeHeroMedia.boardible.image} alt={homeHeroMedia.boardible.alt} fill sizes="(max-width: 1024px) 280px, 288px" />
                <div className="hero-device-overlay">
                  <span>{boardibleApp.shortName}</span>
                  <strong>20 games in one app</strong>
                </div>
              </div>
            </div>

            <div className="floating-card floating-card-right">
              <Image src={homeHeroMedia.ineuj.image} alt={homeHeroMedia.ineuj.alt} fill sizes="(max-width: 1024px) 240px, 260px" />
              <span className="floating-card-label">{ineujApp.shortName}</span>
            </div>
          </div>
        </div>
      </header>

      <section className="impact-strip-v2">
        <div className="content-wrap impact-grid-v2">
          {heroMetrics.map((metric) => (
            <article key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-light">
        <div className="content-wrap section-stack">
          <div className="section-intro center-intro">
            <h2>Why Boardible?</h2>
            <p>Digitizing the tactile joy of board games without losing the social connection.</p>
          </div>

          <div className="feature-grid-v2">
            {featureColumns.map((feature, index) => (
              <article key={feature.title} className="feature-card-v2">
                <div className={`feature-icon feature-icon-${index === 0 ? "primary" : index === 1 ? "secondary" : "tertiary"}`}>
                  <Icon name={featureIcons[index]} className="feature-symbol" />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>

          <div className="publisher-banner-lite">
            <div>
              <h4>Are you a publisher?</h4>
              <p>
                Use Boardible&apos;s proprietary no-code engine to launch high-quality digital board games with mobile UX, backend, and multiplayer already in place.
              </p>
            </div>
            <a className="btn btn-primary tactile-aqua" href="#publishers">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section id="apps" className="section-stack-v2 section-white">
        <div className="content-wrap section-stack">
          <div className="section-intro center-intro wide-intro">
            <h2>The Ecosystem Stack</h2>
            <p>Three distinct products, one shared Boardible approach to tactile, mobile-first play.</p>
          </div>

          <div className="stack-grid-v2">
            {apps.map((app) => (
              <article key={app.slug} className={`stack-card stack-card-${app.accent}`}>
                <div className={`stack-card-visual stack-card-visual-${app.accent}`}>
                  <Image
                    src={app.heroPath}
                    alt={app.heroAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    style={{ objectPosition: app.heroObjectPosition }}
                  />
                  <span className={`stack-badge stack-badge-${app.accent}`}>{app.statLine}</span>
                </div>
                <div className="stack-card-body">
                  <h3>{app.name}</h3>
                  <p>{app.description}</p>
                  <div className="stack-meta">
                    <span>{app.bestFor}</span>
                    <span>{app.highlights[0]}</span>
                  </div>
                  <Link className={`btn stack-btn stack-btn-${app.accent}`} href={`/apps/${app.slug}`}>
                    Explore {app.shortName}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="games" className="section-light catalog-section-v2">
        <div className="content-wrap section-stack">
          <div className="catalog-header-v2">
            <div>
              <h2>A World of Games at Your Fingertips</h2>
              <p>Every title below already exists in the live Boardible ecosystem, spanning family classics, party energy, strategy, and conversation-led play.</p>
            </div>
            <Link className="catalog-link" href="/games">
              View Full Catalog →
            </Link>
          </div>

          <div className="catalog-grid-v2 catalog-grid-featured">
            {featuredGames.map((game) => (
              <Link key={game.slug} className="catalog-card-v2 catalog-card-featured catalog-card-link" href={`/${game.slug}`}>
                <Image src={game.imagePath} alt={game.title} fill sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw" />
                <div className="catalog-card-copy">
                  <span className="catalog-card-kicker">{game.publisher}</span>
                  <strong>{game.title}</strong>
                  <small>
                    {game.players} • {game.duration}
                  </small>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="publishers" className="publisher-section-v2">
        <div className="publisher-pattern" aria-hidden="true" />
        <div className="content-wrap publisher-grid-v2">
          <div className="publisher-copy-v2">
            <span className="pill-label">Publishers</span>
            <h2>Bring Your IP to Digital.</h2>
            <p>
              Boardible already ships the mobile UX, backend foundation, multiplayer, and content operations needed to help publishers turn tabletop ideas into polished digital products.
            </p>
            <ul className="publisher-points-v2">
              {publisherReasons.slice(0, 3).map((reason, index) => (
                <li key={reason}>
                  <Icon name={publisherIcons[index]} className="publisher-point-symbol" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
            <a className="btn btn-aqua tactile-aqua" href="mailto:luiz.gomide@boardible.com?subject=Boardible%20Publishing%20Inquiry">
              Contact Sales
            </a>
          </div>

          <div className="publisher-panel-v2">
            <div>
              <Icon name="devices" className="publisher-panel-icon" />
              <div className="publisher-panel-title">No-Code Engine. Real Releases.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="partners-section-v2">
        <div className="content-wrap section-stack">
          <h2 className="partners-title-v2">Partners, Publishers, and Boardible Brands</h2>
          <div className="partner-row-v2 partner-logo-row">
            {partners.map((partner) => (
              <div key={partner.name} className="partner-logo-card">
                {partner.logoPath ? <Image src={partner.logoPath} alt={partner.name} width={180} height={72} className="partner-logo-image" /> : <span>{partner.name}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}