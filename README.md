# Phone-A-Friend

COMPONENTS:

Friend:
    - We don't see these being rendered yet. Work in progress?

LabeledText.jsx:
    - Not quite sure what this is for yet, we see that it is being rendered in Friend.jsx, but we don't see those friends rendered.

Overdue.jsx:
    - Lines 13 and 14 are performing some math that we have already taken care on the backend. 
        - All that we need you to pass in is the overdueFriend.name and the current month on line 22

Upcoming.jsx: 
    - Spelling: typo where upcoming is spelled like upcomming. Can we replace those? (lines 11, 20, 23)
    - Lines 13 and 14 are performing some math that we have already taken care on the backend. 
        - All that we need you to pass in is the upcomingFriend.name and the currentMonth on line 22



CONTAINERS:
    - We should add a third container for 'due'.
        - overdue container will have nextContact property < currentMonth in state
        - *NEW* due container will have nextContact property === currentMonth in state
        - upcoming container will have nextContact property === 1 + currentMonth in state

FriendContainer.jsx:

MainContainer.jsx:

OverdueContainer.jsx: 
    - Since we need to add a third container for entries on screen (Overdue, Due, and Upcoming)
        - We should import a new 'SetupDue' action creator from Reducer.js
        - Naming is a little bit confusing with SetUpComing and SetUpOverdue. Should it maybe be SetupUpcoming and SetupOverdue?
    - On lines 40/41, there are two very similar variables, overdueFriendlist and pastdueFriendlist. Can we semanticize?
    - handleClickReconnected parameter inconsistency:
        - The handleClickReconnected() method is currently declared (line 17) to accept two parameters
        - when it is called in Upcoming.jsx (line 23) it is invoked with 4 parameters
        - In the end, it should be invoked with 2 parameters, 'name' and 'currentMonth' representing the current month in state`

UpcomingContainer.jsx:
    - We import SetupUpcoming here, when we brought in both SetupUpcoming and SetupOverdue into OverdueContainer.jsx
    - Current path in PATCH request (on line 19) should be switched to /friend/reconnected
    - Spelling: typo where upcoming is spelled like upcomming. Can we replace those? (line 40)



REDUCERS:

Reducer.js:
    - Since we are adding a third container (Due, along with Overdue and Upcoming), create a third 'SetupDue' action creator

App.jsx:


index.js:
    - There is an extra index.js file in the root directory, this will probably be deleted?


server.js / index.html:
    - IMPORTANT NOTE! Finally got production server to work. Had to do two things:
        - Switch variable from string 'NODE_ENV' on line 16 to process.env.NODE_ENV
        - Had to include a script inside of HTML file to run the bundle on line 14