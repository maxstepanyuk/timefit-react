// models
import type { WorkoutCardProps } from './models/workout'
// components
import LandingPage from './pages/LandingPage'
import WorkoutsPage from './pages/WorkoutsPage'

let workouts: WorkoutCardProps[] = [
  { minutes: 10, seconds: 10, name: "workout 1" },
  { minutes: 3, seconds: 10, name: "arms" },
  { minutes: 8, seconds: 10, name: "legs" },
  { minutes: 30, seconds: 10, name: "core" },
]


function App() {
  return (
    <>
      <LandingPage></LandingPage>
      <hr />
      <WorkoutsPage workouts={workouts}></WorkoutsPage>
      <hr />
    </>
  )
}

export default App
