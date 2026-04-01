export function validate(nickname) {

    const rules = {
        length: nickname.length >= 3 && nickname.length <= 2,
        startsWithLetter: /^[A-Za-z]/.test(nickname),
        allowedChars: /^[A-Za-z0-9_]+$/.test(nickname),
        noConsecutiveUnderscores: !/__/.test(nickname),
        notEndWithUnderscore: !/_$/.test(nickname)
    };

    const isValid = Object.values(rules).every(Boolean);

    return { isValid, rules };
}
