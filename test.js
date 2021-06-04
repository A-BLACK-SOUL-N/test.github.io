import {EmojiButton} from 'https://cdn.jsdelivr.net/npm/@joeattardi/emoji-button@4.6.0';

const picker = new EmojiButton({autoHide: false});
const trigger = document.getElementById('emoji-bar');
const userStatus = document.getElementById('user-status');
const
  range = document.getElementById('range'),
  rangeV = document.getElementById('rangeV'),
  setValue = ()=>{
    const
      newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
      newPosition = 10 - (newValue * 0.2);
    rangeV.innerHTML = `<span>${range.value}</span>`;
    rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
  };

picker.on('emoji', selection => {
    trigger.textContent = selection.emoji;
    userStatus.innerText = selection.emoji;
    picker.hidePicker();
});

trigger.addEventListener('click', () => picker.togglePicker(trigger));

document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);
