
import Link from "next/link"
import Image from "next/image"
import ReservationSideBar from "../../components/Propertys/ReservationSideBar"

import apiService from "@/app/services/apiService"
import { getUserId } from "@/app/lib/actions"

const PropertyDetailPage = async ({ params }: { params: { id: string } }) => {

  const userId = await getUserId()
  const property = await apiService.get(`/api/properties/${params.id}`)

  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div
        className="w-full mb-4 h-[64vh] overflow-hidden rounded-xl relative">
        <Image
          fill
          src={property.image_url}
          alt="property-image"

          className=" hover:scale-105 transition duration-1000 object-cover  h-full w-full">
        </Image>
      </div>


      <div className=" grid frid-cols-1 md: grid-cols-5 gap-4">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="mb-4 text-4xl">{property.title}</h1>
          <span className="mb-6 block text-lg text-gray-600">{property.guests} guests - {property.bedrooms} bedrooms - {property.bathroom} bathroom</span>

          <hr></hr>

          <Link
            href={`/landlords/${property.landlord.id}`}
            className="py-6 flex items-center space-x-4">
            {property.landlord.avatar_url && (
              <Image
                src={property.landlord.avatar_url}
                alt="Profile pic"
                width={50}
                height={50}
                className="rounded-full"
              />
            )}

            <p><strong>{property.landlord.name}</strong> is your houst</p>
          </Link>

          <hr></hr>

          <p className="mt-6 text-lg">{property.descriptrion}</p>
        </div>

        <ReservationSideBar property={property} userId={userId} />

      </div>
    </main>
  )
}

export default PropertyDetailPage