import 'https://cdn.jsdelivr.net/npm/@joeattardi/emoji-button@3.0.3/dist/index.min.js';
const button = document.querySelector('#emoji-button');

const picker = new EmojiButton();
picker.on('emoji', emoji => {
    console.log('emoji', emoji);
  });
button.addEventListener('click', () => {
  picker.togglePicker(button);
});
