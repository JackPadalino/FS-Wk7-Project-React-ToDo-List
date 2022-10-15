### Week 7 HW
- Create a Todo List React App that has the following:
    - SingleTodo.jsx:
        - Represents a single Todo item
        - Has the prop todoName which is a string representing the name of the task
        - Renders a div element with the name of the todo item in it
        EXTRA CREDIT 1: TODOS COMPLETED ON CLICK
            - If completed, that todo items name is crossed out
            - Has the state completed which is a boolean representing completion
            - On click, toggles whether or not that todo item is completed
    - App.jsx:
        - Renders a header with “Todo List” in it
        - Has the state todos which is an array of todo items
        - Maps over the todos array, rendering a <SingleTodo /> element for each
    - EXTRA CREDIT 2: Filter.jsx
        - Has three buttons, “All”, “Active”, and “Completed”
        - Clicking one of the three buttons will filter away any todos with a status that doesn’t match the filter
        i.e. “All” shows everything, “Active” only shows incomplete, “Completed” only shows complete
        - Note: You may need to add state to other parts of the app to get this to work - think about how data flows through the app