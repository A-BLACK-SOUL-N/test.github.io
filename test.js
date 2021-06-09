import {EmojiButton} from 'https://cdn.jsdelivr.net/npm/@joeattardi/emoji-button@4.6.0';

const picker = new EmojiButton({autoHide: false});
const trigger = document.getElementById('emoji-bar');
const userStatus = document.getElementById('user-status');

picker.on('emoji', selection => {
    trigger.textContent = selection.emoji;
    userStatus.innerText = selection.emoji;
    picker.hidePicker();
});

function setEmojiPicker() {
picker.togglePicker(trigger);
}

trigger.addEventListener('click', () => picker.togglePicker(trigger));
