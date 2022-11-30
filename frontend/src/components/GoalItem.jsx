import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteGoal, updateGoal } from '../features/goals/goalSlice';
import {toast} from 'react-toastify';
function GoalItem({ goal }) {
  const dispatch = useDispatch();

  const [text, setText] = useState(goal.text)
  const [update, setUpdate] = useState(false)

  const handleUpdate = () => {
    if (goal.text === text){
      toast.error('Goal not updated')
      return
    } 

    dispatch(updateGoal({ id: goal._id, text: text }));

    setUpdate(false);
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
          <button className='btn-update' onClick={handleUpdate}>
            Update Goal
          </button>
          <button className='btn-cancel' onClick={() => { setUpdate(false) }}>
            Cancel
          </button>
        </div>


      </section>}

      {!update && <div className='update-btn'>
        <button type='button' className='btn btn-primary' onClick={() => setUpdate(true)}>Update</button>
      </div>

      }
      <button className="close" onClick={() => dispatch(deleteGoal(goal._id))}>X</button>
    </div>
  )
}

export default GoalItem