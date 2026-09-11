# Product photo refinement

Mode: built-in image generation, using the actual `IMG_1115.HEIC` product photograph as the bottle reference and the previous café visual as the atmosphere reference. The HEIC was converted to PNG for tool compatibility.

Original refinement: `public/assets/img/bruin-kroeg-realistic.png`.

Current output: `public/assets/img/bruin-kroeg-soft-reflections.png`. This is a generated product visualization based on the actual product, not an unedited photograph.

## Final prompt

The initial photo-based prompt follows. The final soft-reflection edit is recorded below.

Use case: identity-preserve / product-mockup edit.
Input image 1 is the ACTUAL product photograph and the authoritative reference for the bottle and label. Input image 2 is the existing website visual and reference ONLY for café background, lighting mood, portrait composition.
Create a realistic 1024x1536 portrait product photograph of the EXACT bottle in image 1, placed in the nostalgic wooden Belgian café scene of image 2. Match the real bottle's silhouette faithfully: gold metallic crown cap (NOT black), pronounced thick glass collar below the cap, straight short neck transitioning into long rounded upper shoulder then a distinct second broad curved shoulder above the stout cylindrical lower body. Preserve its actual height-to-width proportions and the dark nearly opaque brown filled glass. Smooth dry glass with natural window reflections, NOT covered in fake condensation. The cream paper wrap label is positioned LOW on the body as in the real photograph, leaving a substantial expanse of dark glass above it. Closely preserve its real relative size, softly curved top and bottom from wrapping, typewriter typography, spacing, and centered thin-line wooden barstool illustration. Label text exactly "DRINKBAAR", "Bruin Kroeg", "Belgisch Bier", "33 cl", "alc 7,5% vol". Use the real photo to correct the generic invented silhouette and too-high label placement in image 2. Omit the barcode and administrative side fine-print, per original website art direction. No invented brand symbols or neck labels.
Keep the worn wooden café table and softly blurred dark wood interior, gentle warm daylight, intimate nostalgic atmosphere of image 2. Entire bottle cap and base visible, centered, about 80 percent of frame height, no extreme close-up or perspective exaggeration. No people, family photo, domestic kitchen, curtains, or objects from image 1's background. Photographic realism, restrained editing.

## Final soft-reflection and wider-body edit

Mode: built-in image generation. Reference: `public/assets/img/bruin-kroeg-realistic.png`.

Use case: precise-object-edit. Edit the provided existing Drinkbaar product photograph with exactly two corrections:
1. Reduce gloss substantially on ALL brown glass, including collar, neck, shoulders and below the label. Remove ALL recognizable reflected home interior details, rectangular window grids, furniture, ceiling lights, photographer/camera silhouettes and room imagery. Replace those reflections with restrained broad soft diffuse warm highlights and gentle edge lighting, as if using professional cross-polarized product photography. Keep it convincingly dark brown real glass, not frosted, chalky, painted, or plastic. Dark contents almost opaque. No condensation or droplets.
2. Widen the bottle body and rounded shoulders by approximately 12 percent while keeping the same overall bottle height and base position. It should appear a little stockier and more faithful to a real Belgian steinie bottle. Keep the distinctive two-stage shoulder silhouette and thick neck collar. Keep crown cap and neck at realistic original widths, blend the wider shoulders naturally. Rewrap the label to the wider body without stretching its lettering or stool drawing.
Everything else is invariant: gold crown cap, low-positioned cream paper label, black typewriter text exactly "DRINKBAAR", "Bruin Kroeg", "Belgisch Bier", "33 cl", "alc 7,5% vol", centered delicate barstool line drawing, dark beer, no barcode or fine print. Preserve the SAME worn café tabletop, nostalgic blurred café background, warm lighting, framing, portrait 1024x1536 aspect and entire bottle visible. Do not redesign the label, change the setting, add objects or people. Photorealistic precise retouch.
