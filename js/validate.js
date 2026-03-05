export function validate(nickname) {

    const rules = {
        length: nickname.length >= 4 && nickname.length <= 20,
        startsWithLetter: /^[A-Za-z]/.test(nickname),
        allowedChars: /^[A-Za-z0-9]+$/.test(nickname),
        noConsecutiveUnderscores: !/__/.test(nickname),
        notEndWithUnderscore: !/_$/.test(nickname)
    };

    const isValid = Object.values(rules).every(Boolean);

    return { isValid, rules };
}
