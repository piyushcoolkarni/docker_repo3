FROM www.cybage-docker-registry.com:9080/nodebase

RUN mkdir -p "/data/artifact"

#steps for copying src to container for frontend
#COPY components config controllers initializers models utility node_modules app.js Gruntfile.js package.json /data/artifact/

WORKDIR /data/artifact/
 
ADD /components components
ADD /config config
ADD /controllers controllers
ADD /initializers initializers
ADD /models models
ADD /Routes Routes
ADD /node_modules node_modules
ADD app.js Gruntfile.js package.json ./
 
 EXPOSE 4545
 
CMD "grunt"


