import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header'
import './App.css';
import NewTask from './components/NewTask/NewTask';
import CreateTask from './components/CreateTask/CreateTask';
import Task from './components/Task/Task';
import { TaskList } from './styled-comp'
import { db } from './firebase'

const App = () => {

  const [showInput, setShowInput] = useState(false);
  const [display, setDisplay] = useState('none');
  const [symbol, setSymbol] = useState('+')
  const [task, setTask] = useState([]);

  useEffect(() => {
    handleCreateTask();
  })

  useEffect(() => {

    const RenderTasks = () => {
      db.collection('notes').get().then((doc) => {
        doc.docs.forEach(element => {
          console.log(element.id)
          setTask(task => [...task, 
          <Task 
            delete={DeleteTask} 
            id={element.id} 
            color={element.data().color}
            key={element.id} 
            text={element.data().note} 
          />])
        })
      })
    }

    setTask(task => task.reverse())
    RenderTasks();
  }, [])

  const handleCreateTask = () => {
    if(!showInput) {
      setDisplay('none')
      setSymbol('+')
    }
    else {
      setDisplay('block')
      setSymbol('-')
    }
  }

  const DeleteTask = (e) => {
    const note = e.target.parentElement
    db.collection("notes").doc(note.id).delete().then(function() {
      note.remove()
      console.log('aa')
    })
  }

  const SetTextToTask = (color) => {

    const id = document.getElementById('input-task')

    const colorsArray = [
      'chocolate',
      'cornflowerblue', 
      'darkmagenta', 
      'darkred', 
      'dodgerblue'
    ]

    color = colorsArray[Math.floor(Math.random() * colorsArray.length)]

    if(id.value === '') { return; }

    db.collection("notes").add({
      note: id.value,
      color: color
    }).then((doc) => {
      setTask(task => [...task, <Task color={color} id={doc.id} key={doc.id} text={id.value} />])
      console.log("Document written with ID: ", doc.id);
    }).catch((error) => {
      console.error(error);
    });
  
  }

  return (
    <div className="App">
      <Header title="TO DO APP" />
      <NewTask 
        onClick={() => setShowInput(!showInput)} 
        symbol={symbol}
      />
      <CreateTask display={display} onClick={SetTextToTask} />
      <TaskList>
        {task}
      </TaskList>
    </div>
  );
}

export default App;
