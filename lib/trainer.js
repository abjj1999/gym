class Trainer {
    constructor(trainerId, name, dob, socialSecurity, location, certifications, yearExperience, address, phone, email, password) {
      this.trainerId = trainerId;
      this.name = name;
      this.dob = dob;
      this.socialSecurity = socialSecurity;
      this.location = location;
      this.certifications = certifications;
      this.yearExperience = yearExperience;
      this.address = address;
      this.phone = phone;
      this.email = email;
      this.password = password;
      this.availability = [];
      this.rating = null;
    }

    setAvailability(availability) {
      this.availability = availability;
    }

    setRating(rating) {
      this.rating = rating;
    }

    login(email, password) {
        if (this.email === email && this.password === password) {
            return true;
        }
        return false;
    }

    // create a diet plan for a client using the client's id 
    createDietPlan(clientId, clientName) {
      return `Diet plan for trainee ${clientId} - ${clientName} created.`;
    }

}

module.exports = Trainer;