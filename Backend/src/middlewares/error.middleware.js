export const ErrorMiddleware = (err, req, res, next) => {

    console.error(err); // Debugging ke liye (optional but recommended)
try {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(statusCode).json({
        success: false,
        message
    });
} catch (error) {
    next(error)
}
    
};
