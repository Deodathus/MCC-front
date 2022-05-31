import {useRoutes} from "react-router";
import ItemCreateForm from "./components/minecraft/item/crud/ItemCreateForm";
import ItemContent from "./components/minecraft/item/ItemContent";
import ItemLayout from "./components/minecraft/item/ItemLayout";
import IndexLayout from "./components/IndexLayout";
import ItemShowContent from "./components/minecraft/item/crud/ItemShowContent";
import RecipeContent from "./components/minecraft/recipe/RecipeContent";
import RecipeCreateForm from "./components/minecraft/recipe/crud/RecipeCreateForm";
import {useSelector} from "react-redux";

export default function Router() {
    const version = useSelector(state => {
        return state.data.general.version;
    });
    const year = useSelector(state => {
        return state.data.general.year;
    });

    const generalData = {
        version,
        year
    };

    return useRoutes([
        {
            path: '/',
            element: <IndexLayout generalData={generalData} />,
        },
        {
            path: '/items',
            element: <ItemLayout generalData={generalData} />,
            children: [
                { path: '', element: <ItemContent /> },
                { path: 'create', element: <ItemCreateForm /> },
                { path: ':itemId', element: <ItemShowContent /> }
            ]
        },
        {
            path: '/recipes',
            element: <ItemLayout generalData={generalData} />,
            children: [
                { path: '', element: <RecipeContent /> },
                { path: 'create', element: <RecipeCreateForm /> }
            ]
        }
    ]);
}