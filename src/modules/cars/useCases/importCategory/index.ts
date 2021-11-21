import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./importCategoryUseCase";


const importCategoryUsecase = new ImportCategoryUseCase()
const importCategoryController = new ImportCategoryController(importCategoryUsecase)

export { importCategoryController }