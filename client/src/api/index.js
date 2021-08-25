import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:3000'});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const getPrograms = () => API.get(`http://localhost:3000/api/program/all`);
export const getProgramsByUser = (userId) => API.get(`http://localhost:3000/api/program/user/${userId}`);
export const createProgram = (program) => API.post(`http://localhost:3000/api/program/create`, program);
export const deleteProgram = (programId) => API.delete(`http://localhost:3000/api/program/${programId}`);
export const updateProgram = (programId, program) => API.patch(`http://localhost:3000/api/program/${programId}`, program);

export const getExercises = (programId) => API.get(`http://localhost:3000/api/exercise/${programId}`);
export const createExercise = (exercise) => API.post(`http://localhost:3000/api/exercise/create`, exercise);
export const deleteExercise = (exerciseId) => API.delete(`http://localhost:3000/api/exercise/${exerciseId}`);
export const updateExercise = (exerciseId, exercise) => API.patch(`http://localhost:3000/api/exercise/${exerciseId}`, exercise);

export const signIn = (formData) => API.post(`http://localhost:3000/api/user/signin`, formData);
export const signUp = (formData) => API.post(`http://localhost:3000/api/user/signup`, formData);