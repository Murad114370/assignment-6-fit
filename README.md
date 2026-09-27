# FitLog:

FitLog is a workout library and planning app built with Next.js. Browse a catalog of exercises, dive into details for each lift, and build a daily workout plan by adding exercises to "Today's Plan" or saving them for later.

## Technologies Used:

- **Next.js** (App Router) — routing, server components, dynamic pages
- **TypeScript** — type-safe components and data models
- **Tailwind CSS** — utility-first styling
- **React Context API** — global state for today's plan and saved list
- **react-toastify** — toast notifications for user actions

## Key Features:

1. **Workout Library** — Browse a grid of exercise cards, each showing muscle groups, equipment, duration, calories burned, and rating at a glance.
2. **Exercise Details Page** — Click any card to view a full breakdown: description, equipment, difficulty, sets, reps, duration, calories, rating, and step-by-step instructions.
3. **Today's Plan & Saved List** — Add exercises to today's plan or save them for later directly from the details page, with duplicate-add protection and toast confirmations.
4. **My Plan Dashboard** — A dedicated page summarizing total exercises, minutes, and calories for your active list, with tabs to switch between "Today's Plan" and "Saved," and the ability to mark exercises as done or remove them.
5. **Sortable Plan List** — Re-sort your current plan by Duration, Calories, or Rating using a dropdown, so you can prioritize your workout order on the fly.