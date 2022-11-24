import axios from 'axios';

const API_URL = '/api/goals/'

const createGoal = async (goalData, token) => {
    console.log('Creat', goalData)
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, goalData, config);
    return response.data;
}

const getGoals = async (token) => {
    console.log('call get goals')
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL,config);
    return response.data;
}


const deleteGoal = async (goalID,token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL+goalID,config);
    return response.data;
}

const updateGoal = async (goalData,token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    // console.log(goalID)
    const response = await axios.put(API_URL+goalData.id,goalData,config);
    return response.data;
}

const goalService = {
    createGoal,
    getGoals,
    deleteGoal,
    updateGoal
}

export default goalService

