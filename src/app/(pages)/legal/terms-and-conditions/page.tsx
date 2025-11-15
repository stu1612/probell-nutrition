import LegalPage from "@/app/components/globals/legalPage";
import { TERMS_CONTENT } from "@/app/constants/terms";

export default function TermsAndConditionsPage() {
  return <LegalPage content={TERMS_CONTENT} />;
}
