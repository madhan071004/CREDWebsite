import PageLayout from "./PageLayout";
import { motion } from "framer-motion";

export default function PressPage() {
  const articles = [
    { date: "Dec 15, 2024", title: "CRED crosses 15 million members milestone", source: "Economic Times", excerpt: "The members-only fintech platform has seen unprecedented growth, doubling its user base in the last 18 months with a focus on premium experiences." },
    { date: "Oct 8, 2024", title: "CRED launches UPI credit line for premium members", source: "Mint", excerpt: "The new feature allows CRED members to access instant credit lines through UPI, further blurring the line between credit and debit payments." },
    { date: "Aug 22, 2024", title: "Inside CRED's legendary marketing playbook", source: "Forbes India", excerpt: "From IPL ads to viral campaigns, how CRED built one of India's most recognizable brands in just six years." },
    { date: "Jun 5, 2024", title: "CRED valued at $6.4 billion in latest funding round", source: "TechCrunch", excerpt: "The Bangalore-based fintech startup raised $200 million in its Series F round, led by global investors." },
    { date: "Mar 18, 2024", title: "How CRED is reshaping India's credit ecosystem", source: "Bloomberg", excerpt: "With features like CRED Protect and credit score monitoring, the platform is helping millions of Indians manage their credit health." },
    { date: "Jan 10, 2024", title: "CRED announces CRED Money for personal finance", source: "YourStory", excerpt: "The new vertical will help members track expenses, manage investments, and optimize their financial portfolio in one place." }
  ];

  return (
    <PageLayout title="in the press" subtitle="NEWS & MEDIA">
      <div className="content-section">
        <p className="content-text">
          What people are saying about CRED. Browse our latest press coverage and media mentions.
        </p>
      </div>

      <div className="content-section">
        <div className="press-list">
          {articles.map((a, i) => (
            <motion.article
              key={i}
              className="press-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="press-meta">
                <span className="press-date">{a.date}</span>
                <span className="press-source">{a.source}</span>
              </div>
              <h3 className="press-title">{a.title}</h3>
              <p className="press-excerpt">{a.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
