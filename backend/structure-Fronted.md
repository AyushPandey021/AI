frontend/
│
├── public/
│
├── src/
│   ├── assets/             # images, icons
│
│   ├── components/         # reusable UI
│   │   ├── Navbar.jsx
│   │   ├── Button.jsx
│   │   ├── Loader.jsx
│   │   ├── Modal.jsx
│   │
│   ├── pages/              # main pages
│   │   ├── Home.jsx
│   │   ├── Flowchart.jsx
│   │   ├── DocReader.jsx
│   │   ├── ChatDoc.jsx
│   │
│   ├── features/           # feature-wise logic
│   │   ├── flowchart/
│   │   │     ├── FlowCanvas.jsx
│   │   │     ├── flowUtils.js
│   │   │
│   │   ├── docAI/
│   │   │     ├── DocUploader.jsx
│   │   │     ├── DocViewer.jsx
│   │   │     ├── ChatBox.jsx
│   │
│   ├── services/           # API calls
│   │   ├── api.js
│   │   ├── aiService.js
│   │
│   ├── hooks/              # custom hooks
│   │   ├── useFetch.js
│   │   ├── useAI.js
│   │
│   ├── context/            # global state
│   │   ├── AppContext.jsx
│   │
│   ├── utils/              # helper functions
│   │   ├── formatText.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│
├── package.json
├── tailwind.config.js