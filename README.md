# Shadaab Hasan – Portfolio

My personal portfolio website, built with **Next.js** and **Tailwind CSS**, and deployed on **Vercel**.

🔗 **Live site:** [shadaabhasan.vercel.app](https://shadaabhasan.vercel.app)

## Features

- **Light and dark themes:** opens in light mode, with a switch for dark mode that remembers your choice
- **One data file for all projects:** every project lives in `data/projects.js` and is drawn by a single `ProjectRow` component, so adding a project means adding a few lines of data
- **Contact panel with a curtain reveal:** the page slides away at the end to uncover the contact details, using only CSS (`position: sticky` and layers), with a live Galway clock and a "Copy email" button
- **Generated link preview:** the image shown on LinkedIn and WhatsApp is built from code (`app/opengraph-image.js`) in the site's own font
- **Fully static:** every page is built ahead of time, so there's no server code and no secrets to manage

## Tech stack

- **Framework:** Next.js 16 (App Router), React 19
- **Styling:** Tailwind CSS, with colours stored as CSS variables for the two themes
- **Font:** Plus Jakarta Sans (via `next/font`)
- **Other:** next-themes (theme switching), Framer Motion (mobile menu)
- **Deployment:** Vercel

## Project structure

```
app/
  page.js              Home page
  AboutMe/page.js      About page (education, publication, certifications, skills)
  AllProjects/page.js  All projects
  components/          Navbar, Hero, ProjectRow, ContactPanel, theme switch
  fonts/               Font files for the link preview image
  opengraph-image.js   Link preview image
  globals.css          Colour themes and a few custom styles
data/
  projects.js          All project details
public/
  Shadaab_resume.pdf   CV
  certificates/        Certificate PDFs
  projects/            Project images
```

## Running it locally

1. Install the packages:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000).

## Contact

📧 [shadaabhasan7@gmail.com](mailto:shadaabhasan7@gmail.com) · 🔗 [LinkedIn](https://www.linkedin.com/in/shadaab-hasan-4a9b92271/)