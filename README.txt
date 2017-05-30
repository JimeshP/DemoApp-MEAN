DemoApp is a demo E-Commerce Application, created for VMWare.

Instructions for Setup:

1. Install and Configure following on your host.
	- NodeJS
	- MongoDB 
	- ActiveMQ

2. Setting Database
	- Navigate to "demoApp(MEAN)\public\javascripts" folder from commandline
	- run "mongo 127.0.0.1/DemoApp dbconfig.js"

3. Setting ActiveMQ 
	- Navigate to "bin" directory of your activemq installation folder.
	- run "activemq start" 
	- Navigate to http://localhost:8161/admin/ for administrative console.
	  Username : admin
	  Password : admin

4. Configuring Application
	- Open "config.json" in demoApp(MEAN) folder.
	- Set the Application Port, MongoDB and ActiveMQ parameters.

5. Starting Application
	- run "npm install"
	- run "npm start"

6. Access the Application over the port you specified for "app_port" parameter in config.json file.

7. ENJOY !!!