export function createBodyStructure(structure){
    let body = new FormData()
    structure.forEach(field => {
        body.append(field.key, field.value)
    })
    return body
}