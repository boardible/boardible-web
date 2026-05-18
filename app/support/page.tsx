import Link from "next/link";

import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { apps } from "@/lib/site-data";

export default function SupportPage() {
  const [boardibleApp, ineujApp, monsticApp] = apps;

  return (
    <>
      <SiteHeader current="support" />
      <main className="inner-page-shell">
        <section className="content-wrap page-hero page-hero-support">
          <span className="pill-label">Support</span>
          <h1>Boardible Support</h1>
          <p>
            This support page covers Boardible, Isso não é um Jogo, and Monstic TacToe. Use it for launch issues, purchases,
            restoration problems, account access, multiplayer sessions, and legal or privacy-related requests.
          </p>
          <div className="detail-actions detail-actions-inline">
            <a className="btn btn-primary tactile-primary" href="mailto:support@boardible.com?subject=Boardible%20Support%20Request">
              Email support
            </a>
            <a className="btn btn-aqua tactile-aqua" href="mailto:talktous@boardible.com?subject=Privacy%20or%20Legal%20Request">
              Privacy or legal
            </a>
          </div>
        </section>

        <section className="content-wrap page-section">
          <div className="support-grid">
            <article className="info-card">
              <h2>What to include in your request</h2>
              <ul>
                <li>The app name: Boardible, Isso não é um Jogo, or Monstic TacToe</li>
                <li>The device model and iOS, iPadOS, or Android version</li>
                <li>The app version you are using</li>
                <li>The email address or login method tied to your account, when relevant</li>
                <li>A short description of what happened and what you expected</li>
                <li>Screenshots or screen recordings when available</li>
                <li>For payment issues, include the store order number and the store account used for purchase</li>
              </ul>
            </article>
            <article className="info-card">
              <h2>Common requests we can help with</h2>
              <ul>
                <li>The app does not move past launch or shows an error on startup</li>
                <li>A purchase did not unlock, restore, or renew as expected</li>
                <li>A room, TV-assisted session, or online match does not reconnect correctly</li>
                <li>A specific game flow freezes, crashes, or fails during play</li>
                <li>You need to exercise a privacy-related right or ask a legal question</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="content-wrap page-section page-section-tight">
          <div className="support-grid">
            <article className="info-card">
              <h2>Support channels</h2>
              <p>
                For product support, billing follow-up, and gameplay issues, contact <a href="mailto:support@boardible.com">support@boardible.com</a>.
              </p>
              <p>
                For privacy policy questions, data-subject requests, or legal matters, contact <a href="mailto:talktous@boardible.com">talktous@boardible.com</a>.
              </p>
            </article>
            <article className="info-card">
              <h2>Before opening a billing ticket</h2>
              <ul>
                <li>Confirm you are signed into the same Apple ID or Google account used for the purchase</li>
                <li>Try the in-app restore flow if the app offers it</li>
                <li>Wait a few minutes after the store confirms the transaction before retrying</li>
                <li>Include the order receipt or transaction identifier in your message so support can verify faster</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="content-wrap page-section page-section-tight">
          <div className="support-links-card">
            <h2>Official app pages</h2>
            <div className="related-grid related-grid-links">
              <a className="related-card" href={boardibleApp.iosUrl} target="_blank" rel="noreferrer">
                <strong>Boardible on the App Store</strong>
                <span>{boardibleApp.shortName}</span>
              </a>
              <a className="related-card" href={boardibleApp.androidUrl} target="_blank" rel="noreferrer">
                <strong>Boardible on Google Play</strong>
                <span>{boardibleApp.shortName}</span>
              </a>
              <a className="related-card" href={ineujApp.iosUrl} target="_blank" rel="noreferrer">
                <strong>Isso não é um Jogo on the App Store</strong>
                <span>{ineujApp.shortName}</span>
              </a>
              <a className="related-card" href={ineujApp.androidUrl} target="_blank" rel="noreferrer">
                <strong>Isso não é um Jogo on Google Play</strong>
                <span>{ineujApp.shortName}</span>
              </a>
              <a className="related-card" href={monsticApp.iosUrl} target="_blank" rel="noreferrer">
                <strong>Monstic TacToe on the App Store</strong>
                <span>{monsticApp.shortName}</span>
              </a>
              <a className="related-card" href={monsticApp.androidUrl} target="_blank" rel="noreferrer">
                <strong>Monstic TacToe on Google Play</strong>
                <span>{monsticApp.shortName}</span>
              </a>
            </div>
          </div>
        </section>

        <section className="content-wrap page-section page-section-tight">
          <div className="support-links-card">
            <h2>Legal and privacy links</h2>
            <div className="related-grid related-grid-links">
              <Link className="related-card" href="/privacy-policy">
                <strong>Privacy Policy</strong>
                <span>Boardible</span>
              </Link>
              <Link className="related-card" href="/privacy-policy-ineuj">
                <strong>Privacy Policy INEUJ</strong>
                <span>Isso não é um Jogo</span>
              </Link>
              <Link className="related-card" href="/privacy-policy-tictac">
                <strong>Privacy Policy Monstic TacToe</strong>
                <span>Monstic TacToe</span>
              </Link>
              <Link className="related-card" href="/terms-and-conditions">
                <strong>Terms and Conditions</strong>
                <span>Boardible</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}