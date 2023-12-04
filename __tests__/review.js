const Review = require('../lib/review');
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

const review= new Review(trainee,trainer,'Great session',5,'2021-05-15');

describe('Review class', () => {
    test('Create a new review instance with provided values', () => {
        expect(review).toEqual({
            trainee,
            trainer,
            comment:'Great session',
            rating:5,
            date:'2021-05-15',
            confirmed: false,
        });
    });

    test('Confirm the review', () => {
        review.confirmReview();

        expect(review.confirmed).toEqual(true);
    });
});