const categ = document.querySelectorAll(".item");
console.log("Number of categories: ", categ.length)
// console.dir(categ)
categ.forEach(el => {
  console.log("Category: ", el.firstElementChild.innerHTML);
  // const categ1 = el.querySelectorAll("li");
  console.log("Elements: ", el.querySelectorAll("li").length)
// console.log("Elements: ", el.lastElementChild.children.length);
  
});
// categ.forEach (el1=>{
//   const categ1 = el1.querySelectorAll("li");
//   console.log(categ1)
// });