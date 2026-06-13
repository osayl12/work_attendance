import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Autocomplete from "@mui/material/Autocomplete";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGetReport, useGetEmployees } from "./apiHookAttendance.js";

function ReportPage() {
  const [filters, setFilters] = useState({
    id_number: "",
    year: "",
    month: "",
  });
  const [search, setSearch] = useState({ id_number: "", year: "", month: "" });
  const [selectedEmployee, setSelectedEmployee] = useState(null);
 const { data: { list: employeesArr } = {}, isLoading: isLoadingEmployees } =
    useGetEmployees();
  const {
    data: { list: reportArr } = {},
    isLoading,
    isError,
    error,
  } = useGetReport(search.id_number, search.year, search.month);

   const handleEmployeeChange = (e, newValue) => {
    setSelectedEmployee(newValue);
    setFilters((prev) => ({
      ...prev,
      id_number: newValue ? newValue.id_number : "",
    }));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(filters);
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleString("he-IL");
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h5" mb={3}>
        דוח נוכחות
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
        <Autocomplete
            options={employeesArr || []}
            getOptionLabel={(option) => `${option.name} (${option.id_number})`}
            value={selectedEmployee}
            onChange={handleEmployeeChange}
            loading={isLoadingEmployees}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            sx={{ width: 280 }}
            renderInput={(params) => (
              <TextField {...params} label="בחר עובד" required />
            )}
          />
          <TextField
            name="year"
            label="שנה"
            type="number"
            onChange={handleChange}
            value={filters.year}
            required
            sx={{ width: 120 }}
          />
          <TextField
            name="month"
            label="חודש"
            type="number"
            onChange={handleChange}
            value={filters.month}
            required
            inputProps={{ min: 1, max: 12 }}
            sx={{ width: 100 }}
          />
          <Button type="submit" variant="contained" size="large">
            הצג דוח
          </Button>
        </Box>
      </form>

      {isLoading && <Typography>טוען...</Typography>}
      {isError && <Typography color="error">שגיאה: {error.message}</Typography>}

      {reportArr && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>שם עובד</TableCell>
                <TableCell>ת"ז</TableCell>
                <TableCell>כניסה</TableCell>
                <TableCell>יציאה</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reportArr.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    אין נתונים
                  </TableCell>
                </TableRow>
              ) : (
                reportArr.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.employee_name}</TableCell>
                    <TableCell>{row.employee_id_number}</TableCell>
                    <TableCell>{formatDate(row.check_in)}</TableCell>
                    <TableCell>{formatDate(row.check_out)}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}

export default ReportPage;
