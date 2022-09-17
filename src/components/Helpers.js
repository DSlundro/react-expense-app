// Date
export const getMonth = date => date.toLocaleString('it-IT', {month: 'long'});
export const getYear = date => date.getFullYear();
export const getDay = date => date.toLocaleString('it-IT', {day: '2-digit'});

