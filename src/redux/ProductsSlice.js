import {createSlice} from "@reduxjs/toolkit";


const ProductsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [
            {
                'id': 1,
                'name': 'Bike',
                'img': '/assets/images/bike.jpg',
                'price': 25,
                'buyedCount': 0
            },
            {
                'id': 2,
                'name': 'Bill Gates',
                'img': '/assets/images/billgates.jpg',
                'price': 999999999999,
                'buyedCount': 0
            },
            {
                'id': 3,
                'name': 'cruise-ship',
                'img': '/assets/images/cruise-ship.jpg',
                'price': 500000000,
                'buyedCount': 0
            },
            {
                'id': 4,
                'name': 'diamond-ring',
                'img': '/assets/images/diamond-ring.jpg',
                'price': 1000000,
                'buyedCount': 0
            },
            {
                'id': 5,
                'name': 'gaming-console',
                'img': '/assets/images/gaming-console.jpg',
                'price': 750,
                'buyedCount': 0
            },
            {
                'id': 6,
                'name': 'Make A Movie',
                'img': '/assets/images/make-a-movie.jpg',
                'price': 3000000,
                'buyedCount': 0
            },
            {
                'id': 7,
                'name': 'Mona Lisa',
                'img': '/assets/images/mona-lisa.jpg',
                'price': 450000000,
                'buyedCount': 0
            },
            {
                'id': 8,
                'name': 'Movie Ticket',
                'img': '/assets/images/movie-ticket.jpg',
                'price': 1,
                'buyedCount': 0
            },
            {
                'id': 9,
                'name': 'NBA Team',
                'img': '/assets/images/nba-team.jpg',
                'price': 250000000,
                'buyedCount': 0
            },
            {
                'id': 10,
                'name': 'smartphone',
                'img': '/assets/images/smartphone.jpg',
                'price': 250,
                'buyedCount': 0
            },
        ],
    },
    reducers: {},
})

export default ProductsSlice.reducer;
