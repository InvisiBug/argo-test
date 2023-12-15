FROM arm64v8/node:latest
WORKDIR /src
COPY . .
RUN yarn install --ignore-engines
EXPOSE 3000
CMD yarn start