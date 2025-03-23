const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

router.post('/contact', async (req, res) => {
    try {
        const { firstName, lastName, phone, email, subject, message } = req.body;
        const contact = new Contact({ firstName, lastName, phone, email, subject, message });
        await contact.save();
        res.status(201).json({ message: "Message sent successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

module.exports = router;