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

const faqs = [];
let all_para = document.querySelectorAll(".hidden");
let btns = document.querySelectorAll(".show_btn");
btns.forEach((item) => {
  item.addEventListener("click", showFaq);
});

function showFaq() {
  let answer_p = document.getElementById("hidden-" + this.id);

  faqData.forEach((data) => {
    if (data.id == this.id) {
      answer_p.innerHTML = data.answer;

      btnStatusUpdate(answer_p);
    }
  });
}

function createFaq() {




  
}

function btnStatusUpdate(answer_p) {
  if (answer_p.style.display == "none" || answer_p.style.display == "") {
    console.log(1);
    answer_p.style.display = "inline-block";
    all_para.forEach((para) => {
      if (para.id != answer_p.id) {
        para.style.display = "none";
      }
    });
  } else {
    answer_p.style.display = "none";
  }
}
