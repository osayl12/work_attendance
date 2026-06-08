import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { CheckIn, CheckOut, GetReport } from "./apiAttendance.js";

function useCheckIn() {
  const queryClient = useQueryClient();
  const {
    isPending: isCheckingIn,
    mutate: checkIn,
    isSuccess: checkInSuccess,
    isError: checkInError,
    error: checkInErrorMsg,
  } = useMutation({
    mutationFn: CheckIn,
    onError: (err) => console.log("err", err),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["report"] });
    },
  });
  return {
    isCheckingIn,
    checkIn,
    checkInSuccess,
    checkInError,
    checkInErrorMsg,
  };
}
function useCheckOut() {
  const queryClient = useQueryClient();
  const {
    isPending: isCheckingOut,
    mutate: checkOut,
    isSuccess: checkOutSuccess,
    isError: checkOutError,
    error: checkOutErrorMsg,
  } = useMutation({
    mutationFn: CheckOut,
    onError: (err) => console.log("err", err),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["report"] });
    },
  });
  return {
    isCheckingOut,
    checkOut,
    checkOutSuccess,
    checkOutError,
    checkOutErrorMsg,
  };
}

function useGetReport(id_number, year, month) {
  const query = useQuery({
    queryKey: ["report", id_number, year, month],
    queryFn: () => GetReport(id_number, year, month),
    enabled: !!id_number && !!year && !!month,
    staleTime: 5 * 60 * 1000, // אם בקשנו את הבקשה בתוך ה 5 דקות הבאות לא נבצע את הבקשה שוב אלא נחזיר את התוצאה מהמטמון
    gcTime: 5 * 60 * 1000, // אם הבקשה לא נדרשת בתוך 5 דקות היא תימחק מהמטמון
    retry: (failureCount) => failureCount < 3, // ננסה לשלוח את הבקשה עד 3 פעמים במקרה של כשלון
  });
  return query;
}

export { useCheckIn, useCheckOut, useGetReport };
