# Firebase Setup Guide

This guide will help you configure Firebase services for the Style Match app.

## Prerequisites

- Firebase account (free tier works fine)
- Firebase project `style-match-8d882` created
- Firebase CLI installed (included in dev dependencies)

## Step 1: Get Firebase Configuration

### 1.1 Access Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **style-match-8d882**

### 1.2 Get Web App Credentials

1. Click the **gear icon** (⚙️) next to "Project Overview"
2. Select **Project Settings**
3. Scroll down to **"Your apps"** section
4. If you haven't added a web app yet:
   - Click **"Add app"** or the **</> Web** icon
   - Register app with nickname: "Style Match Web"
   - **Enable Firebase Hosting** (check the box)
   - Click **Register app**

5. Copy the Firebase config values:
   ```javascript
   const firebaseConfig = {
     apiKey: "AIza...",
     authDomain: "style-match-8d882.firebaseapp.com",
     projectId: "style-match-8d882",
     storageBucket: "style-match-8d882.appspot.com",
     messagingSenderId: "319415839606",
     appId: "1:319415839606:web:..."
   };
   ```

## Step 2: Configure Environment Variables

### 2.1 Create Local Environment File

```bash
cp .env.example .env.local
```

### 2.2 Update `.env.local`

Add your Firebase credentials:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=AIza...your-actual-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=style-match-8d882.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=style-match-8d882
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=style-match-8d882.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=319415839606
NEXT_PUBLIC_FIREBASE_APP_ID=1:319415839606:web:...your-actual-app-id

# Environment
NODE_ENV=development
```

**Important**: Never commit `.env.local` to git! It's already in `.gitignore`.

## Step 3: Enable Firebase Services

### 3.1 Enable Authentication

1. In Firebase Console, go to **Build** → **Authentication**
2. Click **Get started**
3. Enable sign-in methods:
   - **Email/Password** - Click and enable
   - **Google** - Click, enable, and set public-facing name
   - **Apple** (optional) - For iOS users
   - **Facebook** (optional) - For social login

### 3.2 Enable Firestore Database

1. Go to **Build** → **Firestore Database**
2. Click **Create database**
3. Choose **Start in production mode** (we'll add security rules later)
4. Select a location (choose closest to your users):
   - `us-central1` (Iowa) - Good for US
   - `europe-west1` (Belgium) - Good for EU
   - `asia-southeast1` (Singapore) - Good for Asia
5. Click **Enable**

### 3.3 Enable Firebase Storage

1. Go to **Build** → **Storage**
2. Click **Get started**
3. Start in **production mode**
4. Use same location as Firestore
5. Click **Done**

### 3.4 Enable Firebase Hosting

1. Go to **Build** → **Hosting**
2. Click **Get started**
3. Follow the prompts (we'll deploy via CLI later)

## Step 4: Configure Security Rules

### 4.1 Firestore Security Rules

In Firebase Console → Firestore → Rules, add:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own profile
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // Users can read/write their own outfits
    match /outfits/{outfitId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null &&
                      request.resource.data.userId == request.auth.uid;
    }

    // Couples collection - users can access their couple data
    match /couples/{coupleId} {
      allow read, write: if request.auth != null &&
                            request.auth.uid in resource.data.userIds;
    }
  }
}
```

Click **Publish** to save.

### 4.2 Storage Security Rules

In Firebase Console → Storage → Rules, add:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // User outfit images
    match /users/{userId}/outfits/{outfitId}/{allPaths=**} {
      // Only the owner can upload/delete
      allow write, delete: if request.auth != null && request.auth.uid == userId;
      // Anyone authenticated can view
      allow read: if request.auth != null;
    }
  }
}
```

Click **Publish** to save.

## Step 5: Test Firebase Connection

### 5.1 Install Dependencies

```bash
npm install
```

### 5.2 Run Development Server

```bash
npm run dev
```

### 5.3 Verify Firebase Initialization

The app should start without Firebase errors. Check browser console at http://localhost:3000

You should see Firebase initialized successfully (no errors in console).

## Step 6: Deploy to Firebase Hosting

### 6.1 Login to Firebase

```bash
npx firebase login
```

### 6.2 Deploy

```bash
npm run deploy
```

After deployment, your app will be live at:
- **https://style-match-8d882.web.app**
- **https://style-match-8d882.firebaseapp.com**

## Firestore Database Structure

```
users/
  {userId}/
    email: string
    displayName: string
    photoURL: string
    coupleId: string (optional)
    preferences: object
    createdAt: timestamp

outfits/
  {outfitId}/
    userId: string
    imageUrl: string
    thumbnailUrl: string
    tags: array
    colors: array
    category: string
    createdAt: timestamp

couples/
  {coupleId}/
    userIds: array [userId1, userId2]
    inviteCode: string
    createdAt: timestamp

matches/
  {matchId}/
    coupleId: string
    outfit1Id: string
    outfit2Id: string
    score: number
    eventType: string
    createdAt: timestamp
```

## Storage Structure

```
users/
  {userId}/
    outfits/
      {outfitId}/
        original.jpg
        thumbnail.jpg
```

## Troubleshooting

### "Firebase: Error (auth/api-key-not-valid)"
- Check that `NEXT_PUBLIC_FIREBASE_API_KEY` in `.env.local` matches Firebase Console

### "Missing or insufficient permissions"
- Verify Firestore security rules are published
- Ensure user is authenticated before accessing data

### Build fails with Firebase errors
- Make sure all `NEXT_PUBLIC_FIREBASE_*` variables are set
- Check that `.env.local` exists and has correct values

### Can't upload images
- Verify Firebase Storage is enabled
- Check Storage security rules are published
- Ensure user is authenticated

## Next Steps

1. ✅ Firebase services enabled
2. ✅ Environment variables configured
3. ✅ Security rules published
4. ✅ App deployed to Firebase Hosting

Now you're ready to:
- Implement authentication UI
- Build outfit upload functionality
- Create the matching algorithm
- Add couple linking features

## Useful Firebase CLI Commands

```bash
# View Firebase projects
npx firebase projects:list

# Check current project
npx firebase use

# View hosting sites
npx firebase hosting:sites:list

# View Firestore indexes
npx firebase firestore:indexes

# Deploy only hosting
npx firebase deploy --only hosting

# Deploy hosting + rules
npx firebase deploy --only hosting,firestore:rules,storage:rules
```

## Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Queries](https://firebase.google.com/docs/firestore/query-data/queries)
- [Firebase Auth](https://firebase.google.com/docs/auth)
- [Firebase Storage](https://firebase.google.com/docs/storage)
- [Security Rules](https://firebase.google.com/docs/rules)
