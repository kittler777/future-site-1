# Website quality standard

These instructions apply to every user-facing page in this repository. The goal is a production-ready, subject-specific website: implemented, responsive, accessible, tested, visually reviewed, and—when requested—verified at its public URL.

## 1. Start with purpose, not decoration

Before writing code, determine:

- what the site is about and who it is for;
- the single most important job of the page;
- the primary action a visitor should take;
- which facts, copy, assets, and constraints are real;
- which visual references genuinely belong to the subject.

If the brief is deliberately open, choose a concrete subject with its own materials, language, and atmosphere. Do not default to an invented software startup.

Make a short art-direction plan before implementation:

- a palette of four to six purposeful tokens;
- intentional typography roles;
- a layout concept based on the content;
- one memorable visual gesture;
- two or three principles that connect the visuals to the subject.

Use the swap test: if the same design could be relabeled for a coffee shop, finance app, AI tool, and architecture studio without meaningful changes, it is too generic.

## 2. Avoid the AI-template look

Treat these as warning signs, not forbidden ingredients. Do not combine them by default:

- cream backgrounds with terracotta accents;
- black backgrounds with acid-green type;
- arbitrary purple-to-blue gradients;
- a huge centered slogan with one colored or italic word;
- all-caps eyebrow text above every heading;
- a predictable hero → logo strip → three cards → testimonials → pricing sequence;
- every idea enclosed in the same rounded card with the same shadow;
- numbered sections when the content is not a sequence;
- floating blobs, glass panels, pill overload, and ornamental grids;
- fake dashboards, charts, metrics, customer logos, people, or testimonials;
- arrow icons on every link;
- fade-up animation on every section;
- vague copy such as “reimagine,” “unlock,” “seamless,” or “next-generation” without concrete meaning.

Aim for clarity, specificity, restraint, and careful finishing. Originality should come from the subject and structure, not from random visual effects.

## 3. Content must be credible

- Use plain language and concrete verbs.
- Make headings describe the actual content.
- Make calls to action say exactly what will happen.
- Do not invent awards, certifications, customers, quotations, people, addresses, or performance claims.
- Label demonstrations and sample data clearly.
- Do not use lorem ipsum or filler text in a finished page.
- Keep terms and capitalization consistent.
- Provide useful empty, loading, success, and error messages where relevant.

## 4. Engineer the interface

### Semantics and accessibility

- Use landmarks, headings in a logical order, lists, labels, buttons, and links according to their real purpose.
- Prefer native HTML behavior. Use ARIA only when native semantics are insufficient.
- Provide meaningful alternative text; use empty alt text for purely decorative images.
- Make the entire experience operable with a keyboard.
- Keep focus indicators clearly visible and never remove them without a replacement.
- Maintain readable contrast and do not convey essential meaning by color alone.
- Keep mobile touch targets at least 44 by 44 CSS pixels where practical.
- Associate validation and error messages with their fields.

### Responsive behavior

- Build an intrinsic layout that adapts to content and viewport size.
- Test approximately 360 px, 768 px, and 1440 px widths.
- Avoid accidental horizontal scrolling, clipped content, tiny controls, and unreadably long lines.
- Preserve information and actions on mobile instead of hiding them to make the layout fit.
- Test long headings, long names, missing images, and translated-length text.

### Motion and interaction

- Use motion to explain change, hierarchy, or cause and effect.
- Respect `prefers-reduced-motion`.
- Do not delay access to content for decorative entrances.
- Implement hover, focus, active, disabled, loading, empty, success, and error states where they apply.
- Every visible control must work; do not ship dead buttons or placeholder links.

### Performance and portability

- Prefer semantic HTML and CSS over JavaScript for static behavior.
- Prefer the simplest stack that fulfills the brief.
- Set image width and height to prevent layout shifts.
- Compress images and lazy-load offscreen media.
- Avoid unnecessary dependencies, large animation libraries, and blocking third-party scripts.
- For GitHub Pages, use relative asset paths and verify behavior under the repository subpath.
- Never commit secrets or credentials.

## 5. Required quality loop

Before reporting completion:

1. Run the repository's lint, type, test, and production-build commands when present.
2. Launch the real production output or the closest representative preview.
3. Capture and inspect the page at mobile, tablet, and desktop widths.
4. Review the first viewport, every distinct section, forms, longest content, and footer.
5. Navigate the whole page with the keyboard.
6. Test all links, buttons, forms, menus, dialogs, and route changes.
7. Check the browser console for errors and obvious warnings.
8. Test reduced-motion behavior.
9. Run the swap test and the warning-sign list above.
10. Remove visual elements that do not support hierarchy, meaning, or interaction.
11. Repeat until the page is coherent and robust.

If publishing was requested:

1. Wait for the deployment workflow to finish.
2. Open the public URL rather than assuming the commit deployed.
3. Verify the title, main heading, primary action, assets, links, and mobile layout.
4. Check for a 404, missing CSS, incorrect repository paths, and runtime errors.
5. Give the user the verified public URL.

Do not call the site finished merely because the code exists or a deployment job was started.

## Source lineage

This standard is adapted and synthesized from:

- Anthropic's frontend-design skill: https://github.com/anthropics/skills/tree/main/skills/frontend-design
- Vercel Labs' Web Interface Guidelines: https://github.com/vercel-labs/web-interface-guidelines
- the AGENTS.md convention: https://agents.md/
- WAI-ARIA Authoring Practices: https://www.w3.org/WAI/ARIA/apg/patterns/

When these sources evolve, keep this file concise and update only guidance that materially improves delivered websites.
