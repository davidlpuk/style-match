# Site Map - Style Match

## Current Pages

### Public Pages
```
/                           # Home/Landing Page
                           # Features: Hero section, CTA buttons
                           # File: src/app/page.tsx
```

---

## Planned Pages

### Authentication
```
/login                     # User login
/signup                    # New user registration
/forgot-password           # Password reset request
/reset-password/:token     # Password reset form
```

### User Dashboard
```
/dashboard                 # Main user dashboard
                          # Overview of outfits, matches, events

/profile                   # User profile management
/profile/settings          # Account settings
/profile/preferences       # Style preferences
```

### Outfit Management
```
/outfits                   # Outfit gallery/list
/outfits/new               # Upload new outfit
/outfits/:id               # View single outfit details
/outfits/:id/edit          # Edit outfit details
```

### Couple Features
```
/couple                    # Couple dashboard
/couple/link               # Link/invite partner
/couple/matches            # View matched outfits
/couple/calendar           # Event calendar
```

### Style Matching
```
/match                     # Style matching interface
/match/suggestions         # AI-generated outfit suggestions
/match/events              # Event-based recommendations
```

### Social/Discovery
```
/explore                   # Discover inspiration
/collections               # Saved outfit collections
/favorites                 # Favorited outfits
```

### Legal & Info
```
/about                     # About Style Match
/privacy                   # Privacy policy
/terms                     # Terms of service
/contact                   # Contact form
```

---

## API Routes (Planned)

### Authentication
```
/api/auth/login            # POST - User login
/api/auth/signup           # POST - User registration
/api/auth/logout           # POST - User logout
/api/auth/refresh          # POST - Refresh token
```

### Users
```
/api/users/me              # GET - Current user profile
/api/users/:id             # GET - User by ID
/api/users/me              # PATCH - Update profile
```

### Outfits
```
/api/outfits               # GET - List outfits, POST - Create outfit
/api/outfits/:id           # GET - Single outfit, PATCH - Update, DELETE - Remove
/api/outfits/:id/upload    # POST - Upload outfit image
```

### Couple
```
/api/couple/link           # POST - Link with partner
/api/couple/unlink         # DELETE - Unlink partner
/api/couple/matches        # GET - Get matched outfits
```

### Matching
```
/api/match/suggest         # POST - Get AI suggestions
/api/match/analyze         # POST - Analyze outfit compatibility
/api/match/colors          # POST - Extract color palette
```

---

## Navigation Structure

### Header Navigation
```
┌─ Logo (/)
├─ Dashboard
├─ Outfits
├─ Match
├─ Explore
└─ Profile
   ├─ Settings
   ├─ Couple
   └─ Logout
```

### Footer Navigation
```
┌─ About
├─ Privacy
├─ Terms
├─ Contact
└─ Social Links
```

### Mobile Bottom Nav
```
┌─ Home (Dashboard)
├─ Outfits
├─ Match
├─ Couple
└─ Profile
```

---

## User Flow

### First-Time User
1. `/` - Landing page
2. `/signup` - Create account
3. `/profile/preferences` - Set style preferences
4. `/couple/link` - Link with partner (optional)
5. `/outfits/new` - Upload first outfit
6. `/dashboard` - View dashboard

### Returning User
1. `/login` - Sign in
2. `/dashboard` - Main dashboard
3. `/match` - Get outfit suggestions
4. `/outfits` - Browse wardrobe
5. `/couple/matches` - View couple matches

---

## Page Priority

### Phase 1 (MVP)
- [x] Landing page (`/`)
- [ ] Authentication (`/login`, `/signup`)
- [ ] Dashboard (`/dashboard`)
- [ ] Outfit management (`/outfits`, `/outfits/new`, `/outfits/:id`)
- [ ] Basic profile (`/profile`)

### Phase 2
- [ ] Couple linking (`/couple/link`)
- [ ] Style matching (`/match`)
- [ ] Match suggestions (`/match/suggestions`)
- [ ] Profile preferences (`/profile/preferences`)

### Phase 3
- [ ] Event calendar (`/couple/calendar`)
- [ ] Social features (`/explore`, `/collections`)
- [ ] Advanced matching features
- [ ] Shopping integration

---

## Notes

- All authenticated routes require login
- Mobile-first responsive design for all pages
- Progressive Web App (PWA) support planned
- Offline functionality for viewing saved outfits (planned)
- Deep linking support for sharing outfit matches
