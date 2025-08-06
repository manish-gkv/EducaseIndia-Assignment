import {schoolRepository} from "../repository/mySQLRepository.js";
import { getDistance } from "./getDistanceService.js";
export async function addSchoolService(schoolData) {
    try{
        const result = await schoolRepository.create("schools", schoolData);
        return result;
    } catch (error) {
        console.error("Error adding school:", error);
        throw new Error("Failed to add school");
    }
}

export async function listSchoolsService() {
    try {
        const result = await schoolRepository.readAll("schools");
        result.sort((a, b) => {
            const distanceA = getDistance({ latitude: a.latitude, longitude: a.longitude }, { latitude: 0, longitude: 0 });
            const distanceB = getDistance({ latitude: b.latitude, longitude: b.longitude }, { latitude: 0, longitude: 0 });
            return distanceA - distanceB;
        });
        return result;
    } catch (error) {
        console.error("Error listing schools:", error);
        throw new Error("Failed to list schools");
    }
}
