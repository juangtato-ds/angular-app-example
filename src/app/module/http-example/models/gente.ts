export interface Gente {
    name: string,
    gender: string,
    height: string,
    mass: string,
    homeworld: string,
    species: string[],
    born: string
}

export interface GenteBackend {
    name: string,
    gender: string,
    height: string,
    mass: string,
    homeworld: string,
    species: string[],
    birth_year: string
}
