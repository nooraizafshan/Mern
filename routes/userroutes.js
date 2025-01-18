const express = require("express");
const mongoose = require("mongoose");
const User = require("../model/userModel");

const router = express.Router();
// In your routes file (e.g., userRoutes.js)

router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedUser);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
});

// Create operation
router.post("/", async (req, res) => {
    const { name, email, age } = req.body;

    try {
        const addUser = await User.create({
            name: name,
            email: email,
            age: age,
        });
        res.status(201).json(addUser);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
});

// Find operation 
router.get("/", async (req, res) => {
    try {
        const showData = await User.find();
        res.status(200).json(showData);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
});

// Get single user
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const singleUser = await User.findById(id);
        res.status(200).json(singleUser);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
});

// Delete operation
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        res.status(200).json(deletedUser);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
});

// Update operation
router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedUser);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
