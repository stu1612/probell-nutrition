import LegalPage from "@/app/components/globals/legalPage";
import { PRIVACY_CONTENT } from "@/app/constants/privacy";

export default function PrivacyPolicyPage() {
  return <LegalPage content={PRIVACY_CONTENT} />;
}
