import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import GaolForm from '../components/GoalForm';
import Spinner from '../components/Spinner';
import { getGoals, reset } from '../features/goals/goalSlice';
import GoalItem from '../components/GoalItem';
function Dashboard() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector((state) => state.goal)

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    if (!user) {
      navigate('/login')
    }

    dispatch(getGoals())

    return () => {
      dispatch(reset())
    }

  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  // console.log(goals)
  // console.log(process.env.REACT_APP_API_URL+'/api/goals')
  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>
      <GaolForm />
      <section className="content">
        {goals.length > 0 ? (<div className="goals">
          {goals?.map((goal, i) => (
            <GoalItem key={goal._id} goal={goal}/>
          ))}
        </div>) : (<h3>You have not set goals</h3>)}
      </section>

    </>
  )
}

export default Dashboard