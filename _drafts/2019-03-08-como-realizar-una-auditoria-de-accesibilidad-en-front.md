---
layout: post
title: "¿Cómo realizar una auditoría de accesibilidad?"
tags:
  - Accessibility
lang: es
page_class: post
description:
---

## Es necesario entender unas bases

### ¿A qué usuarios tengo que dar soporte?

+ Personas que usan telcado.
+ Personas invidentes.
+ Personas daltónicas.
+ Personas con baja visión.
+ Personas sordas y con problemas de audición.
+ Personas con dificultades de aprendizaje y limitaciones cognitivas.
+ Personas con problemas de movilidad.
+ Personas con discapacidades del habla.
+ Personas con transtornos cognitivos.

A11y Audit

+ Focusable
+ Se puede usar el método .focus() de JS
+ Keyboard accessible
+ Tab
+ Focus + Tab
+ Arrow keys: focus around component
+ Space
+ Enter
+ Tabindex
+ -1
+ 0
+ Más de uno
+ Roving Focus Technique
+ Skip Links
+ Skip Links in WebAim
+ Aria Authoring Practices (patterns section: 11)
+ POUR Principle
+ Perceivable - Information and user interface components must be presentable to users in ways they can perceive.
+ Operable - User interface components and navigation must be operable.
+ Understandable - Information and the operation of user interface must be understandable.
+ Robust - Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.

+ Screen reader element can have
+ Role
+ Name o Label
+ State
+ Value
+ Input (for) + Label (id) always 
+
+ Is usable in Windows High Contrast Mode.
+ Usable in screen readers
+ Enabling VoiceOver on OSX / MacOS
+ Enabling VoiceOver on iOS
+ Enabling Narrator on Windows
+ Enabling TalkBack on Android
+ Orca is available for GNOME
+ Download NVDA for Windows for free (a small donation would be nice of you)
+ JAWS is available as a free trial
+ Is still usable without images.
+ Uses progressive enhancement to account for broken/missing libraries.
+ Is still usable without custom typefaces, which includes icon fonts.
+ Is still functional when common ad blocking tools are used.
+ Disable offscreen content when collapsed
+ No usar color únicamente para mostrar errores o cosas satisfactorias, añadir a ser posible de texturas, iconografía y textos
+ Magnify the page to 200%, then to 500%
+ Minimum
+ Color contrast
+ Alt text in imgs
+ Headings
+ Focus
+ Tab order
+ Nav shortcuts
+ Forms
+ Without images
+ Touch targets
+ Accounts for multiple input types
+ Keyboard
+ Mouse
+ Touch
+ Stylus
+ Voice 
+ Landmarks
+ Do not depend on color
+ Do not block zoom: <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
+ Rediscover the alt attribute
+ Add subtitles and captions to your videos
+ Semantics = accessibility
+ Use roles when necessary
+ On hiding elements
+ 5 Fast accesibility tests you can do: https://openinclusion.com/blog/5-accessibility-tests/
+ Check that you can pause, stop or mute any dynamic content.
+ Check that you can pause, stop or mute any audio which autoplays.
+ Check that any video content has captions.
+ Check that if you increase the text size, that content does not appear broken.
+ Check that keyboard users can skip past repeated content.
+ W3C recomendations
+ Provide sufficient contrast between foreground and background.
+ Don’t use color alone to convey information.
+ Ensure that interactive elements are easy to identify.
+ Provide clear and consistent navigation options.
+ Ensure that form elements include clearly associated labels.
+ Provide easily identifiable feedback.
+ Use headings and spacing to group related content.
+ Create designs for different viewport sizes.
+ Include image and media alternatives in your design.
+ Provide controls for content that starts automatically.
+ Provide informative, unique page titles
+ Use headings to convey meaning and structure
+ Make link text meaningful
+ Write meaningful text alternatives for images
+ Create transcripts and captions for multimedia
+ SVG Accesibility
+ Icon Fonts vs SVGs - Which One Should You Use In 2018?: https://www.keycdn.com/blog/icon-fonts-vs-svgs
+ IMG de Twitter: https://twitter.com/IgnaciodeNuevo/status/960646272356093952
+ Inline SVG vs Icon Fonts: https://css-tricks.com/icon-fonts-vs-svg/
+ Tips for Creating Accessible SVG: https://www.sitepoint.com/tips-accessible-svg/
+ SVG, Icon Fonts, and Accessibility: A Case Study: https://www.24a11y.com/2017/svg-icon-fonts-accessibility-case-study/
+ Using ARIA to enhance SVG accessibility: https://developer.paciellogroup.com/blog/2013/12/using-aria-enhance-svg-accessibility/
+ Why Inline SVG is Best SVG: https://www.youtube.com/watch?v=af4ZQJ14yu8
+ #137: SVG is for Everybody: https://css-tricks.com/video-screencasts/137-svg-is-for-everybody/

+ W3C Nu HTML Checker: https://validator.w3.org/nu/
+ Tenon
+ aXe: https://www.deque.com/axe/
+ WAVE: https://wave.webaim.org/extension/
+ PowerMapper: https://www.powermapper.com/products/sortsite/checks/accessibility-checks/
+ Lighthouse accessibility audit: https://developers.google.com/web/tools/lighthouse/
+ Color Blind tool: https://www.toptal.com/designers/colorfilter
+ Chrome Accesibility Tool: https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb
+ CLI
+ Pa11y: http://pa11y.org/
+ AccessLint.js: https://github.com/AccessLint/accesslint.js
+ Bookmarklets
+ tota11y: http://khan.github.io/tota11y/
+ HTML CodeSniffer: http://squizlabs.github.io/HTML_CodeSniffer/

+ A11y  Project Checklist: ttps://a11yproject.com/checklist
+ Accessibility Cheatsheet: https://moritzgiessmann.de/accessibility-cheatsheet/

+ Can you get to the control via the keyboard?
+ Can you use the control with the keyboard?
+ Can you use the control with touch gestures? With assistive technology enabled?
+ Can you operate the control using the standard keys and/or touch gestures for the control type?
+ Can you easily see it when the control has focus?
+ The control has a text label that is exposed as an accessible name in accessibility APIs.
+ The control has an appropriate role exposed in accessibility APIs.
+ The control has any UI states and properties that it has exposed in accessibility APIs.
+ The control label/description/icon and its states are perceivable/usable for low vision users.
+ The control is perceivable/usable when High Contrast Mode is enabled.

+ 1.3.2 Meaningful Sequence
+ 2.1.2 No keyboard trap
+ Modals and Keyboard traps
+ 1.1Text alternatives for non text content
+ ARIA
+ Aria Roles
+ Aria States
+ Aria Properties
+ Firefox A11y Panel
+ a11y Landmarks
