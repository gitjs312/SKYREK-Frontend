

export function createProduct(req, res) {

    console.user(req.user)

    res.json({
        message: "product created successfully"
    });
}