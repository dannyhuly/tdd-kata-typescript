import { add } from "./StringCalculator";

describe('StringCalculator',() => {
    describe('add', () => {
        it('should return 0 on empty string', () => {
            // Arrange
            const input = "";

            // Act
            const output = add(input);

            // Assert
            expect(output).toEqual(0);
        })

        it('should return the value of a single number', () => {
            // Arrange
            const input = "1";

            // Act
            const output = add(input);

            // Assert
            expect(output).toEqual(1);
        })

        it('should return the sum of two numbers separated by commas', () => {
            // Arrange
            const input = "1,2";

            // Act
            const output = add(input);

            // Assert
            expect(output).toEqual(3);
        })

        it('should return the sum of two unknown amount of numbers separated by commas', () => {
            // Arrange
            const input = "1,2,3,4,5";

            // Act
            const output = add(input);

            // Assert
            expect(output).toEqual(15);
        })
    })
})