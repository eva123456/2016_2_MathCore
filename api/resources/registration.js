exports.post = {
	"tags": ["registration"],
	"description": "Метод создает нового пользователя",
	"parameters": [
		{
			"name": "login",
			"description": "Имя пользователя",
			"type": "string"
		},
		{
			"name": "password",
			"description": "Пароль",
			"type": "string"
		},
		{
			"name": "email",
			"description": "E-mail пользователя",
			"type": "string"
		}
	],
	"responses": {
		"200": {
			"schema": {
				"description": "Пользователь создан",
				"type": "#/definitions/Registration"
			}
		},
		"204": {
			"description": "Пользователь уже авторизован",
		},
		"400": {
			"description": "Логин/email уже используются",
		}

	},
	"x-amples": [{
		"description": "создание тестового пользователя",
		"request": {
			"params": {
				"login": "test",
				"password": "123",
				"email":"test@test"
			}
		},
		"response": {
			"status": 200,
			"headers": {
				"content-type": "application/json"
			},
			"validator": function (res) {

				if (typeof res.login !== 'string') {
					return 'некорректный login';
				}

				if (typeof res.password !== 'string') {
					return 'некорректный пароль';
				}

				if (typeof res.email !== 'string') {
					return 'некорректный e-mail';
				}
				
				return true;
			}
		}
	}]
};