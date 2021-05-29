import {EmojiButton} from 'https://cdn.jsdelivr.net/npm/@joeattardi/emoji-button@4.6.0';

const picker = new EmojiButton({autoHide: false});
const trigger = document.querySelector('.trigger');

picker.on('emoji', selection => {
    trigger.textContent = selection.emoji;
});

trigger.addEventListener('click', () => picker.togglePicker(trigger));
