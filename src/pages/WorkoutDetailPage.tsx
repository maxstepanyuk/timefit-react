import { useState } from "react"
import type { editMode } from "../models/util"
import type { WorkoutDetailsPageProps, WorkoutProps, SetSectionProps, TimerSectionProps } from "../models/workout"

function TimerSection({ minutes = 0, seconds = 0, name = 'timer', isEditMode = false }: TimerSectionProps & editMode) {

  const [nameValue, setNameValue] = useState(name)
  const [minutesValue, setMinutesValue] = useState(minutes)
  const [secondsValue, setSecondsValue] = useState(seconds)

  function handleUpdSecondsValue(sec: number) {
    if (sec < 60 && sec >= 0) {
      setSecondsValue(sec)
    }
  }

  return (
    <div className='timer'>

      {isEditMode ? (<>

        <input
          type="text" name="name" id="name" placeholder="name"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
        />
        <div className="row min-sec-inputs">
          <input
            type="number" name="minutes" id="minutes" placeholder="minutes" min={0}
            value={minutesValue}
            onChange={(e) => setMinutesValue(Number(e.target.value))}
          />
          <p>:</p>
          <input
            type="number" name="seconds" id="seconds" placeholder="seconds" min={0} max={59}
            value={secondsValue}
            onChange={(e) => handleUpdSecondsValue(Number(e.target.value))}
          />
        </div>
        <button className="button-mini" onClick={() => alert("todo")}>delete timer</button>
      </>) : (<>
        <p>{name}</p>
        <p >{minutes}:{seconds}
        </p>
      </>)
      }

    </div>
  )
}

function SetSection({ repeat = 0, timers, isEditMode = false }: SetSectionProps & editMode) {

  const [timersData, setTimersData] = useState(timers)

  let timersHtml
  if (timersData && timersData.length > 0) {
    timersHtml = timersData.map(timer => <TimerSection minutes={timer.minutes} seconds={timer.seconds} name={timer.name} isEditMode={isEditMode}></TimerSection>)
  } else {
    timersHtml = "no timers"
  }

  const [repeatValue, setRepeatValue] = useState(repeat)

  function handleUpdRepeatValue(repeats: number) {
    if (repeats >= 0) {
      setRepeatValue(repeats)
    } else {
      setRepeatValue(0)
    }
  }

  const newTimer = { minutes: 0, seconds: 0, name: "" }
  function handleAddTimer() {
    let newTimers = [...timersData, newTimer]
    setTimersData(newTimers)
  }

  return (
    <div className='set-section'>
      <p>Sets: {repeatValue}</p>
      {isEditMode && (
        <div className="row">
          <button className="button-mini" onClick={() => handleUpdRepeatValue(repeatValue - 1)}>remove set rep</button>
          <button className="button-mini" onClick={() => alert("todo")}>delete set</button>
          <button className="button-mini" onClick={() => handleUpdRepeatValue(repeatValue + 1)}>add set rep</button>
        </div>
      )}
      <div className='timers'>
        {timersHtml}
      </div>
      {isEditMode && (
        <button className="button-mini" onClick={() => handleAddTimer()}>add timer</button>
      )}
    </div>
  )
}

function Workout({ name = "no name", description = "no description", sets, isEditMode = false }: WorkoutProps & editMode) {

  let setsHtml
  if (sets && sets.length > 0) {
    setsHtml = sets.map(set => <SetSection repeat={set.repeat} timers={set.timers} isEditMode={isEditMode} />)
  } else {
    setsHtml = "no sets"
  }

  const [nameValue, setNameValue] = useState(name)
  const [descriptionValue, setDescriptionValue] = useState(description)


  return (
    <div className='workout'>
      {isEditMode ? (<>
        <div className="row"></div>
        <input
          type="text" placeholder="name" className="text-center"
          value={nameValue} onChange={(e) => setNameValue(e.target.value)}
        />
        <br />
        <textarea
          placeholder="description"
          value={descriptionValue}
          onChange={(e) => setDescriptionValue(e.target.value)}
        ></textarea>
      </>) : (<>
        <h3>{name}</h3>
        <p>description: {description}</p>
      </>)}
      <div className='sets'>
        {setsHtml}
      </div>
    </div>
  )
}

function WorkoutDetailsPage({ workout, isEditMode = false }: WorkoutDetailsPageProps & editMode) {

  const [workoutData, setWorkoutData] = useState(workout)

  const newSet = {repeat: 1, timers: [{ minutes: 0, seconds: 0, name: "" },],}

  function handleAddSet() {
    let newWorkout: WorkoutProps = { ...workoutData }
    newWorkout.sets = [...newWorkout.sets, newSet]
    setWorkoutData(newWorkout)
  }

  return (
    <div className='your-timers-page'>
      <Workout name={workoutData.name} description={workoutData.description} sets={workoutData.sets} isEditMode={isEditMode} ></Workout>
      <div className="row">
        {isEditMode ? (<>
          <button className='button-action' onClick={() => alert("todo")}> 💾 save workout</button>
          <button className='button-action' onClick={() => handleAddSet()}> ➕ add set</button>
        </>) : (<>
          <a href="/todo">
            <button className='button-action' onClick={() => alert("todo")}> 🚪 back</button>
          </a>
          <a href="/todo">
            <button className='button-action' onClick={() => alert("todo")}> 💪 begin</button>
          </a>
        </>)
        }
      </div>
    </div>
  )
}

export default WorkoutDetailsPage