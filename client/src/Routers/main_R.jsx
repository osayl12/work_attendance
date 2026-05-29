import { createBrowserRouter } from "react-router";
import AppLayout from "../LayOut/AppLayout.jsx";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import AssessmentIcon from "@mui/icons-material/Assessment";

import CheckInPage from "../_Features/Attendance/CheckInPage.jsx";
import CheckOutPage from "../_Features/Attendance/CheckOutPage.jsx";
import ReportPage from "../_Features/Attendance/ReportPage.jsx";

function HomePage() {
    return <h2>ברוך הבא לשעון הנוכחות</h2>;
}

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            { path: "/",         element: <HomePage />   },
            { path: "/CheckIn",  element: <CheckInPage />  },
            { path: "/CheckOut", element: <CheckOutPage /> },
            { path: "/Report",   element: <ReportPage />   },
        ],
    },
]);

export const navItems = [
    { path: "/",         name: "ראשי",         icon: <HomeIcon />       },
    { path: "/CheckIn",  name: "כניסה",         icon: <LoginIcon />      },
    { path: "/CheckOut", name: "יציאה",         icon: <LogoutIcon />     },
    { path: "/Report",   name: "דוח נוכחות",    icon: <AssessmentIcon /> },
];

export default router;