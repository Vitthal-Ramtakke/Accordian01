const data = [
  {
    id: "1",
    question: "What are accordion components?",
    answer:
      "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
  },
  {
    id: "2",
    question: "What are they used for?",
    answer:
      "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
  },
  {
    id: "3",
    question: "Accordion as a musical instrument",
    answer:
      "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
  },
  {
    id: "4",
    question: "Can I create an accordion component with a different framework?",
    answer:
      "Yes of course, it is very possible to create an accordion component with another framework.",
  },
];

// logic step 1 : select the html element with class name accordian
const accordionWrapper = document.querySelector(".accordion");
// This part of the code document.querrySelector(".accordian") will find the html element whose class is accordion in the html document.

/* logic step 2 : Create accordian data
1) We use a function called createAccordionData() to build the HTML for the accordion.
2) Now we will manipulate the div with the class name .accordian, which is stored in accordianWrapper varaible, with the help of this property .innerHTML
3) Now we will map the data array and create the necessary HTML Structure and then after that we will join it by using .join() method.
4) For each item, it makes a “box” with the question and answer inside. */

function createAccordionData() {
  accordionWrapper.innerHTML = data
    .map(
      (dataItem) => `
    <div class="accordion_item">
    <div class="accordion_title">
    <h3>${dataItem.question}</h3>
    <i class="fa-solid fa-arrow-down"></i>
    </div>
    <div class="accordion_content">
    <p>${dataItem.answer}</p>
    </div>
    </div>
    `
    )
    .join(" ");
}

createAccordionData();
  

/*Logic step 3 : select and store all the elements with the class .accordion_title  */

const getAccordionTitles = document.querySelectorAll(".accordion_title");

console.log("===================================");
console.log(getAccordionTitles);
console.log("====================================");

getAccordionTitles.forEach((currentItem) => {
  currentItem.addEventListener("click", (event) => {
    if (currentItem.classList.contains("active")) {
      currentItem.classList.remove("active");
    } else {
      /*first selects all elements with the class "active" and stores them in the getAlreadyAddedActiveClasses variable.  */
      let getAlreadyAddedActiveClasses = document.querySelectorAll(".active");

      /*Then, it iterates through each of these elements and removes the "active" class. */
      getAlreadyAddedActiveClasses.forEach((currentActiveItem) => {
        currentActiveItem.classList.remove("active");
      });

      /*Finally, it adds the "active" class to another element (i.e currentItem). */
      currentItem.classList.add("active");
    }
  });
});
