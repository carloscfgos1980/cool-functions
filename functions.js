1. Function to display log in or log out. This is in Reac. Check the following site for explanation.

https://scrimba.com/scrim/cewRpUQ?pl=p7P5Hd

this.state = {
            isLoggedIn: false
        }

     let wordDisplay
        if (this.state.isLoggedIn) {
            wordDisplay = "in"
        } else {
            wordDisplay = "out"
        }
        return (
            <div>
                <h1>You are currently logged {wordDisplay}</h1>
            </div>
        )
    }
}






2. Time of the day in React

https://scrimba.com/scrim/c6G36SV?pl=p7P5Hd

function App() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  
  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }
  
  return (
    <h1>Good {timeOfDay}!</h1>
  )
}
