import './App.css';
import Button from './components/Button';
import Goal from './components/Goal';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

function App() {
  let [goals, setGoals] = useState([]);
  
  useEffect(() => {
    getGoals();
  }, []);
  
  async function getGoals() {
    const response = await fetch('http://localhost:9000/goals');
    const data = await response.json();
    setGoals(data.data);
  }

  const addGoal = () => {
    var newArray = goals.concat([{title:"", description:""}]);
    setGoals(newArray);
  }

  const saveGoal = async () => {
      const response = await fetch("http://localhost:9000/goals", {
          method: 'POST',
          body: JSON.stringify(goals)
        });
      console.log(response);
  }

  const updateGoalItem = (e) => {
    console.log("update goals");
    let {id, name, value} = e.target;
    let goalsList = [...goals];
    goalsList[id][name] = value;
    setGoals(goalsList);
  }

  const removeGoal = (e) => {
    const goalList = [...goals];
    goalList.splice(e.target.id, 1);
    setGoals(goalList);
  }

  const Wrapper = styled.section`
    max-width: 60%;
    margin: 0 auto;
    padding-top: 20px;
  `;

  return (
    <div className="App">
      <Wrapper>
          <div className="goal-form">
            {goals && goals.map((goal, index) => {
              return <Goal key={index} index={index} title={goal.title} description={goal.description} updateGoalItem={updateGoalItem} removeGoal={removeGoal}></Goal>
            })}   
          </div>
          <div className="button-wrapper">
            <Button name="Add goals" clickHandler={addGoal}></Button>
            <Button name="Save" clickHandler={saveGoal}></Button>
          </div>
      </Wrapper>
    </div>
  );
}

export default App;
