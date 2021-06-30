const feedbackLink = document.querySelector(".feedback-button");
const feedbackPopup = document.querySelector(".modal");
const feedbackClose = feedbackPopup.querySelector(".modal-close");
const feedbackForm = feedbackPopup.querySelector(".modal-form");
const userName = feedbackPopup.querySelector(".user-name");
const userEmail = feedbackPopup.querySelector(".user-email");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-show");
    if (storage) {
        userName.value = storage;
        userEmail.focus();
      } else {
        userName.focus();
      }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
});


feedbackForm.addEventListener("submit", function (evt) {
    if (!userName.value || !userEmail.value) {
        evt.preventDefault();
        feedbackPopup.classList.add("modal-error");
        feedbackPopup.offsetWidth =  feedbackPopup.offsetWidth;
    } else {
        if (isStorageSupport) {
        localStorage.setItem("name", userName.value);
        }
    }
  });


window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (feedbackPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        feedbackPopup.classList.remove("modal-show");
      }
    }
  });

  