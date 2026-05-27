import PageLayout from "./PageLayout";

export default function TermsPage() {
  return (
    <PageLayout title="Terms & Conditions" subtitle="LEGAL">
      <div className="content-section blog-full">
        <p className="content-text">
          Last updated: May 27, 2026
        </p>
        <h2 className="content-heading" style={{ marginTop: "32px", fontSize: "24px" }}>1. Acceptance of Terms</h2>
        <p className="content-text">
          By accessing or using the CRED platform, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.
        </p>
        
        <h2 className="content-heading" style={{ marginTop: "32px", fontSize: "24px" }}>2. Eligibility</h2>
        <p className="content-text">
          To use CRED, you must be a resident of India, at least 18 years old, and have a credit score of 750 or above (as determined by our partner credit bureaus).
        </p>
        
        <h2 className="content-heading" style={{ marginTop: "32px", fontSize: "24px" }}>3. User Accounts</h2>
        <p className="content-text">
          You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use.
        </p>
        
        <h2 className="content-heading" style={{ marginTop: "32px", fontSize: "24px" }}>4. Rewards Program</h2>
        <p className="content-text">
          CRED coins and rewards have no cash value and cannot be exchanged for fiat currency. We reserve the right to modify or terminate the rewards program at any time.
        </p>
      </div>
    </PageLayout>
  );
}
