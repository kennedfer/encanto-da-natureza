const observer = new IntersectionObserver((entries) => {
  console.log("aiaia");
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-animation");
    } else {
      entry.target.classList.remove("show-animation");
    }
  });
});

const hiddenElements = document.querySelectorAll(".animate");
hiddenElements.forEach((element) => observer.observe(element));
