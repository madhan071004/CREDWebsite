# 💳 CRED Clone — Premium & Interactive Web Experience

A high-fidelity, pixel-perfect clone of the premium **CRED** website built using modern frontend technologies. This application features interactive flows, animated transitions, customizable layouts, and comprehensive responsiveness for both mobile and desktop viewports.

---

## ✨ Features & Interactivity

### 1. 🔐 Interactive Authentication Flow (Backend-Free)
Experience a realistic simulated login cycle:
- **Phone Validation:** Standardized 10-digit input validation.
- **OTP Cycle:** Generates real-time toast notifications for OTP delivery. Enter any 4-digit code (such as `1234`) to see a fluid success transition.
- **Client Session Persistence:** Your logged-in state is saved securely using browser `localStorage`. Refreshing the page won't log you out!
- **Dynamic Headers:** Log in to see a custom greeting ("Hi, [Name]") in the navigation bar, along with a functional "logout" option.

### 2. 📱 Fully Responsive Mobile Drawer
Crafted with mobile-first media queries:
- On viewports below `992px`, the top navigation transforms into a sliding overlay menu toggled by an animated hamburger icon.
- Drawer sections dynamically adapt, housing active user session details and full download utilities.

### 3. ✍️ Member Testimonial Engine
Read what members say or write your own:
- Interactive **"Write a review"** modal with star selection (1–5 stars) and automated handle parsing (e.g., inputting "Rahul" formats to `@rahul` automatically).
- **LocalStorage sync:** Newly submitted reviews populate immediately in the community section and persist across browser reloads.

### 4. 🔗 17+ Connected Pages
Every footer link, feature card, and button is fully route-configured to dedicated pages featuring dynamic layouts:
- **Products:** Credit Cards, Credit Score, Rewards, CRED Pay, CRED Coins
- **Company:** About Us, Careers, Press, Blog
- **Legal:** Privacy Policy, Terms & Conditions, Fees & Charges, Grievance
- **Support:** Help Center, Contact Us, FAQs

### 5. 🎨 Aesthetic Micro-animations & Styles
- Powered by `framer-motion` for reveal-on-scroll effects, card lift-overs, and pop-in modals.
- Customized scroll-indicator animation and dynamic cursor tracking elements.
- Design tokens structured around official CRED styling: deep dark obsidian theme combined with HSL copper/gold tones.

---

## 🛠️ Tech Stack

- **Core:** React 18, Vite (for ultra-fast Hot Module Replacement)
- **Routing:** React Router DOM (v6)
- **Styling:** CSS variables, Vanilla CSS layouts (Flexbox, Grid), and custom Media Queries for responsiveness
- **Animations:** Framer Motion (for physics-based transitions)
- **Icons:** Lucide React

---

## 📁 Project Architecture

```bash
CREDWebsite/
├── public/                 # Static assets (Premium phone mocks, icons, shields)
├── src/
│   ├── components/         # Reusable UI Elements (Nav, Modal, Login, Counter, etc.)
│   ├── hooks/              # Custom React hooks (useReveal reveal-on-scroll logic)
│   ├── pages/              # 17+ dedicated routes (Careers, Credits, Privacy, FAQs, etc.)
│   ├── styles/             # Modular CSS layouts
│   │   ├── global.css      # Core styles & mobile media queries
│   │   └── components.css  # Modal, layouts, and page component styles
│   ├── App.jsx             # Main Router and modal triggers
│   └── main.jsx            # React root mount
├── package.json            # Scripts & dependencies
└── vite.config.js          # Vite configurations
```

---

## 🚀 Getting Started

To run the project locally on your machine, execute the following commands:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/madhan071004/CREDWebsite.git
   cd CREDWebsite
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the local development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173/](http://localhost:5173/) in your web browser.

---

## 💡 Key Implementations

- **NeoPop Design:** Refactored React modules to eliminate blocking inline styles, allowing media queries to freely scale design blocks.
- **Dynamic State:** The user login state flows top-down from `App.jsx` to `Nav.jsx` and the login modules, maintaining context synchronicity.
