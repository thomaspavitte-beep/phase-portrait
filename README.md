# Phase Portrait

A moiré experiment by [Thomas Pavitte](https://thomaspavitte.com). A portrait is
encoded as tiny phase-shifts in a sheet of fine lines — on its own it looks like
innocent stripes. Scroll, and a second perfectly uniform sheet slides over it:
the image appears from pure interference, flickers through its negative, and
locks into register.

**Live:** https://thomaspavitte-beep.github.io/phase-portrait/

## Play

- **Scroll** — the whole story: stripes → descent → alignment → step back.
- **Drag** (mouse) — slide the top sheet by hand; it clicks back into register.
- **Style** — five patterns (lines, verticals, diagonals, waves, rings), ink
  pairings, and tune sliders (density, contrast, wave height). On Rings,
  double-click to move the bullseye.
- **Create** — encode your own image, a webcam selfie, or a hidden message.
- **Lift the sheet** — proof there's no portrait in the base layer alone.
- **Breathe** — let the top sheet wander on its own.
- **Print kit** — downloads the two sheets as SVGs. Print the base on paper,
  the overlay on clear acetate, and slide it by hand: the effect is fully
  physical.

## Adding artworks

Drop a grayscale 4:5 image at `art/<id>/tone.png` and add an entry in
`art/manifest.js` (instructions are at the top of that file). Faces that fill
the frame read best — the moiré's tonal range is compressed.

## Credits

Sample portrait: Abraham Lincoln, 1863, by Alexander Gardner — public domain,
via Wikimedia Commons.

Built as a single vanilla `index.html` — no frameworks, no build step.
