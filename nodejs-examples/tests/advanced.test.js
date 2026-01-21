/**
 * Topic 9: Testing & Debugging
 * 
 * Demonstrates Unit Testing with Mocks and Spies.
 */
const { LongestWord } = require('../src/algorithms/longestWord'); // Assuming we might refactor to named exports, but for now using direct require paths if needed, or mocking modules.

// Mocking a database module (Simulated)
const db = {
    getUser: (id) => Promise.resolve({ id, name: 'MockUser' })
};

// Function to test which uses dependency
async function getUserName(id, dbParam) {
    const user = await dbParam.getUser(id);
    return user.name;
}

describe('Advanced Testing', () => {
    test('should mock database call', async () => {
        const mockDb = {
            getUser: jest.fn().mockResolvedValue({ id: 1, name: 'Test User' })
        };

        const name = await getUserName(1, mockDb);

        expect(name).toBe('Test User');
        expect(mockDb.getUser).toHaveBeenCalledWith(1);
    });

    test('should handle errors from dependency', async () => {
        const mockDb = {
            getUser: jest.fn().mockRejectedValue(new Error('DB Error'))
        };

        await expect(getUserName(1, mockDb)).rejects.toThrow('DB Error');
    });
});
