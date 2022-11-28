import './ExpenseDate.css';

function ExpenseDate(props){
    const dateMonthOptions = { month: 'long' };
    const dateDayOptions = {day: '2-digit' };
    const month = props.date.toLocaleString('en-US' , dateMonthOptions);
    const day = props.date.toLocaleString('en-US' , dateDayOptions);
    const year = props.date.getFullYear();

    return(
        <div className="col-3 p-2">
            <div className="container">
                <div className="expense_date bg-info">
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
            </div>
        </div>
    )

}

export default ExpenseDate;