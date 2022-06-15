export async function fetchImages() {
    const response = await fetch(`https://dog.ceo/api/breed/shiba/images/random/12`);
    const data = await response.json()
    return data.message
}
