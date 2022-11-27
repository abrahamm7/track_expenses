function ExpenseItem(props) {
    const dateMonthOptions = { month: 'long' };
    const dateDayOptions = {day: '2-digit' };
    const month = props.date.toLocaleString('en-US' , dateMonthOptions);
    const day = props.date.toLocaleString('en-US' , dateDayOptions);
    const year = props.date.getFullYear();

    return(
        <div className="container p-5">
            <div className="card">
                <div className="row">
                    <div className="col-3 p-2">
                        <div>
                            {month}
                        </div>
                        <div>
                            {day}
                        </div>
                        <div>
                            {year}
                        </div>
                    </div>
                    <div className="col-6 p-2">
                        <h4>{props.title}</h4>
                    </div>
                    <div className="col-3 p-2">
                        <div>
                            <div className="card bg-success">
                                ${props.amount}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem;