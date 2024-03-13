export default function addToCart(route) {
    route.get('/addToCart', (req, res) => {
        res.status(200).json({
            data: null,
            message: 'I am in addToCart route',
            status: 200
        });
    })
}
