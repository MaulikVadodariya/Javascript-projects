const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

// console.log(faqData);

const btnStatusUpdate = () => {
  var btns = document.querySelectorAll('.show_btn')
  var answers = document.querySelectorAll('.faq p')
  btns.forEach((btn) => {
     btn.innerHTML = "+";
  })
  answers.forEach((answer) => {
    answer.classList.add('hidden');
 })
}

const showFaq = (target) => {

  var faqAnswerElement = target.parentNode.nextSibling;

  if(target.innerText === "+"){
    btnStatusUpdate();  
    target.innerText = "-";
    faqAnswerElement.classList.remove('hidden')
  }else{
    btnStatusUpdate();  
    target.innerText = "+";
    faqAnswerElement.classList.add('hidden')
  }

}

const createFaq = () => {
    faqData.forEach((faq) => {

         const accordianBody = document.querySelector('.accordian_body');

         const div = document.createElement("div");
         div.classList.add('faq');

         const h3 = document.createElement("h3"); 

         const p = document.createElement("p");
         p.classList.add('hidden');

         const button = document.createElement("button");
         button.classList.add('show_btn')  

         const divFaqHeader = document.createElement("div");
         divFaqHeader.classList.add('faq_header');

         const headerText = document.createTextNode(faq.question);
         const descriptionText = document.createTextNode(faq.answer);
         const buttonText = document.createTextNode('+');

         h3.appendChild(headerText);  
         p.appendChild(descriptionText);
         button.appendChild(buttonText);

         div.append(divFaqHeader); 
         divFaqHeader.append(h3); 
         divFaqHeader.append(button); 
         div.append(p);  
         accordianBody.append(div);
    
    })
}

createFaq();

const faqsButtons = document.querySelectorAll('.show_btn');

faqsButtons.forEach((button) => button.addEventListener("click" , (e) => {
  showFaq(e.currentTarget)
}))


