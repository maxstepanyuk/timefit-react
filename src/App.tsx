// models
import type { WorkoutCardProps, WorkoutProps } from './models/workout'
// components
import LandingPage from './pages/LandingPage'
import WorkoutDetailsPage from './pages/WorkoutDetailPage'
import WorkoutsPage from './pages/WorkoutsPage'

let workouts: WorkoutCardProps[] = [
  { minutes: 10, seconds: 10, name: "workout 1" },
  { minutes: 3, seconds: 10, name: "arms" },
  { minutes: 8, seconds: 10, name: "legs" },
  { minutes: 30, seconds: 10, name: "core" },
]

let workout1: WorkoutProps = {
  name: 'Arms HIT',
  decription: 'test one',
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
  return (
    <>
      <LandingPage></LandingPage>
      <hr />
      <WorkoutsPage workouts={workouts}></WorkoutsPage>
      <hr />
      <WorkoutDetailsPage workout={workout1} ></WorkoutDetailsPage>
    </>
  )
}

export default App
