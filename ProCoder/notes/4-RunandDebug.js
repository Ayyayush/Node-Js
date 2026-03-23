/**
 * ! Node.js File System (fs module)
 * ! Reading file synchronously
 */

const fs = require('fs');               // fs module ko import kar rahe hain (file system operations ke liye)

// readFileSync → file ko synchronous way mein read karta hai
// "./text.txt" → current folder ki file ko read kar raha hai
const text = fs.readFileSync("./text.txt");    

// console.log(text) → yeh raw buffer output print karega (binary format)
console.log(text);                      // buffer data print hoga

// yeh line tab execute hogi jab file read complete ho jayegi (blocking nature)
console.log("End");                     // last mein print hoga