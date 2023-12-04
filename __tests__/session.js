const Session = require('../lib/session');
const Trainer = require('../lib/trainer');
const Trainee = require('../lib/trainee');

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

const sessionDate = new Date('2023-01-15');
const location = 'Gym Room 1';
const details = 'Strength Training';

const workouts = ['Squats', 'Bench Press', 'Deadlifts'];
const results = { weightlifted: 200, duration: '1 hour' };

const session = new Session(trainee, trainer, sessionDate, location, details);

describe('Session class', () => {
    test('Create a new session instance with provided values', () => {
        expect(session).toEqual({
            trainee,
            trainer,
            date: sessionDate,
            location,
            details,
            workouts: [],
            confirmed: false,
            results: null,

        });
    });

    test('Make a workout plan for the session', () => {
        session.makeWorkoutPlan(workouts);

        expect(session.workouts).toEqual(workouts);
    });

    test('Confirm the session', () => {
        session.confirmSession();

        expect(session.confirmed).toBe(true);
    });

    test('Add results for the session', () => {
        session.addResults(results);

        expect(session.results).toEqual(results);
    });
    
    test('Cancel the session', () => {
        session.cancelSession();

        expect(session.confirmed).toBe(false);
    });


})
