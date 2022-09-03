import {useDispatch, useSelector} from "react-redux";
import {buyProduct} from "../../redux/ProductsSlice";
import {useState} from "react";

export const List = () => {
    const listItems = useSelector(state => state.products.items);
    const dispatch = useDispatch();
    console.log(listItems);

    const [budget, SetBudget] = useState(1000000000);
    const calculateBudget = (operation, price) => {
        console.log(operation + ' ' + price);
    }

    return (
        <>
            <div className={`moneybar`}>${budget}</div>
            <div className={`list`}>
                {listItems.map(item =>
                    <div key={item.id}>
                        <div className={`itemWrapper`}>
                            <img alt={item.name} src={item.img} className="item-img"/>
                            <div className="item-name">{item.name}</div>
                            <div className="item-cost">${item.price}</div>
                            <div className="item-controls">
                                <button disabled={item.isSellable} className="item-sell">
                                    Sell
                                </button>
                                <span className={`item-input`}>0</span>
                                <button onClick={() => {
                                    dispatch(buyProduct(item.id))
                                    calculateBudget('add',item.price)
                                }} className="item-buy">
                                    Buy
                                </button>
                            </div>
                        </div>
                    </div>)}
            </div>
        </>
    )
}
