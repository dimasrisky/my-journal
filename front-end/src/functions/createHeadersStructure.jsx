export function createHeadersStructure(structure) {
    let headers = new Headers()
    structure.forEach(field => {
        headers.append(field.key, field.value)
    });
    return headers
}
