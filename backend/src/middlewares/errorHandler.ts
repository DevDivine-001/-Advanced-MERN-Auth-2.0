import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (error, req, res, next): any => {
    console.error(`Error Occurred on PATH: ${req.path}`, error)

    if (error instanceof SyntaxError) {
        return res.status(400).json({
            message: "Invalid JSON format, place check your request body"
        })
    }

    return res.status(500).json({
        message: "Internal server Error",
        error: error?.message || "UnKnown error occurred"
    })
}

