export const List = () => {
    return (
        <>
            <div className={`moneybar`}> $mymoney</div>
            <div className={`list`}>
                <div>
                    <div className={`itemWrapper`}>
                        <img src="/assets/images/bike.jpg" className="item-img" />
                            <div className="item-name">Big Mac</div>
                            <div className="item-cost">$2</div>
                            <div className="item-controls">
                                <button disabled="disabled" className="item-sell">
                                    Sell
                                </button>
                                <input type="number" className="item-input" />
                                <button data-v-0d97e62e="" className="item-buy">
                                    Buy
                                </button>
                            </div>
                    </div>
                </div>
                <div>
                    <div className={`itemWrapper`}>
                        <img src="/assets/images/bike.jpg" className="item-img" />
                        <div className="item-name">Big Mac</div>
                        <div className="item-cost">$2</div>
                        <div className="item-controls">
                            <button disabled="disabled" className="item-sell">
                                Sell
                            </button>
                            <input type="number" className="item-input" />
                            <button data-v-0d97e62e="" className="item-buy">
                                Buy
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`itemWrapper`}>
                        <img src="/assets/images/bike.jpg" className="item-img" />
                        <div className="item-name">Big Mac</div>
                        <div className="item-cost">$2</div>
                        <div className="item-controls">
                            <button disabled="disabled" className="item-sell">
                                Sell
                            </button>
                            <input type="number" className="item-input" />
                            <button data-v-0d97e62e="" className="item-buy">
                                Buy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
)
}
