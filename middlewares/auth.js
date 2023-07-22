import ErrorHandler from "../utils/ErrorHandler";

export const isAuthenticated = (req, res, next) => {
    const token = req.cookies[""];

    if (!token) {
        return next(new ErrorHandler("Not Logged In, 401"));
    };
    next();
};

export const autherizeAdmin = (req, res, next) => {
    const token = req.cookies[""];

    if (req.user.role!=="admin") {
        return next(new ErrorHandler("Only Admin Allowed, 405"));
    };
    next();
};

