import { LegalDocumentPage } from "@/components/legal-document";
import { legalDocuments } from "@/lib/legal-content";

export default function TermsOfServicesApplePage() {
  return <LegalDocumentPage document={legalDocuments.termsApple} />;
}