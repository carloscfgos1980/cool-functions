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






2. 
