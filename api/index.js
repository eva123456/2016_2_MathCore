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
		'/user': require('./resources/user'),
		'/session': require('./resources/session')
	},	
	
	definitions: {
		User: require('./scheme/User'),
		Login: require('./scheme/Session')
	}

}
