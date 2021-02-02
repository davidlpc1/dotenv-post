require('dotenv').config()

const { GMAIL_EMAIL,GMAIL_PASS } = process.env; // Destructuring
console.log('GMAIL_EMAIL:',GMAIL_EMAIL);
console.log('GMAIL_PASS:',GMAIL_PASS);