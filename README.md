# Style Match

A fashion coordination app for style-conscious couples to match their outfits and discover coordinated looks together.

## Features (Coming Soon)
- 👔 Outfit catalog and management
- 💑 Couple profile linking
- 🎨 Style compatibility matching
- 📅 Event-based outfit planning
- 🛍️ Shopping recommendations

## Getting Started

### Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Setup Firebase

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Add your Firebase credentials from the Firebase Console to `.env.local`

3. Start development:
   ```bash
   npm run dev
   ```

### Deploy to Firebase (View on Mobile)

1. Build and deploy:
   ```bash
   npm run deploy
   ```

2. Access at **https://style-match-8d882.web.app** on any device!

📱 See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed deployment instructions.

## Tech Stack
- **Frontend**: React + Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Database**: Firebase Firestore
- **Authentication**: Firebase Authentication
- **Image Storage**: Firebase Storage
- **Hosting**: Firebase Hosting

## Project Structure

```
style-match/
├── src/
│   ├── app/          # Next.js App Router pages
│   ├── components/   # React components
│   ├── lib/         # Utilities
│   └── types/       # TypeScript types
├── docs/            # Documentation
└── public/          # Static assets
```

## Documentation

- [Architecture](docs/ARCHITECTURE.md) - Firebase integration & tech stack
- [Deployment Guide](docs/DEPLOYMENT.md) - Firebase Hosting deployment
- [Sitemap](docs/SITEMAP.md) - App structure & routes
- [Contributing](docs/CONTRIBUTING.md) - Development guidelines

## License
MIT
