import { useState, useEffect } from "react";

const Image = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Srver Error");
        }
        return response.json();
      })

      .then((response) => setImageUrl(response[0].url))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p> Loading ... </p>
  if (error) return <p>A network error was encounterd </p>

  return (
    <>
      <h1>An image</h1>
      <img src={imageUrl} alt={"placeholder text"} />
    </>
  );
}

export default Image();
