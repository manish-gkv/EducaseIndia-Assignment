import { addSchoolService, listSchoolsService } from "../services/schoolService.js";
export async function addSchoolController(req, res) {
    try {
        const schoolData = req.body;
        if (!schoolData.name || !schoolData.address) {
            return res.status(400).send({ success: false, error: "Name and address are required" });
        }
        if (typeof schoolData.latitude !== 'number' || typeof schoolData.longitude !== 'number') {
            return res.status(400).send({ success: false, error: "Latitude and longitude must be numbers" });
        }
        const result = await addSchoolService(schoolData);
        res.status(201).send({ success: true, message: "School added successfully"});
    } catch (error) {
        console.error("Error adding school:", error);
        res.status(500).send({ success: false, error: "Failed to add school" });
    }
}

export async function listSchoolsController(req, res) {
    try {
        let { latitude, longitude } = req.query;
        latitude = parseFloat(latitude);
        longitude = parseFloat(longitude);
        if (isNaN(latitude) || isNaN(longitude)) {
            return res.status(400).send({ success: false, error: "Invalid latitude or longitude" });
        }
        if (!latitude || !longitude) {
            return res.status(400).send({ success: false, error: "Latitude and longitude are required" });
        }
        if (typeof latitude !== 'number' || typeof longitude !== 'number') {
            return res.status(400).send({ success: false, error: "Latitude and longitude must be numbers" });
        }
        const result = await listSchoolsService(latitude, longitude);
        res.status(200).send({ success: true, message: "Schools fetched successfully", data: result });
    } catch (error) {
        console.error("Error listing schools:", error);
        res.status(500).send({ success: false, error: "Failed to list schools" });
    }
}