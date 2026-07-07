/* Phase Portrait — artwork manifest.
   To add an artwork:
     1. Make a folder art/<id>/  (id: lowercase letters, digits, hyphens)
     2. Drop in tone.png — a grayscale portrait, 4:5 aspect (e.g. 400×500).
        Any image works (brightness is sampled); faces that FILL the frame
        read best — the moiré tonal range is compressed, so go big and bold.
     3. Add an entry below (order = switcher order):
        { id:"my-portrait", title:"My Portrait",
          book:"Phase Portrait",            // shown on the completion card
          cover:"covers/phase.jpg",         // optional, lettered fallback if missing
          buy:"https://..." }               // optional
     4. Open ?art=<id> to view it directly.
*/
window.PHASE_MANIFEST = [
  { id: "portrait-01", title: "Portrait 01", book: "Phase Portrait" }
];
