# Deployment Guide - Firebase Hosting

This guide will help you deploy the Style Match app to Firebase Hosting so you can access it from any device, including your mobile phone.

## Prerequisites

- Firebase account (free tier works fine)
- Firebase project created in the [Firebase Console](https://console.firebase.google.com/)
- Firebase CLI installed globally (or use the local version via npm)

## Step 1: Configure Your Firebase Project

1. Open `.firebaserc` and replace `your-firebase-project-id` with your actual Firebase project ID:
   ```json
   {
     "projects": {
       "default": "your-actual-project-id"
     }
   }
   ```

2. You can find your project ID in the Firebase Console under Project Settings.

## Step 2: Install Dependencies

```bash
npm install
```

This will install all dependencies including `firebase-tools`.

## Step 3: Login to Firebase (First Time Only)

If you haven't logged in to Firebase CLI before:

```bash
npx firebase login
```

This will open a browser window for authentication.

## Step 4: Build and Deploy

### Option A: Full Deployment

Deploy to production:

```bash
npm run deploy
```

This command will:
1. Build the Next.js app with static export
2. Deploy the `out` folder to Firebase Hosting
3. Provide you with a live URL

### Option B: Preview Deployment

Test the deployment on a preview channel first:

```bash
npm run deploy:preview
```

This creates a temporary preview URL that expires after 7 days.

## Step 5: Access on Mobile

After deployment, you'll receive a URL like:

```
https://your-project-id.web.app
```

or

```
https://your-project-id.firebaseapp.com
```

Simply open this URL on your mobile browser to view the app!

## Useful Commands

- `npx firebase hosting:sites:list` - List all hosting sites
- `npx firebase hosting:channel:list` - List preview channels
- `npx firebase hosting:channel:delete preview` - Delete preview channel
- `npm run build` - Build the app locally (output in `out` folder)

## Custom Domain (Optional)

To use a custom domain:

1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Follow the DNS configuration steps
4. Wait for SSL certificate provisioning (usually 24 hours)

## Troubleshooting

### Build fails
- Check that all dependencies are installed: `npm install`
- Make sure there are no TypeScript errors: `npx tsc --noEmit`

### Deployment fails
- Verify you're logged in: `npx firebase login`
- Check your project ID in `.firebaserc`
- Ensure you have permission to deploy to the project

### App doesn't work on mobile
- Check browser console for errors
- Ensure all assets loaded correctly
- Test on desktop first to isolate mobile-specific issues

## Local Testing

To test the production build locally before deploying:

```bash
npm run build
npx serve out
```

Then visit `http://localhost:3000` to see the static export.

## Automatic Deployments with GitHub Actions (Advanced)

You can set up automatic deployments on every push to main. See the Firebase documentation for GitHub Actions integration.
