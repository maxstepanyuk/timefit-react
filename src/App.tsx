import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// models
import type { WorkoutCardProps, WorkoutProps } from './models/workout'
// components
import LandingPage from './pages/LandingPage'
import WorkoutDetailsPage from './pages/WorkoutDetailPage'
import WorkoutsPage from './pages/WorkoutsPage'
import WorkoutStopwatchPage from './pages/WorkoutStopwatchPage'

let workouts: WorkoutCardProps[] = [
  { minutes: 10, seconds: 10, name: "workout 1" },
  { minutes: 3, seconds: 10, name: "arms" },
  { minutes: 8, seconds: 10, name: "legs" },
  { minutes: 30, seconds: 10, name: "core" },
]

let testWorkout: WorkoutCardProps = { minutes: 10, seconds: 10, name: "new" }

let workout1: WorkoutProps = {
  name: 'Arms HIT',
  description: 'test one',
  sets: [
    {
      repeat: 1,
      timers: [
        { minutes: 0, seconds: 10, name: "prepare" },
      ],
    },
    {
      repeat: 3,
      timers: [
        { minutes: 5, seconds: 10, name: "work" },
        { minutes: 1, seconds: 10, name: "rest" },
      ],
    },
    {
      repeat: 1,
      timers: [
        { minutes: 0, seconds: 10, name: "end" },
      ],
    },
    {
      repeat: 1,
      timers: [
      ],
    }
  ]
}


function App() {

  const [workoutsState, setWorkoutsState] = useState(workouts)
  const [editMode, setEditMode] = useState(false)

  function addWorkout() { setWorkoutsState(workoutsState => [...workoutsState, testWorkout]) }

  return (
    <>
      {/* <button onClick={() => setEditMode(!editMode)}>edit mode {editMode ? 'on' : 'off'}</button> */}
      {/* <button onClick={() => addWorkout()}>add workout</button> */}

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<LandingPage />} />

          <Route path="/workouts" element={<WorkoutsPage workouts={workoutsState} />} />

          <Route path="/workout" element={<WorkoutDetailsPage workout={workout1} isEditMode={true} />} />
          <Route path="/workout/:id" element={<WorkoutDetailsPage workout={workout1} isEditMode={false} />} />
          <Route path="/workout/:id/edit" element={<WorkoutDetailsPage workout={workout1} isEditMode={true} />} />

          <Route path="/workout/:id/stopwatch" element={<WorkoutStopwatchPage />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
