"use client"

import useAddPropertyModal from "@/app/hooks/usePropertyModal"
import useLogInModal from "@/app/hooks/useLoginModal"
import Modal from "../modals/Modal"


interface AddPropertyButtonProps {
  userId?: string | null
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({ userId }) => {
  const zusAddPropertyModal = useAddPropertyModal()
  const zusloginModal = useLogInModal()

  const airbnbYourHome = () => {
    if (userId) {
      zusAddPropertyModal.open()
    } else {
      zusloginModal.open()
    }
  }



  return (
    <div
      onClick={airbnbYourHome}
      className="p-2 cursor-pointer text-sm font-semibold rounded-full hover:bg-gray-200"
    >
      Djangobnb your home
    </div>
  )
}

export default AddPropertyButton