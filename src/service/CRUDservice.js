const connection = require("../config/database");

const getphucvu = async () => {
    let [results, fields] = await connection.query("select content, link from jobs where tag = 'phục vụ'");
    return results;
};

const getbanhang = async () => {
    let [results, fields] = await connection.query("select content, link from jobs where tag = 'bán hàng'");
    return results;
};

const getletan = async () => {
    let [results, fields] = await connection.query("select content, link from jobs where tag = 'lễ tân'");
    return results;
};


const getphache = async () => {
    let [results, fields] = await connection.query("select content, link from jobs where tag = 'pha chế'");
    return results;
};


const getkhac = async () => {
    let [results, fields] = await connection.query("select content, link from jobs where tag = 'khác'");
    return results;
};

const getdatabase = async () => {
    let [results, fields] = await connection.query("select * from jobs");
    return results;
};

module.exports = {
    getphucvu,
    getbanhang,
    getletan,
    getphache,
    getkhac,
    getdatabase
};
