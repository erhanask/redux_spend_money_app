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
                'price': 500000000,
                'buyedCount': 0,
                'notSellable': true
            },
            {
                'id': 4,
                'name': 'diamond-ring',
                'img': '/assets/images/diamond-ring.jpg',
                'price': 1000000,
                'buyedCount': 0,
                'notSellable': true
            },
            {
                'id': 5,
                'name': 'gaming-console',
                'img': '/assets/images/gaming-console.jpg',
                'price': 750,
                'buyedCount': 0,
                'notSellable': true
            },
            {
                'id': 6,
                'name': 'Make A Movie',
                'img': '/assets/images/make-a-movie.jpg',
                'price': 3000000,
                'buyedCount': 0,
                'notSellable': true
            },
            {
                'id': 7,
                'name': 'Mona Lisa',
                'img': '/assets/images/mona-lisa.jpg',
                'price': 450000000,
                'buyedCount': 0,
                'notSellable': true
            },
            {
                'id': 8,
                'name': 'Movie Ticket',
                'img': '/assets/images/movie-ticket.jpg',
                'price': 1,
                'buyedCount': 0,
                'notSellable': true
            },
            {
                'id': 9,
                'name': 'NBA Team',
                'img': '/assets/images/nba-team.jpg',
                'price': 250000000,
                'buyedCount': 0,
                'notSellable': true
            },
            {
                'id': 10,
                'name': 'smartphone',
                'img': '/assets/images/smartphone.jpg',
                'price': 250,
                'buyedCount': 0,
                'notSellable': true
            },
        ],
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
                    item.buyedCount--;
                } else {
                    item.buyedCount--;
                }
            }
        }
    },
})

export const {buyProduct, sellProduct} = ProductsSlice.actions;
export default ProductsSlice.reducer;
