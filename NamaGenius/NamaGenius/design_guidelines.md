# NamaX Design Guidelines

## Design Approach
**Reference-Based Approach** - Drawing inspiration from modern productivity tools like Linear and Notion, combined with the clean aesthetic of language learning platforms, to create a focused utility experience for name generation.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Sky Blue: 195 100% 50% (#00CFFF) - Primary brand color for buttons, links, and accents
- White: 0 0% 100% (#FFFFFF) - Primary background and card surfaces
- Navy Blue: 210 95% 18% (#002B5B) - Primary text and headings
- Light Gray: 210 25% 97% (#F5F7FA) - Section backgrounds and subtle dividers

**Dark Mode Adaptation:**
- Dark background: 210 25% 8%
- Card surfaces: 210 20% 12%
- Text: 210 15% 92%
- Sky blue remains consistent for brand recognition

### B. Typography
**Primary Font:** Inter (Google Fonts)
- Headings: Inter 600-700 (semibold to bold)
- Body: Inter 400-500 (regular to medium)
- Arabic/Hindi: Noto Sans Arabic, Noto Sans Devanagari via Google Fonts

**Hierarchy:**
- Hero title: text-4xl to text-6xl
- Section headers: text-2xl to text-3xl  
- Card titles: text-lg to text-xl
- Body text: text-base
- Labels: text-sm

### C. Layout System
**Spacing Scale:** Consistent use of Tailwind units 2, 4, 6, 8, 12, 16
- Component padding: p-4, p-6, p-8
- Section margins: mt-8, mb-12, my-16
- Card spacing: gap-4, gap-6
- Button padding: px-4 py-2, px-6 py-3

**Grid System:**
- Container: max-w-7xl mx-auto
- Cards: CSS Grid with auto-fit minmax(300px, 1fr)
- Mobile: Single column with full-width cards

### D. Component Library

**Navigation:**
- Clean header with NamaX logo (sky blue text)
- Language switcher with flag icons
- Minimal design with transparent background

**Hero Section:**
- Clean, centered layout with generous whitespace
- Primary heading + subtitle
- Single prominent CTA button
- No hero image - focus on typography and clean design

**Generator Cards:**
- White background with subtle shadow
- Rounded corners (rounded-lg)
- Sky blue accent borders on hover
- Organized in responsive grid layout
- Each card contains: icon, title, description, input controls

**Forms & Controls:**
- Clean input fields with sky blue focus states
- Dropdown selectors with consistent styling
- Range sliders for character limits
- Checkbox groups for filters
- Generate buttons with sky blue background

**Generated Results:**
- Clean list display with copy-to-clipboard functionality
- Subtle animations for result appearance
- Clear typography hierarchy

### E. RTL Support
- Automatic text direction switching
- Mirrored layouts for Arabic interface
- Consistent spacing and alignment across all languages
- Font switching to appropriate typefaces

### F. Animations
**Minimal Implementation:**
- Subtle hover effects on cards (slight shadow increase)
- Smooth transitions on form interactions (0.2s ease)
- Gentle fade-in for generated results
- Language switching transitions

## Layout Structure
**Single Page Sections:**
1. Header with navigation and language switcher
2. Hero section with main value proposition
3. Personal Name Generators (2-3 cards per row)
4. Keyword & Synonym Generator (dedicated section)
5. Specialized Generators (company, pet, place, etc.)
6. Footer with simple branding

**Mobile Optimization:**
- Single column card layout
- Touch-friendly button sizing (minimum 44px height)
- Collapsible filter sections
- Swipe-friendly interactions

## Key Design Principles
1. **Clarity First:** Every element serves the core name generation function
2. **Consistent Branding:** Sky blue used strategically throughout
3. **Cultural Sensitivity:** Proper RTL support and culturally appropriate name databases
4. **Performance Focus:** Minimal animations, optimized for quick interactions
5. **Accessibility:** High contrast ratios, keyboard navigation, screen reader support

This design creates a professional, trustworthy platform that emphasizes functionality while maintaining visual appeal through consistent use of the specified color palette and clean, modern typography.