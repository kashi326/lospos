// globals enums

import moment from "moment";
import {Inertia} from "@inertiajs/inertia";

export const MarksStatus = {
    0: "unmarked",
    1: "marked",
};
export const SubmitStatus = {
    0: "notSubmitted",
    1: "submitted",
};
export const PeriodStatus = {
    0: "Inactive",
    1: "Active",
};
export const QuizStatus = {
    0: "Inactive",
    1: "Active",
};
export const ScholarshipsStatus = {
    0: "Inactive",
    1: "Active",
};
export const FeeStatus = {
    1: "paid",
    0: "unpaid",
};
export const ExamFeeStatus = {
    true: "paid",
    false: "unpaid",
};
export const PaymentMethod = {
    0: "Bank transfer",
    1: "Cash",
};
export const PaymentStatus = {
    0: "Pending",
    1: "Paid",
    "-1": "Rejected",
};
export const RequestStatus = {
    "-1": "Rejected",
    0: "Pending",
    1: "Accepted",
    2: "Conditional",
};

export const UserStatus = {
    0: "Active",
    1: "Inactive",
    2: "Deleted",
    3: "Suspended",
};
export const ScholarshipStatus = {
    "-1": "Rejected",
    0: "Pending",
    1: "Accepted",
};
export const CourseCategoryDepth = {
    0: "courses",
    1: "degree",
    2: "department",
    3: "major",
    4: "semester",
    5: "Courses",
};
export const quizType = {
    0: "True False",
    1: "MCQ's",
};
export const statusApprovedRejectd = {
    "-1": "rejected",
    0: "pending",
    1: "approved",
};
export const requestStatus = {
    "-1": "rejected",
    0: "pending",
    1: "approved",
};
export const clearanceType = {
    1: "Upload",
    2: "Make payment",
};

export const formatErrors = (errors) => {
    return Object.keys(errors).map((k) => {
        return {
            name: k,
            errors: [errors[k]],
            validateStatus: "error",
        };
    });
};
export const createBlob = (file) => {
    return URL.createObjectURL(file);
};

export const formatOldDataDates = (values, keys_to_check) => {
    let data = {};
    Object.keys(values).forEach((key) => {
        if (values[key] || values[key] === 0)
            if (keys_to_check.includes(key)) {
                data = { ...data, [key]: moment(values[key]) };
            } else {
                data = { ...data, [key]: values[key] };
            }
    });
    return data;
};

export const formatFormData = (values, formData) => {
    Object.keys(values).map((key) => {
        if (values[key] || values[key] === 0)
            if (typeof values[key] === "object" && !Array.isArray(values[key]) && values[key] !== null) {
                let field_value = values[key];
                if ("_d" in field_value) {
                    formData.append(key, field_value.format("YYYY-MM-D"));
                }
            } else {
                formData.append(key, values[key]);
            }
    });
};

export const visibleToEnum = {
    0: "Everyone",
    1: "Admins",
    4: "Faculty",
    5: "Students",
};
export const availabilityEnum = {
    0: "24 hrs",
    1: "1 week",
    2: "1 month",
    3: "This semester",
    4: "This year",
};

export const scholarshipType = {
    1: "Full degree",
    2: "Individual Course", // major
};

export const UserType = {
    0: "Student",
    1: "Backend",
};

export const Semesters = {
    0: "Summer",
    1: "Fall",
    2: "Spring",
};

export const AcademicRecordStatus = {
    1: "Pass",
    2: "Fail",
    3: "Withdrawal",
    4: "Collapse the constraint",
    5: "Postponed",
    6: "Apology",
    7: "Absence",
};

