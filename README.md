# 📝 NoteSphere

> A modern, full-stack note-taking application built with the MERN stack

## 🌟 Overview

NoteSphere is a powerful and intuitive note-taking application that allows users to create, organize, and manage their notes seamlessly. Built with modern web technologies, it provides a smooth user experience with robust functionality for personal productivity.

## ✨ Features

### 🔐 **Authentication & Security**
- User registration and login system
- JWT-based authentication for secure sessions
- Protected routes and user-specific data access

### 📝 **Note Management**
- **Create** new notes with rich text support
- **Read** and view notes in an organized layout
- **Update** existing notes with real-time saving
- **Delete** notes with confirmation prompts

### 🗂️ **Organization**
- Categorize notes with custom tags
- Folder-based organization system
- Color-coded categories for better visual organization

### 🔍 **Search & Filter**
- Real-time search functionality
- Filter notes by categories, tags, or date
- Advanced search with keyword highlighting

### 🎨 **User Experience**
- Responsive design for all devices
- Dark mode toggle for comfortable viewing
- Clean and modern user interface
- Fast and intuitive navigation

## 🚀 Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **MongoDB** | Database for storing notes and user data | ^6.0 |
| **Express.js** | Backend API framework | ^4.18 |
| **React.js** | Frontend user interface | ^18.2 |
| **Node.js** | Server runtime environment | ^18.0 |
| **JWT** | Authentication tokens | ^9.0 |
| **Mongoose** | MongoDB object modeling | ^7.0 |
| **Bcrypt** | Password hashing | ^5.1 |

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.0 or higher)
- [MongoDB](https://www.mongodb.com/) (v6.0 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## ⚡ Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/notesphere.git
cd notesphere
```

### 2. Install Dependencies

**Server:**
```bash
cd server
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

### 3. Environment Setup

Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/notesphere
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

### 4. Start the Application

**Server (Terminal 1):**
```bash
cd backend
npm run dev
```

**Frontend (Terminal 2):**
```bash
cd frontend
npm start
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
notesphere/
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   └── noteController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   └── Note.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── notes.js
│   ├── config/
│   │   └── database.js
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── utils/
│   │   └── App.js
│   └── package.json
└── README.md
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/user` - Get current user

### Notes
- `GET /api/notes` - Get all user notes
- `POST /api/notes` - Create a new note
- `GET /api/notes/:id` - Get specific note
- `PUT /api/notes/:id` - Update note
- `DELETE /api/notes/:id` - Delete note

## 🎯 Usage

1. **Register/Login**: Create an account or sign in to access your notes
2. **Create Notes**: Click the "New Note" button to create your first note
3. **Organize**: Use tags and categories to organize your notes
4. **Search**: Use the search bar to quickly find specific notes
5. **Edit**: Click on any note to edit its content
6. **Dark Mode**: Toggle dark mode from the settings menu

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/goyalucky)
- LinkedIn: [Your LinkedIn](https://www.linkedin.com/in/lucky-goyal-111766260/)

## 🙏 Acknowledgments

- React.js team for the amazing frontend library
- MongoDB team for the powerful database solution
- Express.js community for the robust backend framework
- All contributors who helped make this project better

---

⭐ **If you found this project helpful, please give it a star!** ⭐
