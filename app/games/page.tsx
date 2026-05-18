import Image from "next/image";
import Link from "next/link";

import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { apps, getGamesByApp } from "@/lib/site-data";

export default function GamesPage() {
  return (
    <>
      <SiteHeader current="games" />
      <main className="inner-page-shell">
        <section className="content-wrap page-hero page-hero-games">
          <span className="pill-label">Catalog</span>
          <h1>Every verified game currently mapped for the Boardible ecosystem.</h1>
          <p>This catalog groups the live titles we verified across Boardible, Isso não é um Jogo, and Monstic TacToe.</p>
        </section>

        <section className="content-wrap page-section page-section-tight">
          {apps.map((app) => {
            const appGames = getGamesByApp(app.slug);

            return (
              <section key={app.slug} className="app-group">
                <div className="section-heading-row">
                  <div>
                    <span className="detail-kicker">{app.statLine}</span>
                    <h2>{app.name}</h2>
                  </div>
                  <Link className="catalog-link" href={`/apps/${app.slug}`}>
                    View app page →
                  </Link>
                </div>

                <div className="game-grid game-grid-catalog-showcase">
                  {appGames.map((game) => (
                    <article key={game.slug} className="game-card game-card-showcase">
                      <div className={`game-card-media game-card-media-showcase game-card-media-${game.accent}`}>
                        <Image src={game.imagePath} alt={game.title} fill sizes="(max-width: 1024px) 100vw, 33vw" />
                      </div>
                      <div className="game-card-copy">
                        <span className="detail-kicker">{game.publisher}</span>
                        <h3>{game.title}</h3>
                        <p>{game.summary}</p>
                        <div className="stack-meta">
                          <span>{game.players}</span>
                          <span>{game.duration}</span>
                        </div>
                        <Link className="catalog-link" href={`/${game.slug}`}>
                          Read overview →
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}