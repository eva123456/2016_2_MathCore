exports.post = {
	"tags": ["login"],
	"description": "Метод позволяет пользователю авторизироваться",
	"parameters": [
		{
			"name": "name",
			"description": "Имя пользователя",
			"type": "string"
		},
		{
			"name": "password",
			"description": "Пароль",
			"type": "string"
		}
	],
	"responses": {
		"200": {
			"schema": {
				"description": "Пользователь авторизирован",
				"type": "#/definitions/Login"
			}
		},
		"302": {
			"description": "Пользователь уже авторизирован"
		},
		"400": {
			"description": "Невалидный логин/пароль"
		}
	},
	"x-amples": [{
		"description": "создание тестового сообщения",
		"request": {
			"params": {
				"login": "test",
				"password": "123"
			}
		},
		"response": {
			"status": 200,
			"headers": {
				"content-type": "application/json"
			},
			"validator": function (res) {

				if (typeof res.name !== 'string') {
					return 'некорректный login';
				}

				if (typeof res.password !== 'string') {
					return 'некорректный пароль';
				}
				
				return true;
			}
		}
	}]
};