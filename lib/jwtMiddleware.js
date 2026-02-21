

export default function authorizeUser(req, res, next)  {

    const header = req.header("Authorization");

    if (header != null) {
        const token = header.replace("Bearer ", "");
        console.log(token);

        jwt.verify(token, "i-computers-54!", (error, decoded) => {
            console.log(decoded);
            req.user=decoded
        });
        
    }

    next();   // continue to next middleware

}