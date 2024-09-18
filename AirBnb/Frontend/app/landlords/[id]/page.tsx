import Image from "next/image"
import ContactButton from "@/app/components/ContactButton"
import Propertylist from "@/app/components/Propertys/PropertyList"

import apiService from "@/app/services/apiService"
import { getUserId } from "@/app/lib/actions"

const LandlordsPage = async ({ params }: { params: { id: string } }) => {

  const landlords = await apiService.get(`/api/auth/${params.id}`)
  const userId = await getUserId()


  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <aside className="col-span-1 mb-4">
          <div className="flex flex-col items-center p-6 rounded-xl border border-grey-300 shadow-xl">
            <Image
              src={landlords.avatar_url}
              alt="Landlord pic"
              width={200}
              height={200}
              className="rounded-full"
            />

            <h1 className=" mt-6 text-2xl">{landlords.name}</h1>

            {userId != params.id && (
              <ContactButton
                userId={userId}
                landlordId={params.id}
              />
            )}

          </div>

        </aside>
        <div className="col-span-1 md:col-span-3 pl-0 md:pl-6 grid grid-cols-1 md:grid-cols-3  gap-6">
          <Propertylist
            landlord_id={params.id}
          ></Propertylist>
        </div>
      </div>
    </main>
  )
}

export default LandlordsPage