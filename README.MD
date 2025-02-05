# Evotrade

**Smart Investing, Simplified.**

Evotrade is an AI-powered investment platform designed to make financial growth accessible for everyone. Our work-in-progress MVP focuses on foundational features that blend personalized education, intelligent risk assessment, and seamless trading options.

## Key Features

🚀 **AI-Powered Teacher** – Personalized financial education, quizzes, and real-time feedback.  
📊 **Risk Assessment Tool** – Color-coded risk indicators and portfolio health checks.  
📈 **Investment Accounts** – TFSA, RRSP, and Non-Registered accounts with fractional blue-chip stock ownership.  
🤝 **Social Trading** – Follow top traders, replicate strategies, and engage in community discussions.  
💰 **Micro-Investing & Round-Ups** – Spare change investing and automated savings triggers.  
🏆 **Gamification** – Savings challenges and achievement badges for financial milestones.  
💳 **Cash Management** – Cashback rewards and spending round-ups.  
📡 **Basic Trading Options** – Trade stocks, ETFs, and crypto (Bitcoin & Ethereum).

Evotrade is designed to empower users with smarter financial decisions while keeping investing fun and accessible. 🚀

## Backend

### Setup

#### From Root Directory:

```
1.Install python, pip, and virtualenv if you haven't already done so
2.cd backend
3.python3 -m venv venv (mac) | python -m venv venv (windows)
4.source ./venv/bin/activate (mac) | venv\Scripts\activate (windows) [Can exit virtual environment using 'deactivate']
5.pip3 install -r requirements.txt (mac) | pip install -r requirements.txt (windows)
6.python3 manage.py createsuperuser (mac) | python manage.py createsuperuse (windows) [First time only]
7.python3 manage.py runserver 0.0.0.0:8000 (mac) | python manage.py runserver 0.0.0.0:8000 (windows)
```

### To see django database

```
http://localhost:8000/admin
```

## Frontend

### Setup

#### From Root Directory:

```
1.cd frontend
2.npm install
3.npx expo start/npx expo start --clear

```
