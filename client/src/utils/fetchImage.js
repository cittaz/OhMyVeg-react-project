export async function fetchImage(prompt) {
  const response = await fetch('https://ohmyveg-server.onrender.com/', {
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