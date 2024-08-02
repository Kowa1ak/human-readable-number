module.exports = function toReadable(number) {
    const units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const teens = [
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (number === 0) return units[0];

    let result = "";

    if (Math.floor(number / 100) > 0) {
        result += units[Math.floor(number / 100)] + " hundred";
        number %= 100;
        if (number > 0) result += " ";
    }

    if (number > 10 && number < 20) {
        result += teens[number - 11];
    } else {
        if (Math.floor(number / 10) > 0) {
            result += tens[Math.floor(number / 10) - 1];
            number %= 10;
            if (number > 0) result += " ";
        }

        if (number > 0) {
            result += units[number];
        }
    }

    return result.trim();
};
