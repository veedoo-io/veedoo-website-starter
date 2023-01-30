let colors = require('tailwindcss/colors'); // Most up to date colors from Tailwind CSS
const flatten = require('flat'); // Used to flatten the Tailwind colors object

delete colors.inherit;
delete colors.current;
delete colors.transparent;
delete colors.warmGray;
delete colors.lightBlue;
delete colors.trueGray;
delete colors.coolGray;
delete colors.blueGray;

// Flattens the color object and adds a "-" delimiter for exact TailwindCSS match
const tailwindReference = flatten(colors, { delimiter: '-' });

// Initialized the color matcher on the flattened Tailwind colors object
const nearestColor = require('nearest-color').from(tailwindReference);

// Checks if the hex color is correctly formatted and returns the closest match, otherwise throws an error.
export default function tailwindMatcher(color) {
  // Checks if the provided color is a correct hex format (either #XXX or #XXXXXX)
  if (/^#([0-9A-F]{3}){1,2}$/i.test(color)) {
    return nearestColor(color).name;
  } else {
    return 'Wrong Hex syntax. Please use #xxx or #xxxxxx.';
  }
}
