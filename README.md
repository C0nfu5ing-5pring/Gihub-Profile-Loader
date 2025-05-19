# 🔍 GitHub Profile Loader

**A slick, minimal web app that fetches and displays detailed GitHub user profiles and repositories.**  
Built with plain JavaScript and styled using Tailwind CSS — no frameworks, just raw speed and clean UI.

## 🚀 Live Preview

[🔗 GitHub Pages Link](https://c0nfu5ing-5pring.github.io/Gihub-Profile-Loader/)

---

## 📸 Features

- Fetches user profile data using the GitHub API
- Displays:
  - Avatar, name, username, bio
  - Location, company, personal website
  - Repo count, followers/following
  - Top 6 most recently updated repositories
- Shows:
  - Stars, creation & update dates, language
- Fully responsive & dark-themed using Tailwind CSS

---

## 🛠️ Tech Stack

- HTML5
- Vanilla JavaScript
- Tailwind CSS
- GitHub REST API

---

## ⚠️ API Rate Limiting

This app uses **unauthenticated GitHub API calls**, which are limited to **60 requests/hour per IP address**.  
To bypass this in production, consider:

- Adding a backend to proxy requests
- Using GitHub OAuth with a personal access token

---

## 📦 How to Use

1. Clone the repo:
   ```bash
   git clone https://github.com/C0nfu5ing-5pring/Gihub-Profile-Loader.git
   cd Gihub-Profile-Loader
   ```
2. Open index.html in your browser
3. Enter a GitHub username and submit
