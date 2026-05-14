# FitLife | Technical Architecture & System Design

This document outlines the architectural patterns, data flow, and component structure of the FitLife Frontend Platform.

---

## 1. High-Level System Architecture
The project follows a **Modular Monolith** pattern on the frontend, utilizing ES6 modules to encapsulate domain logic and ensure high maintainability.

```mermaid
graph TD
    subgraph Client_Layer [Client Interface]
        User((User)) --> Browser[Modern Browser]
        Browser --> DOM[Virtual DOM Representation]
    end

    subgraph Service_Layer [Business Logic Engine]
        Main[main.js Orchestrator]
        Main --> Menu[Mobile Menu Module]
        Main --> Calc[Price Calculation Logic]
        Main --> Val[Form Validation Engine]
        Main --> Slider[Interactive Slider Module]
        Main --> Obs[Intersection Observer API]
    end

    subgraph Design_Layer [UI Framework]
        CSS[Design System - Variables]
        CSS --> Layout[12-Column Responsive Grid]
        CSS --> Components[Reusable UI Components]
        CSS --> Motion[Transition & Keyframe System]
    end

    DOM <--> Main
    Main <--> Design_Layer
```

---

## 2. Professional User Flow
Mapping the journey from initial landing to successful conversion (Lead Generation).

```mermaid
stateDiagram-v2
    [*] --> HeroSection: User Enters
    HeroSection --> Directions: Click 'View Programs'
    Directions --> Calculator: User calculates price
    Calculator --> SignupForm: Click 'Join Now'
    
    state SignupForm {
        [*] --> FillingInputs: Enter Data
        FillingInputs --> ValidationEngine: Trigger Submit
        ValidationEngine --> ValidationError: Inputs Invalid
        ValidationError --> FillingInputs: Fix Errors
        ValidationEngine --> SuccessState: Inputs Valid
    }
    
    SuccessState --> DataSubmission: Simulated API Call
    DataSubmission --> ThankYouMessage: Conversion Complete
    ThankYouMessage --> [*]
```

---

## 3. Database Schema (Conceptual ERD)
Designed for scalability, tracking user preferences and program interest.

```mermaid
erDiagram
    USER_LEADS {
        uuid id PK
        string full_name
        string phone_number
        string email_address
        int direction_id FK
        string time_slot "Morning/Afternoon/Evening"
        datetime submitted_at
    }

    FITNESS_PROGRAMS {
        int id PK
        string title
        decimal monthly_rate
        string coach_name
    }

    USER_LEADS }o--|| FITNESS_PROGRAMS : "interested_in"
```

---

## 4. Component Interaction Diagram
Visualizing the communication between JavaScript modules.

```mermaid
classDiagram
    class MainApp {
        +initAllModules()
    }
    class MobileMenu {
        +isOpen: Boolean
        +toggle()
        +handleA11y()
    }
    class FormValidator {
        +rules: Object
        +checkValid()
        +renderErrors()
    }
    class Calculator {
        +basePrice: Number
        +getFinalPrice()
        +updateDisplay()
    }

    MainApp *-- MobileMenu
    MainApp *-- FormValidator
    MainApp *-- Calculator
    FormValidator <.. Calculator : "shared data"
```

---

## 5. Directory Structure (Senior Standard)
```text
📁 FitLife/
├── 📄 index.html          # Standardized Template
├── 📄 directions.html     # Interactive Services Page
├── 📄 signup.html         # Conversion Oriented Form
├── 📄 ARCHITECT.md        # Technical Blueprints
├── 📄 DOCS.md             # Design System & User Flow
├── 📁 css/
│   └── 🎨 style.css       # Unified Design System
└── 📁 js/
    ├── ⚙️ main.js          # App Bootstrapper
    └── 📁 modules/        # Domain Specific Modules
        ├── 🧩 menu.js      # Navigation Orchestration
        ├── 🧩 calc.js      # Business Math Logic
        ├── 🧩 validator.js # UX Integrity & Validation
        └── 🧩 slider.js    # Carousel & Touch Interaction
```

---

## 6. Technical Specifications

| Spec | Implementation |
| :--- | :--- |
| **Architecture** | Clean Architecture / Modular JS |
| **Styling** | Vanilla CSS with BEM Methodology |
| **Animation** | IntersectionObserver (Performance Optimized) |
| **Accessibility** | ARIA 1.2 Standards Compliant |
| **Validation** | Regex-based with State Management |
| **Responsiveness** | Mobile-First Fluid Grid |

---
*Created for FitLife Project Presentation | Senior Frontend Architect Portfolio*
