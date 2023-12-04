// trainer.test.js

const Trainee = require('../lib/trainee');
const Trainer = require('../lib/trainer');
const trainer = new Trainer(
    1,
    'John Trainer',
    '1980-05-15',
    '123-45-6789',
    'Gym Location',
    ['Certification A', 'Certification B'],
    5,
    '456 Trainer St, City',
    '987-654-3210',
    'john.trainer@example.com',
    'securePassword123'
  );
describe('Trainer class', () => {
  test('should create a new trainer instance with provided values', () => {
    

    expect(trainer).toEqual({
      trainerId: 1,
      name: 'John Trainer',
      dob: '1980-05-15',
      socialSecurity: '123-45-6789',
      location: 'Gym Location',
      certifications: ['Certification A', 'Certification B'],
      yearExperience: 5,
      address: '456 Trainer St, City',
      phone: '987-654-3210',
      email: 'john.trainer@example.com',
      password: 'securePassword123',
      availability: [],
      rating: null,
    });
  });

  test('should set availability for the trainer', () => {
    // const trainer = new Trainer(/*...*/);
    trainer.setAvailability(['Monday', 'Wednesday', 'Friday']);

    expect(trainer.availability).toEqual(['Monday', 'Wednesday', 'Friday']);
  });

  test('should set rating for the trainer', () => {
    // const trainer = new Trainer(/*...*/);
    trainer.setRating(4.5);

    expect(trainer.rating).toBe(4.5);
  });

    test('should return true if email and password match', () => {
        // const trainer = new Trainer(/*...*/);
        const loggedIn = trainer.login('john.trainer@example.com', 'securePassword123');

        expect(loggedIn).toBe(true);
    });

    // create a diet plan for a trainee 
    test('should create a diet plan for a trainee', () => {
        // const trainer = new Trainer(/*...*/);
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
        const dietPlan = trainer.createDietPlan(trainee.traineeId, trainee.name);

        expect(dietPlan).toBe(`Diet plan for trainee ${trainee.traineeId} - ${trainee.name} created.`);
    });
});
