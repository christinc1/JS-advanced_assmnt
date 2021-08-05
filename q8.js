const name = { firstName: 'Philip',
lastName: 'Fry' };
const details = {
job: 'Delivery Boy',
employer: 'Planet Express'
};

let merge = Object.assign(name, details);
console.log(merge);

/* op
{firstName: "Philip", lastName: "Fry", job: "Delivery Boy", employer: "Planet Express"}
*/