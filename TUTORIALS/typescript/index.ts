type Pizza = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed";
};

let cashInRegister = 100;
let nextOrderId = 1;
let nextPizzaId = 1;
const orderHistory: Order[] = [];

const menu: Pizza[] = [
  {
    id: nextPizzaId++,
    name: "margherita",
    price: 8,
  },
  {
    id: nextPizzaId++,
    name: "pepperoni",
    price: 10,
  },
  {
    id: nextPizzaId++,
    name: "hawaiian",
    price: 10,
  },
  {
    id: nextPizzaId++,
    name: "pepperoni",
    price: 9,
  },
];

function placeOrder(pizzaName: string): Order | undefined {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (!selectedPizza) {
    console.error(`${pizzaName} does not exist in the menu`);
    return;
  }
  cashInRegister += selectedPizza.price;
  const newOrder: Order = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderHistory.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number): Order | undefined {
  const order = orderHistory.find((order) => order.id === orderId);
  if (!order) {
    console.error(`${orderId} was not found in the orderQueue`);
    return;
  }
  order.status = "completed";
  return order;
}

export function getPizzaDetail(identifier: string | number): Pizza | undefined {
  if (typeof identifier === "string") {
    return menu.find(
      (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase()
    );
  } else if (typeof identifier === "number") {
    return menu.find((pizza) => pizza.id === identifier);
  } else {
    throw new TypeError("parameter `identifier`  must be a string or a number");
  }
}

function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
  const newPizza: Pizza = {
    id: nextPizzaId++,
    ...pizzaObj,
  };
  menu.push(newPizza);
  return newPizza;
}

addNewPizza({ name: "chicken bacon ranch", price: 12 });
addNewPizza({ name: "BBQ chicken", price: 12 });
addNewPizza({ name: "spicy sausage", price: 11 });

placeOrder("chicken bacon ranch");
completeOrder(1);

console.log("menu:", menu);
console.log("cash in register:", cashInRegister);
console.log("order menu:", orderHistory);
