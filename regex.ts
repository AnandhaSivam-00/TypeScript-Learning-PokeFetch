// EASY LEVEL

// 1. Extract All Email Addresses
// Scenario: You have a text block with multiple emails mixed in. Extract all valid email addresses.

const regex1 = /[\w.]+\@[\w.]+[a-z]{1,4}/g;
const content1 = "Contact us at support@company.com or sales@company.co.uk. Also john.doe@gmail.com";
const result1 = content1.match(regex1);
console.log(result1);

// 2. Validate Phone Numbers (US Format)
// Scenario: Validate US phone numbers in formats: 123-456-7890, (123) 456-7890, or 1234567890

const regex2 = /^[\d]+(\(?[\d]+\)?[^.,!_])/;
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
console.log(result2);

//3. Extract Hashtags from Social Media
// Scenario: Extract all hashtags from a tweet or post.
const regex3 = /\#\w+/g;
const content3 = "Just launched #ReactJS and #JavaScript project! Check #coding community";
const result3 = content3.match(regex3);
console.log(result3);


// MEDIUM LEVEL

// 4. Validate Strong Password
// Scenario: Password must have: 8+ characters, at least one uppercase, one lowercase, one digit, and one special character.
const regex4 = /[\w@.,!#\$\*]{8,}[a-z]+[A-Z]+[0-9]+[.,!#\$\*]+/;
const content4 = ["Secure@123", "weak", "NoSpecial123", "noupppercase@123"];
const result4: string[] = [];
for(let i=0; i<content4.length; i++) {
  if(regex4.test(content4[i])) {
    result4.push(content4[i])
  }
  else {
    continue;
  }
}
console.log(result4);