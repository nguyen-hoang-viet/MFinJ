const Fuse = require("fuse.js");
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

const postSubmitContactForm = async (req, res) => {
    console.log(">>>>>>> req.body:", req.body);

    // const { name, email, phone, message } = req.body;

    res.redirect("/contact");
}

const getSearchFunction = async (req, res) => {
    const { query } = req.query;

    try {
        const data = await getdatabase();

        // Cấu hình Fuse.js
        const fuse = new Fuse(data, {
            keys: ["content"], // Tìm kiếm trên cột content
            threshold: 1,    // Độ chính xác
            includeScore: true,
            tokenize: true,
            findAllMatches: true,
        });

        // Tìm kiếm dữ liệu
        // const result = fuse.search(query).map(item => item.item);
        const result = query ? fuse.search(query).map(item => item.item) : rows;
    
        // res.json(result);

        return res.render("search_res.ejs", { query, result });
    } catch (error) {
        res.status(500).json({ error: "Lỗi server" });
    }
}


module.exports = {
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
};