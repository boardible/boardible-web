import { LegalDocumentPage } from "@/components/legal-document";
import { legalDocuments } from "@/lib/legal-content";

export default function PrivacyPolicyPage() {
  return <LegalDocumentPage document={legalDocuments.privacy} />;
}