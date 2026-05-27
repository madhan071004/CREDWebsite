import PageLayout from "./PageLayout";

export default function GrievancePage() {
  return (
    <PageLayout title="Grievance Redressal" subtitle="SUPPORT">
      <div className="content-section blog-full">
        <p className="content-text">
          At CRED, we are committed to providing the best possible experience to our members. If you have any concerns or complaints, our Grievance Redressal mechanism is here to help.
        </p>
        
        <h2 className="content-heading" style={{ marginTop: "32px", fontSize: "24px" }}>Level 1: Customer Support</h2>
        <p className="content-text">
          For any initial queries or concerns, please reach out to our customer support team via the "Help Center" section in the CRED app. We aim to resolve most issues at this level within 24-48 hours.
        </p>
        
        <h2 className="content-heading" style={{ marginTop: "32px", fontSize: "24px" }}>Level 2: Grievance Officer</h2>
        <p className="content-text">
          If your issue is not resolved to your satisfaction at Level 1, or if you have a specific grievance regarding privacy or data security, you can escalate the matter to our appointed Grievance Officer.
        </p>
        <p className="content-text" style={{ background: "#111", padding: "16px", borderRadius: "8px", marginTop: "16px" }}>
          <strong>Name:</strong> Nodal Officer<br/>
          <strong>Email:</strong> grievance@cred.club<br/>
          <strong>Address:</strong> CRED, No. 78, 100 Feet Road, Indiranagar, Bangalore, Karnataka - 560038
        </p>
        
        <h2 className="content-heading" style={{ marginTop: "32px", fontSize: "24px" }}>Resolution Timeframe</h2>
        <p className="content-text">
          We aim to acknowledge your grievance within 24 hours of receipt and strive to resolve it within 30 days from the date of receipt.
        </p>
      </div>
    </PageLayout>
  );
}
