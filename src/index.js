// Remember the acronym UPS check

// Step One (Understand). We have to understand the problem.
// 1. What is the unknown?

// the total sum of all the Nodes

// 2. What are the data inputs?
// head

// 3. Can you restate the problem in your own words?
// traverse the linked list and return the total

// 4. Can the unknown be determined from the data inputs?
// yes

// 5. Is the data inputs sufficient to determine the unknown? Insufficient? Redundant? Contradictory?

// sufficient

// 6. How should I label important pieces of data input that are a part of the problem?

// head
// 7. Draw a figure. Introduce suitable notation.

// in notepad
// 8. Separate the various parts of the condition. Can you write them down?

// Step Two (Plan). Come up with concrete examples to help you understand the problem better. Find a connection between the data inputs and the unknown. You may be obliged to consider auxiliary problems if an immediate connection cannot be found.
// 9.  Have you seen it before? Or have you seen the same problem in a slightly different form? Do you know a related problem?
// link list traversal

// 10.   Do you know a coding strategy that could be useful? Look at the unknown! And try to think of a familiar problem having the same or a similar unknown. Here is a problem related to yours and solve before. Could you use it? Could you use its result? Could you use its method?
// count and while loop

// 11.    Should you introduce some auxiliary element in order to make its use possible?
// 12. Start with a simple example. Could you restate the problem? Could you restate it still differently?
// 13. What about examples with empty inputs? Any other edge case examples? What examples with invalid inputs?

// 14. Progress to more complex examples. What is your updated plan here to find a solution?
// 15. If you still cannot solve the proposed problem, try to solve first some related problem. Could you imagine a more accessible related problem? A more general problem? A more special problem? An analogous problem? Could you solve a part of the problem? Keep only a part of the data inputs, drop the other part; how far is the unknown then determined, how can it vary? Could you derive something useful from the data? Could you think of other data appropriate to determine the unknown? Could you change the unknown or the data, or both if necessary, so that the new unknown and the new data are nearer to each other? Did you use all the data? Did you use the whole of the data inputs? Have you taken into account all essential notions involved in the problem?

// Step Three (Solve). Carry out your plan of the solution and check each one of your steps in pseudocode.
// 16.  Can you see clearly that the step is correct?

// see pseudocode
// IV. 	Step Four (Check). Examine the solution obtained and refactor.
// 17.  Can you check your result?
// 18.  Can you check the argument?
// 19.  Can you derive the result differently?
// 20.  Can you see it at a glance?
// 21.  Can you make the code DRYer and refactor?
// 22.  Can you improve the performance?
// 23.   How have other people solved this problem?

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// 2 -> 8 -> 3 -> -1 -> 7

// while loop

// const sumList = (head) => {
//   // make the head current and count variable to zero
//   let current = head;
//   let count = 0;
//   // while loop (current !== null)
//   while (current !== null) {
//     // count += current and current = current.next
//     count += current.val;
//     current = current.next;
//   }
//   console.log(count);
//   return count;
// };

// recursion

const sumList = (head) => {
  if (head === null) return 0;
  return head.val + sumList(head.next);
};

sumList(a); // 19
