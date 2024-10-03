export default async function fetchData(URL: string) {
  try {
    const res = await fetch(URL)
    const json = await res.json()
    return await json
  } catch {
    throw new Error("Erro")
  }
}
