import applications from "../models/application.js";
import { StatusCodes, getReasonPhrase } from "http-status-codes";


export const getAllApplication=(req,res)=>{
    if(!applications.length){
        res.logger.warn("no application data");
        return req.status(StatusCodes.NO_CONTENT).json({message:getReasonPhrase(StatusCodes.NO_CONTENT)})
    }
    req.logger.info("Fetched scholarships", { count: applications.length });
    res.status(StatusCodes.OK).json(applications);
}

