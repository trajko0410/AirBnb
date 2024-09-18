import countries from "world-countries"

const formattedCountrie = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
}))

const useCountries = () => {
  const getAll = () => formattedCountrie
  const getByValue = (value: String) => {
    return formattedCountrie.find((item) => item.value === value)
  }


  return {
    getAll,
    getByValue
  }
}

export default useCountries