import React from 'react';

function Goal(props) {
    let  {index, title, description, updateGoalItem, removeGoal} = props;
    return (
        <div>
            <div className="goal-item">
                <span className="remove-goal" id={index} onClick={(e) => {removeGoal(e)}}>X</span>
                <input type="text" name="title" id={index} value={title} onChange={(e) => {updateGoalItem(e)}}></input>
                <div>
                    <textarea name="description" id={index} value={description} onChange={(e) => {updateGoalItem(e)}}></textarea>
                </div>
            </div>
        </div>
    );
}

export default Goal;