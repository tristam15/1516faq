# Decap CMS for 1516 FAQ

This directory contains the configuration for Decap CMS, which provides a web-based content management interface for your Hugo site.

## Setup Instructions

1. **Enable Identity and Git Gateway**
   - Go to your site settings on Netlify
   - Navigate to "Identity" and enable it
   - Under "Registration preferences", select "Invite only" for better security
   - Click on "Enable Git Gateway" to authenticate with GitHub

2. **Invite Users**
   - Go to the "Identity" tab in your Netlify dashboard
   - Click on "Invite users" to invite team members
   - Users will receive an email invitation to set up their account

3. **Access the Admin Panel**
   - Visit `https://your-site-url.netlify.app/admin/` to access the CMS
   - Log in with your GitHub account

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
- For authentication issues, verify your Netlify Identity and Git Gateway settings
- Clear your browser cache if you make changes to the admin config
