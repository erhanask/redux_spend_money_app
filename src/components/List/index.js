import {useDispatch, useSelector} from "react-redux";
import {buyProduct, sellProduct} from "../../redux/ProductsSlice";
import {useState} from "react";

export const List = () => {
    const listItems = useSelector(state => state.products.items);
    const dispatch = useDispatch();
    console.log(listItems);

    const [budget, SetBudget] = useState(1000000000000)

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
                                <button onClick={() => {
                                    dispatch(sellProduct(item.id))
                                    SetBudget(budget => {
                                        return budget = Number(budget) + Number(item.price)
                                    })
                                }} disabled={item.notSellable} className="item-sell">
                                    Sell
                                </button>
                                <span className={`item-input`}>{item.buyedCount}</span>
                                <button onClick={() => {
                                    dispatch(buyProduct([item.id, budget]))
                                    SetBudget(budget => {
                                        if (Number(budget) - Number(item.price) > 0) {
                                            return budget = Number(budget) - Number(item.price)
                                        } else {
                                            return budget
                                        }
                                    })
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
