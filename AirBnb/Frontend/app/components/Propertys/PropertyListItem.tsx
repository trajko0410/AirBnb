import Image from "next/image"
import { PropertyType } from "./PropertyList"
import { useRouter } from "next/navigation"
import FavoriteButton from "../FavoriteButton"


interface PropertyProps {
  property: PropertyType,
  markFavorite?: (is_favorite: boolean) => void
}

const PropertylistItem: React.FC<PropertyProps> = ({ property, markFavorite }) => {
  const router = useRouter()

  return (
    <div className="cursor-pointer">
      <div

        className="relative overflow-hidden aspect-square rounded-xl">
        <Image
          onClick={() => router.push(`/propertys/${property.id}`)}
          fill
          src={property.image_url}
          alt="property-image"
          sizes="(max-width: 768px) 768px, (max-width: 1200px) 768px, 768px"
          className="hover:scale-110 object-cover transition h-full w-full">
        </Image>
        {markFavorite && (
          <FavoriteButton
            id={property.id}
            is_favorite={property.is_favorite}
            markFavorite={(is_favorite) => markFavorite(is_favorite)}
          />
        )}
      </div>

      <div className="mt-2">
        <p className="text-lg font-bold">{property.title}</p>
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-500"><strong>${property.price_per_night}</strong> per night</p>
      </div>

    </div>
  )
}

export default PropertylistItem