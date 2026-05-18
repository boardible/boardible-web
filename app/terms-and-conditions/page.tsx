import { LegalDocumentPage } from "@/components/legal-document";
import { legalDocuments } from "@/lib/legal-content";

export default function TermsAndConditionsPage() {
  return <LegalDocumentPage document={legalDocuments.terms} />;
}