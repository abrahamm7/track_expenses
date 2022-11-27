import './App.css';
import ExpenseItem from './components/ExpenseItem';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const expenses = [
    {
      id: '1',
      title: 'supermarket',
      amount: 324.56,
      date: new Date(2022, 11, 8)
    },
    {
      id: '2',
      title: 'rent payment',
      amount: 324.56,
      date: new Date(2022, 1, 5)
    },
    {
      id: '3',
      title: 'haircut',
      amount: 324.56,
      date: new Date(2022, 10, 4)
    },
  ];

  return (
    <div className="App">
      <ExpenseItem 
        title={expenses[0].title}
        amount={expenses[0].amount} 
        date={expenses[0].date}
      />
    </div>
  );
}

export default App;
