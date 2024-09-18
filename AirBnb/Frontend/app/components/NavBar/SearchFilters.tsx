"use client"

import useSearchModal from "@/app/hooks/useSearchModal"
import SearchModal from "../modals/SearchModal"

const SearchFilters = () => {
  const zusSearchModal = useSearchModal()
  return (
    <div
      onClick={() => zusSearchModal.open("location")}
      className="h-[48px] lg:h-[64px] flex flex-row items-center justify-between border rounded-full">
      <div className="hidden lg:block">
        <div className="flex flex-row items-center justify-between">
          <div className="cursor-pointer w-[250px] h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semybold">Where</p>
            <p className="test-sm">Wanted location</p>
          </div>

          <div className=" cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semybold">Check in</p>
            <p className="test-sm">Add dates</p>
          </div>

          <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semybold">Check out</p>
            <p className="test-sm">Add dates</p>
          </div>

          <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semybold">Who</p>
            <p className="test-sm">Add guests</p>
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="p-2 lg:p-4 bg-airbnb hover:bg-airbnb-dark transition cursor-pointer rounded-full text-white">
          <svg
            viewBox="0 0 32 32"
            style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentColor', strokeWidth: 4, overflow: 'visible' }}
            aria-hidden="true" role="presentation" focusable="false"
          >
            <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default SearchFilters