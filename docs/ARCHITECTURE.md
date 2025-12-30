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
- **Database**: Firebase Firestore (NoSQL)
- **Authentication**: Firebase Authentication
- **Image Storage**: Firebase Storage

### Infrastructure
- **Hosting**: Firebase Hosting
- **CI/CD**: GitHub Actions (to be added)
- **Firebase Project**: style-match-8d882

## Project Structure

```
style-match/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   ├── lib/
│   │   └── firebase.ts   # Firebase configuration
│   └── types/           # TypeScript type definitions
├── public/              # Static assets
├── docs/               # Documentation
├── firebase.json        # Firebase Hosting config
├── .firebaserc         # Firebase project config
└── package.json        # Dependencies
```

## Key Features (Planned)

1. **User Authentication (Firebase Auth)**
   - Email/password login
   - OAuth integration (Google, Apple, Facebook)
   - Couple linking via invite codes
   - Session management

2. **Outfit Management (Firestore + Storage)**
   - Photo upload to Firebase Storage
   - Metadata stored in Firestore
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

Production deployment on Firebase Hosting:
- Static export build: `npm run build`
- Deploy: `npm run deploy`
- Preview: `npm run deploy:preview`

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## Firebase Services Used

### Firestore (Database)
- **Collections**: users, outfits, couples, matches, events
- **Real-time updates**: Live sync for couple profiles
- **Offline support**: Cache outfit data locally

### Firebase Authentication
- **Providers**: Email/Password, Google, Apple
- **Security**: Firebase Auth tokens, secure session management
- **User profiles**: Linked to Firestore user documents

### Firebase Storage
- **Outfit images**: Original uploads
- **Thumbnails**: Generated on upload
- **Organization**: `/users/{userId}/outfits/{outfitId}/`
- **Access control**: Security rules based on user ownership
