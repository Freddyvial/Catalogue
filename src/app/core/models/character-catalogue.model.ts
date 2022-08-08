export interface CharacterCatalogueModel {
    id?: number;
    name?: string,
    status?: string,
    species?: string,
    type?: string,
    gender?: string,
    origin?: {
        name: string,
        url: string
    },
    location?: {
        name: string,
        url: string
    },
    image?: string,
    episode?: Array<string>,
    url?: string,
    created?: string
}
export interface CharacterCatalogueFilter {
    name?: string;
    status?: string;
    species?: string;
    gender?: string;
}
export interface infoCharacterCatalogue {
    count?: number;
    next?: string;
    pages?: number;
    prev?: string;
}