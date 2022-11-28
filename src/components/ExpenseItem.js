import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css';

function ExpenseItem(props) {
    return(
        <div className="container p-5">
            <div className="card">
                <div className="row">
                    <ExpenseDate date={props.date}/>
                    <div className="col-6 p-2">
                        <h4>{props.title}</h4>
                    </div>
                    <div className="col-3 p-2">
                        <div>
                            <div className="container p-2">
                                <div className='expense_item bg-success'>
                                    ${props.amount}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem;