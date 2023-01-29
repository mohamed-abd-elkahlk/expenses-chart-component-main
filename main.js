let allUl = document.querySelectorAll(".clicked");
let allDiv = document.querySelectorAll(".data");

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("clicked")) {
    allUl.forEach((ul, index) => {
      if (e.target == ul) {
        allDiv[index].style.display = "block";
        fetch("data.json")
          .then((response) => response.json())
          .then((json) => (allDiv[index].innerHTML = `$${json[index].amount}`));
      }
    });
  }
});
