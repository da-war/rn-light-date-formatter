
```markdown
# rn-light-date-formatter

## Description
A lightweight date formatter for React Native applications, designed to minimize package size while providing essential date formatting capabilities.

## Installation

### Using npm
To install the package, run the following command:

```bash
npm install rn-light-date-formatter
```

### Using Yarn
Alternatively, if you're using Yarn, you can install it by running:

```bash
yarn add rn-light-date-formatter
```

## Usage

### JavaScript

1. **Import the package**:
   ```javascript
   import { formatDate } from 'rn-light-date-formatter';
   ```

2. **Format a Date**:
   You can format a date by passing a JavaScript `Date` object or a date string along with the desired format string.

   ```javascript
   const date = new Date('2023-09-25T10:20:30Z');
   const formattedDate = formatDate(date, 'DD/MM/YYYY');
   console.log(formattedDate); // Output: 25/09/2023
   ```

3. **Formatting Different Date Formats**:
   You can also format dates using various patterns.

   ```javascript
   const date = new Date('2023-09-25T10:20:30Z');
   console.log(formatDate(date, 'YYYY-MM-DD')); // Output: 2023-09-25
   console.log(formatDate(date, 'MM-DD-YYYY')); // Output: 09-25-2023
   console.log(formatDate(date, 'DD MMMM YYYY')); // Output: 25 September 2023
   ```

### TypeScript

1. **Import the package**:
   ```typescript
   import { formatDate } from 'rn-light-date-formatter';
   ```

2. **Format a Date**:
   Use the same approach as in JavaScript. TypeScript provides type checking.

   ```typescript
   const date: Date = new Date('2023-09-25T10:20:30Z');
   const formattedDate: string = formatDate(date, 'DD/MM/YYYY');
   console.log(formattedDate); // Output: 25/09/2023
   ```

3. **Formatting Different Date Formats**:
   The same formatting patterns apply in TypeScript.

   ```typescript
   const date: Date = new Date('2023-09-25T10:20:30Z');
   console.log(formatDate(date, 'YYYY-MM-DD')); // Output: 2023-09-25
   console.log(formatDate(date, 'MM-DD-YYYY')); // Output: 09-25-2023
   console.log(formatDate(date, 'DD MMMM YYYY')); // Output: 25 September 2023
   ```

## API Reference

### `formatDate(date: Date | string, format: string): string`
- **Parameters**:
  - `date`: A `Date` object or a date string to be formatted.
  - `format`: A string defining the format of the output date. Supported formats include:
    - `YYYY`: 4-digit year
    - `MM`: Month (01-12)
    - `DD`: Day of the month (01-31)
    - `MMMM`: Full month name (January, February, etc.)
  
- **Returns**: A formatted date string based on the provided format.

## Example Output

Here are some example outputs based on different formats:

```javascript
const date = new Date('2023-09-25T10:20:30Z');

console.log(formatDate(date, 'YYYY-MM-DD')); // Output: 2023-09-25
console.log(formatDate(date, 'MM-DD-YYYY')); // Output: 09-25-2023
console.log(formatDate(date, 'DD MMMM YYYY')); // Output: 25 September 2023
```

## Contributing
If you'd like to contribute to this package, feel free to fork the repository and submit a pull request!

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

### Changes Made:
- **Usage Section**: Detailed usage instructions for both JavaScript and TypeScript.
- **API Reference**: Included a section explaining the `formatDate` function, its parameters, and return value.
- **Example Output**: Added example outputs to clarify how the formatting works.
