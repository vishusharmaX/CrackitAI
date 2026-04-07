# CrackIt AI 🚀

CrackIt AI is an intelligent, full-stack application designed to be your personal interview coach. By leveraging modern generative AI, it analyzes your specific profile alongside a target job description to instantly build a personalized interview strategy tailored just for you.

## 📖 About This Project
The core goal of CrackIt AI is to drastically reduce the stress and guesswork involved in interview preparation. 

Users simply upload their resume (or write a quick self-description) and paste the job description they are applying for. The application then uses Google's Gemini AI to process this data and generates:
* **A Match Score**: How well your current skills align with the rigid job requirements.
* **Skill Gaps Strategy**: Explicitly states what you are missing and how you should address it in the interview.
* **Targeted Questions**: Predictive technical and behavioral questions you are most likely to be asked based on your resume.
* **A Custom Roadmap**: A structured timeline detailing exactly what you should study leading up to the interview day.

## 💡 Why It Was Made
Many job seekers apply for dozens of roles but find themselves lost during the actual preparation phase. Standard interview advice is often too generic. CrackIt AI was developed to bridge this gap by acting as a highly specific, AI-driven mentor that understands the nuances of the company's requirements and your personal experience, helping you focus strictly on what matters.

## 🛠️ Technologies Used

### Frontend
- **React.js (Vite)**: Lightning-fast development environment and component-based UI.
- **SCSS**: Abstract, maintainable, and modern styling utilizing a sleek, premium dark mode aesthetic.
- **React Router**: For seamless Single Page Application (SPA) routing.
- **Axios**: Promised-based HTTP client for the browser.

### Backend
- **Node.js & Express.js**: Fast and scalable web server infrastructure.
- **MongoDB & Mongoose**: Flexible NoSQL database for saving user profiles and generated interview reports.
- **Google Gemini AI (`@google/genai`)**: The core AI brain analyzing the text data.
- **JWT & Bcrypt**: Secure token-based authentication and password hashing.
- **Multer & PDF-Parse**: Secure handling and text-extraction from user-uploaded PDF resumes.
- **Puppeteer**: For deep site scraping and advanced parsing capabilities.

---

## ⚙️ How To Run Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/) installed on your machine. You will also need a free [Google Gemini API Key](https://aistudio.google.com/).

### 1. Clone the repository
```bash
git clone https://github.com/vishusharmaX/CrackitAI.git
cd CrackitAI
```

### 2. Setup the Backend
Open a terminal and navigate to the backend folder:
```bash
cd Backend
npm install
```

Create a `.env` file inside the `Backend` directory and add your secret keys:
```env
MONGO_URI=mongodb://localhost:27017/crackitai  # Or your MongoDB Atlas connection string
JWT_SECRET=your_super_secret_jwt_string
GOOGLE_GENAI_API_KEY=your_gemini_api_key_here
```

Start the backend development server:
```bash
npm run dev
```

### 3. Setup the Frontend
Open a new terminal and navigate to the frontend folder:
```bash
cd Frontend
npm install
```

Start the frontend Vite development server:
```bash
npm run dev
```

### 4. Open the Application
Navigate to `http://localhost:5173` (or the port Vite provides) in your browser. Register an account, log in, and start cracking your interviews!

---

## 🌐 Deployment
- **Backend** is optimized to run seamlessly on services like [Render](https://render.com/).
- **Frontend** is optimized as a static site, perfectly suited for deployment on [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/).
