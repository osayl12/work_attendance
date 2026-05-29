import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import { useCheckOut } from "./apiHookAttendance.js";

function CheckOutPage() {
  const {
    isCheckingOut,
    checkOut,
    checkOutSuccess,
    checkOutError,
    checkOutErrorMsg,
  } = useCheckOut();
  const [formData, setFormData] = useState({ id_number: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkOut(formData);
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" mb={3}>
        רישום יציאה
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            name="id_number"
            label="תעודת זהות"
            onChange={handleChange}
            value={formData.id_number}
            fullWidth
            required
            inputProps={{ maxLength: 9 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="error"
            disabled={isCheckingOut}
            size="large"
          >
            {isCheckingOut ? "שומר..." : "יציאה"}
          </Button>
          {checkOutSuccess && (
            <Alert severity="success">יציאה נרשמה בהצלחה! ✅</Alert>
          )}
{checkOutError && <Alert severity="error">{checkOutErrorMsg?.message || "שגיאה — נסה שנית"}</Alert>}        </Box>
      </form>
    </Box>
  );
}

export default CheckOutPage;
