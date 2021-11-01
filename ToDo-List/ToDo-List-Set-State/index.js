function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    } ,
    {
      text: 'build ghost web app using React',
      isCompleted: false,
    },  
    {
      text: 'Do research for hackathon',
      isCompleted: false,
    },
    {
      text:'Take Son to art class',
      iscompleted: false,
    },
    {
      text:'Do laundry',
      isCompleted: false,
    },
    {
      text: 'Prepare dinner',
      isCompleted: false,
    },
    {
      text: 'Read the Word',
      isCompleted: false,
    }
  ])

  return(
    <>
      {todos.map((todo, i) =>
       <div className="todo" key={i}>{todo.text}</div>)}
    </>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
