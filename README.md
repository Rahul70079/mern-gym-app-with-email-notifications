# 🏋️‍♂️ FitClub - Gym Management System

A full-stack Gym Management Web Application built using the MERN stack with secure authentication and email notification functionality.

---

## 📸 Screenshots
<img width="1886" height="871" alt="Screenshot 2026-03-23 151337" src="https://github.com/user-attachments/assets/3362eedf-d03f-4b1b-bc4c-9fe22e600e2b" />
<img width="1182" height="855" alt="Screenshot 2026-03-23 151644" src="https://github.com/user-attachments/assets/c5bed014-13e8-47b6-bf45-c9201d5392ed" />
<img width="961" height="782" alt="Screenshot 2026-03-23 151745" src="https://github.com/user-attachments/assets/8e85e94f-b70d-4053-8ddc-7e999f2c231b" />
<img width="1888" height="861" alt="Screenshot 2026-03-23 151836" src="https://github.com/user-attachments/assets/a528a333-5f94-4f0b-b56e-2e44de3144e6" />
<img width="1876" height="867" alt="Screenshot 2026-03-23 151927" src="https://github.com/user-attachments/assets/046e60a8-7379-45b3-8edb-928fbf87d525" />
<img width="1861" height="864" alt="Screenshot 2026-03-23 174945" src="https://github.com/user-attachments/assets/ed7089c3-54aa-406e-852a-0b2526c347f7" />
<img width="1872" height="863" alt="Screenshot 2026-03-23 175154" src="https://github.com/user-attachments/assets/0a3f887f-66e6-4e8e-bd14-02b82dba761b" />
<img width="1877" height="866" alt="Screenshot 2026-03-23 175231" src="https://github.com/user-attachments/assets/bea46136-ca41-4fe6-86f6-cfb45ff4e7ea" />
<img width="1501" height="590" alt="Screenshot 2026-03-23 175618" src="https://github.com/user-attachments/assets/86ff96cd-a19b-4cc8-80d1-1042d9d58aa6" />










## 🚀 Features

* 🔐 User Authentication (JWT secure login/signup)
* 🏋️ Membership Management System
* 📧 Email Notifications using Nodemailer
* 👤 User Dashboard
* 📊 Admin Panel (optional if added)
* 💾 MongoDB Database Integration
* ⚡ Responsive UI using React

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Authentication:** JWT (JSON Web Token)
* **Email Service:** Nodemailer

---

## 📂 Project Structure

│
├── backend/
│   ├── config/          # DB config, env setup
│   ├── controllers/     # Business logic
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API routes
│   ├── middleware/      # Auth middleware (JWT)
│   ├── utils/           # Email, helpers
│   ├── app.js
│   ├── .env
│   ├── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/    # API calls
│   │   ├── context/     # Auth/global state
│   │   ├── App.jsx
│   │   ├── main.jsx
│   ├── index.html
│   ├── package.json
│

---

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Rahul70079/fitclub-gym-management-system.git
```

### 2️⃣ Install dependencies

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install

```

### 3️⃣ Run the application

```bash
# Start backend
cd frontend
npm run dev

# Start frontend
cd backend
npm run dev
```

---

## 📧 Email Functionality

* Sends automated emails for:

  * User Registration
  * Membership Confirmation
* Implemented using **Nodemailer**

---

## 🔒 Authentication

* Secure login/signup using JWT
* Protected routes for authorized users

---

## 📸 Screenshots

(Add your project screenshots here)

---

## 🙌 Contribution

Feel free to fork this repository and contribute.

---

## 📬 Contact

For any queries or collaboration:

* Email: [rahulcse169@gmail.com](mailto:your-email@example.com)
* LinkedIn: https://www.linkedin.com/in/rahul-kumar7079/

---

⭐ If you like this project, don't forget to star the repo!
