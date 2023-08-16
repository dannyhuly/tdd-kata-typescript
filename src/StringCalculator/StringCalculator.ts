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

    const total = numberString
        .replace('\n', delimiter)
        .split(delimiter)
        .map((v) => parseInt(v))
        .reduce((acu, number) => acu + number, 0)

    return total;
}