# Decap CMS for 1516 FAQ

This directory contains the configuration for Decap CMS, which provides a web-based content management interface for your Hugo site.

## Setup Instructions

1. **Configure GitHub OAuth**
   - Ensure the site is linked to this repository in Netlify.
   - Create a new OAuth App under **GitHub → Settings → Developer settings → OAuth Apps**.
   - Add `https://api.netlify.com/auth/done` to the App's **Authorization callback URLs**.
   - In Netlify go to **Site settings → Authentication → External providers** and enter the OAuth App's client credentials.
   - The CMS backend (see `static/admin/config.yml`) uses Netlify as the OAuth provider.

2. **Grant Repository Access**
   - Contributors need write access to the GitHub repository.
   - Once added as collaborators they can authenticate with GitHub to edit content.

3. **Access the Admin Panel**
   - Visit `https://your-site-url.netlify.app/admin/` to open Decap CMS.
   - Log in with your GitHub account when prompted.

## Content Types

### Pages
- Location: `content/pages/`
- Fields:
  - Title
  - Publish Date
  - Body (Markdown)

### Posts
- Location: `content/posts/`
- Fields:
  - Title
  - Publish Date
  - Description
  - Body (Markdown)

## Media Uploads
- All media files are stored in `static/uploads/`
- Reference them in your content using `/uploads/filename.jpg`

## Development

To test the CMS locally:

1. Run your Hugo site locally
2. Visit `http://localhost:1313/admin/`
3. You'll need to configure local backend settings in `static/admin/config.yml`

## Troubleshooting

- If you see "Failed to load settings from config.yml", check your YAML syntax
- For authentication issues, verify your GitHub OAuth configuration and callback URL
- Clear your browser cache if you make changes to the admin config
