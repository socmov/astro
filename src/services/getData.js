const getData = async (encodedQuery) => {
  const AIRTABLE_API_KEY =
    "pat1WsEFcV61AkBWz.9f43096e14e3e7b30c0fff36d7f15fb137140fe6962341d6bda5d856800a5161";
  const BASE_ID = "appD2aCqhx78eRjWU"; // Replace with your base ID
  const TABLE_NAME = "Table%201"; // Replace with your table name

  let url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}?filterByFormula=${encodedQuery}`;
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const sortedData = data.records.sort((a, b) => {
    return new Date(a.fields["Start Date"]) - new Date(b.fields["Start Date"]);
  });
  return sortedData;
};

export default getData;
