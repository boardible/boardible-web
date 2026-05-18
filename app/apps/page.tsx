import type { Metadata } from "next";
import Image from "next/image";

import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { apps } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Apps",
  description:
    "Browse Boardible, Isso não é um Jogo, and Monstic TacToe with direct App Store and Google Play download links.",
  alternates: {
    canonical: "/apps",
  },
};

const appsPageMedia: Partial<Record<(typeof apps)[number]["slug"], { src: string; alt: string; objectPosition: string }>> = {
  boardible: {
    src: "/assets/apps/boardible/splash-bg.png",
    alt: "Boardible promotional artwork featuring the game catalog",
    objectPosition: "center top",
  },
  ineuj: {
    src: "/assets/apps/ineuj/splash-bg.png",
    alt: "Isso nao e um Jogo promotional artwork",
    objectPosition: "center top",
  },
};

export default function AppsPage() {
  return (
    <>
      <SiteHeader current="apps" />
      <main className="inner-page-shell">
        <section className="content-wrap page-hero page-hero-apps">
          <span className="pill-label">Apps</span>
          <h1>Three live products. One Boardible ecosystem.</h1>
          <p>Boardible, Isso não é um Jogo, and Monstic TacToe each solve a different kind of play while sharing the same product DNA.</p>
        </section>

        <section className="content-wrap page-section">
          <div className="app-overview-grid">
            {apps.map((app) => {
              const cardMedia = appsPageMedia[app.slug];

              return (
                <article key={app.slug} className="app-overview-card">
                  <div className={`app-overview-media app-overview-media-${app.accent}`}>
                    <Image
                      src={cardMedia?.src ?? app.heroPath}
                      alt={cardMedia?.alt ?? app.heroAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      style={{ objectPosition: cardMedia?.objectPosition ?? app.heroObjectPosition }}
                    />
                  </div>
                  <div className="app-overview-body">
                    <span className="detail-kicker">{app.statLine}</span>
                    <h2>{app.name}</h2>
                    <p>{app.longDescription}</p>
                    <div className="stack-meta">
                      {app.highlights.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                    <div className="detail-actions">
                      <a className="btn btn-primary tactile-primary" href={app.iosUrl} target="_blank" rel="noreferrer">
                        Download on App Store
                      </a>
                      <a className="btn btn-aqua tactile-aqua" href={app.androidUrl} target="_blank" rel="noreferrer">
                        Get it on Google Play
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}