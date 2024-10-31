const express = require('express')
const {
    getHomePage,
    getAboutUsPage,
    getContactPage,
    getphucvuPage,
    getbanhangPage,
    getletanPage,
    getphachePage,
    getkhacPage,
    getdatabasePage
} = require("../controllers/homeController");

const router = express.Router()

router.get("/", getHomePage)
router.get("/about_us", getAboutUsPage);
router.get("/contact", getContactPage);

router.get("/phucvu", getphucvuPage);
router.get("/banhang", getbanhangPage);
router.get("/letan", getletanPage);
router.get("/phache", getphachePage);
router.get("/khac", getkhacPage);

router.get("/db", getdatabasePage);


module.exports = router
