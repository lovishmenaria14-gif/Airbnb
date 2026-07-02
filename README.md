# 🏡 Airbnb Clone

A full-stack Airbnb-inspired web application built using the MERN stack. Users can sign up, log in, explore property listings, and manage their accounts.

## 🚀 Live Demo

- **Frontend:** https://airbnb-vlbv.vercel.app/
- **Backend API:** https://airbnb-1-s2he.onrender.com

---

## ✨ Features

- 🔐 User Authentication (Signup/Login)
- 🍪 JWT Authentication with HTTP-only Cookies
- 🏠 Browse Property Listings
- 🔍 Search and Filter Listings
- 📱 Fully Responsive UI
- ☁️ Image Upload Support using Cloudinary
- 🚀 Deployed on Vercel and Render

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Cookie Parser
- Multer
- Cloudinary

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## 📂 Project Structure

```bash
Airbnb/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── model/
│   ├── routes/
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

### Frontend `.env`

```env
VITE_SERVER_URL=https://airbnb-1-s2he.onrender.com
```

---

## 🖥️ Installation & Setup

### Clone the Repository

```bash
git clone https://github.com/lovishmenaria14-gif/Airbnb.git
cd Airbnb
```

---

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```bash
http://localhost:8000
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## 🔑 API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/api/auth/signup` | Register User |
| POST | `/api/auth/login` | Login User |
| POST | `/api/auth/logout` | Logout User |
| GET | `/api/auth/me` | Get Current User |

---

## 📦 Deployment

### Frontend
Deployed on **Vercel**

### Backend
Deployed on **Render**

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to the branch

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

## 👨‍💻 Author

**Lovish Menaria**

- GitHub: https://github.com/lovishmenaria14-gif

---

## ⭐ Show your support

If you like this project, please give it a ⭐ on GitHub!
