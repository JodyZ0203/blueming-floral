export default async function fetcherFunction(...args) {
    const res = await fetch(...args)
    return res.json()
  }
  