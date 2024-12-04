import { ErrorRequestHandler, NextFunction } from "express";
import { HTTPSTATUS } from "../config/http.config";

export const errorHandler: ErrorRequestHandler = (error, req, res, next: NextFunction): any => {
    console.error(`Error Occurred on PATH: ${req.path}`, error)

    if (error instanceof SyntaxError) {
        return res.status(HTTPSTATUS.BAD_REQUEST).json({
            message: "Invalid JSON format, place check your request body"
        })
    }

    return res.status(HTTPSTATUS.INTERNAL_SERVER_ERROR).json({
        message: "Internal server Error",
        error: error?.message || "UnKnown error occurred"
    })
}

