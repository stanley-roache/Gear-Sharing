export function nameSort(a, b) {
    return (a.name.toUpperCase() > b.name.toUpperCase())
        ? 1
        : -1
}