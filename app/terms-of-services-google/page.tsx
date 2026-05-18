import { LegalDocumentPage } from "@/components/legal-document";
import { legalDocuments } from "@/lib/legal-content";

export default function TermsOfServicesGooglePage() {
  return <LegalDocumentPage document={legalDocuments.termsGoogle} />;
}