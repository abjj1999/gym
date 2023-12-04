// trainee.test.js

const Trainee = require('../lib/trainee');
const trainee = new Trainee(
    1,
    'John Doe',
    '1990-01-01',
    175,
    70,
    'High',
    '123-456-7890',
    '123 Main St, City',
    'john.doe@example.com',
    'password',
  );

describe('Trainee class', () => {
  test('should create a new trainee instance with provided values', () => {
    expect(trainee).toEqual({
      traineeId: 1,
      name: 'John Doe',
      dob: '1990-01-01',
      height: 175,
      weight: 70,
      activeLevel: 'High',
      phone: '123-456-7890',
      address: '123 Main St, City',
      email: 'john.doe@example.com',
      password: 'password',
      goalWeight: null,
      dietaryRestrictions: [],
      physicalInjuries: [],
      paymentInfo: null,
      emergencyContact: null,
    });
  });

  test('should set the goal weight for the trainee', () => {
    // const trainee = new Trainee(/*...*/);
    trainee.setGoalWeight(65);

    expect(trainee.goalWeight).toBe(65);
  });

  test('should set dietary restrictions for the trainee', () => {
    // const trainee = new Trainee(/*...*/);
    trainee.setDietaryRestrictions(['Vegetarian', 'Lactose-free']);

    expect(trainee.dietaryRestrictions).toEqual(['Vegetarian', 'Lactose-free']);
  });

  test('should set emergency contact for the trainee', () => {
    // const trainee = new Trainee(/*...*/);
    trainee.setEmergencyContact({
      name: 'Emergency Contact Name',
      phone: '987-654-3210',
      relationship: 'Family',
    });

    expect(trainee.emergencyContact).toEqual({
      name: 'Emergency Contact Name',
      phone: '987-654-3210',
      relationship: 'Family',
    });
  });
  test('should set physical injuries for the trainee', () => {
    // const trainee = new Trainee(/*...*/);
    trainee.setPhysicalInjuries([
      {
        name: 'Injury 1',
        description: 'Injury 1 description',
        date: '2019-01-01',
      },
      {
        name: 'Injury 2',
        description: 'Injury 2 description',
        date: '2019-01-02',
      },
    ]);

    expect(trainee.physicalInjuries).toEqual([
      {
        name: 'Injury 1',
        description: 'Injury 1 description',
        date: '2019-01-01',
      },
      {
        name: 'Injury 2',
        description: 'Injury 2 description',
        date: '2019-01-02',
      },
    ]);
  });
  test('should set payment info for the trainee', () => {
    // const trainee = new Trainee(/*...*/);
    trainee.setPaymentInfo({
      cardNumber: '1234-5678-9012-3456',
      expiryDate: '2020-01-01',
      cvv: '123',
    });

    expect(trainee.paymentInfo).toEqual({
      cardNumber: '1234-5678-9012-3456',
      expiryDate: '2020-01-01',
      cvv: '123',
    });
  });
  test("should be able to login" , () => {
     
      expect(trainee.login("john.doe@example.com", "password")).toBe(true);
  })
  
});
