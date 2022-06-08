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
