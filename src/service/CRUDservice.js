const connection = require("../config/database");

const getphucvu = async () => {
    let [results, fields] = await connection.query("select content, url, id, date, date_created from jobs where job = 'phục vụ' order by date_created ASC");
    return results;
};

const getbanhang = async () => {
    let [results, fields] = await connection.query("select content, url, id, date, date_created from jobs where job = 'bán hàng' order by date_created ASC");
    return results;
};

const getletan = async () => {
    let [results, fields] = await connection.query("select content, url, id, date, date_created from jobs where job = 'lễ tân' order by date_created ASC");
    return results;
};


const getphache = async () => {
    let [results, fields] = await connection.query("select content, url, id, date, date_created from jobs where job = 'pha chế' order by date_created ASC");
    return results;
};


const getkhac = async () => {
    let [results, fields] = await connection.query("select content, url, id, date, date_created from jobs where job = 'khác' order by date_created ASC");
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
