// Import necessary dependencies and models
const Task = require('../models/Task');

// Seed function to initialize the database with initial data
const seedDatabase = async () => {
    try {
        // Add initial tasks to the database
        await Task.create([
            { name: 'Task 1', completed: false },
            { name: 'Task 2', completed: true },
            // Add more tasks as needed
        ]);
        console.log('Database seeded successfully');
    } catch (err) {
        console.error('Error seeding database:', err);
    }
};

module.exports = seedDatabase;
