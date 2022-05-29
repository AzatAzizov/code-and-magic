import { isEscEvent, isEnterEvent } from './util.js';
import {renderSimilarList, clearSimilarList} from './similar-list.js';

const userModalElement = document.querySelector(".setup");
const userModalOpenElement = document.querySelector(".setup-open");
const userModalCloseElement = userModalElement.querySelector(".setup-close");

const onPopupEscPress = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

const openUserModal = () => {
  userModalElement.classList.remove("hidden");
  renderSimilarList();
  document.addEventListener("keydown", onPopupEscPress);
};

const closeUserModal = () => {
  userModalElement.classList.add("hidden");
  clearSimilarList();
  document.removeEventListener("keydown", onPopupEscPress);
};

userModalOpenElement.addEventListener("click", () => {
  openUserModal();
});

userModalOpenElement.addEventListener("keydown", (evt) => {
  if (isEnterEvent(evt)) {
    openUserModal();
  }
});

userModalCloseElement.addEventListener("click", () => {
  closeUserModal();
});

userModalCloseElement.addEventListener("keydown", (evt) => {
  if (isEnterEvent(evt)) {
    closeUserModal();
  }
});
