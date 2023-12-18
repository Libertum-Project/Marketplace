export async function getProperties() {
  const res = await fetch('https://libertum.azurewebsites.net/properties')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 console.log('Fetching Data ...')
  return res.json()
}
