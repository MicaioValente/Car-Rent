

class ImportCategoryController {

    handle(request: Request, response: Response) {
        const { file } = request
        console.log(file)
        return response.send()
    }
}

export { ImportCategoryController }