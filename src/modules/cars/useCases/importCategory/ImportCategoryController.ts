import { ImportCategoryUseCase } from "./importCategoryUseCase"


class ImportCategoryController {
    constructor(private importCategpryUseCase: ImportCategoryUseCase) { }
    handle(request: Request, response: Response): Response {
        const { file } = request
        console.log(file)
        return response.send()
    }
}

export { ImportCategoryController }