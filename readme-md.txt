# Nature Village - Kurdish Restaurant Website

A modern, multilingual restaurant website built with Next.js and powered by Blunari's MenuIQ technology.

## 🌟 Features

- 🌍 **Multilingual Support**: English, Kurdish (کوردی), and Arabic (العربية)
- 🍽️ **MenuIQ Integration**: AI-enhanced dynamic menu system
- 📱 **Responsive Design**: Mobile-first approach with modern UI
- 🎨 **Cultural Authenticity**: Kurdish design patterns and traditional elements
- ⚡ **Performance Optimized**: Built for speed and SEO
- 🚀 **Vercel Ready**: Configured for seamless deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Noto Sans Arabic)
- **Deployment**: Vercel

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Git installed

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd nature-village-restaurant
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
nature-village-restaurant/
├── components/
│   └── NatureVillageWebsite.js    # Main website component
├── pages/
│   ├── api/
│   │   ├── menu.js                # MenuIQ API endpoint
│   │   └── reservation.js         # Reservation API
│   ├── _app.js                    # App wrapper
│   └── index.js                   # Homepage
├── public/
│   └── robots.txt                 # SEO robots file
├── styles/
│   └── globals.css                # Global styles
├── next.config.js                 # Next.js configuration
├── tailwind.config.js             # Tailwind CSS config
├── package.json                   # Dependencies
└── vercel.json                    # Vercel deployment config
```

## 🌐 Deployment on Vercel

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit: Nature Village website"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy
   - Your site will be live at `https://your-project.vercel.app`

### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** and your site will be deployed

## 🔧 Configuration

### Environment Variables
Create `.env.local` for development:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key
MENUIQ_API_KEY=your_menuiq_api_key
```

### Custom Domain
1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings > Domains
4. Add your custom domain

## 🌍 Multilingual Support

The website supports three languages:
- **English** (default): `/`
- **Kurdish**: Available via language selector
- **Arabic**: Available via language selector

### Adding New Languages
1. Add locale to `next.config.js`
2. Extend `translations` object in the main component
3. Add language option to the dropdown

## 📱 MenuIQ Integration

The website is prepared for Blunari's MenuIQ integration:

- **API Endpoints**: `/api/menu` and `/api/reservation`
- **Dynamic Menu Structure**: Multilingual menu support
- **Real-time Updates**: Ready for menu changes
- **AI Features**: Structured for AI recommendations

### Menu API Example
```javascript
// GET /api/menu
{
  "items": [
    {
      "id": 1,
      "name": {
        "en": "Kebab-e Kubideh",
        "ku": "کەباب کوبیده", 
        "ar": "كباب كوبيده"
      },
      "price": 18.99,
      "category": "traditional",
      "popular": true
    }
  ]
}
```

## 🎨 Customization

### Styling
- **Colors**: Edit `tailwind.config.js` for brand colors
- **Fonts**: Modify font imports in `pages/_app.js`
- **Components**: Update styles in `styles/globals.css`

### Content
- **Menu Items**: Edit data in `components/NatureVillageWebsite.js`
- **Translations**: Update `translations` object
- **Images**: Replace URLs with your own images

### Adding Features
- **Contact Forms**: Extend `/api/reservation.js`
- **Online Ordering**: Integrate with MenuIQ
- **Payment**: Add Stripe/Square integration

## 📊 SEO & Performance

### Built-in SEO
- Structured data for restaurant information
- Open Graph meta tags
- Multilingual SEO support
- Automatic sitemap generation

### Performance Features
- Server-side rendering with Next.js
- Optimized images and fonts
- Code splitting and lazy loading
- Core Web Vitals optimized

### Analytics Setup
Add to `pages/_app.js`:
```javascript
// Google Analytics
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
```

## 🔒 Security

- Security headers configured in `vercel.json`
- XSS protection enabled
- Content Security Policy ready
- HTTPS enforced on Vercel

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**
   ```bash
   npm run build
   # Check for any TypeScript or lint errors
   ```

2. **Image Loading Issues**
   - Ensure image domains are added to `next.config.js`
   - Check image URLs are accessible

3. **Font Loading**
   - Verify Google Fonts links in `_app.js`
   - Check for network connectivity

### Getting Help
- Check [Next.js Documentation](https://nextjs.org/docs)
- Visit [Vercel Documentation](https://vercel.com/docs)
- Contact Blunari support for MenuIQ integration

## 📝 License

© 2024 Nature Village Kurdish Restaurant. All rights reserved.

**Powered by Blunari & MenuIQ Technology**

---

## 🚀 Ready to Deploy!

Your Nature Village website is now ready for production. Simply push to GitHub and deploy on Vercel for a lightning-fast, globally distributed Kurdish restaurant website.

For support or custom development, contact the Blunari team.