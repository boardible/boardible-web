import { LegalDocumentPage } from "@/components/legal-document";
import { legalDocuments } from "@/lib/legal-content";

export default function PrivacyPolicyTictacPage() {
  return <LegalDocumentPage document={legalDocuments.privacyTictac} />;
}