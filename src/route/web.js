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
    postSubmitContactForm,
    getSearchFunction
} = require("../controllers/homeController");

const router = express.Router()

// Middleware để parse dữ liệu từ form
router.use(express.urlencoded({ extended: true })); // Xử lý dữ liệu từ form (application/x-www-form-urlencoded)
router.use(express.json()); // Xử lý dữ liệu JSON (application/json)

router.get("/", getHomePage)
router.get("/about_us", getAboutUsPage);
router.get("/contact", getContactPage);

router.get("/phucvu", getphucvuPage);
router.get("/banhang", getbanhangPage);
router.get("/letan", getletanPage);
router.get("/phache", getphachePage);
router.get("/khac", getkhacPage);

router.post("/submitContactForm", postSubmitContactForm);

router.get("/search", getSearchFunction)

module.exports = router
