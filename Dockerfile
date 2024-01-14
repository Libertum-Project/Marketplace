FROM node:alpine
#RUN apk update && apk add --no-cache curl
WORKDIR /Marketplace
COPY . .
#RUN chmod +x /app/start.sh
#WORKDIR /app/server
RUN npm install
#WORKDIR /app/LBM-Client
#RUN apk add --no-cache python3 make g++ && npm install
#EXPOSE 3000
CMD ["npm", "run", "dev"]
