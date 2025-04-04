let myName = "Bob";
const myName2 = "bob";

type userRole = "contributor" | "member" | "admin";
type User = {
  id: number;
  username: string;
  role: userRole;
};

// utility type
type updatedUser = Partial<User>;

let nextUserId = 1;

const users: User[] = [
  { id: nextUserId++, username: "john_doe", role: "member" },
  { id: nextUserId++, username: "jane_smith", role: "contributor" },
];

// const users: User[] = [
//   { id: 1, username: "john_doe", role: "member" },
//   { id: 2, username: "alice_jones", role: "contributor" },
//   { id: 3, username: "jane_doe", role: "admin" },
//   { id: 4, username: "guest_user", role: "member" },
// ];

function updateUser(id: number, updates: updatedUser) {
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    console.log(`user id ${id} not found`);
    return;
  }
  Object.assign(foundUser, updates);
}

function addNewUser(newUser: Omit<User, "id">): User {
  const user: User = {
    id: nextUserId++,
    ...newUser,
  };
  users.push(user);
  return user;
}

// updateUser(1, { username: "new_john_doe" });
// updateUser(4, { role: "contributor" });

//example user
addNewUser({ username: "joe_scheme", role: "member" });
console.log(users);

function fetchUserDetails(username: string): User {
  const user = users.find((user) => user.username === username);
  if (!user) {
    throw new Error(`user with username ${username} not found`);
  }
  return user;
}

// addNewPizza({ id: 1, name: "chicken bacon ranch", price: 12 });
// addNewPizza({ id: 2, name: "BBQ chicken", price: 12 });
// addNewPizza({ id: 3, name: "spicy sausage", price: 11 });

// placeOrder("chicken bacon ranch");
// placeOrder("pepperoni");
// completeOrder(1);
// placeOrder("anchovy");
// placeOrder("veggie");
// completeOrder(2);

// console.log("menu", menu);
// console.log("cash in register", cashInRegister);
// console.log("order history", orderHistory);
