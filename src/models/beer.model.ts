export interface Beer {
    id: string;
    breweryId: string;
    name: string;
    style: string;
    substyle?: string;
    abv: number;
    ibu: number;
    description?: string;
    imagePath?: any;
    rating: number;
}

export interface CreateBeer {
    breweryId: string;
    name: string;
    style: string;
    substyle?: string;
    abv: string;
    ibu: string;
    description?: string;
    image: any;
}

export interface UpdateBeer {

}