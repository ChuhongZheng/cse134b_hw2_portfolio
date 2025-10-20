# Personal Portfolio Website Design Document

## Purpose of the Site

This portfolio website serves as a professional showcase of my academic background, technical skills, projects, and interests. It aims to present my qualifications in an organized and visually appealing manner to potential employers, collaborators, and academic contacts. The site demonstrates my understanding of modern web development practices, particularly semantic HTML structure and accessibility principles. Additionally, it acts as a central hub for people to learn more about me and my work, and to easily connect with me through various channels.

## Audience Considerations

### Persona: Tech Recruiter "Sarah"

![Persona Diagram Description](#)

Sarah is a technical recruiter at a mid-sized software company looking for entry-level frontend developers. She typically spends 5-10 minutes reviewing each portfolio site, focusing on:

- Clean, well-structured code that demonstrates understanding of web standards
- Clear presentation of technical skills and projects
- Responsive design that works across devices
- Easy navigation and accessibility features
- Evidence of practical skills beyond academic knowledge

She primarily uses Chrome on her Windows laptop during work hours, occasionally checking sites on her iPhone during commute. Sarah values sites that load quickly, are easy to navigate, and clearly communicate the candidate's strengths without unnecessary distractions.

Key Goals:
- Evaluate candidate's technical proficiency through code quality
- Assess communication skills through content clarity
- Determine cultural fit through personality insights
- Quickly identify relevant skills for open positions

## Site Diagram

![Site Map Description](#)

The website consists of five main pages interconnected through a consistent navigation menu:

1. **Home Page **(index.html)
   - Welcome message
   - Brief introduction
   - Featured project highlight
   - Personal introduction with photo
   - Embedded MathML formula (extra credit)
   - Custom element demonstration

2. **About Page **(about.html)
   - Detailed educational background
   - Comprehensive skills listing
   - Interest cards using custom elements
   - Interactive map of hometown
   - Contact dialog element

3. **Projects Page **(projects.html)
   - Featured projects with progress indicators
   - Other academic and personal projects
   - Technology tags for each project

4. **Experiments Page **(experiments.html)
   - Demonstration of advanced HTML5 elements
   - Template, picture, audio, video, canvas, and source elements
   - Examples of responsive design techniques
   - Multimedia content integration

5. **Contact Page **(contact.html)
   - Multiple contact methods
   - Physical address
   - Social media links
   - Contact form with validation

## Wireframes

### Home Page Wireframe
![Home Page Wireframe Description](#)

Layout:
- Header with site title and navigation menu
- Main content area with two sections:
  1. Welcome section with featured project
  2. About section with personal photo and brief bio
- Footer with copyright information and social links
- MathML formula displayed at bottom
- Custom element at the end

### About Page Wireframe
![About Page Wireframe Description](#)

Layout:
- Header with page title and navigation menu
- Main content area with three sections:
  1. Background information with education details
  2. Skills listing with emphasis on technical competencies
  3. Interests displayed in card format using custom elements
- Google Maps iframe showing hometown location
- Footer with copyright information
- Dialog element for contact functionality

### Projects Page Wireframe
![Projects Page Wireframe Description](#)

Layout:
- Header with page title and navigation menu
- Main content area with two sections:
  1. Featured projects with progress bars
  2. List of other academic and personal projects
- Footer with copyright information
- Custom element at the end

### Experiments Page Wireframe
![Experiments Page Wireframe Description](#)

Layout:
- Header with page title and navigation menu
- Main content area with multiple articles demonstrating:
  1. Template element
  2. Picture element with responsive images
  3. Audio player
  4. Video player
  5. Canvas drawing area
  6. Source element for multimedia fallbacks
- Footer with copyright information

### Contact Page Wireframe
![Contact Page Wireframe Description](#)

Layout:
- Header with page title and navigation menu
- Main content area with two sections:
  1. Contact information (email, address, social links)
  2. Contact form with fields for name, email, subject, and message
- Form organized with fieldset and legend elements
- Footer with copyright information

## Technical Requirements

1. **Technologies Used**:
   - Semantic HTML5 for structure and content
   - Minimal CSS (limited to border properties for basic layout)
   - JavaScript for custom elements and canvas demonstration
   - MathML for mathematical formulas (extra credit)

2. **Hosting**:
   - Deployment on Netlify with drag-and-drop method
   - Static hosting suitable for pure HTML/CSS/JS site

3. **Browser Compatibility**:
   - Target modern browsers supporting HTML5, CSS3, and ES6
   - Ensure core content accessible even with JavaScript disabled
   - Progressive enhancement approach for advanced features

4. **Performance Targets**:
   - Lightweight pages under 100KB each
   - Optimized media assets for fast loading
   - Efficient resource utilization

5. **Validation**:
   - All pages must pass W3C HTML validator
   - Strict adherence to semantic markup principles

## Content Requirements

1. **Text Content**:
   - Personal biography and background information
   - Educational history and relevant coursework
   - Technical skills and proficiency levels
   - Project descriptions with technologies used
   - Professional interests and hobbies

2. **Media Assets**:
   - Personal photograph for home/about pages
   - Project-related images for interest cards
   - Sample audio file for multimedia demonstration
   - Sample video file for multimedia demonstration
   - Multiple versions of responsive images (large, medium, small)
   - SVG graphics for visual elements

3. **External Resources**:
   - Google Maps embed for hometown location
   - Social media profile links
   - External project repositories (GitHub, etc.)

4. **Interactive Elements**:
   - Contact form with multiple input types
   - Dialog element for enhanced UX
   - Custom elements demonstrating Web Components
   - Canvas element with simple drawing functionality

By the final phase, all content will be fully integrated with high-fidelity styling while maintaining the semantic integrity established in the initial phase.