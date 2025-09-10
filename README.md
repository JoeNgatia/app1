# app1
# React JSON-Based Login/Register App

A **simple React application** demonstrating a **login, registration, and forgot password system** using **JSON data** for storage. Built with **Tailwind CSS** for modern styling and responsive design.

---

## **Features**

* **User Registration**: Create an account with username, email, and password.
* **User Login**: Sign in with username and password.
* **Forgot Password**: Retrieve password using username or email.
* **Social Login Buttons** (Google/Facebook) – simulated for demo purposes.
* **Toggle between Login/Register forms**.
* **Dashboard**: Simple welcome screen after login.
* **Centered, responsive design** using Tailwind CSS.
* **In-memory JSON storage** (users.json) for demo.

---

## **File Structure**

```
src/
├─ components/
│  ├─ Register.jsx
│  ├─ Login.jsx
│  ├─ ForgotPassword.jsx
│  └─ Dashboard.jsx
├─ data/
│  └─ users.json
├─ App.jsx
└─ index.js
```

---

## **Installation**

1. **Clone the repo**:

```bash
git clone <your-repo-url>
cd <your-repo-folder>
```

2. **Install dependencies**:

```bash
npm install
```

3. **Run the app**:

```bash
npm start
```

---

## **Usage**

1. Open the app in your browser (`http://localhost:3000`).
2. Register a new user or login with an existing user from `users.json`.
3. Click **Forgot Password?** to retrieve your password using your username or email.
4. After login, view the **dashboard** and logout when done.

---

## **Example users in `users.json`**

```json
[
  {
    "id": 1,
    "username": "jdoe",
    "email": "jdoe@example.com",
    "password": "123456"
  },
  {
    "id": 2,
    "username": "alice",
    "email": "alice@example.com",
    "password": "alice123"
  },
  {
    "id": 3,
    "username": "bob",
    "email": "bob@example.com",
    "password": "bobpass"
  }
]
```

---

## **Technologies Used**

* **React.js** – Frontend framework.
* **Tailwind CSS** – Styling and responsive layout.
* **JSON** – In-memory data storage for demo purposes.
* **JavaScript** – Application logic.

---

## **Notes**

* This is a **demo application**; passwords are stored in **plain text**.
* For production apps, use a **backend API** and **hash passwords**.
* Social login buttons are **non-functional placeholders** for demo UI.

---

## **License**

This project is **open source** and free to use.

