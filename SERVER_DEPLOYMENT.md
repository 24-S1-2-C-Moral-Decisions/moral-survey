# Server Deployment Guide

## Prerequisites
- Node.js and npm installed
- Backend service running on port 3001
- Frontend service running on port 3000

## Deployment Steps

### 1. Build all survey projects
```bash
chmod +x deploy-all-surveys.sh
./deploy-all-surveys.sh
```

### 2. Start all survey services
```bash
chmod +x start-all-surveys.sh
./start-all-surveys.sh
```

### 3. Stop all survey services
```bash
chmod +x stop-all-surveys.sh
./stop-all-surveys.sh
```

## Access URLs
- moral-survey-1: http://your-server-ip:8081
- moral-survey-2: http://your-server-ip:8082
- moral-survey-3: http://your-server-ip:8083
- moral-survey-4: http://your-server-ip:8084
- moral-survey-5: http://your-server-ip:8085

## Log Files
Log files are stored in the `logs/` directory:
- moral-survey-1.log
- moral-survey-2.log
- moral-survey-3.log
- moral-survey-4.log
- moral-survey-5.log

## Process Management
The start script will display Process IDs (PIDs) for each service. You can use these to:
- Check if services are running: `ps -p <PID>`
- Stop individual services: `kill <PID>`

## Troubleshooting
1. Check log files for errors
2. Ensure ports 8081-8085 are not in use
3. Verify backend API is accessible
4. Check firewall settings for the ports
