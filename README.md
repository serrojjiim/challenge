Hi!  
This is my solution for the technical challenge.

I used Angular 18 because it is my main framework and I wanted to show how I usually
work with modern Angular and Standalone Components.

---

## Live Demo

https://roaring-jelly-885999.netlify.app/

---

## Tech Stack

- Angular 18 (Standalone Components)
- TypeScript
- RxJS
- SCSS

No external UI libraries were used (like Bootstrap), as requested in the challenge.

---

## Technical Decisions

### Why Standalone Components?
I chose this approach because it is the current standard in Angular.
For me, it makes the project easier to understand and I don't need to manage
the `AppModule` file anymore.

### Search Bar
For the search input, I used `ReactiveFormsModule`.
I added a `debounceTime(300)` with RxJS. This is important for performance,
because it waits until the user stops typing before calling the API.
This way, we avoid making too many requests.

### Sorting
The API supports filtering, but not sorting.
Because of that, I implemented the sort logic (A–Z) on the frontend
using the JavaScript `sort()` method with the current results.

---

## Possible Improvements

If I had more time, I would add:
- Pagination (right now it only loads page 1).
- A better UI for error states (for example, if the API is not available).
- Unit tests for the components and services.
- More filters, like status or gender.

---

## Additional Questions

### 1. What are Custom Hooks in React?
Angular is my main framework, so I will keep this short.
Custom Hooks in React are used to share logic between components.
In Angular, we usually solve the same problem using Services.

---

### 2. What advantages does using TypeScript offer in a Frontend project?
For me, the main advantage is safety.
TypeScript helps me find errors while writing the code, not later in the browser.
It also makes refactoring easier, because the IDE shows exactly what needs to be fixed.

One challenge is adding TypeScript to an old JavaScript project.
There can be many errors at the beginning, and it requires time and discipline
to fix them properly without abusing `any`.

---

### 3. How would you approach implementing testing in a Frontend application?
I don't think 100% test coverage is always necessary.
I prefer to focus on the most important parts:

- **Unit tests** for services and business logic.
- **E2E tests** for the main user flows, like opening the character detail page.

This way, we keep a good balance between quality and development time.

---

### 4. How would you work with a team distributed across different time zones?
I try to work in an async way as much as possible, writing clear tickets and documentation so other team members can continue the work without problems. I also think it is useful to define some core hours where the team overlaps, to discuss important topics or unblock issues. When possible, I like to add screenshots or short videos to give more context and avoid misunderstandings.

---

### 5. How would you handle a disagreement about a technical solution?
First, I listen to understand the other person's point of view.
Then, I explain my concerns using technical reasons.

If we still disagree, I would suggest creating a small PoC.
Once a decision is made by the team, I fully support it.

---

## Author

**Sergio Rojas Jimenez**  
