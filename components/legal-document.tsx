import Image from "next/image";

import { SiteFooter, SiteHeader } from "@/components/site-shell";
import type { LegalDocument } from "@/lib/legal-content";

export function LegalDocumentPage({ document }: { document: LegalDocument }) {
  return (
    <>
      <SiteHeader current="legal" />
      <main className="legal-shell">
        <section className="content-wrap legal-header">
          <span className="pill-label">Legal</span>
          <h1>{document.title}</h1>
          <p>Last updated: {document.lastUpdated}</p>
        </section>

        <section className="content-wrap legal-body">
          <div className="legal-card">
            {document.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="legal-sections">
            {document.sections.map((section) => (
              <article key={section.title} className="legal-card">
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.media?.map((item) => (
                  <div key={item.src} className="legal-media">
                    <Image src={item.src} alt={item.alt} width={1598} height={1002} />
                  </div>
                ))}
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>

          <div className="legal-card legal-contact-card">
            <h2>Contact</h2>
            <p>
              For questions about this document, contact <a href={`mailto:${document.contactEmail}`}>{document.contactEmail}</a>.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}