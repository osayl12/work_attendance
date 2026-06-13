import { backURL } from "../../../vars.js";
const section = "ATT";

async function CheckIn(formData) {
  const response = await fetch(`${backURL}/${section}/CheckIn`, {
    method: "POST",
    headers: { accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(formData),
    credentials: "include",
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "שגיאה — נסה שנית");
  return data;
}

async function CheckOut(formData) {
  const response = await fetch(`${backURL}/${section}/CheckOut`, {
    method: "POST",
    headers: { accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(formData),
    credentials: "include",
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "שגיאה — נסה שנית");
  return data;
}

async function GetReport(id_number, year, month) {
  const response = await fetch(
    `${backURL}/${section}/Report/${id_number}/${year}/${month}`,
    {
      method: "GET",
      headers: { accept: "application/json" },
      credentials: "include",
    },
  );
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  return response.json();
}

async function GetAllEmployees() {
    const response = await fetch(`${backURL}/${section}/Employees`, {
        method: "GET",
        headers: { accept: "application/json" },
        credentials: "include",
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "שגיאה — נסה שנית");
    return data;
}
export { CheckIn, CheckOut, GetReport, GetAllEmployees };
