// toggle modal window

var modalWrapper = document.querySelector(".modal-wrapper");
var areaRiservataBtn = document.querySelector(".area-riservata-button");
var closeButton = document.querySelector(".riservata-modal__close");

function toggleModal() {
  if (modalWrapper.classList.contains("modal-wrapper--show")) {
    setTimeout(function() {
      modalWrapper.style.display = "";
    }, 200);
    areaRiservataBtn.focus();
  } else {
    modalWrapper.style.display = "flex";
    closeButton.focus();
  }

  setTimeout(function() {
    modalWrapper.classList.toggle("modal-wrapper--show");
  }, 0);
}

areaRiservataBtn.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
modalWrapper.addEventListener("click", function(evt) {
  if (evt.target == modalWrapper) {
    toggleModal();
  }
});

// drop-up panel with posts toggle

function setupDropUp(block) {
  var dropupSwitch = block.querySelector(".post-dropup__switch");

  dropupSwitch.onclick = function() {
    var parent_height = block.parentElement.clientHeight;
    if (block.classList.contains("post-dropup--show")) {
      dropupSwitch.title = "Show posts";
      block.style.top = (parent_height - dropupSwitch.clientHeight) + "px";
    } else {
      dropupSwitch.title = "Hide";
      block.style.top = (parent_height - block.clientHeight) + "px";
    }

    block.classList.toggle("post-dropup--show");
  }
}

setupDropUp(document.querySelector(".post-dropup"));

// slider

function setupSlider(slider, delay) {
  var curIndex = 0;
  var controls = slider.querySelectorAll(".slider__button");
  var images = [];

  function fadeOut(index) {
    controls[index].classList.remove("slider__button--active");
  }

  function fadeIn(index) {
    slider.style["background-image"] = "url('" + images[index] + "')";
    controls[index].classList.add("slider__button--active");
  }

  for (var i = 0; i < controls.length; i++) {
    if (controls[i].classList.contains("slider__button--active")) {
      curIndex = i;
    }
    images.push(controls[i].getAttribute("data-img"));
    
    controls[i].index = i;
    controls[i].onclick = function(evt) {
      evt.preventDefault();
      fadeOut(curIndex);
      fadeIn(evt.target.index);
      curIndex = evt.target.index;
    }
  }

  fadeIn(curIndex);
  setInterval(function() {
    fadeOut(curIndex);
    curIndex++;
    if (curIndex >= controls.length) {
      curIndex = 0;
    }
    fadeIn(curIndex);
  }, delay);
}

setupSlider(document.querySelector(".slider"), 10000);