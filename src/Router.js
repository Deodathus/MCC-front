import {useRoutes} from "react-router";
import ItemCreateForm from "./components/minecraft/item/item/crud/ItemCreateForm";
import ItemContent from "./components/minecraft/item/ItemContent";
import ItemLayout from "./components/minecraft/item/ItemLayout";
import IndexLayout from "./components/IndexLayout";
import ItemShowComponent from "./components/minecraft/item/item/crud/ItemShowComponent";
import RecipeContent from "./components/minecraft/item/RecipeContent";
import RecipeCreateForm from "./components/minecraft/item/recipe/crud/RecipeCreateForm";

export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: <IndexLayout/>,
        },
        {
            path: '/items',
            element: <ItemLayout />,
            children: [
                { path: '', element: <ItemContent /> },
                { path: 'create', element: <ItemCreateForm /> },
                { path: ':itemId', element: <ItemShowComponent /> }
            ]
        },
        {
            path: '/recipes',
            element: <ItemLayout />,
            children: [
                { path: '', element: <RecipeContent /> },
                { path: 'create', element: <RecipeCreateForm /> }
            ]
        }
    ]);
}