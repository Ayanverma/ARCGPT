# 🤖 ARCGPT

ARCGPT is a full-stack AI chatbot built using the MERN stack and Google's Gemini API. It provides real-time AI conversations with persistent chat history stored in MongoDB.

## 🚀 Features

- 💬 AI-powered conversations using Google Gemini
- 🧠 Persistent chat history with MongoDB
- 📝 Multiple conversation threads
- ⚡ Fast React frontend
- 🎨 Markdown support with syntax highlighting
- 🔄 Real-time responses
- 📱 Responsive UI

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Axios
- React Markdown
- Highlight.js
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Google Gemini API

---

## 📂 Project Structure

```
ARCGPT/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── Server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/ARCGPT.git
cd ARCGPT
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **backend** folder.

```env
PORT=8080

MONGODB_URI=your_mongodb_connection_string

GEMINI_API_KEY=your_gemini_api_key
```

---

## ▶️ Run the Application

### Backend

```bash
cd backend
npm start
```

or

```bash
npm run dev
```

### Frontend

```bash
cd frontend
npm run dev
```

---

## 📸 Screenshots

_Add screenshots of your chatbot here._

---

## 🌟 Future Improvements

- User Authentication
- Dark / Light Theme
- Streaming AI Responses
- Image Generation
- Voice Input
- Chat Export
- File Upload Support

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Ayan Verma**

GitHub: https://github.com/yourusername

LinkedIn: https://linkedin.com/in/yourprofile
