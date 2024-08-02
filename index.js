import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Midtrans Notification Handler
app.post('/', (req, res) => {
    try {
        const notification = req.body;
        const orderId = notification.order_id;
        const transactionStatus = notification.transaction_status;
        const fraudStatus = notification.fraud_status;

        // Handle notification here
        console.log(`Received notification for Order ID: ${orderId}`);
        console.log(`Transaction Status: ${transactionStatus}`);
        console.log(`Fraud Status: ${fraudStatus}`);

        // Respond to Midtrans that the notification has been received
        res.status(200).send('OK');
    } catch (error) {
        console.error('Error processing notification:', error);
        res.status(500).send('Failed to process notification');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
