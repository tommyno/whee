async function postData(url = "", data = {}) {
  try {
    const response = await fetch(url, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    // All good
    if (response.ok) {
      return await response.json();
    }

    // Something went wrong
    const { message } = await response.json();

    throw new Error(message);
  } catch (error) {
    console.error("Error!", error.message);
    return null;
  }
}

export default postData;
