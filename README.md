# User Management UI

This project is a **User Management System** built using **React + Vite**, providing an efficient and intuitive interface for managing users. It includes features like listing users, searching, pagination, editing, and deleting users, all with a smooth user experience.

## Features

-  **User List** – Displays a paginated list of users.
-  **Search Functionality** – Filter users based on their name or email.
-  **Edit Users** – Modify user details via a modal.
-  **Delete Users** – Remove users with a confirmation.
-  **User Stats** – Overview of total users and pages.
-  **Success/Error Messages** – Provides feedback for user actions.
-  **Authentication Check** – Redirects unauthorized users.

## Tech Stack

- **Frontend:** React, Tailwind CSS, Material UI
- **HTTP Requests:** Axios
- **State Management:** React Hooks (useState, useEffect)
- **Routing:** React Router

## Installation & Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/Amrutha-avidi/employWise_assignment
   
2. Install dependencies:
    ```sh
    npm install
3. Create a .env file and add:

    ```sh
    VITE_BASE_URL=https://reqres.in
4. Start the development server:
    ```sh
    npm run dev

## Folder Structure
    ``sh
    src/
    │── components/
    │   ├── UserCard.jsx
    │   ├── EditUserModal.jsx
    │   ├── Pagination.jsx
    │   ├── SearchBar.jsx
    │   ├── Stats.jsx
    │── pages/
    │   ├── UsersList.jsx
    │── App.jsx
    │── main.jsx

## API Endpoints

-  **GET** /api/users?page={number} –  Fetch users with pagination.
-  **PUT** /api/users/{id} – Update user details.
-  **DELETE** /api/users/{id} –  Remove a user.

## Deployment
    ```sh
    npm run build



