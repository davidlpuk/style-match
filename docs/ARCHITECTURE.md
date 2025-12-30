# Architecture

## Overview
Style Match is a Next.js-based web application that helps couples coordinate their fashion choices.

## Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: React 18

### Backend
- **API**: Next.js API Routes
- **Database**: PostgreSQL
- **ORM**: Prisma (to be added)
- **Authentication**: NextAuth.js (to be added)

### Infrastructure
- **Image Storage**: Cloudinary
- **Hosting**: Vercel (recommended)
- **CI/CD**: GitHub Actions (to be added)

## Project Structure

```
style-match/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   ├── lib/             # Utility functions and services
│   └── types/           # TypeScript type definitions
├── public/              # Static assets
├── docs/               # Documentation
└── package.json        # Dependencies
```

## Key Features (Planned)

1. **User Authentication**
   - Email/password login
   - OAuth integration (Google, Apple)
   - Couple linking via invite codes

2. **Outfit Management**
   - Photo upload and categorization
   - Tagging (casual, formal, seasonal, etc.)
   - Color extraction and analysis

3. **Style Matching**
   - Compatibility scoring algorithm
   - Coordinated outfit suggestions
   - Event-based recommendations

4. **Social Features**
   - Shared couple profile
   - Outfit voting/feedback
   - Style inspiration feed

## Development Workflow

1. Local development: `npm run dev`
2. Build: `npm run build`
3. Type checking: `tsc --noEmit`
4. Linting: `npm run lint`
5. Testing: `npm test`

## Deployment

Production deployment recommended on Vercel with automatic CI/CD from the main branch.
