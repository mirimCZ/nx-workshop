### 💻 Task 6 - Generate a route lib

###### ⏰ &nbsp;Estimated time: 15-25 minutes

We'll look at more advanced usages of the `@nx/react` generators and generate a new route lib for our store application. We'll see how Nx takes care of most of the work, and we just have to do the wiring up!

## 📚 Learning outcomes:

- **Get familiar with more advanced usages of Nx generators to create a React route lib**

#### 📲 After this workshop, you should have:

<details>
  <summary>App Screenshot</summary>
  <img src="../assets/lab6_screenshot.png" width="500" alt="screenshot of lab6 result">
</details>

## 🏋️‍♀️ Steps:

1. Stop `nx serve`
   <br />

2. Use the `@nx/react:lib` generator to generate a new routing library called `feature-game-detail` that:

   - lives under `libs/store`
   - its parent routing app is `store`

   ⚠️&nbsp;&nbsp;**Use `--help`** with the above generator to figure out which options you need to use to enable **all** the above (See the solution if still unsure)
   <br />

3. Change the routing path in `apps/store/src/app/app.tsx` to pick up the game ID from the URL

    <details>
    <summary>🐳 &nbsp;&nbsp;Hint</summary>

   ```ts
   // replace routes block with
   <Routes>
     <Route path="/game/:id" element={<StoreFeatureGameDetail />} />;
   </Routes>
   ```

    </details><br />

4. Populate your new component with the provided files: `store-feature-game-detail.`[tsx](../../examples/task6/libs/store/feature-game-detail/src/lib/store-feature-game-detail/store-feature-game-detail.tsx) / [scss](../../examples/task6/libs/store/feature-game-detail/src/lib/store-feature-game-detail/store-feature-game-detail.module.scss)
   <br />

5. Make clicking on each card in the `apps/store/src/app/app.tsx` route to the `game/:id` with the game's ID:

   <details>
   <summary>🐳 &nbsp;&nbsp;Hint</summary>

   ```tss
     // add a Link around the card element
     <Link to={`/game/${x.id}`} key={x.id}>
      <Card ...>
     </Link>
   ```

    </details><br />

6. Serve your app again, click on some games, and compare with this screenshot:

   <img src="../assets/lab6_screenshot.png" width="500" alt="screenshot of lab6 result"><br />

7. Launch the dependency graph and see what's been added
   <br />

8. Inspect what changed from the last time you committed, then commit your changes
   <br />

---

The result is still pretty simple though. Our route just displays the ID of the selected game in a card. It would be great if we had some API to get the full game from that ID!

---

🎓&nbsp;&nbsp;If you get stuck, check out [the solution](SOLUTION.md)

---

[➡️ &nbsp;Next task ➡️](../task07/7-TASK.md)
