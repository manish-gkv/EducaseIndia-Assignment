import crudRepository from "./crudRepository.js"
import connection from "../../config/mysqldb.js";
const schoolRepository = {
    ...crudRepository(connection),
};

export default schoolRepository;