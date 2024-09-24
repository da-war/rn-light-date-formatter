// src/index.js

/**
 * Formats a date string into a more readable format.
 * @param {string|Date} date - The date to format.
 * @param {string} format - The format to use.
 * @returns {string} - The formatted date string.
 */
export function formatDate(date, format = 'YYYY-MM-DD') {
    if (!(date instanceof Date) && typeof date !== 'string') {
      throw new Error('Invalid date format. Must be a Date object or a date string.');
    }
  
    const dateObj = new Date(date);
  
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
    };
  
    return dateObj.toLocaleString(undefined, options);
  }
  