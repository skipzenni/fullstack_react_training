
const validToken = (req, res, next) => {
    const accessToken = req.header("accessToken");

    if (!accessToken) {
        return res.json({error: "User not logged in"})
    }

    try {
        const validToken = verify(accessToken, req)
    } catch (error) {
        
    }
};