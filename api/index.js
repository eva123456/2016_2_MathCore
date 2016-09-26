module.exports = {
	"swagger": "2.0",
	"info": {
		"version": "0.0.3",
		"title": "Jackal|Space API",
		"description": "**Наше апи  <(￣︶￣)>**"
	},
	"basePath": "/api",
	"schemes": ["http"],
   	"host": "http://localhost:3000",

	paths: {
		'/registration': require('./resources/registration'),
		'/login': require('./resources/login')
	},	
	
	definitions: {
		User: require('./scheme/Registration'),
		Login: require('./scheme/Login')
	}

}
