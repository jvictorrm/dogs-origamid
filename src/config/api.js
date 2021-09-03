export const BASE_URL = 'https://dogsapi.origamid.dev/json';

export const TOKEN_POST = (body) => {
  return {
    url: `${BASE_URL}/jwt-auth/v1/token`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

export const TOKEN_VALIDATE_POST = (token) => {
  return {
    url: `${BASE_URL}/jwt-auth/v1/token/validate`,
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  }
}

export const USER_GET = (token) => {
  return {
    url: `${BASE_URL}/api/user`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  }
}

export const USER_POST = (body) => {
  return {
    url: `${BASE_URL}/api/user`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

export const USER_PHOTO_POST = (token, body) => {
  return {
    url: `${BASE_URL}/api/photo`,
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(body)
    }
  }
}

export const PHOTOS_INDEX = ({page, total, user}) => {
  return {
    url: `${BASE_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: 'GET',
      cache:  'no-store'
    }
  }
}

export const PHOTO_GET = (id) => {
  return {
    url: `${BASE_URL}/api/photo/${id}`,
    options: {
      method: 'GET',
      cache:  'no-store'
    }
  }
}

export const COMMENT_POST = (id, body) => {
  return {
    url: `${BASE_URL}/api/comment/${id}`,
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("dogs@token")}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

export const PHOTO_DELETE = (id) => {
  return {
    url: `${BASE_URL}/api/photo/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("dogs@token")}`,
      }
    }
  }
}

export const PHOTOS_GET = (id) => {
  return {
    url: `${BASE_URL}/api/photo/${id}`,
  }
}

export const PASSWORD_FORGOT_POST = (body) => {
  return {
    url: `${BASE_URL}/api/password/lost`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

export const PASSWORD_RESET_POST = (body) => {
  return {
    url: `${BASE_URL}/api/password/reset`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

export const STATS_INDEX = () => {
  return {
    url: `${BASE_URL}/api/stats`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("dogs@token")}`,
      }
    }
  }
}