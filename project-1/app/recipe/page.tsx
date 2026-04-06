import RecipeList from "@/components/recipe-list";

async function getRecipes() {
    try {
        const apiResponse = await fetch('https://dummyjson.com/recipes')
        const data = await apiResponse.json()
        return data.recipes
    } catch (error) {
        throw new Error('Failed to fetch recipes')

    }
}

export default async function RecipePage() {
    const recipesList = await getRecipes()
  return <RecipeList recipes={recipesList} />
}