### 💻 Task 10 - Generate Storybook stories for the shared ui component

###### ⏰ &nbsp;Estimated time: 10-15 minutes

Let's explore some more Nx plugins by generating and running a storybook configuration for our shared store header.

## 📚 Learning outcomes:

- **Explore other Nx plugins to create a storybook configuration**

#### 📲 After this workshop, you should have:

<details>
  <summary>App Screenshot</summary>
  No change in how the app looks!
</details>

## 🏋️‍♀️ Steps:

1.  `yarn add @nx/storybook` or `npm i -S @nx/storybook`
    <br/>

2.  Use the `@nx/react:storybook-configuration` generator to generate a storybook configuration for the `store-ui-shared` project

    ⚠️&nbsp;&nbsp;Answer **YES** to all questions
    <br />

3.  Serve storybook!

    <details>
    <summary>🐳 &nbsp;&nbsp;Hint</summary>

    `nx storybook store-ui-shared`

    </details><br />

4.  Start typing in different titles and see how they appear in the header

        <img src="../assets/storybook.gif" width="300" alt="the header component running in storybook">

    <br/>

5.  Inspect what changed from the last time you committed, then commit your changes
    <br />

---

🎓&nbsp;&nbsp;If you get stuck, check out [the solution](SOLUTION.md)

---

[➡️ &nbsp;Next task ➡️](../task11/11-TASK.md)
