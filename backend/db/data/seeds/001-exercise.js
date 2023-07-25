/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("exercise").del();
  await knex("exercise").insert([
    {
      exercise_id: 1,
      exercise_name: "overhead press",
      body_part: "shoulders",
      muscle_group: "deltoids",
      push: true,
    },
    {
      exercise_id: 2,
      exercise_name: "bench press",
      body_part: "chest",
      muscle_group: "pectorals",
      push: true,
    },
    {
      exercise_id: 3,
      exercise_name: "pull up",
      body_part: "back",
      muscle_group: "latissimus dorsi",
      push: false,
    },
    {
      exercise_id: 4,
      exercise_name: "row",
      body_part: "back",
      muscle_group: "latissmus dorsi",
      push: false,
    },
    {
      exercise_id: 5,
      exercise_name: "squat",
      body_part: "legs",
      muscle_group: "quadriceps",
      push: true,
    },
    {
      exercise_id: 6,
      exercise_name: "deadlift",
      body_part: "legs",
      muscle_group: "hamstrings",
      push: false,
    },
  ]);
};
