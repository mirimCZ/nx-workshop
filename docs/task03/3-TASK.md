### 💻 Lab 3 - Executors

###### ⏰ &nbsp;Estimated time: 5 minutes

We'll build the app we just imported, and look at what executors are and how to customize them.

## 📚 Learning outcomes:

- **Understand what a `target` and `executor` are**
- **Invoking executors**
- **Configure executors by passing them different options**
- **Understand how an executor can invoke another executor**

#### 📲 After this workshop, you should have:

<details>
  <summary>App Screenshot</summary>
  <img src="../assets/lab3_screenshot.png" width="500" alt="screenshot of lab3 result">
</details>

## 🏋️‍♀️ Steps:x

1. Build the app

   <details>
   <summary>🐳 &nbsp;&nbsp;Hint</summary>
   <img src="../assets/lab3_build_cmds.png" alt="Nx executor command structure">
   </details><br />

2. You should now have a `dist` folder - let's open it up!

   - This is your whole app's output! If we wanted we could push this now to a server and it would all work.
   - Open one of the files, for example `main.js` and look at it's contents
     <br />

3. **Open up `apps/game-store/project.json`** and look at the object under `targets/build`

   - this is the **target**, and it has an **executor** option, that points to `@nx/vite:build`
     <br />

4. Send a flag to the executor so that it builds for production

   <details>
   <summary>🐳 &nbsp;&nbsp;Hint</summary>

   `--configuration=production`

   </details><br />

5. Open up the `dist` folder again - notice how we now generated a `3rdpartylicenses.txt` file, as per the "production" configuration in `project.json`. Also notice how all filenames have hashed suffixes. Open one of the files, for example `main.{hash}.js`. Notice how its content is now different.
   <br />

6. The **serve** target (located a bit lower in `project.json`) also contains a executor, that _uses_ the output from the **build** target
   <br />

---

🎓&nbsp;&nbsp;If you get stuck, check out [the solution](SOLUTION.md)

---

[➡️ &nbsp;Next task ➡️](../task4/4-TASK.md)