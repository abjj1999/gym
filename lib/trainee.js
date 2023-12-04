class Trainee {
    constructor(traineeId, name, dob, height, weight, activeLevel, phone, address, email, password) {
      this.traineeId = traineeId;
      this.name = name;
      this.dob = dob;
      this.password = password;
      this.height = height;
      this.weight = weight;
      this.activeLevel = activeLevel;
      this.phone = phone;
      this.address = address;
      this.email = email;
      this.goalWeight = null;
      this.dietaryRestrictions = [];
      this.emergencyContact = null;
      this.physicalInjuries = [];
      this.paymentInfo = null;
    }
    setGoalWeight(goalWeight) {
      this.goalWeight = goalWeight;
    }
    setDietaryRestrictions(dietaryRestrictions) {
      this.dietaryRestrictions = dietaryRestrictions;
    }
    setEmergencyContact(emergencyContact) {
      this.emergencyContact = emergencyContact;
    }
    setPhysicalInjuries(physicalInjuries) {
      this.physicalInjuries = physicalInjuries;
    }
    setPaymentInfo(paymentInfo) {
      this.paymentInfo = paymentInfo;
    }
    login(email, password) {
        if (this.email === email && this.password === password) {
            return true;
        }
        return false;
    }
    



}
  
module.exports = Trainee;