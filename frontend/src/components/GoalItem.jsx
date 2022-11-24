import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteGoal, updateGoal } from '../features/goals/goalSlice';
import {useNavigate} from 'react-router-dom';
function GoalItem({ goal }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [text, setText] = useState(goal.text)
  const [update, setUpdate] = useState(false)

  const handleUpdate=()=>{
    window.location.reload();
  }
  return (
    <div className="goal">
      <div>
        {new Date(goal.createdAt).toLocaleString('en-US')}
      </div>
      <h2>{goal.text}</h2>
      {update && <section className="form">

        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input type="text" name="text" id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}

          />
        </div>

        <div className="form-group">
          <button style={{backgroundColor: 'green', color:'white', border:'none', height:'30px', width:'90%'}} onClick={() => { dispatch(updateGoal({id:goal._id, text:text})); setUpdate(false); handleUpdate() }}>
            Update Goal
          </button>
          <button style={{backgroundColor: 'red', color:'white', border:'none', height:'30px', width:'90%', marginTop:'10px'}} onClick={() => { setUpdate(false) }}>
            Cancel
          </button>
        </div>


      </section>}

      {!update&&<button onClick={() => setUpdate(true)}>Update</button>}
      <button className="close" onClick={() => dispatch(deleteGoal(goal._id))}>X</button>
    </div>
  )
}

export default GoalItem