const connection = require('../config/database')
const {
    getphucvu,
    getbanhang,
    getletan,
    getphache,
    getkhac,
    getdatabase
} = require("../service/CRUDservice");

user = []

const getHomePage = (req, res) => {
    return res.render("home.ejs")
};

const getAboutUsPage = (req, res) => {
    return res.render("about_us.ejs");
};

const getContactPage = (req, res) => {
    return res.render("contact.ejs");
};

const getphucvuPage = async (req, res) => {
    let results = await getphucvu();

    return res.render("result.ejs", { listJobs: results });
};

const getbanhangPage = async (req, res) => {
    let results = await getbanhang();

    return res.render("result.ejs", { listJobs: results });
};

const getletanPage = async (req, res) => {
    let results = await getletan();

    return res.render("result.ejs", { listJobs: results });
};

const getphachePage = async (req, res) => {
    let results = await getphache();

    return res.render("result.ejs", { listJobs: results });
};

const getkhacPage = async (req, res) => {
    let results = await getkhac();

    return res.render("result.ejs", { listJobs: results });
};

const getdatabasePage = async (req, res) => {
    let results = await getdatabase();
    return res.render("showDB.ejs", { listJobs: results });
};


module.exports = {
    getHomePage,
    getAboutUsPage,
    getContactPage,

    getphucvuPage,
    getbanhangPage,
    getletanPage,
    getphachePage,
    getkhacPage,

    getdatabasePage
};