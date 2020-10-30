'use strict';

const VIDEO_SEEDS = [
  { name: 'How to create website', userId: 1 },
  { name: 'Funny animals', userId: 3 },
  { name: 'Top 5 rich people', userId: 1 },
];

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('video', VIDEO_SEEDS.map((video) => ({
    ...video,
    createdAt: new Date(),
    updatedAt: new Date(),
  }))),

  down: async (queryInterface) => queryInterface.bulkDelete('video', VIDEO_SEEDS.map(({ name }) => ({ name }))),
};
