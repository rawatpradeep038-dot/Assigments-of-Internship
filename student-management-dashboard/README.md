# 📚 Student Management Dashboard

A modern, feature-rich React application for managing student information with favorites functionality, dark mode, and beautiful UI animations.

## 🚀 Live Demo
[View Live](https://student-management-dashboard-virid.vercel.app/)

## ✨ Features

- **Dynamic Routing** - Navigate seamlessly between pages
- **API Integration** - Fetch student data from JSONPlaceholder API
- **Redux State Management** - Manage favorites with Redux Toolkit
- **Dark Mode Toggle** - Switch between light and dark themes
- **Responsive Design** - Works on all device sizes
- **Smooth Animations** - Subtle, classy animations throughout
- **Loading & Error States** - Proper state handling

## 🛠️ Tech Stack

- **React 18** - UI Library
- **React Router DOM** - Client-side routing
- **Redux Toolkit** - State management
- **Vite** - Build tool & dev server
- **CSS3** - Styling with animations

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd student-management-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Usage

1. **Home Page** - Welcome message with theme switcher and motivational quote
2. **Students Page** - Browse all students fetched from API
3. **Student Details** - View detailed information about individual students
4. **Favorites** - Manage your favorite students
5. **About** - Learn about the project

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar with favorites count
│   └── StudentCard.jsx     # Reusable student card component
├── pages/
│   ├── Home.jsx            # Home page with theme switcher
│   ├── Students.jsx        # Students list with API integration
│   ├── StudentDetails.jsx  # Individual student details
│   ├── Favorites.jsx       # Favorites management
│   └── About.jsx           # About page
├── redux/
│   ├── store.js            # Redux store configuration
│   └── favoritesSlice.js   # Favorites state slice
├── App.jsx                 # Main app component with routes
├── App.css                 # Application styles
├── main.jsx                # App entry point
└── index.css               # Global styles
```

## 🎨 Key Concepts Demonstrated

- ✅ Components & JSX
- ✅ Props & State Management (useState)
- ✅ Side Effects (useEffect)
- ✅ Conditional Rendering
- ✅ Lists & Keys
- ✅ Event Handling
- ✅ API Integration
- ✅ Dynamic Routing
- ✅ Redux State Management
- ✅ React Hooks

## 🔗 API Used

**JSONPlaceholder Users API**
- Endpoint: `https://jsonplaceholder.typicode.com/users`
- Provides mock user data for demonstration



## 👨‍💻 Author

Created by **Pradeep Singh Rawat**  
Internship Project at **Cepia Labs**

## 📧 Submission

Submit to:
- dipanshi.tiwari@cepialabs.in
- smrutisaurav.ojha@cepialabs.in

## 📄 License

This project is created for educational purposes.

---

**Built with ❤️ using React**