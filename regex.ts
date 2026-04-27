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
const regex6 = /<\/?[a-z][a-z0-9-]*(?:\s+[a-zA-Z:-]+(?:=(?:"[^"]*"|'[^']*'|[^\s>]+))?)*\s*\/?>/gi;
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