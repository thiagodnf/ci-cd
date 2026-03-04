import { validate } from "./validate.js";

// DOM interaction
const input = document.getElementById('nickname');
const btn = document.getElementById('checkBtn');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
    const { isValid, rules } = validate(input.value.trim());

    const icon = v => v ? '✅' : '❌';

    result.innerHTML = `
        <div class="fw-bold mb-2">
            Overall: ${isValid ? '🎉 Valid' : '🚫 Invalid'}
        </div>

        ${icon(rules.length)} Length (3–20)<br>
        ${icon(rules.startsWithLetter)} Starts with letter<br>
        ${icon(rules.allowedChars)} Allowed characters (A–Z, 0–9, _)<br>
        ${icon(rules.noConsecutiveUnderscores)} No consecutive "__"<br>
        ${icon(rules.notEndWithUnderscore)} Does not end with "_"
    `;
});
