import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { games, getAppBySlug, getGameBySlug, getGamesByApp, getPartnerByName } from "@/lib/site-data";

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export default async function GameDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  const app = getAppBySlug(game.appSlug);

  if (!app) {
    notFound();
  }

  const relatedGames = getGamesByApp(game.appSlug).filter((item) => item.slug !== game.slug).slice(0, 3);
  const partner = getPartnerByName(game.publisher);

  return (
    <>
      <SiteHeader current="games" />
      <main className="inner-page-shell">
        <section className={`content-wrap detail-hero detail-hero-${game.accent}`}>
          <div className="detail-hero-body">
            <Link className="back-link" href="/games">
              ← Back to catalog
            </Link>
            <span className="detail-kicker">{game.category}</span>
            <h1>{game.title}</h1>
            <p>{game.overview}</p>
            <div className="detail-meta">
              <span>{game.publisher}</span>
              <span>{game.players}</span>
              <span>{game.duration}</span>
            </div>
            <div className="detail-actions">
              <Link className="btn btn-primary tactile-primary" href={`/apps/${app.slug}`}>
                In {app.shortName}
              </Link>
              <a className="btn btn-aqua tactile-aqua" href={app.websiteUrl} target="_blank" rel="noreferrer">
                Official page
              </a>
            </div>
          </div>
          <div className="detail-hero-media">
            <Image src={game.imagePath} alt={game.title} fill sizes="(max-width: 1024px) 100vw, 40vw" />
          </div>
        </section>

        <section className="content-wrap page-section">
          <div className="info-grid">
            <article className="info-card">
              <h2>Overview</h2>
              <p>{game.summary}</p>
              <p>{app.name} positions this title inside a broader ecosystem of mobile-first sessions and shared-screen play when relevant.</p>
            </article>
            <article className="info-card">
              <h2>Quick facts</h2>
              <ul>
                <li>App: {app.name}</li>
                <li>Publisher: {game.publisher}</li>
                <li>Players: {game.players}</li>
                <li>Session length: {game.duration}</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="content-wrap page-section">
          <div className="game-summary-card">
            <div>
              <span className="detail-kicker">Available on</span>
              <h2>{app.name}</h2>
              <p>{app.description}</p>
            </div>
            <div className="detail-actions detail-actions-inline">
              <a className="btn btn-primary tactile-primary" href={app.iosUrl} target="_blank" rel="noreferrer">
                App Store
              </a>
              <a className="btn btn-aqua tactile-aqua" href={app.androidUrl} target="_blank" rel="noreferrer">
                Google Play
              </a>
            </div>
          </div>
        </section>

        {partner?.logoPath ? (
          <section className="content-wrap page-section page-section-tight">
            <div className="publisher-logo-badge">
              <span className="detail-kicker">Publisher</span>
              <Image src={partner.logoPath} alt={partner.name} width={200} height={80} className="partner-logo-image" />
            </div>
          </section>
        ) : null}

        {relatedGames.length > 0 ? (
          <section className="content-wrap page-section page-section-tight">
            <div className="section-heading-row">
              <div>
                <span className="detail-kicker">More from {app.shortName}</span>
                <h2>Related titles</h2>
              </div>
            </div>
            <div className="related-grid">
              {relatedGames.map((item) => (
                <Link key={item.slug} className="related-card" href={`/${item.slug}`}>
                  <strong>{item.title}</strong>
                  <span>{item.publisher}</span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </main>
      <SiteFooter />
    </>
  );
}