const ERROR_CODES = {
  INVALID_LOGIN_CREDENTIALS: 'Логин или пароль неверны'
}

export default function error (code) {
  return ERROR_CODES[code] ? ERROR_CODES[code] : 'Неизвестная ошибка'
}
