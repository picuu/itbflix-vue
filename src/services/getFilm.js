export async function getFilm(id) {
  const response = await fetch(`https://www.omdbapi.com/?apikey=a8eef58&i=${id}`)
  const data = await response.json()

  console.log(data)
  return data
}
