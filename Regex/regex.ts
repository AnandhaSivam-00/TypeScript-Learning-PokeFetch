// EASY LEVEL

// 1. Extract All Email Addresses
// Scenario: You have a text block with multiple emails mixed in. Extract all valid email addresses.

const regex1 = /[\w.]+\@[\w.]+[a-z]{1,4}/g;
const content1 = "Contact us at support@company.com or sales@company.co.uk. Also john.doe@gmail.com";
const result1 = content1.match(regex1);
console.log("1 ==>", result1);

// 2. Validate Phone Numbers (US Format)
// Scenario: Validate US phone numbers in formats: 123-456-7890, (123) 456-7890, or 1234567890

const regex2 = /^[\(\d+\)]\d+/;
const content2 = ["555-123-4567", "(555) 987-6543", "5551234567", "invalid123"];
const result2: string[] = [];
for(let i=0; i<content2.length; i++) {
  if(regex2.test(content2[i])) {
    result2.push(content2[i])
  }
  else {
    continue;
  }
}
console.log("2 ==>", result2);

// 3. Extract Hashtags from Social Media
// Scenario: Extract all hashtags from a tweet or post.
const regex3 = /\#\w+/g;
const content3 = "Just launched #ReactJS and #JavaScript project! Check #coding community";
const result3 = content3.match(regex3);
console.log("3 ==>", result3);

// 4. URL Validation
// Scenario: Extract or validate URLs from user-submitted content.
const regex4 = /^http[s]?\:\/\/[www]?/;
const content4 = ["http://example.com", "https://www.example.com", "ftp://files.example.com"];
const result4: string[] = [];
for(let i=0; i<content4.length; i++) {
  if(regex4.test(content4[i])) {
    result4.push(content4[i])
  }
  else {
    continue;
  }
}
console.log("4 ==>", result4);


// MEDIUM LEVEL

// 5. Validate Strong Password
// Scenario: Password must have: 8+ characters, at least one uppercase, one lowercase, one digit, and one special character.
const regex5 = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@\$\*!%,\.])[a-zA-Z0-9@\$\*!%,\.]{8,}/;
const content5 = ["Secure@123", "weak", "NoSpecial123", "noupppercase@123"];
const result5: string[] = [];
for(let i=0; i<content5.length; i++) {
  if(regex5.test(content5[i])) {
    result5.push(content5[i])
  }
  else {
    continue;
  }
}
console.log("5 ==>", result5);

// 6. HTML Tag Extraction
// Scenario: Extract opening HTML tags from a document.
const regex6 = /<\/?[a-z0-6]+[\sa-zA-Z=\"\(\):;\-\.]*\/?>/gi;
const content6 = `<div class="container">
  <p id="intro" style="color: red;">Welcome</p>
  <img src="photo.jpg" alt="Photo" />
  <br />
  <h1>Header Text</h1>
  <button onclick="handleClick()" disabled>Click Me</button>
  <span data-value="123">Content</span>
  </div>
`;
const result6 = content6.match(regex6);
console.log("6 ==>", result6);

// 7. IPv4 Address Validation
// Scenario: Validate IPv4 addresses from network logs.
const regex7 = /^((25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/;
const content7 = ["192.168.0.1", "10.10.10.10", "127.0.0.1", "256.1.1.1", "192.168.1", "192.168.-1.1"];
const result7: string[] = [];
for(let i=0; i<content7.length; i++) {
  if(regex7.test(content7[i])) {
    result7.push(content7[i])
  }
  else {
    continue;
  }
}
console.log("7 ==>", result7);

// 8. Credit Card Number Validation
// Scenario: Validate credit card formats (format only, not authenticity).
const regex8 = /^[0-9]{16}|((\d{4}-){3})(\d{4})|((\d{4}\s){3})(\d{4})$/;
const content8 = ["4532015112830366", "4532-0151-1283-0366", "4532 0151 1283 0366", "123456789"];
const result8: string[] = [];
for(let i=0; i<content8.length; i++) {
  if(regex8.test(content8[i])) {
    result8.push(content8[i])
  }
  else {
    continue;
  }
}
console.log("8 ==>", result8);

// 9. Date Extraction
// Scenario: Extract dates in multiple formats from logs.
const regex9 = /^((([0-2]\d|3[0,1]|[1-9])|([1-2]\d{3}))[\/\-\.])((0[1-9]|1[1-2]|[1-9])[\/\-\.])(([1-2]\d{3})|([0-2]\d|3[0,1]|[1-9]))$/;
const content9 = ["25/12/2024", "2024-12-25", "25-12-2024", "25.12.2024", "32/13/2024", "11/02/2024", "04-07-1995", "00-00-0000"];
const result9: string[] = [];
for(let i=0; i<content9.length; i++) {
  if(regex9.test(content9[i])) {
    result9.push(content9[i])
  }
  else {
    continue;
  }
}
console.log("9 ==>", result9);

// 10. Code Comment Extraction (Hard)
// Scenario: Extract single-line and multi-line comments from source code.
// Example:
// Comment Type	Matched Content
// Single-line (JS)	// This is a JavaScript single-line comment
// Inline (JS)	// inline comment
// Single-line (Python)	# Python comment about variables
// Inline (Python)	# another inline comment
// Single-line (SQL)	-- SQL comment
// Inline (SQL)	-- get all users
// Multi-line (JS)	/* This is a multi-line JavaScript comment that spans multiple lines */
// Multi-line (HTML)	<!-- This is an HTML comment that also spans multiple lines -->
// JSDoc	/** JSDoc comment **/
// Special	/*! Special comment with exclamation */
const regex10 = /(\/{2}\s.*$)|(#\s.*$)|(\-{2}\s.*$)|(\/\*[\s\S]*?\*\/$)|(<!--[\s\S]*?-->$)/gm;
const content10 = `
// This is a JavaScript single-line comment
const name = "John"; // inline comment

# Python comment about variables
x = 10  # another inline comment

-- SQL comment
SELECT * FROM users; -- get all users

/* This is a multi-line
   JavaScript comment that
   spans multiple lines */

<!-- This is an HTML comment
     that also spans
     multiple lines -->

/** JSDoc comment **/
function getValue() {
  return 42; // return the answer
}

/*! Special comment with exclamation */

<!-- Nested attempt: /* this looks nested */ -->
`;
const result10 = content10.match(regex10);
console.log("10 ==>", result10);