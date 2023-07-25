/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("history", (table) => {
    table.integer("user_id");
    table
      .foreign("user_id")
      .references("users.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.integer("exercise_id");
    table
      .foreign("exercise_id")
      .references("exercise.exercise_id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.date("date").notNullable();
    table.float("weight");
    table.integer("reps");
    table.integer("sets");
    table.integer("difficulty");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("history");
};
