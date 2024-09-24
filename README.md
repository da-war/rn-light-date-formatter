
```markdown
# rn-light-date-formatter

## Description
A lightweight date formatter for React Native applications with support for Expo, JavaScript, and TypeScript.

## Installation

Install using npm or yarn:

```bash
npm install rn-light-date-formatter
```

or

```bash
yarn add rn-light-date-formatter
```

## Usage

### JavaScript

```javascript
import { formatDate } from 'rn-light-date-formatter';

const date = new Date();
const formattedDate = formatDate(date, 'YYYY-MM-DD');
console.log(formattedDate);
```

### TypeScript

```typescript
import { formatDate } from 'rn-light-date-formatter';

const date: Date = new Date();
const formattedDate: string = formatDate(date, 'YYYY-MM-DD');
console.log(formattedDate);
```

## API

### `formatDate(date, format?)`

- **Parameters:**
  - `date`: string | Date - Date to format.
  - `format`: string (optional) - Format to use. Defaults to 'YYYY-MM-DD'.

- **Returns:** Formatted date string.

## License
MIT
```
