import PageLayout from "./PageLayout";

export default function PrivacyPolicyPage() {
  return (
    <PageLayout title="Privacy Policy" subtitle="LEGAL">
      <div className="content-section blog-full">
        <p className="content-text">
          Last updated: May 27, 2026
        </p>
        <h2 className="content-heading" style={{ marginTop: "32px", fontSize: "24px" }}>1. Introduction</h2>
        <p className="content-text">
          At CRED, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our platform.
        </p>
        
        <h2 className="content-heading" style={{ marginTop: "32px", fontSize: "24px" }}>2. Information We Collect</h2>
        <p className="content-text">
          We collect information you provide directly to us, such as when you create an account, verify your identity, or contact customer support. This may include your name, email address, phone number, PAN card details, and credit report information.
        </p>
        
        <h2 className="content-heading" style={{ marginTop: "32px", fontSize: "24px" }}>3. How We Use Your Information</h2>
        <p className="content-text">
          We use your information to provide, maintain, and improve our services, as well as to personalize your experience and communicate with you about products, services, and promotions.
        </p>
        
        <h2 className="content-heading" style={{ marginTop: "32px", fontSize: "24px" }}>4. Data Security</h2>
        <p className="content-text">
          We implement bank-grade security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. We use 256-bit encryption for data transmission and storage.
        </p>
      </div>
    </PageLayout>
  );
}
