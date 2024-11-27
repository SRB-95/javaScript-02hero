// INTERVIEW QUESTIONS
// ===================
// 1) Split the given string and make it title case.
function strConverter(str) {
    return str
    .toLowerCase()
    .split("_")
    .map(element => element.charAt(0).toUpperCase() + element.slice(1))
    .join(" ");
}
const str = "HI_welcome_to_interview";
// console.log(strConverter(str));