"use client"

import Modal from "./Modal"
import { useState } from "react"
import useLogInModal from "@/app/hooks/useLoginModal"
import CustomButton from "../forms/CustomButton"
import { useRouter } from "next/navigation"

import apiService from "@/app/services/apiService"
import { handleLogin } from "@/app/lib/actions"

const LoginModal = () => {
  const router = useRouter()
  const zusloginModal = useLogInModal()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [errors, setErrors] = useState<string[]>([])

  const submitLogin = async function () {
    const formData = {
      email: email,
      password: password,
    }

    const response = await apiService.postWithoutToken("/api/auth/login/", JSON.stringify(formData))

    if (response.access) {
      //handle login
      handleLogin(response.user.pk, response.access, response.refresh)

      zusloginModal.close()
      router.push("/")
    } else {

      setErrors(response.non_field_errors)
    }
  }

  const content = (
    <>
      <form
        action={submitLogin}
        className="space-y-4"
      >
        <input onChange={(e) => setEmail(e.target.value)} placeholder="Your e-mail address" type="email" className="w-full h-[54px] border px-4 boreder-gray-300 rounded-xl" />
        <input onChange={(e) => setPassword(e.target.value)} placeholder="Your password" type="password" className="w-full h-[54px] border px-4 boreder-gray-300 rounded-xl" />

        {errors.map((error, index) => {
          return (
            <div key={index} className="p-5 bg-airbnb text-white rounded-xl opacity-80">
              {error}
            </div>
          )
        })}
        <CustomButton label="Submit" onClick={submitLogin} />
      </form>
    </>
  )

  return (
    <Modal
      isOpen={zusloginModal.isOpen}
      close={zusloginModal.close}
      content={content}
      label="Log in"
    />
  )
}


export default LoginModal