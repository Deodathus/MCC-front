import {useRoutes} from "react-router";
import IndexLayout from "./components/IndexLayout";
import ItemCreateForm from "./components/minecraft/item/item/crud/ItemCreateForm";
import ItemContent from "./components/minecraft/item/ItemContent";

export default function Router() {
    const contentCss = {
        minHeight: 'calc(100vh - 80px)',
        width: '100%',
        maxWidth: '100%',
    };

    return useRoutes([
        {
            path: '/',
            element: <IndexLayout contentCss={contentCss} />,
            children: [
                {
                    path: 'items',
                    element: <ItemContent contentCss={contentCss} />,
                    children: [
                        { path: 'create', element: <ItemCreateForm contentCss={contentCss} /> }
                    ]
                }
            ]
        }
    ]);
}