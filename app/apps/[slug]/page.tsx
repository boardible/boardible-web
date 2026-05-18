import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { apps, getAppBySlug, getGamesByApp } from "@/lib/site-data";

export function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export default async function AppDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    notFound();
  }

  const appGames = getGamesByApp(app.slug);

  return (
    <>
      <SiteHeader current="apps" />
      <main className="inner-page-shell">
        <section className={`content-wrap detail-hero detail-hero-${app.accent}`}>
          <div className="detail-hero-body">
            <Link className="back-link" href="/apps">
              ← Back to apps
            </Link>
            <span className="detail-kicker">{app.statLine}</span>
            <h1>{app.name}</h1>
            <p>{app.longDescription}</p>
            <div className="detail-meta">
              <span>{app.bestFor}</span>
              <span>{appGames.length} verified live title{appGames.length === 1 ? "" : "s"}</span>
            </div>
            <div className="detail-actions">
              <a className="btn btn-primary tactile-primary" href={app.iosUrl} target="_blank" rel="noreferrer">
                App Store
              </a>
              <a className="btn btn-aqua tactile-aqua" href={app.androidUrl} target="_blank" rel="noreferrer">
                Google Play
              </a>
            </div>
          </div>
          <div className="detail-hero-media">
            <Image
              src={app.heroPath}
              alt={app.heroAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              style={{ objectPosition: app.heroObjectPosition }}
            />
          </div>
        </section>

        <section className="content-wrap page-section">
          <div className="info-grid">
            <article className="info-card">
              <h2>What it does best</h2>
              <p>{app.description}</p>
            </article>
            <article className="info-card">
              <h2>Highlights</h2>
              <ul>
                {app.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="content-wrap page-section">
          <div className="section-heading-row">
            <div>
              <span className="detail-kicker">Catalog</span>
              <h2>Games in {app.shortName}</h2>
            </div>
          </div>
          <div className="game-grid">
            {appGames.map((game) => (
              <article key={game.slug} className="game-card">
                <div className={`game-card-media game-card-media-${game.accent}`}>
                  <Image src={game.imagePath} alt={game.title} fill sizes="(max-width: 1024px) 100vw, 33vw" />
                </div>
                <div className="game-card-copy">
                  <span className="detail-kicker">{game.publisher}</span>
                  <h3>{game.title}</h3>
                  <p>{game.summary}</p>
                  <div className="stack-meta">
                    <span>{game.players}</span>
                    <span>{game.duration}</span>
                    <span>{game.category}</span>
                  </div>
                  <Link className="catalog-link" href={`/${game.slug}`}>
                    Open overview →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}