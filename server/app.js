const express = require('express');
const transactionsRoutes = require('./routes/transactionsRoutes');
const rewardsRoutes = require('./routes/rewardsRoutes');

const app = express();
const PORT = 3080;

// Middleware
app.use(express.json());

// Routes
app.use('/api/transactions', transactionsRoutes);
app.use('/api/rewards', rewardsRoutes);

// error handling
// assume 404 since no middleware responded
app.use(function(req, res){
    res.status(404).send("404", { url: req.originalUrl });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
