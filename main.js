function sum(a, b) {
  console.log(a + b);
}

document.write("Tao Button va Text bang Script<BR>");
document.write("<BR>");
document.write("<input type=button name=welcome value = 'Welcome' ");
document.write("onclick = 'alert ('Welcome to JavaScript');' > ");
document.write("<input type = text name = msg value = 'Welcome to'>");

const hide = (...el) => [...el].forEach((e) => (e.style.display = "none"));

// Ví dụ
// Ẩn tất cả các phần tử <img> trên trang
hide(document.querySelectorAll("img"));

const hasClass = (el, className) => el.classList.contains(className);

// Ví dụ
hasClass(document.querySelector("p.special"), "special"); // true

const toggleClass = (el, className) => el.classList.toggle(className);

// Ví dụ
toggleClass(document.querySelector("p.special"), "special");
// Thẻ p sẽ không còn class "special" nữa
/**
 * - Variables
 *
 * - Comments
 *
 * - Built-in functions: alert, console, confirm, prompt, set timeout, set interval
 *
 * - Operators: arithmetic, assignment, comparison, logical
 *
 * - Data types: number, string, boolean, undefined, null, symbol, function, object
 *
 * - Truthy and falsy
 * - Falsy values: 0, "", '', NaN, null, undefined
 */
