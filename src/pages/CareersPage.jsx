import { useState } from "react";
import PageLayout from "./PageLayout";
import { motion } from "framer-motion";
import Modal from "../components/Modal";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    { id: 1, role: "Senior Frontend Engineer", dept: "Engineering", location: "Bangalore", type: "Full-time",
      desc: "Build beautiful, performant web experiences for millions of CRED members. You'll work with React, TypeScript, and our design system to craft interfaces that feel magical.",
      requirements: ["5+ years of frontend experience", "Deep knowledge of React & TypeScript", "Experience with animation libraries", "Strong design sensibility", "Experience with performance optimization"] },
    { id: 2, role: "Product Designer", dept: "Design", location: "Bangalore", type: "Full-time",
      desc: "Design premium experiences that delight our members. You'll work closely with product and engineering to ship features that define the future of fintech.",
      requirements: ["4+ years of product design experience", "Strong portfolio with mobile and web work", "Proficiency in Figma", "Experience with design systems", "Understanding of motion design"] },
    { id: 3, role: "Backend Engineer — Payments", dept: "Engineering", location: "Bangalore", type: "Full-time",
      desc: "Build scalable payment systems that process billions of rupees. You'll work on UPI integrations, credit card payments, and our rewards engine.",
      requirements: ["4+ years of backend experience", "Experience with payment systems", "Proficiency in Java/Kotlin or Go", "Knowledge of distributed systems", "Understanding of financial regulations"] },
    { id: 4, role: "Data Scientist", dept: "Data", location: "Bangalore", type: "Full-time",
      desc: "Use data to drive decisions across CRED. From credit scoring models to personalized rewards, your work will directly impact millions of members.",
      requirements: ["3+ years in data science", "Strong ML/statistical modeling skills", "Experience with Python, SQL", "Knowledge of credit scoring", "Experience with A/B testing"] },
    { id: 5, role: "Growth Marketing Manager", dept: "Marketing", location: "Bangalore / Remote", type: "Full-time",
      desc: "Drive member acquisition and engagement through creative campaigns. CRED's marketing is legendary — help us keep it that way.",
      requirements: ["5+ years in growth/performance marketing", "Experience with digital campaigns", "Strong analytical skills", "Creative storytelling ability", "Experience in fintech or consumer tech"] },
    { id: 6, role: "iOS Engineer", dept: "Engineering", location: "Bangalore", type: "Full-time",
      desc: "Build the CRED iOS app used by millions. You'll work on Swift/SwiftUI to create fluid, premium native experiences.",
      requirements: ["4+ years of iOS development", "Proficiency in Swift & SwiftUI", "Experience with Core Animation", "App Store submission experience", "Understanding of iOS design guidelines"] }
  ];

  return (
    <PageLayout title="join the crew" subtitle="CAREERS AT CRED">
      <div className="content-section">
        <p className="content-text">
          We're building the future of finance — and we need extraordinary people to do it.
          At CRED, you'll work alongside some of the sharpest minds in tech, design, and business
          to create products that millions of people love.
        </p>
      </div>

      <div className="content-section">
        <h2 className="content-heading">open positions</h2>
        <div className="jobs-grid">
          {jobs.map((job, i) => (
            <motion.div
              key={job.id}
              className="job-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onClick={() => setSelectedJob(job)}
            >
              <span className="job-dept">{job.dept}</span>
              <h3 className="job-title">{job.role}</h3>
              <div className="job-meta">
                <span>📍 {job.location}</span>
                <span>⏱ {job.type}</span>
              </div>
              <span className="job-apply-hint">click to view details →</span>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selectedJob} onClose={() => setSelectedJob(null)} title={selectedJob?.role}>
        {selectedJob && (
          <div className="job-detail">
            <div className="job-detail-meta">
              <span className="job-dept">{selectedJob.dept}</span>
              <span>📍 {selectedJob.location}</span>
              <span>⏱ {selectedJob.type}</span>
            </div>
            <p className="content-text" style={{ marginTop: "20px" }}>{selectedJob.desc}</p>
            <h4 style={{ color: "#fff", marginTop: "24px", marginBottom: "12px", fontSize: "14px", fontWeight: 700 }}>requirements</h4>
            <ul className="job-requirements">
              {selectedJob.requirements.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
            <button
              className="form-button"
              style={{ marginTop: "24px" }}
              onClick={() => {
                alert("Application submitted! We'll reach out if there's a match. (Demo only)");
                setSelectedJob(null);
              }}
            >
              apply now →
            </button>
          </div>
        )}
      </Modal>
    </PageLayout>
  );
}
