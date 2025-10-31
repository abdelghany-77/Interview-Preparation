const questions = {
  frontend: {
    // HTML Questions
    html: [
      {
        section: "HTML",
        q: "What are semantic HTML elements?",
        a: "Semantic HTML elements are tags that clearly describe their meaning and content to both the browser and developer. They convey the structure and purpose of content, making code more readable and accessible. Examples include &lt;header&gt;, &lt;nav&gt;, &lt;article&gt;, &lt;section&gt;, &lt;aside&gt;, &lt;footer&gt;, &lt;main&gt;, &lt;figure&gt;, and &lt;figcaption&gt;.",
        example: `&lt;!-- Semantic HTML --&gt;
&lt;article&gt;
  &lt;header&gt;
    &lt;h1&gt;Article Title&lt;/h1&gt;
    &lt;time datetime="2025-10-31"&gt;October 31, 2025&lt;/time&gt;
  &lt;/header&gt;
  &lt;section&gt;
    &lt;p&gt;Article content...&lt;/p&gt;
  &lt;/section&gt;
  &lt;footer&gt;
    &lt;p&gt;Written by John Doe&lt;/p&gt;
  &lt;/footer&gt;
&lt;/article&gt;

&lt;!-- Non-semantic HTML --&gt;
&lt;div class="article"&gt;
  &lt;div class="header"&gt;
    &lt;div class="title"&gt;Article Title&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;`,
      },
      {
        section: "HTML",
        q: "What is the importance of semantic HTML elements?",
        a: "Semantic HTML improves: 1) Accessibility - Screen readers can navigate better, 2) SEO - Search engines understand content structure, 3) Maintainability - Code is easier to read and modify, 4) Cross-browser compatibility - Consistent rendering, 5) Future-proofing - Better support for new technologies.",
      },
      {
        section: "HTML",
        q: "What is the difference between &lt;section&gt; and &lt;article&gt;?",
        a: "&lt;section&gt; is a thematic grouping of content, typically with a heading, used to organize related content within a page. &lt;article&gt; is a self-contained composition that could be independently distributed (blog post, news article, forum post). An article can contain sections, and sections can contain articles.",
        example: `&lt;article&gt;
  &lt;h1&gt;Complete Guide to HTML&lt;/h1&gt;
  &lt;section&gt;
    &lt;h2&gt;Introduction&lt;/h2&gt;
    &lt;p&gt;HTML is...&lt;/p&gt;
  &lt;/section&gt;
  &lt;section&gt;
    &lt;h2&gt;Advanced Topics&lt;/h2&gt;
    &lt;p&gt;Semantic elements...&lt;/p&gt;
  &lt;/section&gt;
&lt;/article&gt;

&lt;section&gt;
  &lt;h2&gt;Latest Blog Posts&lt;/h2&gt;
  &lt;article&gt;
    &lt;h3&gt;Post 1&lt;/h3&gt;
  &lt;/article&gt;
  &lt;article&gt;
    &lt;h3&gt;Post 2&lt;/h3&gt;
  &lt;/article&gt;
&lt;/section&gt;`,
      },
      {
        section: "HTML",
        q: "What is the purpose of the &lt;figure&gt; element in HTML?",
        a: "The &lt;figure&gt; element represents self-contained content (like images, diagrams, code snippets) that is referenced from the main content but could be moved without affecting the flow. Often used with &lt;figcaption&gt; to provide a caption.",
        example: `&lt;figure&gt;
  &lt;img src="chart.png" alt="Sales chart"&gt;
  &lt;figcaption&gt;Figure 1: Annual Sales Growth 2024&lt;/figcaption&gt;
&lt;/figure&gt;

&lt;figure&gt;
  &lt;pre&gt;&lt;code&gt;
    function hello() {
      console.log('Hello World');
    }
  &lt;/code&gt;&lt;/pre&gt;
  &lt;figcaption&gt;Code Example: JavaScript Function&lt;/figcaption&gt;
&lt;/figure&gt;`,
      },
      {
        section: "HTML",
        q: "What is the purpose of the &lt;!DOCTYPE html&gt; declaration?",
        a: "&lt;!DOCTYPE html&gt; tells the browser which version of HTML the page is written in. For HTML5, it's simply &lt;!DOCTYPE html&gt;. It must be the first line in your HTML document. It ensures the browser renders the page in standards mode rather than quirks mode, preventing rendering inconsistencies.",
      },
      {
        section: "HTML",
        q: "What is the use of the aria-label attribute?",
        a: "aria-label provides an accessible name for elements, especially useful when there's no visible text label. It's read by screen readers to help visually impaired users understand element purpose. Commonly used on buttons with icons, navigation elements, and form controls.",
        example: `&lt;!-- Button with icon only --&gt;
&lt;button aria-label="Close dialog"&gt;
  &lt;span class="icon-close"&gt;&lt;/span&gt;
&lt;/button&gt;

&lt;!-- Search form --&gt;
&lt;form role="search"&gt;
  &lt;input type="search" aria-label="Search products" placeholder="Search..."&gt;
  &lt;button type="submit" aria-label="Submit search"&gt;
    &lt;span class="icon-search"&gt;&lt;/span&gt;
  &lt;/button&gt;
&lt;/form&gt;`,
      },
      {
        section: "HTML",
        q: "What is the difference between a tag and an element?",
        a: "A tag is the markup syntax (opening and closing), while an element includes the tags plus the content. Tag: &lt;p&gt;, Element: &lt;p&gt;Hello&lt;/p&gt;. Some elements are self-closing like &lt;img /&gt;, &lt;br /&gt;, &lt;hr /&gt;.",
        example: `&lt;!-- Tag: &lt;p&gt; and &lt;/p&gt; --&gt;
&lt;!-- Element: entire structure below --&gt;
&lt;p&gt;This is an element&lt;/p&gt;

&lt;!-- Self-closing tag/element --&gt;
&lt;img src="image.jpg" alt="Image" /&gt;`,
      },
      {
        section: "HTML",
        q: "What is the difference between &lt;body&gt; and &lt;head&gt;?",
        a: "&lt;head&gt; contains metadata, title, links to stylesheets, scripts, and other information not displayed on the page. &lt;body&gt; contains all the visible content like text, images, videos, links, etc. that users see and interact with.",
        example: `&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Page Title&lt;/title&gt;
    &lt;link rel="stylesheet" href="styles.css"&gt;
    &lt;script src="script.js"&gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Welcome&lt;/h1&gt;
    &lt;p&gt;This content is visible&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;`,
      },
      {
        section: "HTML",
        q: "What is a self-closing tag?",
        a: "A self-closing tag (or void element) doesn't have a closing tag and doesn't contain any content. Common examples: &lt;img&gt;, &lt;br&gt;, &lt;hr&gt;, &lt;input&gt;, &lt;link&gt;, &lt;meta&gt;. In HTML5, you can write them as &lt;img&gt; or &lt;img /&gt;, both are valid.",
        example: `&lt;!-- Self-closing tags --&gt;
&lt;img src="photo.jpg" alt="Photo"&gt;
&lt;br&gt;
&lt;hr&gt;
&lt;input type="text" name="username"&gt;
&lt;link rel="stylesheet" href="style.css"&gt;
&lt;meta name="viewport" content="width=device-width"&gt;`,
      },
      {
        section: "HTML",
        q: "What are form attributes like action, method, and target used for?",
        a: "action: URL where form data is sent. method: HTTP method (GET/POST). target: Where to display response (_self, _blank, _parent, _top). GET appends data to URL, POST sends in request body (more secure).",
        example: `&lt;!-- POST form (secure, for sensitive data) --&gt;
&lt;form action="/submit" method="POST" target="_self"&gt;
  &lt;input type="email" name="email" required&gt;
  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;

&lt;!-- GET form (visible in URL, for search) --&gt;
&lt;form action="/search" method="GET"&gt;
  &lt;input type="search" name="q"&gt;
  &lt;button type="submit"&gt;Search&lt;/button&gt;
&lt;/form&gt;`,
      },
      {
        section: "HTML",
        q: "What is a meta tag and how does it help in SEO?",
        a: "Meta tags provide metadata about the HTML document. They're placed in &lt;head&gt; and help search engines understand page content. Key meta tags for SEO: description (shown in search results), keywords, viewport (mobile optimization), charset, og:tags (social sharing).",
        example: `&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;meta name="description" content="Learn frontend development - HTML, CSS, JavaScript tutorials"&gt;
  &lt;meta name="keywords" content="HTML, CSS, JavaScript, Tutorial"&gt;
  &lt;meta name="author" content="John Doe"&gt;
  
  &lt;!-- Open Graph for social sharing --&gt;
  &lt;meta property="og:title" content="Frontend Tutorial"&gt;
  &lt;meta property="og:description" content="Complete guide"&gt;
  &lt;meta property="og:image" content="thumbnail.jpg"&gt;
&lt;/head&gt;`,
      },
      {
        section: "HTML",
        q: "How can you use images in a semantic way in HTML?",
        a: "Use semantic image elements: &lt;img&gt; with descriptive alt text for accessibility, &lt;figure&gt; with &lt;figcaption&gt; for images with captions, &lt;picture&gt; for responsive images, srcset for different resolutions, loading='lazy' for performance.",
        example: `&lt;!-- Semantic image with caption --&gt;
&lt;figure&gt;
  &lt;img src="product.jpg" 
       alt="Red sneakers - Nike Air Max" 
       loading="lazy"&gt;
  &lt;figcaption&gt;Nike Air Max - Limited Edition&lt;/figcaption&gt;
&lt;/figure&gt;

&lt;!-- Responsive image --&gt;
&lt;picture&gt;
  &lt;source media="(min-width: 768px)" srcset="large.jpg"&gt;
  &lt;source media="(min-width: 480px)" srcset="medium.jpg"&gt;
  &lt;img src="small.jpg" alt="Responsive image"&gt;
&lt;/picture&gt;`,
      },
      {
        section: "HTML",
        q: "What should you consider to improve SEO in HTML?",
        a: "Use semantic HTML5 elements, proper heading hierarchy (h1-h6), descriptive alt text for images, meta tags (description, keywords), clean URL structure, fast page load, mobile responsiveness, structured data (schema.org), internal linking, quality content.",
        example: `&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="description" content="SEO-optimized page"&gt;
  &lt;title&gt;Primary Keyword - Brand Name&lt;/title&gt;
  &lt;link rel="canonical" href="https://example.com/page"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
    &lt;h1&gt;Main Keyword Here&lt;/h1&gt;
  &lt;/header&gt;
  &lt;main&gt;
    &lt;article&gt;
      &lt;h2&gt;Secondary Keyword&lt;/h2&gt;
      &lt;img src="image.jpg" alt="Descriptive alt text"&gt;
      &lt;p&gt;Quality content...&lt;/p&gt;
    &lt;/article&gt;
  &lt;/main&gt;
&lt;/body&gt;
&lt;/html&gt;`,
      },
      {
        section: "HTML",
        q: "How do you display a specific image at a certain width, hide it at another, and show a default image instead?",
        a: "Use the &lt;picture&gt; element with media queries in &lt;source&gt; tags. The browser selects the first matching source. If no source matches, it falls back to the &lt;img&gt; tag.",
        example: `&lt;picture&gt;
  &lt;!-- Large screens (desktop) --&gt;
  &lt;source media="(min-width: 1200px)" srcset="large.jpg"&gt;
  
  &lt;!-- Medium screens (tablet) --&gt;
  &lt;source media="(min-width: 768px)" srcset="medium.jpg"&gt;
  
  &lt;!-- Small screens show nothing (hide image) --&gt;
  &lt;source media="(max-width: 767px)" srcset="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="&gt;
  
  &lt;!-- Default fallback --&gt;
  &lt;img src="default.jpg" alt="Responsive image"&gt;
&lt;/picture&gt;`,
      },
      {
        section: "HTML",
        q: "What is the purpose of the &lt;picture&gt; element?",
        a: "The &lt;picture&gt; element provides a container for multiple &lt;source&gt; elements and one &lt;img&gt; element, allowing different images for different screen sizes, resolutions, or formats (WebP, AVIF). It enables art direction (different crops) and format fallbacks.",
        example: `&lt;picture&gt;
  &lt;!-- Modern formats for supported browsers --&gt;
  &lt;source type="image/avif" srcset="image.avif"&gt;
  &lt;source type="image/webp" srcset="image.webp"&gt;
  
  &lt;!-- Different images for different viewports --&gt;
  &lt;source media="(min-width: 768px)" srcset="desktop.jpg"&gt;
  &lt;source media="(min-width: 480px)" srcset="tablet.jpg"&gt;
  
  &lt;!-- Fallback for older browsers --&gt;
  &lt;img src="mobile.jpg" alt="Adaptive image"&gt;
&lt;/picture&gt;`,
      },
      {
        section: "HTML",
        q: "How do you specify the version of HTML you're using?",
        a: "Use the DOCTYPE declaration at the very beginning of your HTML document. For HTML5 (current standard), use &lt;!DOCTYPE html&gt;. For older versions, longer DOCTYPE declarations were used (HTML 4.01, XHTML 1.0).",
        example: `&lt;!-- HTML5 (recommended) --&gt;
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;HTML5 Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Modern HTML5&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;`,
      },
      {
        section: "HTML",
        q: "How do you increase accessibility using semantic elements?",
        a: "Use semantic HTML5 elements (&lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, &lt;aside&gt;), ARIA labels, proper heading hierarchy, alt text for images, form labels, keyboard navigation support, sufficient color contrast, and descriptive link text.",
        example: `&lt;!-- Accessible page structure --&gt;
&lt;header role="banner"&gt;
  &lt;nav role="navigation" aria-label="Main navigation"&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href="#home"&gt;Home&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#about"&gt;About&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/nav&gt;
&lt;/header&gt;

&lt;main role="main"&gt;
  &lt;article aria-labelledby="article-title"&gt;
    &lt;h1 id="article-title"&gt;Article Title&lt;/h1&gt;
    &lt;p&gt;Content...&lt;/p&gt;
  &lt;/article&gt;
&lt;/main&gt;

&lt;aside role="complementary" aria-label="Related articles"&gt;
  &lt;h2&gt;Related&lt;/h2&gt;
&lt;/aside&gt;

&lt;footer role="contentinfo"&gt;
  &lt;p&gt;&copy; 2025&lt;/p&gt;
&lt;/footer&gt;`,
      },
    ],

    // CSS Questions
    css: [
      {
        section: "CSS",
        q: "What is the priority of different CSS styles (inline, internal, external)?",
        a: "CSS specificity order (highest to lowest): 1) Inline styles (style='...'), 2) IDs (#id), 3) Classes, attributes, pseudo-classes (.class, [type], :hover), 4) Elements, pseudo-elements (div, ::before). !important overrides everything (use sparingly). When equal specificity, the last declared rule wins.",
        example: `<!-- Priority demonstration -->
<style>
  /* 1 point - element */
  p { color: blue; }
  
  /* 10 points - class */
  .text { color: green; }
  
  /* 100 points - ID (wins) */
  #special { color: red; }
  
  /* 1000 points - inline (highest) */
</style>

<p style="color: purple;">Inline wins - Purple</p>
<p id="special" class="text">ID wins - Red</p>
<p class="text">Class wins - Green</p>
<p>Element - Blue</p>`,
      },
      {
        section: "CSS",
        q: "What are the different types of CSS positioning?",
        a: "1) static (default): Normal document flow. 2) relative: Positioned relative to itself. 3) absolute: Positioned relative to nearest positioned ancestor. 4) fixed: Positioned relative to viewport, stays on scroll. 5) sticky: Switches between relative and fixed based on scroll.",
        example: `/* Static - default, no position properties work */
.static { position: static; }

/* Relative - relative to original position */
.relative {
  position: relative;
  top: 20px; /* moves down 20px from normal position */
  left: 30px;
}

/* Absolute - relative to nearest positioned parent */
.absolute {
  position: absolute;
  top: 0;
  right: 0;
}

/* Fixed - relative to viewport */
.fixed {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

/* Sticky - hybrid */
.sticky {
  position: sticky;
  top: 0; /* sticks when scrolled to top */
}`,
      },
      {
        section: "CSS",
        q: "What is the difference between px, rem, and em units?",
        a: "px: Absolute unit, fixed size regardless of parent. em: Relative to parent element's font-size (2em = 2x parent size). rem: Relative to root (html) element's font-size (more predictable). Use rem for consistent sizing, em for component-based scaling, px for fixed dimensions.",
        example: `html { font-size: 16px; } /* root */

.parent { font-size: 20px; }

.child {
  /* px - always 24px */
  font-size: 24px;
  
  /* em - 2 × parent (20px) = 40px */
  font-size: 2em;
  
  /* rem - 2 × root (16px) = 32px */
  font-size: 2rem;
  
  /* Padding with rem (consistent) */
  padding: 1rem; /* always 16px */
}`,
      },
      {
        section: "CSS",
        q: "What is box modeling in CSS?",
        a: "Box modeling refers to how CSS calculates the dimensions and spacing of elements using the box model. Every element is a rectangular box with content, padding, border, and margin. Understanding box modeling is crucial for layout, spacing, and responsive design. The box-sizing property controls how dimensions are calculated.",
        example: `/* Understanding box dimensions */
.element {
  /* Content area */
  width: 200px;
  height: 100px;
  
  /* Padding - inner spacing */
  padding: 20px;
  
  /* Border - surrounds padding */
  border: 2px solid black;
  
  /* Margin - outer spacing */
  margin: 10px;
}

/* Visual representation:
   Margin (10px)
   ├─ Border (2px)
   │  ├─ Padding (20px)
   │  │  ├─ Content (200x100px)
   Total width = 10 + 2 + 20 + 200 + 20 + 2 + 10 = 264px
*/

/* Modern approach with border-box */
* {
  box-sizing: border-box; /* Include padding and border in width */
}`,
      },
      {
        section: "CSS",
        q: "What is the box model?",
        a: "The CSS box model describes how elements are structured: Content (actual content), Padding (space inside border), Border (surrounds padding), Margin (space outside border). Total width = content + padding + border (or just content with box-sizing: border-box).",
        example: `/* Default box model */
.box {
  width: 300px;        /* content width */
  padding: 20px;       /* 20px on all sides */
  border: 5px solid;   /* 5px border */
  margin: 15px;        /* 15px outside */
  /* Total width: 300 + 40 + 10 = 350px */
}

/* Border-box model (recommended) */
.box-sizing {
  box-sizing: border-box;
  width: 300px;        /* total width including padding/border */
  padding: 20px;
  border: 5px solid;
  /* Content width: 300 - 40 - 10 = 250px */
}`,
      },
      {
        section: "CSS",
        q: "What is box sizing and how does it affect layout?",
        a: "box-sizing controls how width/height are calculated. content-box (default): width = content only. border-box: width = content + padding + border. border-box makes layout easier and more predictable.",
        example: `/* Apply to all elements (best practice) */
* {
  box-sizing: border-box;
}

/* Content-box (default) */
.content-box {
  box-sizing: content-box;
  width: 200px;
  padding: 20px;
  border: 10px solid;
  /* Total: 200 + 40 + 20 = 260px */
}

/* Border-box (predictable) */
.border-box {
  box-sizing: border-box;
  width: 200px; /* Total width stays 200px */
  padding: 20px;
  border: 10px solid;
}`,
      },
      {
        section: "CSS",
        q: "What is the difference between a class selector and an element selector?",
        a: "Element selector (div, p, h1): Targets all elements of that type. Class selector (.class-name): Targets elements with that class attribute. Classes are reusable and have higher specificity than element selectors.",
        example: `/* Element selector - targets all p elements */
p {
  color: blue;
}

/* Class selector - targets elements with class */
.highlight {
  background: yellow;
}

/* Can combine */
p.highlight {
  color: blue;
  background: yellow;
}

<!-- HTML -->
<p>Blue text</p>
<p class="highlight">Blue text, yellow background</p>
<div class="highlight">Only yellow background</div>`,
      },
      {
        section: "CSS",
        q: "What is the difference between display: inline and display: block with examples?",
        a: "block: Takes full width, starts new line, respects width/height (div, p, h1). inline: Takes only needed width, doesn't break line, ignores width/height (span, a, strong). inline-block: Hybrid - doesn't break line but respects width/height.",
        example: `/* Block elements */
.block {
  display: block;
  width: 300px;      /* respected */
  height: 100px;     /* respected */
  margin: 20px;      /* all sides work */
}

/* Inline elements */
.inline {
  display: inline;
  width: 300px;      /* ignored! */
  height: 100px;     /* ignored! */
  margin: 20px 0;    /* vertical margin ignored! */
}

/* Inline-block (best of both) */
.inline-block {
  display: inline-block;
  width: 300px;      /* works! */
  height: 100px;     /* works! */
  margin: 20px;      /* all work! */
}`,
      },
      {
        section: "CSS",
        q: "What is the difference between visibility: hidden and display: none?",
        a: "display: none: Removes element from layout completely, no space occupied, not accessible. visibility: hidden: Hides element but space remains, still in layout flow, takes up space. Use display: none for conditional rendering, visibility for temporary hiding.",
        example: `/* Display none - removed from layout */
.hidden-display {
  display: none; /* No space, can't interact */
}

/* Visibility hidden - space remains */
.hidden-visibility {
  visibility: hidden; /* Space occupied, can't see */
}

/* Opacity - still interactive */
.transparent {
  opacity: 0; /* Invisible but clickable */
}

<!-- Example -->
<div>Before</div>
<div class="hidden-display">I take no space</div>
<div>After (no gap)</div>

<div>Before</div>
<div class="hidden-visibility">I take space</div>
<div>After (gap exists)</div>`,
      },
      {
        section: "CSS",
        q: "What is the difference between CSS Grid and Flexbox?",
        a: "Flexbox: One-dimensional (row OR column), great for components, navbar, cards. Grid: Two-dimensional (rows AND columns), great for page layouts, galleries, dashboards. Use Flexbox for component layout, Grid for page structure. They complement each other.",
        example: `/* Flexbox - one direction */
.flex-container {
  display: flex;
  flex-direction: row; /* or column */
  justify-content: space-between;
  align-items: center;
}

/* Grid - two dimensions */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto;
  gap: 20px;
}

/* Grid for layout, Flex for components */
.page {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}

.navbar {
  display: flex;
  justify-content: space-between;
}`,
      },
      {
        section: "CSS",
        q: "What are things you can do with CSS Grid but not with Flexbox?",
        a: "Grid can: 1) Control rows AND columns simultaneously, 2) Create overlapping elements with grid placement, 3) Define explicit grid areas with grid-template-areas, 4) Span elements across multiple rows/columns, 5) Create complex 2D layouts easily.",
        example: `/* Grid-only features */
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 10px;
}

/* Span multiple cells */
.item1 {
  grid-column: 1 / 3; /* span 2 columns */
  grid-row: 1 / 3;    /* span 2 rows */
}

/* Named grid areas */
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }`,
      },
      {
        section: "CSS",
        q: "How do you determine the direction of a Flexbox?",
        a: "Use flex-direction property: row (default, left to right), row-reverse (right to left), column (top to bottom), column-reverse (bottom to top). This sets the main axis direction for flex items.",
        example: `/* Horizontal layouts */
.flex-row {
  display: flex;
  flex-direction: row; /* → (default) */
}

.flex-row-reverse {
  display: flex;
  flex-direction: row-reverse; /* ← */
}

/* Vertical layouts */
.flex-column {
  display: flex;
  flex-direction: column; /* ↓ */
}

.flex-column-reverse {
  display: flex;
  flex-direction: column-reverse; /* ↑ */
}`,
      },
      {
        section: "CSS",
        q: "What are media queries in CSS and how do you use them?",
        a: "Media queries apply styles based on device characteristics (screen size, orientation, resolution). Essential for responsive design. Common breakpoints: mobile (<768px), tablet (768-1024px), desktop (>1024px).",
        example: `/* Mobile-first approach (recommended) */
/* Base styles for mobile */
.container {
  padding: 10px;
  font-size: 14px;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 20px;
    font-size: 16px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: 40px;
    font-size: 18px;
  }
}

/* Orientation */
@media (orientation: landscape) {
  .gallery {
    grid-template-columns: repeat(4, 1fr);
  }
}`,
      },
      {
        section: "CSS",
        q: "What are pseudo-classes in CSS?",
        a: "Pseudo-classes select elements based on their state or position. Syntax: selector:pseudo-class. Common examples: :hover, :active, :focus, :first-child, :last-child, :nth-child(), :not(), :disabled, :checked.",
        example: `/* State pseudo-classes */
a:hover { color: red; }
a:active { color: darkred; }
input:focus { border-color: blue; }
input:disabled { opacity: 0.5; }
input:checked { background: green; }

/* Structural pseudo-classes */
li:first-child { font-weight: bold; }
li:last-child { border-bottom: none; }
li:nth-child(odd) { background: #f0f0f0; }
li:nth-child(3n) { color: blue; }

/* Logical pseudo-classes */
button:not(.primary) { background: gray; }`,
      },
      {
        section: "CSS",
        q: "What are pseudo-elements in CSS?",
        a: "Pseudo-elements create virtual elements to style specific parts of an element. Syntax: selector::pseudo-element (double colon). Common: ::before, ::after (add content), ::first-letter, ::first-line, ::placeholder, ::selection.",
        example: `/* Add content */
.quote::before {
  content: '"';
  font-size: 2em;
  color: gray;
}

.quote::after {
  content: '"';
}

/* Style first letter */
p::first-letter {
  font-size: 2em;
  font-weight: bold;
  float: left;
}

/* Custom bullet points */
.list-item::before {
  content: '→ ';
  color: blue;
}

/* Placeholder styling */
input::placeholder {
  color: lightgray;
  font-style: italic;
}

/* Selection color */
::selection {
  background: yellow;
  color: black;
}`,
      },
      {
        section: "CSS",
        q: "What do you know about specificity in CSS?",
        a: "Specificity determines which CSS rule applies when multiple rules target the same element. Calculated as (inline, IDs, classes/attributes/pseudo-classes, elements/pseudo-elements). Higher specificity wins. Equal specificity: last rule wins.",
        example: `/* Specificity calculation */
/* 0,0,0,1 = 1 */
p { color: black; }

/* 0,0,1,0 = 10 */
.text { color: blue; }

/* 0,0,1,1 = 11 (wins over .text) */
p.text { color: green; }

/* 0,1,0,0 = 100 (wins) */
#unique { color: red; }

/* 0,1,1,1 = 111 (highest) */
#unique.text p { color: purple; }

/* 1,0,0,0 = 1000 (inline, highest) */
<p style="color: orange;">Orange</p>

/* !important overrides specificity (avoid) */
p { color: yellow !important; }`,
      },
    ],

    // Bootstrap Questions
    bootstrap: [
      {
        section: "Bootstrap",
        q: "What is the difference between Bootstrap and CSS?",
        a: "CSS is a styling language for web pages. Bootstrap is a CSS framework (pre-written CSS) that provides ready-to-use components, grid system, and utilities. Bootstrap is built with CSS, Sass, and JavaScript. It speeds up development but adds file size.",
      },
      {
        section: "Bootstrap",
        q: "How do you build a form using Bootstrap?",
        a: "Use Bootstrap form classes: .form-group, .form-control, .form-label, .btn for buttons. Bootstrap provides styling for inputs, validation states, and responsive layouts.",
        example: `<form>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" required>
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="remember">
    <label class="form-check-label" for="remember">Remember me</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`,
      },
      {
        section: "Bootstrap",
        q: "How do you use alerts in Bootstrap?",
        a: "Use .alert class with contextual classes: .alert-primary, .alert-success, .alert-danger, .alert-warning, .alert-info. Add .alert-dismissible and close button for dismissible alerts.",
        example: `<!-- Basic alerts -->
<div class="alert alert-success">Success message!</div>
<div class="alert alert-danger">Error message!</div>
<div class="alert alert-warning">Warning message!</div>

<!-- Dismissible alert -->
<div class="alert alert-info alert-dismissible fade show">
  Info message with close button
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>`,
      },
      {
        section: "Bootstrap",
        q: "How do you include Bootstrap in a project?",
        a: "Three ways: 1) CDN (easiest, link in HTML), 2) Download files (local hosting), 3) npm install (for build tools). Include CSS in <head> and JavaScript before </body>.",
        example: `<!-- CDN (easiest) -->
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <!-- Content -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>

<!-- NPM -->
npm install bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';`,
      },
      {
        section: "Bootstrap",
        q: "What are the grid system and responsive utilities in Bootstrap?",
        a: "Bootstrap's 12-column grid system uses containers, rows, and columns. Classes: .col-{breakpoint}-{size}. Breakpoints: xs (<576px), sm (≥576px), md (≥768px), lg (≥992px), xl (≥1200px), xxl (≥1400px).",
        example: `<div class="container">
  <div class="row">
    <!-- Full width on mobile, half on tablet+ -->
    <div class="col-12 col-md-6">Column 1</div>
    <div class="col-12 col-md-6">Column 2</div>
  </div>
  
  <div class="row">
    <!-- 3 columns on desktop -->
    <div class="col-12 col-lg-4">Column 1</div>
    <div class="col-12 col-lg-4">Column 2</div>
    <div class="col-12 col-lg-4">Column 3</div>
  </div>
</div>`,
      },
      {
        section: "Bootstrap",
        q: "What are classes for layout and spacing in Bootstrap?",
        a: "Spacing utilities: m (margin), p (padding), t/b/s/e (top/bottom/start/end), x/y (horizontal/vertical). Sizes: 0-5, auto. Display: .d-{value}, .d-{breakpoint}-{value}. Examples: .mt-3, .px-4, .mb-auto, .d-none, .d-md-block.",
        example: `<!-- Margin/Padding -->
<div class="mt-3">Margin top 1rem</div>
<div class="px-4 py-2">Padding horizontal 1.5rem, vertical 0.5rem</div>
<div class="m-auto">Centered with auto margin</div>

<!-- Display utilities -->
<div class="d-none d-md-block">Hidden on mobile, visible on tablet+</div>
<div class="d-flex justify-content-between">Flexbox container</div>
<div class="d-grid gap-3">Grid container</div>`,
      },
      {
        section: "Bootstrap",
        q: "What was Bootstrap primarily created for?",
        a: "Bootstrap was created by Twitter developers (Mark Otto and Jacob Thornton) in 2011 to ensure consistency across internal tools and speed up development. It became open-source to provide a responsive, mobile-first framework for rapid web development.",
      },
    ],

    // JavaScript Questions
    js: [
      {
        section: "JavaScript",
        q: "What is the difference between arrow functions and regular functions?",
        a: "Arrow functions: 1) Shorter syntax, 2) No 'this' binding (lexical this), 3) No 'arguments' object, 4) Cannot be used as constructors, 5) No prototype property. Regular functions: 1) Have their own 'this' context, 2) Can access 'arguments', 3) Can be constructors, 4) Have prototype.",
        example: `// Regular function
function regular() {
  console.log(this); // 'this' depends on how called
}

// Arrow function
const arrow = () => {
  console.log(this); // 'this' from lexical scope
}

// Constructor - only works with regular function
function Person(name) {
  this.name = name;
}
const p = new Person('John'); // Works

// const ArrowPerson = (name) => { this.name = name }; // Error`,
      },
      {
        section: "JavaScript",
        q: "What is hoisting in JavaScript?",
        a: "Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution. Function declarations are fully hoisted, var variables are hoisted but initialized as undefined, let/const are hoisted but not initialized (temporal dead zone).",
        example: `console.log(a); // undefined (hoisted)
var a = 5;

console.log(b); // ReferenceError (temporal dead zone)
let b = 10;

hoistedFunction(); // Works
function hoistedFunction() {
  console.log('Hoisted!');
}`,
      },
      {
        section: "JavaScript",
        q: "What is the this keyword and how does it behave differently in functions?",
        a: "'this' refers to the context where a function is called. In regular functions: depends on how called (global, object method, constructor). In arrow functions: lexical scope (inherits from parent). In strict mode: undefined in global context.",
        example: `// Global context
console.log(this); // window (non-strict) or undefined (strict)

// Object method
const obj = {
  name: 'John',
  regular: function() { return this.name; }, // 'John'
  arrow: () => this.name // undefined or window.name
};

// Constructor
function Person(name) {
  this.name = name;
}
const p = new Person('Jane'); // this = new instance`,
      },
      {
        section: "JavaScript",
        q: "What is callback hell and how can it be resolved?",
        a: "Callback hell is nested callbacks making code hard to read and maintain. Resolved using: 1) Promises, 2) Async/await, 3) Modularization, 4) Control flow libraries like async.js.",
        example: `// Callback hell
getUser(userId, (user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].id, (comments) => {
      // Deep nesting...
    });
  });
});

// Resolved with Promises
getUser(userId)
  .then(user => getPosts(user.id))
  .then(posts => getComments(posts[0].id))
  .then(comments => console.log(comments));

// Or async/await
async function getData() {
  const user = await getUser(userId);
  const posts = await getPosts(user.id);
  const comments = await getComments(posts[0].id);
  return comments;
}`,
      },
      {
        section: "JavaScript",
        q: "What are the different data types in JavaScript?",
        a: "Primitive: string, number, boolean, undefined, null, symbol, bigint. Reference: object (including arrays, functions, dates). typeof returns 'object' for null (bug), arrays, and objects.",
        example: `// Primitives
let str = "hello"; // string
let num = 42; // number
let bool = true; // boolean
let undef; // undefined
let nul = null; // null
let sym = Symbol('id'); // symbol
let big = 123n; // bigint

// Reference
let obj = {}; // object
let arr = []; // object (array)
let func = () => {}; // function

console.log(typeof null); // "object" (quirk)`,
      },
      {
        section: "JavaScript",
        q: "What are var, let, and const and how do they differ?",
        a: "var: function-scoped, hoisted, can be redeclared. let: block-scoped, hoisted but TDZ, cannot redeclare. const: block-scoped, must be initialized, cannot reassign (but object properties can change).",
        example: `// var
var x = 1;
if (true) {
  var x = 2; // Same variable
}
console.log(x); // 2

// let
let y = 1;
if (true) {
  let y = 2; // Different variable
}
console.log(y); // 1

// const
const z = [1, 2, 3];
z.push(4); // OK, modifies array
// z = [5, 6]; // Error, cannot reassign`,
      },
      {
        section: "JavaScript",
        q: "What is the event loop in JavaScript?",
        a: "The event loop manages asynchronous operations. It has: 1) Call stack (executes functions), 2) Web APIs (timers, HTTP), 3) Callback queue (completed async tasks), 4) Microtask queue (Promises, MutationObserver). Microtasks run before macrotasks.",
        example: `console.log('Start');

setTimeout(() => console.log('Timeout'), 0); // Macrotask

Promise.resolve().then(() => console.log('Promise')); // Microtask

console.log('End');

// Output: Start, End, Promise, Timeout`,
      },
      {
        section: "JavaScript",
        q: "What is a closure in JavaScript?",
        a: "A closure is a function that remembers variables from its lexical scope even when executed outside that scope. Created when a function is defined inside another function and accesses outer variables.",
        example: `function outer(x) {
  return function inner(y) {
    return x + y; // x is from outer scope
  };
}

const add5 = outer(5);
console.log(add5(3)); // 8

// Common use: data privacy
function counter() {
  let count = 0;
  return {
    increment: () => ++count,
    get: () => count
  };
}
const c = counter();
c.increment(); // 1`,
      },
      {
        section: "JavaScript",
        q: "What is a promise and how is it used?",
        a: "A Promise represents a value that may be available now, later, or never. States: pending, fulfilled, rejected. Methods: then(), catch(), finally(). Used for async operations instead of callbacks.",
        example: `// Creating a Promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    Math.random() > 0.5 ? resolve('Success') : reject('Error');
  }, 1000);
});

// Using a Promise
promise
  .then(result => console.log(result))
  .catch(error => console.log(error))
  .finally(() => console.log('Done'));

// Async/await syntax
async function asyncFunction() {
  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}`,
      },
      {
        section: "JavaScript",
        q: "What is the difference between synchronous and asynchronous code?",
        a: "Synchronous: Code executes line by line, blocking until each operation completes. Asynchronous: Code continues executing while waiting for operations (I/O, timers) to complete, using callbacks, promises, or async/await.",
        example: `// Synchronous
console.log('Start');
const result = someLongOperation(); // Blocks
console.log(result);
console.log('End');

// Asynchronous
console.log('Start');
someAsyncOperation().then(result => {
  console.log(result);
});
console.log('End'); // Prints before result

// With async/await
async function example() {
  console.log('Start');
  const result = await someAsyncOperation();
  console.log(result);
  console.log('End');
}`,
      },
      {
        section: "JavaScript",
        q: "What are JavaScript events?",
        a: "Events are actions or occurrences that happen in the browser (user interactions, document loading, etc.). Handled using event listeners. Common events: click, submit, load, mouseover, keydown.",
        example: `// Adding event listener
const button = document.querySelector('button');
button.addEventListener('click', (event) => {
  console.log('Button clicked!');
  event.preventDefault(); // Prevent default action
});

// Event object properties
button.addEventListener('click', (e) => {
  console.log(e.type); // 'click'
  console.log(e.target); // clicked element
  console.log(e.clientX, e.clientY); // mouse position
});`,
      },
      {
        section: "JavaScript",
        q: "What is a callback function?",
        a: "A callback is a function passed as an argument to another function, executed after the outer function completes. Used for async operations, event handling, array methods.",
        example: `// Array method callback
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2); // [2, 4, 6]

// Async callback
setTimeout(() => {
  console.log('Executed after 1 second');
}, 1000);

// Event callback
button.addEventListener('click', function() {
  console.log('Button was clicked');
});`,
      },
      {
        section: "JavaScript",
        q: "What is function expression?",
        a: "A function expression creates a function and assigns it to a variable. Unlike function declarations, they're not hoisted. Can be anonymous or named.",
        example: `// Anonymous function expression
const greet = function(name) {
  return \`Hello, \${name}!\`;
};

// Named function expression
const factorial = function fact(n) {
  return n <= 1 ? 1 : n * fact(n - 1);
};

// Arrow function expression
const square = x => x * x;

// Immediately Invoked Function Expression (IIFE)
(function() {
  console.log('Executed immediately');
})();`,
      },
      {
        section: "JavaScript",
        q: "What are function parameters (default and optional)?",
        a: "Parameters are variables in function definition. Default parameters provide fallback values. Optional parameters can be omitted. Rest parameters collect remaining arguments into array.",
        example: `// Default parameters
function greet(name = 'Guest', greeting = 'Hello') {
  return \`\${greeting}, \${name}!\`;
}
greet(); // 'Hello, Guest!'
greet('John'); // 'Hello, John!'
greet('John', 'Hi'); // 'Hi, John!'

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4); // 10

// Optional parameters (using default undefined)
function log(message, level) {
  level = level || 'info'; // Old way
  console.log(\`[\${level}] \${message}\`);
}`,
      },
      {
        section: "JavaScript",
        q: "What are types of scopes in JavaScript?",
        a: "Global scope: accessible everywhere. Function scope: accessible within function. Block scope: accessible within blocks (let/const). Module scope: in ES6 modules. Lexical scope: inner functions access outer variables.",
        example: `// Global scope
var globalVar = 'global';

function outer() {
  // Function scope
  var functionVar = 'function';
  
  if (true) {
    // Block scope
    let blockVar = 'block';
    const constVar = 'const';
    var varInBlock = 'var'; // Function scope
  }
  
  console.log(blockVar); // Error
  console.log(varInBlock); // Works
}

console.log(functionVar); // Error`,
      },
      {
        section: "JavaScript",
        q: "What is Object-Oriented Programming in JavaScript?",
        a: "OOP in JS uses prototypes. Classes (ES6) are syntactic sugar. Key concepts: encapsulation, inheritance, polymorphism, abstraction. Objects inherit from prototypes, not classes like traditional OOP.",
        example: `// ES6 Class (syntactic sugar)
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(\`\${this.name} makes a sound\`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(\`\${this.name} barks\`);
  }
}

// Prototype-based
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(\`\${this.name} makes a sound\`);
};`,
      },
      {
        section: "JavaScript",
        q: "What are functions and their types in JavaScript?",
        a: "Functions are reusable code blocks. Types: 1) Function declarations, 2) Function expressions, 3) Arrow functions, 4) Methods (functions in objects), 5) Constructor functions, 6) Generator functions, 7) Async functions.",
        example: `// 1. Function declaration
function declare() { }

// 2. Function expression
const express = function() { };

// 3. Arrow function
const arrow = () => { };

// 4. Method
const obj = {
  method() { }
};

// 5. Constructor
function Constructor() { }

// 6. Generator
function* generator() {
  yield 1;
  yield 2;
}

// 7. Async function
async function asyncFunc() {
  await Promise.resolve();
}`,
      },
      {
        section: "JavaScript",
        q: "What is AJAX?",
        a: "AJAX (Asynchronous JavaScript and XML) enables updating web pages without reloading. Uses XMLHttpRequest or Fetch API to make HTTP requests. Can send/receive data in various formats (JSON, XML, HTML).",
        example: `// Using XMLHttpRequest
const xhr = new XMLHttpRequest();
xhr.open('GET', '/api/data');
xhr.onload = function() {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  }
};
xhr.send();

// Using Fetch API (modern)
fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));`,
      },
      {
        section: "JavaScript",
        q: "What are the differences between arrays and sets?",
        a: "Arrays: ordered, allow duplicates, indexed access, various methods. Sets: unordered, unique values only, no index access, faster lookup. Arrays for sequences, sets for unique collections.",
        example: `// Array
const arr = [1, 2, 2, 3];
console.log(arr[0]); // 1
console.log(arr.length); // 4
arr.push(4);

// Set
const set = new Set([1, 2, 2, 3]);
console.log(set.size); // 3 (duplicates removed)
console.log(set.has(1)); // true
set.add(4);

// Converting
const uniqueArray = [...new Set(arr)]; // [1, 2, 3, 4]
const arrayFromSet = [...set]; // [1, 2, 3, 4]`,
      },
    ],

    // TypeScript Questions
    typescript: [
      {
        section: "TypeScript",
        q: "What is TypeScript? and what problems does it solve?",
        a: "TypeScript is a superset of JavaScript that adds static typing. Solves: 1) Type safety (catch errors at compile time), 2) Better IDE support, 3) Self-documenting code, 4) Easier refactoring, 5) Enhanced maintainability for large codebases.",
        example: `// JavaScript (runtime error)
function add(a, b) {
  return a + b;
}
add(5, 'hello'); // '5hello' - unexpected

// TypeScript (compile-time error)
function add(a: number, b: number): number {
  return a + b;
}
add(5, 'hello'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'`,
      },
      {
        section: "TypeScript",
        q: "What is the difference between JavaScript and TypeScript?",
        a: "TypeScript extends JavaScript with: 1) Static typing, 2) Interfaces, 3) Generics, 4) Enums, 5) Access modifiers, 6) Compile-time error checking. TypeScript compiles to JavaScript. JavaScript is dynamically typed, TypeScript is statically typed.",
      },
      {
        section: "TypeScript",
        q: "What is the never data type in TypeScript?",
        a: "never represents values that never occur. Used for: 1) Functions that never return (infinite loops, throw errors), 2) Exhaustive type checking, 3) Unreachable code. It's the bottom type in TypeScript's type system.",
        example: `// Function that never returns
function throwError(message: string): never {
  throw new Error(message);
}

// Infinite loop
function infiniteLoop(): never {
  while (true) {
    // Never ends
  }
}

// Exhaustive checking
type Shape = 'circle' | 'square';

function getArea(shape: Shape): number {
  switch (shape) {
    case 'circle': return Math.PI * r * r;
    case 'square': return side * side;
    default: 
      const exhaustive: never = shape; // Error if new shape added
      throw new Error(\`Unknown shape: \${exhaustive}\`);
  }
}`,
      },
      {
        section: "TypeScript",
        q: "What is an interface?",
        a: "An interface defines a contract for object shapes. Specifies properties, methods, and their types. Classes can implement interfaces. Unlike classes, interfaces don't compile to JavaScript - they're only for type checking.",
        example: `interface User {
  id: number;
  name: string;
  email?: string; // Optional property
  readonly createdAt: Date; // Read-only
}

interface UserService {
  getUser(id: number): Promise<User>;
  createUser(user: Omit<User, 'id' | 'createdAt'>): Promise<User>;
}

class DatabaseUserService implements UserService {
  async getUser(id: number): Promise<User> {
    // Implementation
  }
  
  async createUser(userData: Omit<User, 'id' | 'createdAt'>): Promise<User> {
    // Implementation
  }
}`,
      },
      {
        section: "TypeScript",
        q: "What is a union in TypeScript?",
        a: "Union types allow a value to be one of several types. Use | operator. TypeScript narrows types in conditional blocks. Useful for APIs that accept multiple types or return different types.",
        example: `// Union type
type StringOrNumber = string | number;

function format(value: StringOrNumber): string {
  if (typeof value === 'string') {
    return value.toUpperCase(); // TypeScript knows it's string
  } else {
    return value.toString(); // TypeScript knows it's number
  }
}

// Union with literal types
type Status = 'pending' | 'approved' | 'rejected';

interface Request {
  id: number;
  status: Status;
}

// Discriminated union
type Success = { success: true; data: any };
type Failure = { success: false; error: string };
type Result = Success | Failure;

function handleResult(result: Result) {
  if (result.success) {
    console.log(result.data); // TypeScript knows data exists
  } else {
    console.log(result.error); // TypeScript knows error exists
  }
}`,
      },
      {
        section: "TypeScript",
        q: "What does the keyof operator do in TypeScript?",
        a: "keyof creates a union of all property keys of a type. Used with indexed access types to create type-safe property access. Enables generic constraints and type-safe object manipulation.",
        example: `interface Person {
  name: string;
  age: number;
  email: string;
}

type PersonKeys = keyof Person; // 'name' | 'age' | 'email'

// Indexed access type
type PersonName = Person['name']; // string
type PersonValue = Person[keyof Person]; // string | number

// Generic function with keyof
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: 'John', age: 30 };
const name = getProperty(person, 'name'); // Type: string
const age = getProperty(person, 'age'); // Type: number
// getProperty(person, 'invalid'); // Error`,
      },
    ],

    // Angular Questions
    angular: [
      {
        section: "Angular",
        q: "What are Angular Component Lifecycle Hooks (in order)?",
        a: "Order: 1) ngOnChanges, 2) ngOnInit, 3) ngDoCheck, 4) ngAfterContentInit, 5) ngAfterContentChecked, 6) ngAfterViewInit, 7) ngAfterViewChecked, 8) ngOnDestroy. Constructor runs before all hooks.",
        example: `export class MyComponent implements OnInit, OnDestroy {
  constructor() { console.log('Constructor'); }
  
  ngOnChanges() { console.log('ngOnChanges'); }
  ngOnInit() { console.log('ngOnInit'); }
  ngDoCheck() { console.log('ngDoCheck'); }
  ngAfterContentInit() { console.log('ngAfterContentInit'); }
  ngAfterContentChecked() { console.log('ngAfterContentChecked'); }
  ngAfterViewInit() { console.log('ngAfterViewInit'); }
  ngAfterViewChecked() { console.log('ngAfterViewChecked'); }
  ngOnDestroy() { console.log('ngOnDestroy'); }
}`,
      },
      {
        section: "Angular",
        q: "Is the constructor considered one of the Angular Lifecycle Hooks?",
        a: "No, constructor is not a lifecycle hook. It's called when Angular creates the component instance, before any lifecycle hooks. Use constructor for dependency injection, ngOnInit for initialization logic that needs input properties.",
      },
      {
        section: "Angular",
        q: "What is data binding in Angular?",
        a: 'Data binding synchronizes data between component and template. Types: 1) Interpolation {{value}}, 2) Property binding [property]="value", 3) Event binding (event)="handler", 4) Two-way binding [(ngModel)]="value".',
        example: `// Component
export class UserComponent {
  userName = 'John';
  isDisabled = false;
  
  onSave() {
    console.log('Saved:', this.userName);
  }
}

// Template
<input [(ngModel)]="userName" [disabled]="isDisabled">
<button (click)="onSave()" [disabled]="isDisabled">Save</button>
<p>Welcome {{userName}}!</p>`,
      },
      {
        section: "Angular",
        q: "What is the difference between one-way and two-way binding?",
        a: "One-way: data flows in one direction (component→template or template→component). Two-way: data flows both ways, automatically syncs. One-way is more performant, two-way uses [(ngModel)].",
        example: `// One-way binding
@Component({
  template: \`
    <input [value]="name" (input)="onNameChange($event)">
    <p>{{name}}</p>
  \`
})
export class OneWayComponent {
  name = 'John';
  onNameChange(event: any) {
    this.name = event.target.value;
  }
}

// Two-way binding
@Component({
  template: \`
    <input [(ngModel)]="name">
    <p>{{name}}</p>
  \`
})
export class TwoWayComponent {
  name = 'John';
}`,
      },
      {
        section: "Angular",
        q: "What is @Input and @Output?",
        a: "@Input: passes data from parent to child component. @Output: emits events from child to parent. Together enable component communication. @Input properties can be renamed with aliases.",
        example: `// Child component
@Component({
  selector: 'child-comp'
})
export class ChildComponent {
  @Input() userName: string;
  @Input('userAge') age: number; // Alias
  
  @Output() userSaved = new EventEmitter<User>();
  
  onSave() {
    this.userSaved.emit({ name: this.userName, age: this.age });
  }
}

// Parent component template
<child-comp 
  [userName]="currentUser.name"
  [userAge]="currentUser.age"
  (userSaved)="onUserSaved($event)">
</child-comp>`,
      },
      {
        section: "Angular",
        q: "What is a service in Angular?",
        a: "Services are singleton classes for shared logic: data fetching, business logic, utility functions. Injected using dependency injection. Can be provided at different levels (root, module, component).",
        example: `@Injectable({
  providedIn: 'root' // Singleton service
})
export class UserService {
  private users: User[] = [];
  
  getUsers(): Observable<User[]> {
    return of(this.users);
  }
  
  addUser(user: User) {
    this.users.push(user);
  }
}

// Component usage
export class UserListComponent {
  constructor(private userService: UserService) {}
  
  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      // Handle users
    });
  }
}`,
      },
      {
        section: "Angular",
        q: "How do you share data between components?",
        a: "Methods: 1) @Input/@Output (parent-child), 2) Services (any components), 3) ViewChild/ContentChild (direct access), 4) State management (NgRx, Akita), 5) Router state, 6) Local/session storage.",
        example: `// 1. Parent-Child with @Input/@Output
// 2. Service (see previous example)
// 3. ViewChild
@Component({
  template: '<child #childComp></child>'
})
export class ParentComponent implements AfterViewInit {
  @ViewChild('childComp') child: ChildComponent;
  
  ngAfterViewInit() {
    this.child.someMethod();
  }
}

// 4. Router state
this.router.navigate(['/user', userId], { 
  state: { user: userData } 
});`,
      },
      {
        section: "Angular",
        q: "What are Angular pipes and what types exist?",
        a: "Pipes transform data in templates. Types: 1) Built-in (DatePipe, UpperCasePipe, etc.), 2) Custom pipes. Pure pipes (default) only recalculate when input changes, impure pipes recalculate on every change detection.",
        example: `// Built-in pipes
{{ user.birthDate | date:'shortDate' }}
{{ user.name | uppercase }}
{{ items | slice:0:5 }}
{{ user | json }}

// Custom pipe
@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 20): string {
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}

// Usage
{{ longText | truncate:50 }}`,
      },
      {
        section: "Angular",
        q: "What are Angular guards and their types?",
        a: "Guards control navigation access. Types: 1) CanActivate (route access), 2) CanActivateChild (child routes), 3) CanDeactivate (leaving route), 4) CanLoad (lazy loading), 5) Resolve (pre-fetch data). Return boolean, Observable<boolean>, or Promise<boolean>.",
        example: `@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isLoggedIn().pipe(
      map(isLoggedIn => {
        if (!isLoggedIn) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    );
  }
}

// Route configuration
const routes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
];`,
      },
      {
        section: "Angular",
        q: "What are the primary types of Angular route guards?",
        a: "Same as above: CanActivate, CanActivateChild, CanDeactivate, CanLoad, Resolve. Each serves different navigation control purposes.",
      },
      {
        section: "Angular",
        q: "What is a resolver in Angular?",
        a: "Resolver pre-fetches data before route activation. Implements Resolve interface, returns data that becomes available in component. Prevents components from rendering with loading states. Data available in route.snapshot.data.",
        example: `@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {
  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    const userId = route.paramMap.get('id');
    return this.userService.getUser(+userId);
  }
}

// Route
{ 
  path: 'user/:id', 
  component: UserDetailComponent, 
  resolve: { user: UserResolver } 
}

// Component
export class UserDetailComponent implements OnInit {
  user: User;
  
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.user = this.route.snapshot.data['user'];
  }
}`,
      },
      {
        section: "Angular",
        q: "What is the difference between ng-template and ng-container?",
        a: "ng-template: defines template that can be instantiated elsewhere, doesn't render by default. ng-container: logical container that groups elements without adding DOM element. Both support structural directives.",
        example: `<!-- ng-template -->
<ng-template #loading>
  <div>Loading...</div>
</ng-template>

<button (click)="showLoading = true">Load</button>
<ng-container *ngIf="showLoading; else loading">
  <div>Data loaded!</div>
</ng-container>

<!-- ng-container for grouping -->
<ng-container *ngFor="let item of items; trackBy: trackByFn">
  <div *ngIf="item.visible">{{item.name}}</div>
</ng-container>

<!-- Without ng-container, would need extra div -->
<div *ngFor="let item of items">
  <div *ngIf="item.visible">{{item.name}}</div>
</div>`,
      },
      {
        section: "Angular",
        q: "What is the async pipe in Angular?",
        a: "Async pipe subscribes to Observable/Promise, returns latest value, unsubscribes automatically when component destroys. Prevents memory leaks. Can be used with | async in templates.",
        example: `// Component
export class UserComponent {
  users$ = this.userService.getUsers(); // Observable
  
  constructor(private userService: UserService) {}
}

// Template
<ul>
  <li *ngFor="let user of users$ | async">
    {{user.name}}
  </li>
</ul>

<!-- With loading state -->
<ng-container *ngIf="users$ | async as users; else loading">
  <ul>
    <li *ngFor="let user of users">{{user.name}}</li>
  </ul>
</ng-container>

<ng-template #loading>
  <div>Loading users...</div>
</ng-template>`,
      },
      {
        section: "Angular",
        q: "What is an Observable?",
        a: "Observable represents stream of data over time. Can emit multiple values asynchronously. Part of RxJS library. Unlike Promises (single value), Observables can emit multiple values and be cancelled.",
        example: `import { Observable } from 'rxjs';

// Creating Observable
const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  setTimeout(() => {
    subscriber.next(3);
    subscriber.complete();
  }, 1000);
});

// Subscribing
observable.subscribe({
  next: value => console.log(value), // 1, 2, 3
  error: err => console.error(err),
  complete: () => console.log('Done')
});

// Common operators
import { map, filter } from 'rxjs/operators';

observable
  .pipe(
    filter(x => x > 1), // 2, 3
    map(x => x * 10)    // 20, 30
  )
  .subscribe(value => console.log(value));`,
      },
      {
        section: "Angular",
        q: "What is a Subject in Angular?",
        a: "Subject is special type of Observable that allows multicasting to multiple subscribers. Can emit values manually using next(). Types: Subject (basic), BehaviorSubject (initial value), ReplaySubject (buffers values), AsyncSubject (last value on complete).",
        example: `import { Subject, BehaviorSubject } from 'rxjs';

// Subject
const subject = new Subject<number>();

subject.subscribe(x => console.log('Subscriber 1:', x));
subject.next(1); // Subscriber 1: 1

subject.subscribe(x => console.log('Subscriber 2:', x));
subject.next(2); // Both subscribers get 2

// BehaviorSubject (has initial value)
const behaviorSubject = new BehaviorSubject(0);

behaviorSubject.subscribe(x => console.log('Behavior:', x)); // Behavior: 0

behaviorSubject.next(1); // Behavior: 1

// New subscriber gets last value
behaviorSubject.subscribe(x => console.log('New:', x)); // New: 1`,
      },
      {
        section: "Angular",
        q: "What are the operators used on Observables?",
        a: "Creation: of, from, interval, timer. Transformation: map, switchMap, mergeMap, concatMap. Filtering: filter, take, skip, distinctUntilChanged. Combination: combineLatest, forkJoin, zip. Utility: tap, delay, timeout.",
        example: `import { of, interval } from 'rxjs';
import { map, filter, switchMap, debounceTime } from 'rxjs/operators';

// Map operator
of(1, 2, 3)
  .pipe(map(x => x * 2))
  .subscribe(x => console.log(x)); // 2, 4, 6

// Filter operator
of(1, 2, 3, 4, 5)
  .pipe(filter(x => x % 2 === 0))
  .subscribe(x => console.log(x)); // 2, 4

// SwitchMap (cancels previous inner observable)
searchInput.pipe(
  debounceTime(300),
  switchMap(query => this.searchService.search(query))
).subscribe(results => this.results = results);`,
      },
      {
        section: "Angular",
        q: "What is the difference between an Observable and a Subject?",
        a: "Observable: unicast (each subscriber gets independent execution), doesn't have next() method. Subject: multicast (all subscribers share same execution), has next() method to manually emit values. Subjects are Observables that can also act as Observers.",
      },
      {
        section: "Angular",
        q: "What is RxJS and how is it used in Angular?",
        a: "RxJS (Reactive Extensions for JavaScript) is library for reactive programming using Observables. In Angular: HTTP client returns Observables, forms use Observables, router events are Observables. Enables complex async operations with operators.",
        example: `// HTTP with RxJS
@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users').pipe(
      map(users => users.map(u => ({ ...u, fullName: \`\${u.firstName} \${u.lastName}\` }))),
      catchError(error => {
        console.error('Error fetching users:', error);
        return of([]); // Return empty array on error
      })
    );
  }
}

// Component
export class UserComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  ngOnInit() {
    this.apiService.getUsers()
      .pipe(takeUntil(this.destroy$)) // Unsubscribe on destroy
      .subscribe(users => this.users = users);
  }
  
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}`,
      },
      {
        section: "Angular",
        q: "What is dependency injection and how is it implemented in Angular?",
        a: "DI is design pattern where dependencies are injected rather than created. Angular's injector provides dependencies to components/services. Uses @Injectable decorator, providers array. Enables testability and modularity.",
        example: `// Service
@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  log(message: string) {
    console.log(message);
  }
}

// Component with DI
@Component({...})
export class AppComponent {
  constructor(private logger: LoggerService) {}
  
  ngOnInit() {
    this.logger.log('App initialized');
  }
}

// Manual provider
@NgModule({
  providers: [
    { provide: LoggerService, useClass: ConsoleLoggerService }
  ]
})
export class AppModule { }

// Injection tokens
export const API_URL = new InjectionToken<string>('API_URL');

@NgModule({
  providers: [
    { provide: API_URL, useValue: 'https://api.example.com' }
  ]
})
export class AppModule { }

export class ApiService {
  constructor(@Inject(API_URL) private apiUrl: string) {}
}`,
      },
      {
        section: "Angular",
        q: "How do you differentiate between a component, directive, and service?",
        a: "Component: UI building block with template, styles, logic. Directive: modifies DOM behavior/elements. Service: shared logic, no UI. Components are directives with templates.",
        example: `// Component
@Component({
  selector: 'app-user-card',
  template: '<div>{{user.name}}</div>',
  styles: ['div { border: 1px solid #ccc; }']
})
export class UserCardComponent {
  @Input() user: User;
}

// Directive
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
  
  constructor(private el: ElementRef) {}
}

// Service
@Injectable()
export class UserService {
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }
}`,
      },
      {
        section: "Angular",
        q: "What is @Injectable used for?",
        a: "@Injectable decorator marks a class as available for dependency injection. It's required for services that have their own dependencies. The decorator enables Angular's DI system to create and manage instances. The providedIn property determines where the service is available (root for singleton, module for specific modules).",
        example: `// Basic service
@Injectable({
  providedIn: 'root' // Available throughout app as singleton
})
export class UserService {
  constructor(private http: HttpClient) {}
  
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }
}

// Module-level service
@Injectable({
  providedIn: UserModule
})
export class UserDataService {
  // Only available in UserModule
}

// Service with dependencies
@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
    private logger: LoggerService
  ) {}
}

// Component using service
@Component({...})
export class UserListComponent {
  constructor(private userService: UserService) {}
}`,
      },
      {
        section: "Angular",
        q: "What is virtual DOM and how does it work?",
        a: "Note: Angular doesn't use Virtual DOM like React. Angular uses change detection with real DOM updates. However, Virtual DOM concept: lightweight JavaScript representation of actual DOM. When state changes, virtual DOM is updated, then diffed with previous version. Only differences are applied to real DOM, minimizing expensive DOM operations and improving performance.",
        example: `// Virtual DOM concept (React example, not Angular)
// State change triggers:
// 1. Update Virtual DOM
const virtualDOM = {
  type: 'div',
  props: { className: 'container' },
  children: [
    { type: 'h1', children: 'Hello World' }
  ]
};

// 2. Diff with previous Virtual DOM
const changes = diff(oldVirtualDOM, newVirtualDOM);

// 3. Batch update real DOM
updateRealDOM(changes);

// Angular's approach instead:
// Uses Zone.js for change detection
// Updates real DOM directly with optimizations
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush // Optimize updates
})
export class OptimizedComponent {
  // Only checks when inputs change or events fire
}`,
      },
      {
        section: "Angular",
        q: "What are design patterns commonly used in Angular?",
        a: "Common patterns: 1) Dependency Injection, 2) Singleton (services), 3) Observer (RxJS), 4) Component composition, 5) Smart/Dumb components, 6) Container/Presentational components, 7) Facade pattern.",
      },
      {
        section: "Angular",
        q: "How do you share data using services or @Input and @Output?",
        a: "Services: inject service, call methods to get/set data. @Input/@Output: parent passes data via @Input, child emits events via @Output. Services for cross-component sharing, @Input/@Output for parent-child.",
      },
      {
        section: "Angular",
        q: "What is component projection in Angular?",
        a: "Component projection (content projection) allows parent components to insert content into child component templates using <ng-content>. Enables flexible, reusable components.",
        example: `// Child component with projection
@Component({
  selector: 'card',
  template: \`
    <div class="card">
      <div class="card-header">
        <ng-content select=".card-title"></ng-content>
      </div>
      <div class="card-body">
        <ng-content></ng-content>
      </div>
      <div class="card-footer">
        <ng-content select=".card-actions"></ng-content>
      </div>
    </div>
  \`
})
export class CardComponent {}

// Parent usage
<card>
  <h3 class="card-title">Card Title</h3>
  <p>Card content goes here...</p>
  <div class="card-actions">
    <button>Save</button>
    <button>Cancel</button>
  </div>
</card>`,
      },
      {
        section: "Angular",
        q: "How does the ngOnChanges hook work, and what is the role of the SimpleChanges object?",
        a: "ngOnChanges called when @Input properties change. Receives SimpleChanges object containing previous/current values, firstChange flag. Only called for bound inputs, not internal changes.",
        example: `export class ChildComponent implements OnChanges {
  @Input() user: User;
  @Input() count: number;
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['user']) {
      console.log('User changed from', changes['user'].previousValue, 'to', changes['user'].currentValue);
      console.log('First change?', changes['user'].firstChange);
    }
    
    if (changes['count'] && !changes['count'].firstChange) {
      console.log('Count changed:', changes['count'].previousValue, '->', changes['count'].currentValue);
    }
  }
}`,
      },
      {
        section: "Angular",
        q: "What is an angular component and from what it is composed of?",
        a: "Angular component is building block with: 1) TypeScript class with @Component decorator, 2) HTML template, 3) CSS styles, 4) Optional selector. Manages UI and logic.",
      },
      {
        section: "Angular",
        q: "What are the types of forms in Angular?",
        a: "Template-driven forms: logic in template, two-way binding with ngModel. Reactive forms: logic in component, FormControl/FormGroup, more control and testability. Dynamic forms: created programmatically.",
        example: `// Template-driven
@Component({
  template: \`
    <form #f="ngForm" (ngSubmit)="onSubmit(f)">
      <input name="name" ngModel required>
      <button type="submit" [disabled]="!f.valid">Submit</button>
    </form>
  \`
})
export class TemplateFormComponent {
  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}

// Reactive
@Component({
  template: \`
    <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
      <input formControlName="name">
      <button type="submit" [disabled]="userForm.invalid">Submit</button>
    </form>
  \`
})
export class ReactiveFormComponent implements OnInit {
  userForm: FormGroup;
  
  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required]
    });
  }
  
  onSubmit() {
    console.log(this.userForm.value);
  }
}`,
      },
      {
        section: "Angular",
        q: "On which design pattern are observables built upon? (and explain that pattern)",
        a: "Observer pattern: Subject maintains list of observers, notifies them of state changes. Observable is the subject, subscribers are observers. Enables loose coupling between objects.",
      },
      {
        section: "Angular",
        q: "What is a directive in Angular, and what are the types of directives?",
        a: "Directive modifies DOM behavior/appearance. Types: 1) Component directives (with templates), 2) Attribute directives (change element behavior), 3) Structural directives (change DOM structure).",
        example: `// Attribute directive
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = '';
  
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.appHighlight || 'yellow';
  }
  
  constructor(private el: ElementRef) {}
}

// Structural directive
@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
  
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
}

// Usage
<p [appHighlight]="'red'">Hover me</p>
<div *appUnless="isLoading">Content</div>`,
      },
    ],

    // SOLID Principles Questions
    solid: [
      {
        section: "SOLID Principles",
        q: "What are the SOLID principles in object-oriented programming?",
        a: "SOLID: 1) Single Responsibility: class has one reason to change. 2) Open/Closed: open for extension, closed for modification. 3) Liskov Substitution: subtypes replace supertypes. 4) Interface Segregation: clients shouldn't depend on unused interfaces. 5) Dependency Inversion: depend on abstractions, not concretions.",
        example: `// 1. Single Responsibility
class UserService {
  // Only handles user data operations
  getUser(id: number): User { /* ... */ }
  saveUser(user: User): void { /* ... */ }
}

class EmailService {
  // Only handles email sending
  sendWelcomeEmail(user: User): void { /* ... */ }
}

// 2. Open/Closed
interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}
  area(): number { return this.width * this.height; }
}

class Circle implements Shape {
  constructor(private radius: number) {}
  area(): number { return Math.PI * this.radius ** 2; }
}

// 3. Liskov Substitution
class Bird {
  fly(): void { /* ... */ }
}

class Sparrow extends Bird {
  fly(): void { /* can fly */ }
}

class Ostrich extends Bird {
  fly(): void { throw new Error("Can't fly"); } // Violates LSP
}

// Better approach
interface Flyable {
  fly(): void;
}

class Sparrow extends Bird implements Flyable {
  fly(): void { /* ... */ }
}

class Ostrich extends Bird {
  // No fly method
}`,
      },
      {
        section: "SOLID Principles",
        q: "How do SOLID principles apply in Angular?",
        a: "Angular promotes SOLID through: 1) Single Responsibility (components focused on one concern), 2) Open/Closed (extending components without modifying), 3) Liskov Substitution (compatible component interfaces), 4) Interface Segregation (specific service interfaces), 5) Dependency Inversion (DI with abstractions).",
        example: `// Single Responsibility
@Component({
  selector: 'user-profile',
  template: '<div>{{user.name}}</div>' // Only displays user
})
export class UserProfileComponent {
  @Input() user: User;
}

@Injectable()
export class UserService { // Only manages user data
  getUser(id: number): Observable<User> {
    return this.http.get<User>(\`/api/users/\${id}\`);
  }
}

// Dependency Inversion
interface Logger {
  log(message: string): void;
}

@Injectable()
export class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(message);
  }
}

@Injectable()
export class AppService {
  constructor(private logger: Logger) {} // Depends on abstraction
  
  doSomething() {
    this.logger.log('Doing something');
  }
}`,
      },
      {
        section: "SOLID Principles",
        q: "How does dependency injection support SOLID principles?",
        a: "DI supports: 1) Dependency Inversion (inject abstractions), 2) Single Responsibility (classes focus on logic, not creation), 3) Open/Closed (swap implementations without changing code). Enables loose coupling and testability.",
      },
    ],

    // Design Patterns Questions
    design_patterns: [
      {
        section: "Design Patterns",
        q: "What are design patterns in software development?",
        a: "Design patterns are proven solutions to common software design problems. Provide reusable templates for solving recurring issues. Categorized as: Creational, Structural, Behavioral. Improve code maintainability, readability, and reusability.",
      },
      {
        section: "Design Patterns",
        q: "What are commonly used design patterns in Angular?",
        a: "Common Angular patterns: 1) Dependency Injection (built-in), 2) Singleton (services), 3) Observer (RxJS), 4) Component composition, 5) Smart/Dumb components, 6) Facade (services hiding complexity), 7) Strategy (different implementations), 8) Decorator (enhancing components).",
        example: `// Singleton Pattern (Angular services)
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];
  
  getUsers(): User[] {
    return this.users;
  }
}

// Observer Pattern (RxJS)
@Component({...})
export class SearchComponent {
  private searchSubject = new Subject<string>();
  searchResults$ = this.searchSubject.pipe(
    debounceTime(300),
    switchMap(query => this.searchService.search(query))
  );
  
  onSearch(query: string) {
    this.searchSubject.next(query);
  }
}

// Facade Pattern
@Injectable()
export class ApiFacadeService {
  constructor(
    private userApi: UserApiService,
    private productApi: ProductApiService,
    private orderApi: OrderApiService
  ) {}
  
  getDashboardData(): Observable<DashboardData> {
    return forkJoin({
      users: this.userApi.getUsers(),
      products: this.productApi.getProducts(),
      orders: this.orderApi.getOrders()
    });
  }
}`,
      },
      {
        section: "Design Patterns",
        q: "How can design patterns improve maintainability and scalability?",
        a: "Patterns improve: 1) Maintainability (standardized solutions, easier understanding), 2) Scalability (modular code, separation of concerns), 3) Testability (dependency injection, loose coupling), 4) Reusability (proven solutions), 5) Communication (common vocabulary).",
      },
      {
        section: "Design Patterns",
        q: "On which design pattern are observables built upon? (and explain that pattern)",
        a: "Observer pattern: defines one-to-many relationship between objects. When subject changes state, all observers are notified. Observable is the subject, subscribers are observers. Enables loose coupling and reactive programming.",
        example: `// Observer Pattern Implementation
class Subject {
  private observers: Observer[] = [];
  
  attach(observer: Observer): void {
    this.observers.push(observer);
  }
  
  detach(observer: Observer): void {
    this.observers = this.observers.filter(obs => obs !== observer);
  }
  
  notify(data: any): void {
    this.observers.forEach(obs => obs.update(data));
  }
}

interface Observer {
  update(data: any): void;
}

// In RxJS
const observable = new Observable(subscriber => {
  // Subject logic
  subscriber.next('data');
});

observable.subscribe(data => {
  // Observer logic
  console.log(data);
});`,
      },
    ],
  },
};

// Render all questions
function renderQuestions() {
  const content = document.getElementById("content");
  const allQuestions = questions.frontend;

  let html = "";

  // Group questions by section
  const sections = {
    HTML: {
      icon: "�",
      questions: allQuestions.html || [],
    },
    CSS: {
      icon: "🎨",
      questions: allQuestions.css || [],
    },
    Bootstrap: {
      icon: "🅱️",
      questions: allQuestions.bootstrap || [],
    },
    JavaScript: {
      icon: "⚡",
      questions: allQuestions.js || [],
    },
    TypeScript: {
      icon: "🔷",
      questions: allQuestions.typescript || [],
    },
    Angular: {
      icon: "🅰️",
      questions: allQuestions.angular || [],
    },
    "SOLID Principles": {
      icon: "🏛️",
      questions: allQuestions.solid || [],
    },
    "Design Patterns": {
      icon: "🎯",
      questions: allQuestions.design_patterns || [],
    },
  };

  Object.entries(sections).forEach(([section, data]) => {
    if (data.questions.length > 0) {
      html += `<div class="section-group">`;
      html += `<h2 class="section-title">${data.icon} ${section} Questions</h2>`;

      data.questions.forEach((item, index) => {
        const questionId = `frontend-${section.toLowerCase()}-${index}`;
        html += `
          <div class="question-card expanded" data-question-id="${questionId}">
            <div class="question-header">
              <span class="question-number">${index + 1}</span>
              <span class="question-text">${item.q}</span>
            </div>
            <div class="answer-section">
              <span class="answer-label">Answer</span>
              <div class="answer-text">${item.a}</div>
              ${
                item.example
                  ? `<div class="example-section"><div class="example-label">💡 Example:</div><pre class="example-code">${item.example}</pre></div>`
                  : ""
              }
            </div>
          </div>
        `;
      });

      html += "</div>";
    }
  });

  content.innerHTML =
    html || '<div class="welcome-message"><h2>Questions loading...</h2></div>';
}

// Progress tracking
function getProgress() {
  const progress = localStorage.getItem("questionProgress");
  return progress ? JSON.parse(progress) : {};
}

function updateProgress(questionId) {
  const progressData = getProgress();
  if (!progressData.frontend) progressData.frontend = [];
  if (!progressData.frontend.includes(questionId)) {
    progressData.frontend.push(questionId);
    localStorage.setItem("questionProgress", JSON.stringify(progressData));
  }
}

// Theme management
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme === "dark") document.body.classList.add("dark-mode");
  updateThemeIcon();
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateThemeIcon();
}

function updateThemeIcon() {
  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    const isDark = document.body.classList.contains("dark-mode");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
  }
}

// Back to top
function initBackToTop() {
  const backToTopBtn = document.getElementById("backToTop");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderQuestions();
  initBackToTop();

  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
});
