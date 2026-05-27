import PageLayout from "./PageLayout";

export default function FeesPage() {
  return (
    <PageLayout title="Fees & Charges" subtitle="LEGAL">
      <div className="content-section blog-full">
        <p className="content-text">
          At CRED, we believe in complete transparency. Here is a breakdown of our fees and charges.
        </p>
        
        <h2 className="content-heading" style={{ marginTop: "32px", fontSize: "24px" }}>Platform Usage</h2>
        <p className="content-text">
          Downloading the CRED app and maintaining a membership is completely free. We do not charge subscription fees.
        </p>
        
        <h2 className="content-heading" style={{ marginTop: "32px", fontSize: "24px" }}>Credit Card Bill Payments</h2>
        <p className="content-text">
          Payments made via UPI are generally free. Payments made via debit cards or net banking may attract nominal convenience fees, which will be displayed clearly before you confirm the transaction.
        </p>
        
        <h2 className="content-heading" style={{ marginTop: "32px", fontSize: "24px" }}>CRED Pay / UPI Transfers</h2>
        <p className="content-text">
          Standard UPI peer-to-peer (P2P) and peer-to-merchant (P2M) transfers are free of charge.
        </p>
      </div>
    </PageLayout>
  );
}
