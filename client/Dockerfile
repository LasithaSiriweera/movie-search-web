FROM node:8.7.0-alpine
RUN mkdir -p /srv/app/movie-search-client
WORKDIR /srv/app/movie-search-client
COPY package.json /srv/app/movie-search-client
COPY package-lock.json /srv/app/movie-search-client
RUN npm install
COPY . /srv/app/movie-search-client
CMD ["npm", "start"]