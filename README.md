# 🎵 TriNaad (Swar-Sargam)

## AI-Powered Emotion-Aware Music Recommendation Platform

**TriNaad** is an AI-powered music recommendation platform that uses real-time facial analysis to identify a user's emotional state and deliver personalized music recommendations accordingly.

Built with **Google MediaPipe, TensorFlow.js, MERN Stack (MongoDB, Express, React, Node.js), and Redis Cloud**, the platform combines AI-based emotion detection with a modern full-stack architecture to create an interactive and personalized music experience.

---

## ✨ Key Features

* 🎭 **Real-Time Emotion Detection** — Analyze facial expressions in real-time using Google MediaPipe Vision tasks & TensorFlow.js.
* 🎵 **Mood-Based Recommendations** — Recommend songs according to the detected emotional state (Happy, Sad, Surprised).
* 🔐 **JWT Authentication** — Secure user authentication and cookie-based session authorization.
* ⚡ **Redis Token Blacklisting** — Instant logout security with `ioredis` JWT session invalidation.
* 👨‍💼 **Admin Dashboard & Management** — Interface for content management and song recommendation controls.
* 🎨 **Interactive UI / UX** — Modern aesthetic featuring Framer Motion micro-animations, Lucide React icons, and fluid scan visualizers.
* 📱 **Responsive Layout** — Fully responsive interface optimized across mobile, tablet, and desktop devices.

---

## 🧠 Supported Emotions

TriNaad currently recognizes three primary emotional states:

| Emotion      | Recommendation             |
| ------------ | -------------------------- |
| 😊 Happy     | Energetic and upbeat music |
| 😢 Sad       | Calm and soothing music    |
| 😲 Surprised | Dynamic and engaging music |

The detected emotion is used to dynamically generate relevant music recommendations.

---

## 🏗️ System Architecture

```text
                    ┌─────────────────────┐
                    │       User          │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React + Vite UI   │
                    └──────────┬──────────┘
                               │
                  ┌────────────┴────────────┐
                  │                         │
                  ▼                         ▼
        ┌──────────────────┐      ┌──────────────────┐
        │ Google MediaPipe │      │   Music Player   │
        │ Emotion Analysis │      │ & Recommendations│
        └────────┬─────────┘      └────────┬─────────┘
                 │                         │
                 └────────────┬────────────┘
                              ▼
                    ┌─────────────────────┐
                    │ Node.js + Express   │
                    │      Backend        │
                    └──────────┬──────────┘
                               │
              ┌────────────────┴────────────────┐
              ▼                                 ▼
       ┌─────────────┐                   ┌─────────────┐
       │  MongoDB    │                   │    Redis    │
       │   Atlas     │                   │    Cloud    │
       └─────────────┘                   └─────────────┘
```

---

## ⚡ Technology Stack

### Frontend
* **React 19** & **Vite 8**
* **React Router DOM 7**
* **Framer Motion 13** — Smooth page transitions & micro-interactions
* **Lucide React** — Icon collection
* **React Webcam** — Real-time camera feed capture

### Backend
* **Node.js** & **Express 5**
* **JSON Web Tokens (JWT)** & **Cookie-Parser**
* **Bcryptjs** — Password hashing
* **Mongoose 9** — MongoDB ODM

### Database & Caching
* **MongoDB Atlas** — Application data persistence
* **Redis Cloud (ioredis)** — High-performance token blacklisting & cache

### AI / Computer Vision
* **Google MediaPipe Vision** (`@mediapipe/tasks-vision`, `@mediapipe/face_mesh`)
* **TensorFlow.js** (`@tensorflow/tfjs-core`, `@tensorflow/tfjs-backend-webgl`)

---

## 📁 Project Structure

```text
Swar-Sargam/ (TriNaad)
│
├── Frontend/
│   ├── src/
│   │   ├── assets/              # Images, hero banners & static media
│   │   ├── features/            # Authentication & Emotion scanner components
│   │   │   ├── CustomCursor.jsx
│   │   │   ├── FaceScannerModal.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── RegistrationPage.jsx
│   │   │   └── expression/
│   │   │       └── components/
│   │   │           └── FaceExpression.jsx
│   │   ├── App.jsx              # Main Layout & Application routing
│   │   ├── App.css
│   │   ├── index.css            # Tailored styling system
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── Backend/
│   ├── config/                  # Database & Redis configurations
│   │   ├── cache.Config.js
│   │   └── dataBase.Config.js
│   ├── controller/              # Auth & Business logic controllers
│   │   └── auth.controller.js
│   ├── middleware/              # JWT & Blacklist protection middleware
│   │   └── auth.middleware.js
│   ├── module/                  # Mongoose models / schemas
│   │   ├── audio.module.js
│   │   ├── blackListing.module.js
│   │   └── user.module.js
│   ├── routes/                  # API endpoints definition
│   │   └── auth.routes.js
│   ├── src/
│   │   └── app.js               # Express application initialization
│   ├── server.js                # Server entry point
│   └── package.json
│
└── README.md
```

---

## 🔐 API Endpoints & Security

### Authentication Endpoints (`/api/auth`)

| Method | Endpoint | Description | Auth Required |
| ------ | -------- | ----------- | ------------- |
| `POST` | `/api/auth/register` | Register a new user & issue JWT | No |
| `POST` | `/api/auth/login` | Authenticate user & set JWT cookie | No |
| `GET` | `/api/auth/get-me` | Fetch authenticated user profile | Yes (`Cookie`) |
| `POST` | `/api/auth/logout` | Logout user & blacklist JWT token in Redis | Yes (`Cookie`) |

### Token Blacklisting Mechanism
TriNaad uses **Redis Cloud** to manage token invalidation. On logout, the token is stored in Redis. Subsequent requests with a blacklisted token are intercepted and rejected by `auth.middleware.js` before reaching any protected controller.

---

## 🚀 Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/ByteMaster-Purvesh/Swar-Sargam.git
cd Swar-Sargam
```

### 2. Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file inside the `Backend` directory:

```env
PORT=8080
DATABASE_URI=your_mongodb_atlas_connection_string
DATABASE_NAME=your_database_name
JWT_SECRET_TOKEN=your_jwt_secret_key

REDIS_HOST=your_redis_host
REDIS_PORT=your_redis_port
REDIS_PASSWORD=your_redis_password
```

Start the backend development server:

```bash
npm run dev
```

### 3. Frontend Setup

In a new terminal window:

```bash
cd Frontend
npm install
npm run dev
```

The application frontend will run at:

```text
http://localhost:5173
```

---

## 📈 Engineering Highlights

TriNaad demonstrates:

* 🤖 Integration of **AI / Computer Vision** into web applications for real-time expression detection.
* 🎭 Dynamic emotion-to-audio recommendation mapping.
* ⚛️ Modern React architecture featuring context, custom hooks, and Framer Motion visualizer states.
* 🔧 Clean separation of concerns in Express backend (Config, Controller, Middleware, Models, Routes).
* 🔐 Secure authentication using **JWT** and **Redis Cloud token blacklisting**.

---

## 👨‍💻 Author

### Purvesh Somwanshi

Full Stack Developer focused on building scalable, AI-powered web applications.

* **GitHub:** [ByteMaster-Purvesh](https://github.com/ByteMaster-Purvesh)

---

## ⭐ Support

If you find **TriNaad** interesting or useful, consider starring the repository and exploring the project.

**TriNaad — Turning emotions into music. 🎵**
