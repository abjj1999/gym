class Review {
    constructor(trainee, trainer, comment, rating, date) {
      this.trainee = trainee;
      this.trainer = trainer;
      this.comment = comment;
      this.rating = rating;
      this.date = date;
      this.confirmed = false; // the admin has to confirm the review before it is displayed
    }

    confirmReview() {
        this.confirmed = true;
    }
  }
  
  module.exports = Review;