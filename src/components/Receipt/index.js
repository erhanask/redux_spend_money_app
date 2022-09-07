import {useSelector} from "react-redux";

export const Receipt = () => {
    const buyedItems = useSelector(state => state.products.items.filter(item => item.buyedCount > 0));
    return (
        <div className={`spree-wrapper`}>
            <div className="spree-headline">Your Receipt</div>
            {buyedItems.map(item =>
                <div key={item.id} className="spree-items">
                    <div className="spree-item-name">{item.name}</div>
                    <div className="spree-item-amount">{item.buyedCount}</div>
                    <div className="spree-item-cost">
                        $ {item.buyedCount * item.price}
                    </div>
                </div>
            )}
            <div className="spree-total"><span>TOTAL</span>
                <div className="spree-total-money">
                    $ {buyedItems.length !== 0 ?
                    buyedItems
                        .map(item => Number(item.buyedCount) * Number(item.price))
                        .reduce((prev, next) => {
                            return prev + next
                        }) : 0}
                </div>
            </div>
        </div>
    )
}
