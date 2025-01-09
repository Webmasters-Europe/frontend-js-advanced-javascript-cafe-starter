'use strict';

const menu = [
  {
    category: 'Beverages',
    items: [
      { name: 'Coffee', price: 3.5 },
      { name: 'Tea', price: 2.5 },
      { name: 'Juice', price: 4 },
    ],
  },
  {
    category: 'Pastries',
    items: [
      { name: 'Croissant', price: 2.75 },
      { name: 'Muffin', price: 2.5 },
      { name: 'Bagel', price: 2.25 },
    ],
  },
  {
    category: 'Sandwiches',
    items: [
      { name: 'Ham Sandwich', price: 5.5 },
      { name: 'Veggie Sandwich', price: 5 },
      { name: 'Turkey Sandwich', price: 6 },
    ],
  },
];

// ADD YOUR CODE BELOW
const listMenuItems = (menu) => {};

const calculateAveragePrice = (menu) => {};

const findItemsByCategory = (menu, categoryName) => {};

// ===== TEST CASES (DO NOT MODIFY) =====

// 1. List All Menu Items
const menuItems = listMenuItems(menu);
console.log('All Menu Items:\n', menuItems);

// 2. Calculate Average Price
const averagePrice = calculateAveragePrice(menu);
console.log('Average Price of All Items:', averagePrice);

// 3. Find Items by Category
const searchCategory = 'Pastries';
const pastries = findItemsByCategory(menu, searchCategory);
console.log(`Items in "${searchCategory}" \nItems:`, pastries);

/*
===== EXPECTED OUTPUT =====

All Menu Items:
[
  'Coffee',
  'Tea',
  'Juice',
  'Croissant',
  'Muffin',
  'Bagel',
  'Ham Sandwich',
  'Veggie Sandwich',
  'Turkey Sandwich'
]

Average Price of All Items: 3.78

Items in "Pastries" 
Items: [
  { name: 'Croissant', price: 2.75 },
  { name: 'Muffin', price: 2.5 },
  { name: 'Bagel', price: 2.25 }
]
*/
