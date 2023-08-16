export function add(number: string): number {
    if (number == "") {
        return 0;
    }

    let numberString = number;
    let delimiter = ',';
    
    if (number.includes('//')) {
        const [delimiterFormatted, numberStr] = number.split(/\n(.*)/s, 2); // split string by "\n" first acutance 
        delimiter = delimiterFormatted.substring(2);
        numberString = numberStr;
    }

    const parsedNumbers = numberString
        .replace('\n', delimiter)
        .split(delimiter)
        .map((v) => parseInt(v))


    // check for negative numbers
    checkForNegativeNumbers(parsedNumbers);

    const total = parsedNumbers.reduce((acu, number) => acu + number, 0)

    return total;
}

function checkForNegativeNumbers(parsedNumbers: number[]) {
    const negativeNumbers = parsedNumbers.reduce((arr, number) => {
        if (number < 0) {
            arr.push(number);
        }
        return arr;
    }, [] as Array<number>);

    if (negativeNumbers.length) {
        throw new Error(`Negative numbers aren\'t allowed ${negativeNumbers.join(",")}`);
    }
}
