const express = require('express');
const apiKey = process.env.LISTEN_API_KEY
const baseUrl = 'https://listen-api-test.listennotes.com/api/v2'
const unirest = require('unirest');
const router = express.Router();
const { Shelf } = require('../db/models');
const { csrf, csrfProtection, bcrypt, check, validationResult, asyncHandler } = require("../lib/util")


router.post('/', csrfProtection, asyncHandler(async (req, res) => {
    const {shelficon, shelfname } = req.body;
    const userId = req.session.auth.userId;
    let name = `${shelfname}+${shelficon}`;
    await Shelf.create({userId, name})
    res.redirect("/me")
}))

module.exports = router;