import { EmojiButton } from 'https://cdn.jsdelivr.net/npm/@joeattardi/emoji-button@4.6.0';
const button = document.querySelector('#emoji-button');

const picker = new EmojiButton();
picker.on('emoji', emoji => {
    console.log('emoji', emoji);
  });
button.addEventListener('click', () => {
  picker.togglePicker(button);
});
