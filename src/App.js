import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header'
import './App.css';
import NewTask from './components/NewTask/NewTask';
import CreateTask from './components/CreateTask/CreateTask';
import styled from 'styled-components';
import Task from './components/Task/Task';
import { db } from './firebase'

const App = () => {

  const listRef = React.createRef()

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
          setTask(task => [...task, <Task delete={DeleteTask} id={element.id} key={element.id} text={element.data().note} />])
        })
      })
    }

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

  const TaskList = styled.ul`
    padding: 0;
  `

  const DeleteTask = (e) => {
    const note = e.target.parentElement

    db.collection("notes").doc(note.id).delete().then(function() {
      note.remove()
    })
  }

  const SetTextToTask = () => {

    const id = document.getElementById('input-task')

    if(id.value === '') { return; }

    db.collection("notes").add({
      note: id.value
    }).then((doc) => {
      setTask(task => [...task, <Task id={doc.id} key={doc.id} text={id.value} />])
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
      <TaskList ref={listRef}>
        {task}
      </TaskList>
    </div>
  );
}

export default App;
