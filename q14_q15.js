"use strict";
/*
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.
*/
let invitations = ["Nighat", "Angleina Jolie", "Bradd Pitt", "Karthik Aryan"];
console.log(`Hello ${invitations[0]} You are invited for the Dinner at My house `);
console.log(`Hello ${invitations[1]} You are invited for the Dinner at My house `);
console.log(`Hello ${invitations[2]} You are invited for the Dinner at My house `);
console.log(`Hello ${invitations[3]} You are invited for the Dinner at My house `);
console.log(`Hello ${invitations[2]} Sad to hear you can't join us `);
console.log(`Hello ${invitations[3]} Sad to hear that you can't join us`);
invitations.sort();
invitations.splice(2, 2, "Sara Loren", "Mark Zukerberg");
console.log(`Hello ${invitations[0]} You are invited for the Dinner at My house `);
console.log(`Hello ${invitations[1]} You are invited for the Dinner at My house `);
console.log(`Hello ${invitations[2]} You are invited for the Dinner at My house `);
console.log(`Hello ${invitations[3]} You are invited for the Dinner at My house `);
