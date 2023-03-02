export async function fetchImage(prompt) {
  const response = await fetch('http://localhost:5000', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            prompt: `${prompt}`
        })
    })
  const image = await response.json();

  return image;
}