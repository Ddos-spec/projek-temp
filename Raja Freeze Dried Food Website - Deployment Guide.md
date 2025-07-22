# Raja Freeze Dried Food Website - Deployment Guide

## Project Overview
This is a premium Next.js website for "Raja Freeze Dried Food" built according to your specifications. The website includes:

- **Homepage** (/) - Hero section with course information and pricing
- **Blog** (/blog) - Article listing page with 6 sample articles
- **About** (/about) - Company story, vision, mission, and team
- **Contact** (/contact) - Contact information, form, and FAQ

## Key Features Implemented

### ✅ Technical Requirements Met
- **Next.js 15.4.2** with App Router
- **Tailwind CSS** for styling
- **TypeScript** for type safety
- **Perfect SEO setup** with metadata, structured data, sitemap, and robots.txt
- **Floating widgets** for WhatsApp, Shopee, and Tokopedia
- **Responsive design** for mobile and desktop
- **Optimized performance** with image optimization and compression

### ✅ Design Philosophy
- **Professional & Clean** - Modern, trustworthy design
- **Informative & Clear** - Easy to understand product information
- **Fast Performance** - Optimized for speed
- **Conversion Focused** - All elements guide users to contact via WhatsApp/marketplaces

## Installation & Setup

1. **Extract the project files**
   ```bash
   tar -xzf raja-freeze-dried-food.tar.gz
   cd raja-freeze-dried-food
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   Open http://localhost:3000 in your browser

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## Project Structure
```
raja-freeze-dried-food/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Main layout with SEO
│   │   ├── page.tsx            # Homepage
│   │   ├── blog/
│   │   │   └── page.tsx        # Blog listing
│   │   ├── about/
│   │   │   └── page.tsx        # About page
│   │   ├── contact/
│   │   │   └── page.tsx        # Contact page
│   │   ├── sitemap.ts          # SEO sitemap
│   │   └── robots.ts           # SEO robots.txt
│   └── components/
│       ├── Header.tsx          # Navigation header
│       ├── Footer.tsx          # Site footer
│       └── FloatingWidgets.tsx # WhatsApp/Shopee/Tokopedia buttons
├── package.json
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS config
└── tsconfig.json              # TypeScript config
```

## Customization Guide

### 1. Contact Information
Update contact details in:
- `src/components/FloatingWidgets.tsx` - WhatsApp number and marketplace links
- `src/components/Header.tsx` - Header WhatsApp link
- `src/components/Footer.tsx` - Footer contact info
- `src/app/contact/page.tsx` - Contact page details

### 2. Content Updates
- **Homepage**: Edit `src/app/page.tsx`
- **Blog articles**: Edit `src/app/blog/page.tsx`
- **About content**: Edit `src/app/about/page.tsx`
- **Contact info**: Edit `src/app/contact/page.tsx`

### 3. SEO Optimization
- **Metadata**: Update `src/app/layout.tsx`
- **Structured data**: Modify JSON-LD in layout.tsx
- **Sitemap**: Update `src/app/sitemap.ts`

### 4. Styling
- **Colors**: Modify Tailwind classes (currently using green-600 as primary)
- **Fonts**: Update in `src/app/layout.tsx`
- **Layout**: Adjust component styles in respective files

## Deployment Options

### Option 1: Vercel (Recommended)
1. Push code to GitHub repository
2. Connect to Vercel
3. Deploy automatically

### Option 2: Netlify
1. Build the project: `npm run build`
2. Upload the `.next` folder to Netlify
3. Configure as Next.js site

### Option 3: Traditional Hosting
1. Build static export: Add `output: 'export'` to next.config.ts
2. Run `npm run build`
3. Upload `out` folder to any web hosting

## Performance Notes
- All images are optimized with Next.js Image component
- CSS is optimized and compressed
- JavaScript is code-split and optimized
- SEO is fully implemented with structured data

## Support
The website is built to be production-ready with:
- ✅ Perfect Lighthouse scores capability
- ✅ Mobile-responsive design
- ✅ SEO optimization
- ✅ Fast loading times
- ✅ Professional appearance

For any customizations or issues, refer to the Next.js documentation or modify the component files as needed.

