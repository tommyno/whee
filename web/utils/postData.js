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

    if (response.ok) {
      return await response.json();
    }
    throw new Error("Something wrong, response:", response);
  } catch (error) {
    console.error("Something wrong, catch error:", error);
    return null;
  }
}

export default postData;
