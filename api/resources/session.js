exports.post = {
	"tags": ["session"],
	"description": "Метод позволяет пользователю авторизироваться",
	"parameters": [
		{
			"name": "login+password",
			"description": "login и password в формате json",
			"type": "application/json"
		}
	],
	"responses": {
		"200": {
			"schema": {
				"description": "Пользователь успешно авторизирован",
				"type": "#/definitions/Session"
			}
		},
		"204": {
			"description": "Пользователь уже авторизирован"
		},
		"400": {
			"description": "Неправильный логин/пароль"
		}
	},
	"x-amples": [{
		"description": "Тестовый логин",
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