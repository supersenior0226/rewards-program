// Helper functions, if needed
// You can add any utility/helper functions that you might require in this file

function calculateRewardsPoints(amount) {
    let points = 0;
    
    if (amount > 100) {
        points += (amount - 100) * 2;
        amount = 100;
    }
    
    if (amount > 50) {
        points += (amount - 50);
    }
    
    return points;
}

module.exports = {
    calculateRewardsPoints
};