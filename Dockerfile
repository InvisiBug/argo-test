FROM arm64v8/node:14
WORKDIR /src
COPY . .
RUN npm install --quiet
EXPOSE 3000
CMD npm start