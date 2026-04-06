import { RecipeDetailsItem } from "@/components/recipe-details"

 
async function getRecipeDetails(details: string) {
    try {
        const apiResponse = await fetch(`https://dummyjson.com/recipes/${details}`)     
        const data = await apiResponse.json()
        return data
    } catch (error) {
        throw new Error('Failed to fetch recipe details')
    }  
}
export default async function RecipeDetailsPage({params}:any) {
    const param = await params
    const recipeDetails = await getRecipeDetails(param.details)
    return <RecipeDetailsItem recipedetails={recipeDetails} />
}