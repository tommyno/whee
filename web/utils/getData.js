async function getData(url = "", options = {}) {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    if (!response.ok) {
      throw new Error(response.error.message);
    }
    return result;
  } catch (error) {
    console.error("Catch error:", error);
    return null;
  }
}

export default getData;
