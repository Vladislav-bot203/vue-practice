const ERROR_CODES = {
  INVALID_LOGIN_CREDENTIALS: 'Логин или пароль неверны',
  auth: 'Пожалуйста, войдите в систему'
}

export default function error (code) {
  return ERROR_CODES[code] ? ERROR_CODES[code] : 'Неизвестная ошибка'
}
