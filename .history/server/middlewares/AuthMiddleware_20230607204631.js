
const validToken = (req, res, next) => {
    const accessToken = req.header("accessToken");

    if (!accessToken) {
        return res
    }
};