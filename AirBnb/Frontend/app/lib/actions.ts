"use server"

import { cookies } from "next/headers"

export async function handleRefresh() {
  console.log("handle refresh")

  const refreshToken = await getRefreshToken()

  const token = await fetch('http://localhost:8000/api/auth/token/refresh/', {
    method: 'POST',
    body: JSON.stringify({
      refresh: refreshToken
    }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then((json) => {
      console.log('Response - Refresh:', json);

      if (json.access) {
        cookies().set('session_access_token', json.access, {
          httpOnly: true,
          secure: false,
          maxAge: 60 * 60, // 60 minutes
          path: '/'
        });

        return json.access;
      } else {
        resetAuthCookies();//LOGOUT
      }
    })
    .catch((error) => {
      console.log('error', error);

      resetAuthCookies();
    })

  return token;
}

export async function handleLogin(userId: string, accesToken: string, refreshToken: string) {
  cookies().set("session_userid", userId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 7 * 24, //one week
    path: "/"
  })

  cookies().set("session_accesToken", accesToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60, //60 min
    path: "/"
  })
  cookies().set("session_refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 7 * 24, //one weeks
    path: "/"
  })
}


export async function resetAuthCookies() {
  cookies().set("session_userid", "")
  cookies().set("session_accesToken", "")
  cookies().set("session_refreshToken", "")
}

//get data
export async function getUserId() {
  const userId = cookies().get("session_userid")?.value
  return userId ? userId : null
}

export async function getAccessToken() {
  let accessToken = cookies().get("session_accesToken")?.value


  if (!accessToken) {
    accessToken = await handleRefresh();
  }


  return accessToken
}

export async function getRefreshToken() {
  let refreshToken = cookies().get("session_refreshToken")?.value

  return refreshToken
}