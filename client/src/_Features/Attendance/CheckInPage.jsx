import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import { useCheckIn } from "./apiHookAttendance.js";

function CheckInPage() {
    const { isCheckingIn, checkIn, checkInSuccess, checkInError } = useCheckIn();
    const [formData, setFormData] = useState({ id_number: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        checkIn(formData);
    };

    return (
        <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
            <Typography variant="h5" mb={3}>רישום כניסה</Typography>
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
                        color="primary"
                        disabled={isCheckingIn}
                        size="large"
                    >
                        {isCheckingIn ? "שומר..." : "כניסה"}
                    </Button>
                    {checkInSuccess && <Alert severity="success">כניסה נרשמה בהצלחה! ✅</Alert>}
                    {checkInError   && <Alert severity="error">שגיאה — נסה שנית</Alert>}
                </Box>
            </form>
        </Box>
    );
}

export default CheckInPage;