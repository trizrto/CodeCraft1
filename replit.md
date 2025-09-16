# CodeCraft Website

## Overview

CodeCraft is a multi-page educational website project that appears to be developed for a school ("Colégio Lindaura" as indicated by the logo). The website serves as a presentation platform showcasing a technology-focused educational initiative, featuring sections for project presentation, teachers, team members, and company information. The site is built as a static website using vanilla HTML, CSS, and JavaScript with a focus on responsive design and user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Static Multi-Page Application**: The project follows a traditional multi-page website structure with separate HTML files for each section
- **Responsive Design**: Mobile-first approach with hamburger menu implementation for mobile devices
- **Component-Based Styling**: Modular CSS architecture with separate stylesheets for different components (main styles, menu-specific styles, CSS reset)
- **Progressive Enhancement**: Base functionality works without JavaScript, with JavaScript adding enhanced interactions

### File Structure
- **HTML Pages**: Five main pages (index.html, apresentacao.html, professores.html, equipe.html, empresa.html) plus utility pages
- **Styling**: Main stylesheet (style.css), component-specific styles (menu.css), and CSS reset (reset.css)
- **Interactivity**: Single JavaScript file (script.js) handling navigation and user interactions
- **Assets**: Image directory structure for logos and visual elements

### Design System
- **Typography**: Google Fonts integration (Quicksand family) for consistent branding
- **Color Scheme**: Blue gradient theme with professional appearance suitable for educational content
- **Layout**: CSS Flexbox-based layout system for responsive behavior
- **Navigation**: Consistent header navigation across all pages with active state management

### JavaScript Functionality
- **Menu Management**: Toggle functionality for mobile hamburger menu
- **Navigation Enhancement**: Smooth scrolling for anchor links and automatic menu closing
- **Active State Management**: Dynamic highlighting of current page in navigation
- **Event Handling**: DOM-ready event listeners for enhanced user experience

### Responsive Strategy
- **Mobile-First Design**: CSS media queries prioritizing mobile experience
- **Adaptive Navigation**: Hamburger menu for mobile, horizontal navigation for desktop
- **Flexible Images**: Responsive image handling with max-width constraints
- **Viewport Optimization**: Proper meta viewport configuration for mobile devices

## External Dependencies

### Third-Party Services
- **Google Fonts**: Quicksand font family loaded via CDN for typography consistency
- **CSS Reset**: Meyer's CSS Reset v2.0 for cross-browser consistency

### Asset Dependencies
- **Image Assets**: Local image storage for logos (CodeCraft logo, Colégio Lindaura logo)
- **No External Frameworks**: Pure vanilla implementation without external JavaScript libraries or CSS frameworks

### Browser Compatibility
- **Modern Standards**: ES6+ JavaScript features with DOM manipulation
- **CSS3 Features**: Flexbox, gradients, and transforms for enhanced visual design
- **Progressive Enhancement**: Graceful degradation for older browsers