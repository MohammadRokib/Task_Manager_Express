const notFound = (req, res) => {
    res.status(404).json({ success:false, msg:`Route doesn't exist` });
};

module.exports = notFound;
