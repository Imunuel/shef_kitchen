export interface ITopRecipes{
    id: string,
    photo: string,
    name: string,
    author: string
    count_likes: number,
}

export interface IFavoriteRecipes{
    id: string,
    photo: string,
    name: string,
    author: string
    count_likes: number,
}

export interface IDetailRecipe{
    id: string,
    photo: string,
    name: string,
    description: string,
    categories: string[],
    steps: string[],
    author: string
    likes: string[]
    count_likes: number
    favorite: string[],


}