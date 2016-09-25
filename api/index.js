module.exports = {
	"swagger": "2.0",
	"info": {
		"version": "0.0.3",
		"title": "Jacal|Space API",
		"description": "**Тип наше апи  <(￣︶￣)>**"
	},
	"basePath": "/api",
	"schemes": ["http"],
   	"host": "http://localhost:3000",

	paths: {
		'/messages': require('./resources/messages'),
		'/registration': require('./resources/registration'),
		'/authentication': require('./resources/authentification')
	},	
	
	definitions: {
		Message: require('./scheme/Message'),
		User: require('./scheme/Registration'),
		Authentication: require('./scheme/Authentification')
	}

}
