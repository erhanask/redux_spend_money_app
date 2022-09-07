import {createSlice} from "@reduxjs/toolkit";


const ProductsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [
            {
                'id': 1,
                'name': 'Bike',
                'img': '/assets/images/bike.jpg',
                'price': 1250,
                'buyedCount': 0,
                'notSellable': true
            },
            {
                'id': 2,
                'name': 'Bill Gates',
                'img': '/assets/images/billgates.jpg',
                'price': 999999999999,
                'buyedCount': 0,
                'notSellable': true
            },
            {
                'id': 3,
                'name': 'cruise-ship',
                'img': '/assets/images/cruise-ship.jpg',
                'price': 5000000000,
                'buyedCount': 0,
                'notSellable': true
            },
            {
                'id': 4,
                'name': 'diamond-ring',
                'img': '/assets/images/diamond-ring.jpg',
                'price': 10000000,
                'buyedCount': 0,
                'notSellable': true
            },
            {
                'id': 5,
                'name': 'gaming-console',
                'img': '/assets/images/gaming-console.jpg',
                'price': 7500,
                'buyedCount': 0,
                'notSellable': true
            },
            {
                'id': 6,
                'name': 'Make A Movie',
                'img': '/assets/images/make-a-movie.jpg',
                'price': 30000000,
                'buyedCount': 0,
                'notSellable': true
            },
            {
                'id': 7,
                'name': 'Mona Lisa',
                'img': '/assets/images/mona-lisa.jpg',
                'price': 185000000,
                'buyedCount': 0,
                'notSellable': true
            },
            {
                'id': 8,
                'name': 'Movie Ticket',
                'img': '/assets/images/movie-ticket.jpg',
                'price': 5000,
                'buyedCount': 0,
                'notSellable': true
            },
            {
                'id': 9,
                'name': 'NBA Team',
                'img': '/assets/images/nba-team.jpg',
                'price': 875000000,
                'buyedCount': 0,
                'notSellable': true
            },
            {
                'id': 10,
                'name': 'smartphone',
                'img': '/assets/images/smartphone.jpg',
                'price': 1750,
                'buyedCount': 0,
                'notSellable': true
            },
        ]
    },
    reducers: {
        buyProduct: {
            reducer: (state, action) => {
                const item = state.items.find(item => item.id === action.payload[0]);
                const budget = action.payload[1] - Number(item.price);
                if (Number(budget) >= 0) {
                    item.buyedCount++;
                    item.notSellable = false;
                }
            }
        },
        sellProduct: {
            reducer: (state, action) => {
                const item = state.items.find(item => item.id === action.payload);
                if (Number(item.buyedCount) === 1) {
                    item.notSellable = true;
                }
                item.buyedCount--;
            }
        }
    },
})

export const {buyProduct, sellProduct} = ProductsSlice.actions;
export default ProductsSlice.reducer;
