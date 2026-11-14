// Single source of truth for the menu. Prices are in LKR.
// Items with `s` and `l` show two sizes; items with only `price` show one.
// Set `s: null` when only the large size is offered.

export const restaurant = {
  name: 'Dulansa Kumbuk Sewana Resort',
  phone: '033 220 4444',
  currency: 'Rs.',
}

export const menu = [
  {
    id: 'fried-rice',
    title: 'Fried Rice',
    sizes: true,
    items: [
      { name: 'Vegetable Fried Rice', s: 700, l: 950 },
      { name: 'Egg Fried Rice', s: 800, l: 1100 },
      { name: 'Fish Fried Rice', s: 1000, l: 1300 },
      { name: 'Chicken Fried Rice', s: 1100, l: 1500 },
      { name: 'Seafood Fried Rice', s: 1400, l: 1800 },
      { name: 'Mixed Fried Rice', s: 1600, l: 2000 },
    ],
  },
  {
    id: 'noodles',
    title: 'Noodles',
    sizes: true,
    items: [
      { name: 'Vegetable Noodles', s: 700, l: 950 },
      { name: 'Egg Noodles', s: 800, l: 1100 },
      { name: 'Fish Noodles', s: 1000, l: 1300 },
      { name: 'Chicken Noodles', s: 1100, l: 1500 },
      { name: 'Seafood Noodles', s: 1400, l: 1800 },
      { name: 'Mixed Noodles', s: 1600, l: 2000 },
    ],
  },
  {
    id: 'kottu',
    title: 'Kottu',
    sizes: true,
    items: [
      { name: 'Vegetable Kottu', s: 700, l: 1000 },
      { name: 'Egg Kottu', s: 800, l: 1000 },
      { name: 'Fish Kottu', s: 900, l: 1200 },
      { name: 'Chicken Kottu', s: 800, l: 1100 },
      { name: 'Pork Kottu', s: 1300, l: 1600 },
      { name: 'Mixed Kottu', s: 1300, l: 1600 },
    ],
  },
  {
    id: 'cheese-kottu',
    title: 'Cheese Kottu',
    sizes: true,
    items: [
      { name: 'Vegetable Cheese Kottu', s: 1300, l: 1500 },
      { name: 'Egg Cheese Kottu', s: 1400, l: 1600 },
      { name: 'Fish Cheese Kottu', s: 1500, l: 1700 },
      { name: 'Chicken Cheese Kottu', s: 1500, l: 1700 },
      { name: 'Pork Cheese Kottu', s: 1600, l: 1900 },
      { name: 'Mixed Cheese Kottu', s: 1600, l: 1900 },
    ],
  },
  {
    id: 'chop-suey',
    title: 'Chop Suey',
    note: 'Fried rice & noodles',
    items: [
      { name: 'Vegetable Chop Suey', price: 1800 },
      { name: 'Chicken Chop Suey', price: 2000 },
      { name: 'Seafood Chop Suey', price: 2500 },
      { name: 'Mixed Chop Suey', price: 2900 },
    ],
  },
  {
    id: 'nasi-goreng',
    title: 'Nasi Goreng',
    items: [
      { name: 'Chicken Nasi Goreng', price: 1300 },
      { name: 'Seafood Nasi Goreng', price: 1500 },
      { name: 'Mixed Nasi Goreng', price: 1700 },
      { name: 'Seafood Mongolian Rice', price: 1800 },
    ],
  },
  {
    id: 'biriyani',
    title: 'Biriyani',
    items: [{ name: 'Chicken Biriyani', price: 1500 }],
  },
  {
    id: 'omelette',
    title: 'Omelette',
    items: [
      { name: 'Sri Lankan Omelette', price: 600 },
      { name: 'Cheese Tomato Omelette', price: 800 },
      { name: 'Cheese Chicken Omelette', price: 1000 },
    ],
  },
  {
    id: 'sides',
    title: 'Sides',
    sizes: true,
    items: [
      { name: 'Devilled Chicken', s: 1200, l: 1800 },
      { name: 'Devilled Sausages', s: 900, l: 1200 },
      { name: 'Mixed Devilled Plate', s: 1600, l: 2600 },
      { name: 'Hot Butter Chicken', s: 1300, l: 2300 },
      { name: 'Fried Chicken', s: 1200, l: 1800 },
      { name: 'Devilled Prawns', s: 1400, l: 2000 },
      { name: 'Devilled Pork', s: 1400, l: 2300 },
      { name: 'Pork Stew', s: 1200, l: 2000 },
      { name: 'Fried Pork', s: 1300, l: 2200 },
      { name: 'Chicken Stew', s: 1200, l: 2000 },
      { name: 'Devilled Cuttlefish', s: 1100, l: 2000 },
      { name: 'Hot Butter Cuttlefish', s: 1300, l: 2000 },
      { name: 'Fish Stew', s: 1200, l: 2000 },
      { name: 'Hot Butter Mushrooms', s: null, l: 1000 },
      { name: 'Boiled Vegetables', s: null, l: 1200 },
    ],
  },
  {
    id: 'fruits',
    title: 'Fruits',
    items: [{ name: 'Fruit Plate', price: 1750 }],
  },
]
