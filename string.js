// const properCase = (str) => {
//   return str.replace(/\w\S*/g, (txt) => {
//     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//   });
// };
// const slugify = (str) => {
//   return str
//     .toLowerCase()
//     .trim()
//     .replace(/[^\w\s-]/g, "")
//     .replace(/[\s_-]+/g, "-")
//     .replace(/^-+|-+$/g, "");
// };

// const truncate = (str, length) => {
//   if (str.length <= length) return str;
//   return str.substr(0, length) + "...";
// };

// module.exports = {
//   properCase,
//   slugify,
//   truncate,
// };
