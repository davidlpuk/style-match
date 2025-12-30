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

### Deploy to Firebase (View on Mobile)

1. Update `.firebaserc` with your Firebase project ID
2. Run deployment:
   ```bash
   npm run deploy
   ```
3. Access the URL on your mobile device!

📱 See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed deployment instructions.

## Tech Stack
- Frontend: React + Next.js 14
- Styling: Tailwind CSS
- Language: TypeScript
- Hosting: Firebase Hosting
- Image Storage: Cloudinary (planned)

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

- [Architecture](docs/ARCHITECTURE.md)
- [Deployment Guide](docs/DEPLOYMENT.md)
- [Contributing](docs/CONTRIBUTING.md)

## License
MIT
