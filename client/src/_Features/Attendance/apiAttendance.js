import { backURL } from "../../vars.jsx";
const section = "ATT";

async function CheckIn(formData) {
    const response = await fetch(`${backURL}/${section}/CheckIn`, {
        method: "POST",
        headers: { accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
}

async function CheckOut(formData) {
    const response = await fetch(`${backURL}/${section}/CheckOut`, {
        method: "POST",
        headers: { accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
}

async function GetReport(id_number, year, month) {
    const response = await fetch(`${backURL}/${section}/Report/${id_number}/${year}/${month}`, {
        method: "GET",
        headers: { accept: "application/json" },
        credentials: "include",
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
}

export { CheckIn, CheckOut, GetReport };