# 🐛 Todo App – Bug Hunt Workshop

Welcome to the **Bug Hunt Workshop** 🎉  

This project contains a simple Todo App, but we have **planted 10 intentional bugs** in the code.  
Your challenge is to **find them, fix them, and learn** how even small mistakes can break functionality.  

👉 The app runs, but you’ll notice strange behaviours.  
👉 Each bug teaches you about **React, props, state, and logic**.  

---

## 🚀 Getting Started

Clone the repo and switch to the buggy branch:

```bash
git clone https://github.com/Shalok-sys/DSEC_TO_DO_APP.git
cd DSEC_TO_DO_APP/my-app
git checkout workshop-bugs
npm install
npm start
Open the app at http://localhost:3000.
You’ll see a Todo App that doesn’t quite work the way it should… 
```

# 🐛 The 10 Bugs
Below are all the bugs, their location, what you’ll see, and hints on how to solve them.

1. # Header styling typo
File: App.js → inside <header>

Symptom: The title “My Todo App” appears plain, no styling.

Hint: React uses className for styling in JSX. Check the spelling.

2. # Add button handler typo
File: App.js → inside TodoForm → Add button

Symptom: Clicking Add Task does nothing.

Hint: Compare the handler name in the button with the function actually defined above.

3. # Blank new todos
File: App.js → inside handleSubmit in TodoForm

Symptom: When you add a task, it appears but the text is empty.

Hint: Look closely at how the text is passed into onAdd(). Is it being sliced or trimmed incorrectly?

4. # Wrong prop name passed to form
File: App.js → where <TodoForm> is rendered inside <App>

Symptom: Adding tasks via Enter doesn’t work at all.

Hint: The parent passes one prop, but the child expects another. Make sure the names match.

5. # Delete wrong item
File: App.js → TodoItem → Delete button

Symptom: Clicking Delete sometimes removes the wrong todo.

Hint: Check what ID is being sent to the delete function. Is it the exact ID of the todo?

6. # Toggle always true
File: App.js → toggleTodo function

Symptom: You can check tasks off, but you can’t uncheck them.

Hint: Look at how the completed property is updated. Should it always be true?

7. # Filters all set to "all"
File: App.js → FilterButtons

Symptom: Clicking Active or Completed doesn’t change anything. You always see all tasks.

Hint: Check what value each button passes into onFilterChange. Are they different or all the same?

8. # Filters reversed
File: App.js → filteredTodos calculation

Symptom: Choosing Active shows completed tasks. Choosing Completed shows active tasks.

Hint: Look at the conditions for active vs completed. They seem swapped.

9. # Wrong counters
File: App.js → stats calculation (totalTodos, activeTodos, completedTodos)

Symptom: Counters always equal total todos, even if you complete or delete tasks.

Hint: Think: how do we normally calculate completed and active? Shouldn’t they depend on todo.completed?

10. # Fragile IDs
File: App.js → inside addTodo

Symptom: After deleting and adding tasks, toggling/deleting behaves weirdly because IDs repeat.

Hint: How are IDs being assigned? If they only depend on the array length, what happens when you delete and add again?

# 🛠️ Workshop Tips
Fix one bug at a time – after each fix, save and watch the browser reload.

Use the console – open DevTools (F12) and check for warnings/errors. They often point to the problem.

Think like a detective – if something looks wrong, trace which function or prop controls it.

Ask “What should it do?” vs “What does it do?” – then check the code in that area.

Celebrate small wins 🎉 – every bug fixed makes the app behave more like a real Todo app.

# 🎯 Goal
By the end of the workshop you’ll:

Understand how props, state, and events connect in React.

See how small mistakes (like a single letter typo) can break features.

Gain confidence in debugging real-world apps.