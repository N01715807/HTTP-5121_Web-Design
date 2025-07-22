document.addEventListener("DOMContentLoaded", () => {
  const bowtie = document.getElementById("bowtie");

  bowtie.addEventListener("click", () => {
    bowtie.classList.add("spin-grow");
  });

  bowtie.addEventListener("transitionend", () => {
    bowtie.classList.remove("spin-grow");
  });
});
