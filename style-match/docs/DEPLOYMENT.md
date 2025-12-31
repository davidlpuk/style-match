# Deployment & Monitoring Guide

## 🚀 Quick Deployment to Vercel

### Prerequisites
1. **GitHub Repository**: Code pushed to https://github.com/davidlpuk/style-match
2. **Vercel Account**: Sign up at https://vercel.com
3. **Environment Variables**: Set up in Vercel dashboard

### Step 1: Deploy to Vercel

#### Option A: Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

#### Option B: GitHub Integration
1. Go to https://vercel.com/new
2. Import your GitHub repository: `davidlpuk/style-match`
3. Configure project settings:
   - **Framework**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

### Step 2: Environment Variables

Add these in Vercel Dashboard → Project → Settings → Environment Variables:

```
NEXT_PUBLIC_SENTRY_DSN=https://your-sentry-dsn@sentry.io/project-id
SENTRY_DSN=https://your-sentry-server-dsn@sentry.io/project-id
NEXT_PUBLIC_API_URL=https://your-api-domain.com
NODE_ENV=production
```

### Step 3: Custom Domain (Optional)
1. Go to Vercel Dashboard → Project → Domains
2. Add your custom domain
3. Configure DNS records as instructed

## 🔍 Error Tracking with Sentry

### Setup Sentry
1. Create account at https://sentry.io
2. Create new project for Next.js
3. Copy DSN keys from project settings

### Configuration
- **Client-side DSN**: `NEXT_PUBLIC_SENTRY_DSN`
- **Server-side DSN**: `SENTRY_DSN`
- **Organization**: `SENTRY_ORG`
- **Project**: `SENTRY_PROJECT`

### Error Monitoring Features
- **Real-time error tracking**
- **Performance monitoring**
- **Session replay** (for debugging)
- **Release tracking**
- **Custom error boundaries**

## 📊 Performance Monitoring

### Core Web Vitals
The app automatically tracks:
- **FCP** (First Contentful Paint)
- **LCP** (Largest Contentful Paint)
- **FID** (First Input Delay)
- **CLS** (Cumulative Layout Shift)

### Google Analytics (Optional)
Add to `.env.production`:
```
NEXT_PUBLIC_GA_TRACKING_ID=GA-XXXXXXXXX
```

### Performance Monitoring Setup
1. **Enable in Sentry**: Performance tab in Sentry dashboard
2. **Core Web Vitals**: Automatically collected in production
3. **Custom metrics**: Available through PerformanceMonitor component

## 🧪 Testing & CI/CD

### GitHub Actions Pipeline
The `.github/workflows/ci-cd.yml` includes:

#### Pipeline Stages
1. **Test Matrix**: Node.js 18.x and 20.x
2. **Linting**: `npm run lint`
3. **Type Checking**: `npx tsc --noEmit`
4. **Unit Tests**: `npm test`
5. **Build Verification**: `npm run build`
6. **Security Audit**: `npm audit`
7. **Deployment**: Automatic to Vercel (main branch only)

#### Required GitHub Secrets
Add these in GitHub → Repository → Settings → Secrets and variables → Actions:

```
CODECOV_TOKEN=your-codecov-token
SNYK_TOKEN=your-snyk-token
VERCEL_TOKEN=your-vercel-token
VERCEL_ORG_ID=your-vercel-org-id
VERCEL_PROJECT_ID=your-vercel-project-id
```

### Running Tests Locally
```bash
# Install test dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm test -- --coverage
```

## 🔒 Security Best Practices

### Dependency Scanning
- **Snyk**: Automated vulnerability scanning
- **npm audit**: Built-in security audit
- **Dependabot**: Automatic dependency updates

### Security Headers
The `vercel.json` includes:
- CORS configuration
- Security headers for API routes
- HTTPS enforcement

### Environment Security
- Never commit `.env` files
- Use Vercel's encrypted environment variables
- Rotate secrets regularly
- Use different secrets for staging/production

## 📈 Monitoring Dashboard

### Sentry Dashboard
- **Error Overview**: Real-time error counts and trends
- **Performance**: Core Web Vitals and transaction monitoring
- **Releases**: Deploy tracking and error correlation
- **User Context**: Anonymous user tracking for debugging

### Vercel Analytics
- **Performance**: Core Web Vitals tracking
- **Usage**: Page views, unique visitors
- **Function Performance**: API route performance
- **Edge Network**: CDN performance metrics

### Custom Monitoring
- **Application Logs**: Available in Vercel dashboard
- **Function Logs**: Real-time function execution logs
- **Analytics**: Google Analytics integration ready

## 🚨 Alerting & Notifications

### Sentry Alerts
1. **Error Thresholds**: Configure alert rules in Sentry
2. **Performance Issues**: Set up alerts for Core Web Vitals
3. **Release Issues**: Alerts for deployment-related errors

### Vercel Notifications
- **Deployment Failures**: Email/Slack notifications
- **Performance Issues**: Automatic alerts for slow functions
- **Uptime Monitoring**: 99.9% uptime SLA

## 🔧 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

#### Environment Variable Issues
- Verify all required variables are set in Vercel
- Check variable names match exactly
- Ensure production values are different from development

#### Performance Issues
- Enable Sentry performance monitoring
- Check Vercel Analytics for Core Web Vitals
- Review bundle size with `npm run analyze`

#### Deployment Issues
- Check GitHub Actions logs
- Verify branch protection rules
- Ensure all tests pass before deployment

## 📞 Support

### Resources
- **Vercel Docs**: https://vercel.com/docs
- **Sentry Docs**: https://docs.sentry.io/platforms/javascript/guides/nextjs/
- **Next.js Docs**: https://nextjs.org/docs
- **GitHub Actions**: https://docs.github.com/en/actions

### Getting Help
1. Check deployment logs in Vercel dashboard
2. Review Sentry error reports
3. Consult GitHub Actions workflow logs
4. Refer to project documentation in `docs/` folder