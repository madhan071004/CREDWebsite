import { useState } from "react";
import PageLayout from "./PageLayout";
import { motion } from "framer-motion";

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    { id: 1, date: "Nov 20, 2024", category: "Finance", title: "5 habits that can boost your credit score by 100 points",
      excerpt: "Your credit score isn't fixed — small changes in how you manage credit can lead to dramatic improvements over time.",
      content: "Your credit score is one of the most important numbers in your financial life. It determines the interest rates you get, the credit limits you're offered, and even your eligibility for premium financial products.\n\nHere are 5 proven habits:\n\n1. Pay bills on time, every time — even one missed payment can drop your score by 50+ points.\n\n2. Keep credit utilization below 30% — if your limit is ₹1 lakh, try not to use more than ₹30,000 at any time.\n\n3. Don't close old credit cards — the length of your credit history matters. Keep old accounts open.\n\n4. Limit new credit applications — each hard inquiry can temporarily lower your score.\n\n5. Monitor your credit report regularly — catch errors early and dispute them immediately.\n\nWith CRED, you can track your credit score for free and get personalized tips to improve it." },
    { id: 2, date: "Oct 5, 2024", category: "Rewards", title: "How CRED members earned ₹500 Cr in rewards last quarter",
      excerpt: "From cashback to exclusive experiences, CRED members are earning more rewards than ever before.",
      content: "CRED members collectively earned over ₹500 crores in rewards in the last quarter alone — a 40% increase from the previous quarter.\n\nThe most popular reward categories:\n\n• Cashback on bill payments: ₹180 Cr\n• CRED coins redeemed: ₹120 Cr\n• Exclusive experiences: ₹80 Cr\n• Partner vouchers: ₹70 Cr\n• Jackpot wins: ₹50 Cr\n\nThe average CRED member saves approximately ₹5,000 per year through rewards earned on the platform. That's the power of paying your bills on time and being a trusted member of the CRED community." },
    { id: 3, date: "Sep 12, 2024", category: "Product", title: "Introducing CRED Protect — your financial safety net",
      excerpt: "A new way to monitor and protect your financial identity across all your credit accounts.",
      content: "We're excited to announce CRED Protect — a comprehensive financial monitoring service available to all CRED members.\n\nWhat CRED Protect offers:\n\n• Real-time alerts for any changes to your credit report\n• Fraud detection on unauthorized credit applications\n• Dark web monitoring for leaked financial data\n• Monthly credit health reports\n• Personalized security recommendations\n\nIn a world where financial fraud is increasingly common, CRED Protect gives you peace of mind knowing that your financial identity is being watched over 24/7." },
    { id: 4, date: "Aug 1, 2024", category: "Design", title: "The story behind CRED's NeoPop design language",
      excerpt: "How we created a design system that feels premium, futuristic, and uniquely CRED.",
      content: "When we set out to redesign CRED's visual language, we wanted something that felt different from every other fintech app. The result was NeoPop.\n\nNeoPop is inspired by:\n\n• Retro-futurism and 3D interfaces\n• Premium materials like glass and metal\n• Bold, confident color choices\n• Micro-interactions that delight\n\nEvery element in NeoPop is designed with depth and dimension. Buttons appear to pop out of the screen. Cards feel like they have physical weight. Animations are smooth and purposeful.\n\nThe design language has been so well-received that other companies have started adopting similar aesthetics — the ultimate compliment." }
  ];

  return (
    <PageLayout title="the CRED blog" subtitle="INSIGHTS & STORIES">
      {!selectedPost ? (
        <div className="content-section">
          <div className="blog-grid">
            {posts.map((post, i) => (
              <motion.article
                key={post.id}
                className="blog-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                onClick={() => setSelectedPost(post)}
              >
                <div className="blog-card-top">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <span className="blog-read-more">read more →</span>
              </motion.article>
            ))}
          </div>
        </div>
      ) : (
        <motion.div
          className="content-section blog-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <button className="form-link" onClick={() => setSelectedPost(null)} style={{ marginBottom: "32px" }}>
            ← back to all posts
          </button>
          <span className="blog-category">{selectedPost.category}</span>
          <h2 className="content-heading" style={{ marginTop: "12px" }}>{selectedPost.title}</h2>
          <span className="blog-date" style={{ display: "block", marginBottom: "32px" }}>{selectedPost.date}</span>
          {selectedPost.content.split("\n\n").map((para, i) => (
            <p key={i} className="content-text">{para}</p>
          ))}
        </motion.div>
      )}
    </PageLayout>
  );
}
