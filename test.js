import { EmojiButton } from 'https://cdn.jsdelivr.net/npm/@joeattardi/emoji-button@4.6.0';
const button = document.querySelector('#emoji-trigger');
const emojiDemo = document.querySelector('#emoji-demo');

const picker = new EmojiButton();

picker.on('emoji', emoji => {
    console.log('e', emoji)
    emojiDemo.innerText = emoji;
  });

button.addEventListener('click', () => {
  picker.togglePicker(button);
});
