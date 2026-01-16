import { useState } from "react"

function WorkoutStopwatchPage() {

  const [isPaused, setPause] = useState(false)

  return (
    <div className='workout-stopwatch-page'>

      <div className="row">
        <button className='button-action' onClick={() => alert("todo")}> ⬅️ Prev </button>
        <button className='button-action' onClick={() => alert("todo")}> ➡️ Next</button>
      </div>

      <div>
        <h2>work</h2>
        <h2>mm:ss</h2>
      </div>

      {!isPaused ? (
        <div className="row">
          <button className='button-action' onClick={() => alert("todo")}> 🔁 Redo</button>
          <button className='button-action' onClick={() => setPause(true)}> ⏸️ Pause</button>
        </div>
      ) : (
        <div className="row">
          <button className='button-action' onClick={() => alert("todo")}> ⏹️ Stop (Exit)</button>
          <button className='button-action' onClick={() => setPause(false)}> ▶️ Continue</button>
        </div>
      )}

    </div>
  )
}

export default WorkoutStopwatchPage