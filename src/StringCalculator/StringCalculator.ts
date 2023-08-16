export function add(number: string): number {
    if (number == "") {
        return 0;
    }

    const [num1, num2] = number.split(',');
    let total = parseInt(num1);

    if (num2) {
        total += parseInt(num2);
    }
    return total;
}