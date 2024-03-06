# Getting Started with Marketplace Frontend

To run the project, simply run the following commands:

```
npm install
npm run dev
```

## Structure

- app : routes
  - api : API call functions
- styles : custom files for CSS purposes
- components : for larger components
- utils : utilities such as `formated-address`, `formated-date`...

### Best Practices for TypeScript, React, and Tailwind

#### TypeScript:

1. Define interfaces for complex objects to improve type checking and readability.
2. Use `readonly` keyword for properties that should not be modified after initialization.

#### React:

1. Break down components into smaller, reusable pieces or use [Shadcn](https://ui.shadcn.com/) components
2. Use functional components with hooks instead of class components
3. Custom hooks can be used to share logic between components from `hooks` folder
4. Keep component logic and rendering separate.

#### Tailwind:

1. Use the @apply directive to keep utility classes DRY.
2. Create reusable components for frequently-used patterns.
3. Configure your Tailwind config file to match your project's design system.

### Adding a New Component

- Each specific component must go into `/components` directory
- Each generic component (as header, footer) must go into `/components/shared` directory
- To create a component `card`, assume the following structure:

```
components
  card.tsx
```

You can do the exact same thing for shared components:

```
components
   shared
      header.tsx
```

## Warning: Components are for views and should contain **JSX ONLY**

- **Using a state inside is acceptable ONLY IF this state doesn't rely on a higher props.**
- Do not make asynchronous calls within a component instead make calls in context or inside a page route.
- Do not handle job logic inside a component.
- Create a controller to use in the route.

### Default Export vs. Named Export

To maintain consistency in naming, always use named exports:

```js
// ✅ good
const CollectionCard = () => {};

// ⛔ bad
export default () => {};
```

## Typing with TypeScript

- Each component needs an interface called Props (not IProps)
- Don't hesitate (do it in fact) to comment your code to explain what you are doing and where to find **the documentation **

## Styling with Tailwind

Use a linter to improve the readability of classes and detect errors. Don't hesitate to run `npm run lint` as needed.

### Custom Tailwind Config

- Add your new color to the `colors` entry of `tailwind.config.js`
- Do the same for background, custom shadow, animation, and keyframes so your changes can be used throughout the project
