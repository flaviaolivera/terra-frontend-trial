# Terra Frontend Trial - Implementation Documentation

## 🚀 Project Status: Complete ✅

**Live Demo:** [https://terra-frontend-trial-hazel.vercel.app/](https://terra-frontend-trial-hazel.vercel.app/)

All 8 tasks from the trial have been successfully completed with a focus on clean code, responsive design, and accessibility standards.

## 📖 Development Approach

This project was developed following a structured methodology that prioritizes understanding before implementation:

1. **Analyze and understand** the problem completely
2. **Plan the solution** approach before coding  
3. **Implement** with clean, maintainable code
4. **Document** decisions and learnings

## 🔄 Development Workflow

The project follows professional Git practices:

- **Branch Strategy:** `master` → `develop` → `feature/fix branches`
- **Pull Requests:** Detailed descriptions for each implementation
- **Releases:** Grouped related fixes into logical releases
- **Documentation:** Each PR includes problem analysis, root cause, and solution

### Branch Naming Convention
- `fix/` - Bug fixes and issue resolution
- `feat/` - New features and components
- `docs/` - Documentation updates

## 📋 Implementation Summary

| Task | Status | Description | Release |
|------|--------|-------------|---------|
| **1** | ✅ | Fix interaction issues after preloader | v1.0 |
| **2** | ✅ | Accordion arrow state management | v2.0 |
| **3** | ✅ | Cards component development | v3.0 |
| **4** | ✅ | Responsive design implementation | v3.0 |
| **5** | ✅ | RevealItem animation triggers | v1.0 |
| **6** | ✅ | Lottie animation controls | v2.0 |
| **7** | ✅ | Accessibility implementation | v4.0 |
| **8** | ✅ | Performance optimization | v4.0 |

## 📈 Release Timeline

### v1.0 - Core Functionality (Tasks 1 & 5)
**Focus:** Fixing critical interaction issues
- **Preloader blocking interactions:** Refactored initialization flow, removed DOM elements properly
- **ScrollTrigger misalignment:** Fixed by initializing after asset loading

### v2.0 - Interactive Components (Tasks 2 & 6)
**Focus:** Component behavior and controls
- **Accordion arrows:** CSS-based solution using Collapsify's native state classes
- **Lottie controls:** Implemented using Terra Helpers' global `window.WL` object

### v3.0 - UI Development (Tasks 3 & 4)
**Focus:** Advanced components and responsive design
- **CardsGrid & CardC:** Pixel-perfect implementation with CSS Grid and fluid typography
- **Responsive design:** Desktop-first approach with fluid scaling using `clamp()`

### v4.0 - Accessibility & Performance (Tasks 7 & 8)
**Focus:** Standards compliance and optimization  
- **WCAG 2.1 AA foundation:** Semantic HTML, ARIA attributes, screen reader support
- **Performance improvements:** HTTPS conversion, layout stability, SEO enhancement

### v5.0 - UI Polish
**Focus:** Final refinements and production readiness
- **Visual consistency:** Fixed card alignment, Lottie scaling, grid behavior
- **Production cleanup:** Removed debug markers, optimized for deployment

## 🛠 Development Tools

### Code Enhancement
- **Better Comments** - VSCode extension for enhanced code readability using `// TODO:` and `// **` highlighting

## 🔧 Key Technical Decisions

### 1. Preloader Architecture
**Decision:** Load `Main.js` immediately instead of waiting for animation progress
**Reasoning:** User interactivity should not depend on animation timing

### 2. Accordion Implementation  
**Decision:** CSS-based arrow rotation using Collapsify's native classes
**Reasoning:** More performant than JavaScript callbacks, leverages framework capabilities

### 3. Responsive Strategy
**Decision:** Desktop-first with fluid `clamp()` scaling
**Reasoning:** Reduces media queries, provides smoother scaling across devices


## 🎯 Performance & Accessibility Highlights

### Performance Optimizations
- **Layout Stability:** Implemented explicit image dimensions to prevent CLS
- **Security Compliance:** Converted all HTTP resources to HTTPS
- **SEO Enhancement:** Added comprehensive meta tags and structured data

### Accessibility Features  
- **Semantic HTML:** Proper landmark structure with `<main>`, `<section>`, `<article>`
- **ARIA Support:** Labels, hidden content, and screen reader utilities
- **Color Contrast:** Updated link colors to meet WCAG 2.1 AA standards
- **Keyboard Navigation:** Maintained focus management throughout components

## 🔍 Performance Analysis & Learnings

### Identified Bottleneck: Lottie Loading
**Current Impact:** 
- Lighthouse shows Total Blocking Time around 470ms
- Performance score drops from ~95 to ~72 when Lotties are enabled
- `preloadLotties` blocks the main thread and makes the page slow

**Root Cause Analysis:**
- The issue is in JSON parsing/animation setup, not just timing
- Tried using `setTimeout` to delay loading but didn't help much
- The bottleneck occurs during animation initialization

**Potential Solutions for Future Implementation:**
- Only load Lottie when user scrolls to that section (Intersection Observer)
- Use smaller/simpler Lottie files
- Load in a web worker (might be overkill for this use case)

---

# Original Assignment

A practical frontend development trial to evaluate HTML, SCSS, and JavaScript skills in a real-world scenario.

## 📋 Overview

This is a frontend development assessment that simulates building a landing page for a client. While the project uses Astro as the base framework, **no prior Astro knowledge is required**. The focus is entirely on core frontend skills: HTML structure, SCSS styling, and JavaScript functionality.

## 🎯 What We're Looking For

- **Clean, semantic HTML structure**
- **Advanced SCSS/CSS skills** (variables & responsive design)
- **Vanilla JavaScript proficiency** (DOM manipulation, event handling, modules)
- **Responsive design** across devices
- **Performance optimization**
- **Code organization** and best practices
- **Attention to detail** in implementation
- **Capacity to react to new tech** reading our documentation

## 🏢 Project Context

You're tasked with developing a modern landing page for a fictional client. This scenario mirrors real client feedback work where you'll need to:

- Interpret design requirements
- Implement responsive layouts
- Create interactive components
- Optimize for performance
- Maintain clean, scalable code

### Required Libraries Knowledge

While the focus is on core frontend skills, this trial requires basic familiarity with these libraries (they're not complex, but some knowledge is needed):

- **GSAP** - For animations and transitions
- **Terra Helpers** - Utility functions and components
- **Collapsify** - For collapsible/accordion functionality

#### Library Resources:

- [GSAP Documentation](https://greensock.com/docs/)
- [Terra Helpers](https://www.npmjs.com/package/@terrahq/helpers)
- [Collapsify](https://www.npmjs.com/package/@terrahq/collapsify)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## 📁 Project Structure

```text
/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable components
│   ├── layouts/          # Page layouts
│   ├── pages/            # Page routes
│   ├── scss/             # Stylesheets
│   └── js/               # JavaScript modules
└── package.json
```

## 📝 Assessment Focus Areas

### HTML/Structure

- Semantic markup
- Accessibility considerations
- Component organization

### SCSS/Styling

- Modern CSS techniques
- Responsive design patterns
- Code organization (variables, etc.)
- Cross-browser compatibility

### JavaScript

- Clean, modular code
- DOM manipulation
- Event handling
- Performance considerations

### General

- Code readability and documentation
- Git workflow and commit messages
- Problem-solving approach
- Attention to design details

## 🎨 Design System

The project includes Terra's design system for reference:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@terrahq/design-system@latest/dist/style.css"
/>
```

Feel free to use it as a foundation or create your own styling approach.

## 📋 Trial Exercises

Complete the following tasks to demonstrate your frontend development skills:

### 1. Fix Interaction Issues

- **Problem**: After the preloader disappears, buttons become unclickable and accordion sections don't work

### 2. Accordion Arrow States

- **Current state**: All accordion arrows point down (v)
- **Required**: Active/open accordion items should have arrows pointing up (^)
- **Task**: Implement proper arrow rotation based on accordion state

### 3. Develop Cards Component

- **Reference**: Follow the Figma design provided via email
- **Task**: Create responsive components matching the design specifications
- **Focus**: Pixel-perfect implementation

### 4. Responsive Design Implementation

- **Constraint**: No responsive design provided in Figma
- **Task**: Use your own design judgment to make the entire site responsive
- **Breakpoints**: Mobile, tablet, and desktop considerations
- **Approach**: desktop-first and mobile second

### 5. Fix RevealItem Animation Triggers

- **Problem**: RevealItem animation triggers are not positioned correctly.
- **Current state**: Animation markers are visible (set to true) showing incorrect trigger positions
- **Debug**: Keep markers set to true to visualize the animation trigger positions
- **Requirement**: Ensure RevealItem animations execute properly

### 6. Lottie Animation Controls

- **Current state**: Play and Pause buttons exist but have no functionality
- **Task**: Implement play/pause controls for Lottie animations
- **Requirements**: Connect buttons to Lottie animation instance
- **Integration**: Work with existing Terra Helpers preloadLotties functionality

### 7. Accessibility Implementation

- **Task**: Implement comprehensive accessibility features throughout the project
- **Include**: ARIA labels, keyboard navigation, screen reader support, color contrast, focus management
- **Standard**: WCAG 2.1 AA compliance where possible

### 8. Performance Optimization

- **Analysis**: Identify potential performance bottlenecks
- **Implementation**: Apply performance optimizations you can implement
- **Documentation**: Explain what additional performance improvements you would make given more time/resources - You will be asked on panel interview.

## 📋 Deliverables

- Functional landing page with all exercises completed
- Clean, well-organized code
- Responsive design implementation
- Accessibility features implemented
- Performance optimizations applied
- Brief documentation of your approach and decisions

## ⏱ Time Expectations

This trial is designed to be completed in a reasonable timeframe while allowing you to showcase your skills effectively. Focus on quality over quantity, and document your decision-making process.

Once trial is finished please share repo with us and deploy it to netlify/vercel/heroku

---

**Note**: This project uses Astro as a build tool, but you can treat `.astro` files similarly to HTML files. The focus is on your HTML, SCSS, and JavaScript skills, not Astro-specific knowledge.
