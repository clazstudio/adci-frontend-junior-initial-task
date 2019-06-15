// toggle modal window

var modalWrapper = document.querySelector(".modal-wrapper");
var areaRiservataBtn = document.querySelector(".area-riservata-button");
var closeButton = document.querySelector(".riservata-modal__close");

function toggleModal() {
  if (modalWrapper.classList.contains("modal-wrapper--show")) {
    setTimeout(function() {
      modalWrapper.style.display = "";
    }, 200);
  } else {
    modalWrapper.style.display = "flex";
  }

  setTimeout(function() {
    modalWrapper.classList.toggle("modal-wrapper--show");
  }, 0);
}

areaRiservataBtn.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);

// drop-up panel with posts toggle

var dropupSwitch = document.querySelector(".post-dropup__switch");
var dropUp = document.querySelector(".post-dropup");

function toggleDropUp() {
  var parent_height = dropUp.parentElement.clientHeight;
  if (dropUp.classList.contains("post-dropup--show")) {
    dropupSwitch.title = "Show posts";
    dropUp.style.top = (parent_height - dropupSwitch.clientHeight) + "px";
  } else {
    dropupSwitch.title = "Hide";
    dropUp.style.top = (parent_height - dropUp.clientHeight) + "px";
  }

  dropUp.classList.toggle("post-dropup--show");
}

dropupSwitch.addEventListener("click", toggleDropUp);