---
name: distinctive-websites
description: Design, build, revise, audit, or publish websites and landing pages with subject-specific art direction, production-quality frontend engineering, accessibility, responsive behavior, and visual QA. Use for any user-facing website or major web UI request; skip backend-only changes with no visible interface.
---

# Distinctive Websites

Build a finished website, not a plausible mockup. Preserve the user's explicit requirements and existing brand language.

## Establish the brief

Before choosing a visual style, identify:

- the subject and audience;
- the page's job and primary action;
- available real content, assets, and constraints;
- visual references that belong specifically to the subject.

If the prompt is simply “make any site,” choose a concrete subject with real texture and vocabulary. Do not default to an imaginary SaaS product.

Create a short internal art-direction plan:

- four to six purposeful color tokens;
- intentional type roles;
- a layout concept;
- one memorable visual gesture;
- two or three design principles tied to the subject.

Reject any major choice that could be moved unchanged to an unrelated product.

## Avoid generated-template aesthetics

Do not reach automatically for:

- cream-and-clay, black-and-acid-neon, or arbitrary purple/blue gradients;
- a giant centered slogan with one highlighted word;
- all-caps eyebrow labels above every heading;
- a hero followed mechanically by logos, three cards, testimonials, and pricing;
- identical cards with the same radius, shadow, and spacing;
- numbered blocks when the content is not sequential;
- glass panels, floating blobs, excessive pills, or fake dashboard charts;
- arrows on every text link;
- fade-up animation on every section;
- generic claims, fabricated metrics, fake customers, or placeholder praise.

Novelty is not the goal. Coherence, restraint, specificity, and finish are.

## Build the real interface

- Write concrete, subject-aware copy and make the primary action obvious.
- Never invent awards, clients, quotations, people, statistics, or certifications.
- Use semantic HTML and native controls before ARIA.
- Make every interaction keyboard-operable with visible focus.
- Keep mobile pointer targets at least 44 by 44 CSS pixels where practical.
- Respect `prefers-reduced-motion` and avoid decorative motion that blocks use.
- Use responsive, intrinsic layouts; do not merely hide broken desktop UI.
- Set image dimensions, optimize assets, and lazy-load offscreen media.
- Prefer a simple static implementation when it satisfies the brief.
- For GitHub Pages, use relative asset URLs and verify the repository subpath.
- Design hover, focus, active, disabled, loading, empty, and error states when relevant.

## Verify before calling it finished

1. Run the available lint, type, and production-build checks.
2. Preview at roughly 360 px, 768 px, and 1440 px widths.
3. Inspect the first viewport, every distinct section, the longest content, forms, and footer.
4. Check for clipping, accidental horizontal scrolling, weak contrast, and unreadable type.
5. Navigate with the keyboard and test every visible control and link.
6. Check the browser console and test reduced-motion behavior.
7. Remove decoration that does not support hierarchy, meaning, or interaction.
8. If publishing was requested, wait for deployment and open the public URL on desktop and mobile widths.

Do not report a website as complete merely because files were committed.

## Source lineage

This workflow synthesizes:

- Anthropic's frontend-design skill: https://github.com/anthropics/skills/tree/main/skills/frontend-design
- Vercel Labs' Web Interface Guidelines: https://github.com/vercel-labs/web-interface-guidelines
- the AGENTS.md convention: https://agents.md/
- WAI-ARIA Authoring Practices: https://www.w3.org/WAI/ARIA/apg/patterns/
