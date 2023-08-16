export function add(number: string): number {
    if (number == "") {
        return 0;
    }

    const total = number
        .split(',')
        .map((v) => parseInt(v))
        .reduce((acu, number) => acu + number, 0)

    return total;
}