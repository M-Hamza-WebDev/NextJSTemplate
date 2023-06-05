Fork the repository and follow the steps to complete the tasks

## Steps to follow for the interview project

You are expected to develop and deploy a demo of a Next.js admin dashboard with Javascript/TypeScript and Tailwind CSS. Include the features listed below in your project. 


1. Project Setup
- *Fork the repository to your github and clone the forked repository to your desktop*
- *Configure TypeScript support in the project. (DONE)*
- *Install and configure Tailwind CSS for styling. (DONE)*
  

2. Authentication and authorization:
- Implement a user authentication system using a library like NextAuth.js or JWT (JSON Web Tokens).
- *Define different user roles and permissions for accessing different parts of the admin dashboard. (OPTIONAL)*
- *Restrict access to certain routes or components based on user roles and permissions. (OPTIONAL)*

3. Routing and navigation:
- Set up a navigation system using Next.js routing.
- Create a navigation menu or sidebar to navigate between different sections of the admin dashboard. Two sample pages should be enough.
- Highlight the active page or section in the navigation menu.

4. State management with useState:
- Use the useState hook to manage local state within components.
- Identify areas where state is needed, such as toggling a sidebar, managing form inputs, or controlling UI elements.
- *Implement state variables and corresponding update functions using useState in the relevant components. (OPTIONAL)*
- Implement state management using useContext hook or redux-toolkit

5. Dashboard overview:
- Fetch and display relevant data from https://dummyjson.com/products .
- Design a dashboard overview page that displays key metrics (Average Rating of all the products), charts(count of products by category) and a table (table with columns title, description, price, category, brand, stock and thumbnail).
- Use data visualization libraries like Chart.js or React-Vis to present charts and graphs.

6. *Data management and CRUD operations (OPTIONAL):*
- *Create data management pages for entities such as sample users, products, orders, etc. (OPTIONAL)*
- *Implement CRUD (Create, Read, Update, Delete) functionality for these entities. (OPTIONAL)*
- *Use forms and input validation to ensure data integrity. (OPTIONAL)*
- Communicate with the backend API using libraries like Axios or Fetch.
  
7. UI components and styling:
- Build reusable UI components like tables, forms, modals, notifications, etc.
- Apply responsive design principles to ensure a consistent experience across different devices.
- Utilize Tailwind CSS utility classes and components for styling and layout.

8. Data filtering and searching:
- Implement filtering and searching functionality for data lists or tables (filter by category and brand).
- Allow users to apply filters based on specific criteria and search for specific records.
- Update the displayed data dynamically based on the applied filters or search query.

9. *Theme functionality (OPTIONAL):*
- *Implement a theme switcher that allows users to switch between light and dark themes. (OPTIONAL)*
- *Use the useState hook to manage the current theme state. (OPTIONAL)*
- *Apply different CSS classes or styles based on the selected theme. (OPTIONAL)*
- *Persist the theme preference in local storage or cookies for a consistent theme across sessions. (OPTION*AL)

10.   Deployment and optimization:
- Deploy the admin dashboard application to a hosting platform like Vercel.
- *Optimize the application for performance, including code splitting, lazy loading, and caching. (OPTIONAL)*
- *Implement server-side rendering (SSR) or static site generation (SSG) for improved initial loading speed. (OPTIONAL)*

11.   Expected Best Practices
- Adhere to es6/es7 coding standards and best practices throughout the project.
- Write clean and readable code, following proper indentation and formatting conventions.
- Use meaningful variable and function names that accurately describe their purpose.
- Follow a consistent and descriptive format for your Git commit messages.
- Document any external dependencies, libraries, or APIs used in your project, including their purpose and usage.

Share the link of the deployed project and the forked github repository with the HR rep. You are allowed to use this project as one of your personal portfolio projects.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

