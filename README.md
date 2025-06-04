# 1516 FAQ & Career Knowledge Base

A comprehensive knowledge base for students in Andhra Pradesh & Telangana to find information about official procedures and career options based on their education level.

## 🎯 Project Goals

| Goal | KPI / Metric | Target |
|------|-------------|--------|
| Accurate Info | % pages updated in last 12 months | ≥ 90% |
| Fast Answers | Median page-load time on 3G | ≤ 1.5s |
| Student Engagement | Avg. pages/session | ≥ 3 |
| Discoverability | Top-10 Google rank for queries like "Income Certificate Telangana" | ≤ 3 months |

## 👥 Target Audience

### Students
- **Ravi (Class 10)**: Wants to know job options after 10th grade
- **Suma (BSc graduate)**: Needs step-by-step guidance for certificate applications

### Contributors
- **Volunteers**: Subject matter experts who want to contribute content without technical barriers

## ✨ Key Features

- **Structured Content Models**
  - Document Model for official procedures
  - Job Model with education-level indexing

- **Intuitive Navigation**
  - Taxonomy-based browsing (qualifications, sectors, issuers)
  - Clean, memorable URLs

- **Powerful Search**
  - Client-side search with Fuse.js
  - Fast filtering options

- **Easy Content Management**
  - Decap CMS integration
  - Role-based access control
  - No Git knowledge required

- **Mobile-First Design**
  - Responsive layout
  - Fast performance on all devices
  - Accessible interface

## 🛠️ Technology Stack

- **Static Site Generator**: Hugo
- **CMS**: Decap (Netlify CMS)
- **Search**: Fuse.js
- **Hosting**: Netlify
- **Theme**: Custom Doks-based theme

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ & npm
- Hugo (extended version)


## 🤝 Contributing

We welcome contributions! Please read our [Contribution Guidelines](CONTRIBUTING.md) to get started.

## 📄 License

This project is [MIT licensed](LICENSE).

## ⚙️ Recent Configuration Updates (June 2025)

This section outlines significant updates made to the site's configuration and functionality:

### Decap CMS Authentication Changed to GitHub OAuth
- Switched from Netlify Identity to GitHub OAuth for Decap CMS login.
- **`static/admin/config.yml` Updates:**
    - Changed `backend.name` from `git-gateway` to `github`.
    - Configured `repo`, `branch`, `auth_scope`.
    - Set up Netlify as the OAuth provider using `base_url: https://api.netlify.com`, `auth_endpoint`, and `site_domain`.
    - `local_backend` was configured for local development proxy but is commented out for production.
- **`static/admin/index.html` Simplification:**
    - Removed Netlify Identity widget and related JavaScript.
    - Decap CMS now auto-initializes without manual `CMS.init()` or a dedicated `#nc-root` div.
- **GitHub OAuth Application:**
    - Resolved `redirect_uri` mismatch errors by ensuring `https://api.netlify.com/auth/done` is correctly listed in the GitHub OAuth App's "Authorization callback URLs".

### Content & Theme Adjustments
- **Publishing New Content:**
    - Ensured new pages created via Decap CMS (e.g., "Dummy Test Page") are published by adding `draft: false` to their front matter. This was necessary as new content was not appearing on the live site despite being in the Git repository.
- **Doks Theme Default:**
    - Set the Doks theme to default to **light mode**.
    - Modified `colorMode = "light"` in `config/_default/params.toml`.
- **Homepage Content:**
    - Updated `content/_index.md` to provide a more relevant welcome message for the "1516 FAQ & Documentation Hub".
    - Added links to main content sections (`/faqs/`, `/pages/`, `/posts/`) and the "Dummy Test Page".

### Netlify Configuration (`netlify.toml`)
- **Content Security Policy (CSP):**
    - Updated CSP headers to allow scripts from `unpkg.com` (for Decap CMS).
    - Allowed connections to `api.netlify.com` and `api.github.com`.
    - Added `'unsafe-eval'` to `script-src` to permit dynamic JavaScript evaluation required by Decap CMS.
- **Git Gateway Removed:**
    - The `git_gateway` section was removed from `netlify.toml` as it's no longer used with the GitHub OAuth backend.

These changes ensure a more streamlined authentication process for content editors, proper content publishing, and an improved user experience with the theme and homepage.
