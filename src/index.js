// Setting constants that will be used throughout the file
// These constants all refer to elements within the DOM, retrieved by document.getElementById()
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');

let bookmarks = [];

function showModal() {
  modal.classList.add('show-modal');
  websiteNameEl.focus();
}

modalClose.addEventListener('click', () => {
  modal.classList.remove('show-modal');
});
