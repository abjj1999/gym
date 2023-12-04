class Session {
    constructor(trainee, trainer, date, location, details) {
      this.trainee = trainee;
      this.trainer = trainer;
      this.date = date;
      this.location = location;
      this.details = details;
      this.workouts = [];
      this.results = null;
      this.confirmed = false;
    }

    makeWorkoutPlan(workoutPlan) {
      this.workouts = workoutPlan;
    }

    confirmSession() {
        this.confirmed = true;
    
    }

    addResults(results) {
        this.results = results;
    }
    cancelSession() {
        this.confirmed = false;
    }
  }
  
  module.exports = Session;