🗂️ Product Requirements Document (PRD)

Project Name: 1516 FAQ & Career Knowledge Base
Prepared For: WindSurf + Taskmaster MCP pipeline
Version: 1.2 · 2025-06-01
Author: Prithvi Raj Kunapareddi

⸻

1. 💡 Problem Statement

Students in Andhra Pradesh & Telangana waste days deciphering official procedures (certificates, transcripts, revenue letters) and hunting job options suitable for their education level. Guidance is scattered, outdated, or hidden behind paywalls.

⸻

2. 🎯 Goals & Success Metrics

Goal	KPI / Metric	Target
Accurate Info	% pages updated in last 12 months	≥ 90 %
Fast Answers	Median page-load time on 3G	≤ 1.5 s
Student Engagement	Avg. pages/session	≥ 3
Discoverability	Top-10 Google rank for “Income Certificate Telangana”	≤ 3 months


⸻

3. 👥 Target Personas

Persona	Pain	Desired Outcome
Ravi (Class 10)	Doesn’t know job options post-SSC	List of jobs requiring only 10th pass
Suma (BSc graduate)	Needs Osmania Equivalency Certificate	Step-by-step guide with doc list & fees
Volunteer Contributor	Wants to add new job entry	Intuitive form; no Git knowledge


⸻

4. 🔧 Features (In Scope)
	1.	Structured Content Models
• Document Model (5-field)
• Job Model (education-level index)
	2.	Taxonomy Navigation – /qualifications/10th/, /documents/income-certificate/
	3.	Client-Side Search & Filter using JSON + Fuse.js
	4.	Decap CMS Integration – two collections (documents, jobs) with role-based access
	5.	Mobile-First Documentation Theme with sidebar navigation, breadcrumbs, and prev/next buttons
	6.	Multi-taxonomy Browsing with automatic list pages for qualifications, sectors, issuers, etc.
	7.	Clean URLs – One unique Markdown file per information unit
	8.	Static Output – Build-once, deploy-everywhere model for speed, transparency, and uptime

⸻

5. 🛠️ Technology Stack (Fixed and Final)

Layer	Technology	Reason
Static Site Generator	Hugo	Fast builds, native taxonomies, clean JSON output
Headless CMS	Decap CMS	Git-based visual editor; contributors never touch code
Documentation Theme	Doks (Hugo)	Sidebar nav, breadcrumb trail, Fuse.js search-ready
Search	Fuse.js + Hugo-generated index.json	Lightweight, works offline, JS-only filter
Hosting	Netlify	CI/CD, custom domain, auto-SSL, preview deploys
Analytics	Plausible (optional)	Privacy-compliant insights

🔒 Only these technologies will be used. No external backends, APIs, databases, or frontend frameworks are permitted.

⸻

6. 📐 Content Architecture

content/
├── documents/<document_type>/<issuing_body>/<target_context>/<slug>.md
└── jobs/<sector>/<min_qualification>/<slug>.md

Taxonomies:

document, issuer, context, qualification, sector, state

Archetypes:

archetypes/document.md
archetypes/job.md

Each Markdown file stores structured front matter and rich Markdown body content.

⸻

7. 🧑‍💻 Contributor Workflow
	1.	Contributor logs into /admin (Decap CMS)
	2.	Chooses collection (documents or jobs)
	3.	Fills out form with guided dropdowns and WYSIWYG body
	4.	Submits → GitHub Pull Request auto-created
	5.	Maintainer reviews and merges PR
	6.	Netlify builds and deploys within ~30 seconds

⸻

8. ✅ Acceptance Criteria
	•	Users visiting /qualifications/10th/ see all relevant 10th-pass jobs
	•	Fuse.js search returns matching results from index.json in under 0.3 seconds
	•	Page loads are fast: Lighthouse score ≥ 90 on mobile
	•	Each content update (via CMS) appears on site within 1 minute
	•	The system supports >1,000 entries without performance degradation

⸻

9. 📅 Milestones

Date	Milestone
2025-06-07	Initial project scaffolding (Hugo + Doks + CMS)
2025-06-10	Live deployment on Netlify with working domain
2025-06-15	15 document pages + 10 job pages populated
2025-06-30	Search UI + feedback form deployed
2025-07-01      Feedback form user testing begins
2025-07-15	Round-1 user testing completed; feedback incorporated


⸻

🔚 End of PRD

Only Hugo and Decap CMS are approved for this system. All project planning, breakdowns, and implementation steps are to be generated and managed through Taskmaster MCP via WindSurf.

