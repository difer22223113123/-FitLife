# FitLife | Project Documentation & UI/UX Architecture

## 1. UI/UX Specification (Design System)

### Layout
*   **Grid:** 12-column grid for desktop, 4-column for mobile.
*   **Container:** Max-width 1200px with 20px side padding.
*   **Concept:** Modern "Dark Mode" fitness aesthetic with high-contrast accents to emphasize energy and professionalism.

### Colors
*   **Primary:** `#22c55e` (Emerald Green) - Represents health, growth, and energy.
*   **Background (Dark):** `#0f172a` (Slate 900) - Deep, premium feel.
*   **Surface (Cards):** `#1e293b` (Slate 800) - Subtle contrast for content blocks.
*   **Text (Primary):** `#f8fafc` (Slate 50) - High readability.
*   **Text (Secondary):** `#94a3b8` (Slate 400) - For descriptions and labels.
*   **Error:** `#ef4444` (Red 500) - For validation feedback.

### Typography
*   **Font Family:** 'Inter', sans-serif (Clean, modern, highly legible).
*   **Scale:**
    *   H1: 4rem (Mobile: 2.5rem) / Bold
    *   H2: 2.5rem / Bold
    *   Body: 1rem / Regular (Line-height: 1.6)

### Spacing
*   **Base Unit:** 8px
*   **Section Padding:** 80px (Vertical)
*   **Component Gap:** 24px - 32px

### Component System
*   **Buttons:** Rounded (8px), smooth transitions, subtle lift on hover.
*   **Cards:** 16px border-radius, subtle border (`rgba(255,255,255,0.05)`), hover lift effect.
*   **Inputs:** Dark background, 8px radius, primary color focus ring.

### Mobile Adaptation
*   **Navbar:** Collapses into a Hamburger Menu with a full-screen or slide-out overlay.
*   **Grids:** Switch from multi-column to single-column.
*   **Typography:** Scale down by ~30% for smaller screens.

---

## 2. Project Architecture

### Structure
The project follows a modular frontend architecture to ensure scalability and maintainability.

```text
D:\Culub\
├── index.html          # Main landing page
├── directions.html     # Service descriptions
├── signup.html         # Lead generation form
├── css/
│   └── style.css       # Global styles & design system
├── js/
│   ├── modules/        # Modular components
│   │   ├── menu.js     # Hamburger menu logic
│   │   ├── slider.js   # Reviews slider
│   │   ├── calc.js     # BMI/Calories calculator
│   │   ├── validator.js # Form validation logic
│   │   └── observer.js  # Reveal-on-scroll logic
│   └── main.js         # Entry point (App Initialization)
└── docs/               # Technical documentation
```

### Class/Component Structure
*   **App:** Orchestrates initialization of all modules.
*   **MobileMenu:** Handles state, animations, and ARIA attributes for accessibility.
*   **FormValidator:** Reusable validation logic with custom error rendering.
*   **Slider:** Encapsulated touch-friendly slider logic.

---

## 3. User Flow
1.  **Landing:** User enters `index.html`, sees value proposition, browses features and reviews.
2.  **Discovery:** User navigates to `directions.html` to explore specific fitness programs.
3.  **Conversion:** User clicks "Записаться" (Sign up), fills out the form on `signup.html`.
4.  **Feedback:** Form validates in real-time. Upon success, a confirmation message is displayed.

---

## 4. Database Schema (Conceptual)
Even though this is a frontend project, the "Signup" feature implies a backend.

```text
Database Diagram:

  +-----------------+          +------------------+
  |   directions    |          |      leads       |
  +-----------------+          +------------------+
  | id (PK)         | <------+ | id (PK)          |
  | title           |          | full_name        |
  | base_price      |          | phone            |
  | description     |          | email            |
  +-----------------+          | direction_id (FK)|
                               | preferred_time   |
                               | created_at       |
                               +------------------+
```

| Field | Type | Description |
|---|---|---|
| `id` | UUID | Primary Key |
| `full_name` | VARCHAR(255) | User's full name |
| `phone` | VARCHAR(20) | Contact number |
| `email` | VARCHAR(255) | Email address |
| `direction_id` | INT | Foreign Key to `directions` |
| `preferred_time` | ENUM | 'morning', 'afternoon', 'evening' |
| `created_at` | TIMESTAMP | Submission date |

---

## 5. Production-Ready Recommendations
1.  **Performance:** Implement Image Lazy Loading and WebP format for all assets.
2.  **Build Tooling:** Use Vite or Webpack for bundling, minification, and CSS autoprefixing.
3.  **SEO:** Add OpenGraph tags, meta descriptions, and semantic HTML structure (A11y).
4.  **Testing:** Add unit tests for the calculator and validation logic using Jest.
