const knex = require("../../db/knex");

module.exports = {
  // GET
  getAll() {
    return knex("exercise").select();
  },

  // POST
  addExercise(newExercise) {
    console.log(newExercise);
    return knex("exercise")
      .insert({
        // exercise_id: newExercise["exercise_id"],
        exercise_name: newExercise["exercise_name"],
        body_part: newExercise["body_part"],
        main_muscle_group: newExercise["main_muscle_group"],
        push_or_pull: newExercise["push_or_pull"],
      })
      .returning();
  },

  // PATCH
  changeExercise(exerciseId, change) {
    return knex("exercise").where("exercise_id", exerciseId).update(change);
  },

  // DELETE
  removeExercise(exerciseId) {
    return knex("exercise").where("exercise_id", exerciseId).del().returning();
  },
};
