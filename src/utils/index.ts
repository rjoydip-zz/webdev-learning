import decamelize from "./decamelize";

export default function humanizeString(string) {
  if (typeof string !== "string") {
    throw new TypeError("Expected a string");
  }

  string = decamelize(string);
  string = string
    .toLowerCase()
    .replace(/[_-]+/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
  string = string.charAt(0).toUpperCase() + string.slice(1);

  return string;
}

export function htmlEncode(str) {
  if (typeof str !== "string") return str;
  return str.replace(/[&<>"']/g, function ($0) {
    return (
      "&" +
      { "&": "amp", "<": "lt", ">": "gt", '"': "quot", "'": "#39" }[$0] +
      ";"
    );
  });
}

export * from "./decamelize";
