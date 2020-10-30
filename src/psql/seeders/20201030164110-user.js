'use strict';

const USER_SEEDS = [
  { name: 'Harry' },
  { name: 'Ron' },
  { name: 'Hermione' },
];

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('user', USER_SEEDS.map((user) => ({
    ...user,
    createdAt: new Date(),
    updatedAt: new Date(),
  }))),

  down: async (queryInterface) => queryInterface.bulkDelete('user', USER_SEEDS.map(({ name }) => ({ name }))),
};
