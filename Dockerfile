# pull the official base image
FROM node:lts

# set working direction
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH node_modules/.bin:$PATH

# install application dependencies
COPY package.json /app
RUN npm install --legacy-peer-deps

# add app
COPY . ./app

# start app
CMD ["npm", "start"]