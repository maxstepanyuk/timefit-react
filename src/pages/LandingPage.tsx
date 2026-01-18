import { Link } from "react-router-dom"

function Header() {
  return (
    <div className='header'>
      <h1>
        <img src='/vite.svg' alt="logo" />
        TimeFit
      </h1>
      <h2>timer for tabata, pomadoro and more</h2>
    </div>
  )
}

function LandingPage() {
  return (
    <div className="landing-page">
      <Header></Header>
      <Link to="/workouts">
        <button className='button-action'> 💪 get started</button>
      </Link>
    </div>
  )
}

export default LandingPage