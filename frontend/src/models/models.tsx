export interface IShortRecipes {
    id: string
    photo: string
    name: string
    author: string
    count_likes: number
    likes: string[]
}

export interface IDetailRecipe {
    id: string
    photo: string
    name: string
    description: string
    categories: string[]
    steps: string[]
    author: string
    likes: string[]
    count_likes: number
    favorite: string[]
}

export interface ISearchRecipes {
    id: string
    photo: string
    name: string
    count_likes: number
    likes: string[]
    score: number
}

export interface IMenuRecipes {
    Breakfast: ISearchRecipes[]
    Lunch: ISearchRecipes[]
    Dinner: ISearchRecipes[]
}

export interface IProfile {
    username: string
    first_name: string
    last_name: string
    email: string
}
