### 💻 Task 4 - Generate a component lib

###### ⏰ &nbsp;Estimated time: 10 minutes

Let's separate the header from the app! Because headers can be shared with other components, we will create a common lib that others can import as well.

## 📚 Learning outcomes:

- **Get familiar with generating project specific component libraries inside a folder**

#### 📲 After this workshop, you should have:

<details>
  <summary>App Screenshot</summary>
  <img src="../assets/lab4_screenshot.png" width="500" alt="screenshot of lab4 result">
</details>

## 🏋️‍♀️ Steps:

1. Stop the `nx serve`
<br />

2. Generate a new empty React library called `ui-shared` in the `libs/` folder.  When asked, choose the `@nx/rollup` executor to build the library.

   <details>
   <summary>🐳 &nbsp;&nbsp;Hint</summary>

   - it's a generator! you've used it before in the second task, but instead of an `app`, we now want to generate a `lib`
   - use the `--help` command to figure out how to generate it in a **directory** and that it doesn’t create default component

   </details><br />

3. Generate a new React component, called `header`, inside the lib you just created

   ⚠️&nbsp;&nbsp;Play around with the generator options so that the generated component is automatically **exported** from the lib's module

   <details><summary>🐳 &nbsp;&nbsp;Hint</summary>

   use `--help` to figure out how to specify under which **project** you want to generate the new component and how to automatically have it **exported** and skip the component generation

   </details><br />

4. Replace the `header` component's [code](../../examples/task4/libs/store/ui-shared/src/lib/header/header.tsx)
<br />

5. Let's use the new shared header component we created

   - Add your new component to `apps/game-store/src/app/app.tsx`

    <details>
    <summary>🐳 &nbsp;&nbsp;Hint</summary>

   ```typescript
   import { Header } from '@bg-hoard/store/ui-shared';
   ```

   ```html
   <Header title="Board Game Hoard" />
   ```

    </details>

<br />

6. Serve the project and test the changes
<br />

7. Run the command to inspect the dependency graph - What do you see? (Remember to "Select all" in the top left corner)
    <details>
    <summary>🐳 &nbsp;&nbsp;Hint</summary>

   ```bash
   nx dep-graph
   ```

    </details><br />

8. Inspect what changed from the last time you committed, then commit your changes
<br />


---

🎓&nbsp;&nbsp;If you get stuck, check out [the solution](SOLUTION.md)

---

[➡️ &nbsp;Next task ➡️](../task05/5-TASK.md)
