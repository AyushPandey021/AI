backend/
│
├── src/
│   ├── controllers/        # request → response
│   │   ├── aiController.js
│   │   ├── flowController.js
│   │   ├── docController.js
│   │   ├── chatController.js
│   │
│   ├── routes/             # API routes
│   │   ├── aiRoutes.js
│   │   ├── flowRoutes.js
│   │   ├── docRoutes.js
│   │   ├── chatRoutes.js
│   │
│   ├── services/           # ALL logic here (merged)
│   │   ├── aiService.js
│   │   ├── flowService.js
│   │   ├── docService.js
│   │   ├── chatService.js
│   │
│   ├── utils/              # helpers
│   │   ├── pdfParser.js
│   │   ├── textSplitter.js
│   │
│   ├── middleware/
│   │   ├── errorHandler.js
│
│   ├── config/
│   │   ├── openai.js
│
│   
│   ├── server.js
│
├── uploads/
├── .env
├── package.json