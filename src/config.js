export const apiURL = 'http://localhost:8000/'
export const loginURl = apiURL + 'oauth/token'
export const userURl = apiURL + 'api/user'

export const getHeader = function () {
  const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
  const header = {
    'accept': 'application/json',
    'authorization': 'Bearer ' + tokenData.access_token
  }
  return header
}
