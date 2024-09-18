"use client"

import Modal from "./Modal"
import { useState } from "react"
import { useRouter } from "next/navigation"
import useSignUpModal from "@/app/hooks/useSignUp"
import CustomButton from "../forms/CustomButton"
import apiService from "@/app/services/apiService"
import { handleLogin } from "@/app/lib/actions"

const SignUpModal = () => {
  const zusSignUp = useSignUpModal()
  const router = useRouter()


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatePassword, setRepeatePassword] = useState("")

  const [errors, setErrors] = useState<string[]>([])

  const submitSignup = async () => {
    const formData = {
      email: email,
      password1: password,
      password2: repeatePassword
    }

    const response = await apiService.postWithoutToken("/api/auth/register/", JSON.stringify(formData))

    if (response.access) {
      //handle login
      handleLogin(response.user.pk, response.access, response.refresh)

      zusSignUp.close()
      router.push("/")
    } else {
      const tmpErrors: string[] = Object.values(response).map((error: any) => {
        return error
      })
      setErrors(tmpErrors)
    }
  }

  const content = (
    <>
      <form
        action={submitSignup}
        className="space-y-4"
      >
        <input onChange={(e) => setEmail(e.target.value)} placeholder="Your e-mail address" type="email" className="w-full h-[54px] border px-4 boreder-gray-300 rounded-xl" />
        <input onChange={(e) => setPassword(e.target.value)} placeholder="Your password" type="password" className="w-full h-[54px] border px-4 boreder-gray-300 rounded-xl" />
        <input onChange={(e) => setRepeatePassword(e.target.value)} placeholder="Repeate password" type="password" className="w-full h-[54px] border px-4 boreder-gray-300 rounded-xl" />

        {errors.map((error, index) => {
          return (
            <div key={index} className="p-5 bg-airbnb text-white rounded-xl opacity-80">
              {error}
            </div>
          )
        })}


        <CustomButton label="Submit" onClick={submitSignup} />
      </form>
    </>
  )

  return (
    <Modal
      isOpen={zusSignUp.isOpen}
      close={zusSignUp.close}
      content={content}
      label="Sign Up"
    />
  )
}


export default SignUpModal