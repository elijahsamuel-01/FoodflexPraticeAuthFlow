"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const mainError_1 = require("./error/mainError");
const errorHandler_1 = require("./error/errorHandler");
const userRoute_1 = __importDefault(require("./route/userRoute"));
const mainApp = (app) => {
    try {
        app.use("api/v1", userRoute_1.default);
        app.set("view-engine", "ejs");
        app.get("/views", (req, res) => {
            try {
                const user = {
                    name: "Samuel",
                    email: "samuelomotayo@gmail.com",
                    _id: "43223dj44",
                    token: 666777,
                };
                return res.status(200).render("index.ejs", { user });
            }
            catch (error) {
                return res.status(404).json({
                    message: "Error",
                });
            }
        });
        app.get("/", (req, res) => {
            try {
                return res.status(200).json({
                    message: "Hello",
                });
            }
            catch (error) {
                return res.status(404).json({
                    message: "Invalid",
                });
            }
        });
        app.all("*", (req, res, next) => {
            next(new mainError_1.mainError({
                name: "Route Error",
                message: `This route ${req.originalUrl} does not exist`,
                status: mainError_1.HTTP.BAD_REQUEST,
                success: false,
            }));
        });
        app.use(errorHandler_1.errorHandler);
    }
    catch (error) {
        return error;
    }
};
exports.mainApp = mainApp;
