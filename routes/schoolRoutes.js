import { Router } from "express";

import { addSchoolController, listSchoolsController } from "../controllers/schoolControllers.js";

const router = Router();

router.post('/addSchool', addSchoolController);
router.get('/listSchools', listSchoolsController);

export default router;