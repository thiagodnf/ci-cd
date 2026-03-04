import { validate } from "./validate.js";

// DOM interaction
const input = document.getElementById('nickname');
const btn = document.getElementById('checkBtn');
const result = document.getElementById('result');

btn.addEventListener('click', () => {

    const { isValid, rules } = validate(input.value);

    result.innerHTML = `
        Valid: ${isValid} <br>
        Length (3–20): ${rules.length} <br>
        Starts with letter: ${rules.startsWithLetter} <br>
        Allowed chars: ${rules.allowedChars} <br>
        No "__": ${rules.noConsecutiveUnderscores} <br>
        Not ending "_": ${rules.notEndWithUnderscore}
    `;
});
