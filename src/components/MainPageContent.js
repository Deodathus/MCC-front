import {SimpleGrid} from "@chakra-ui/react";
import DevelopmentMapComponent from "./DevelopmentMapComponent";
import PatchNoteComponent from "./PatchNoteComponent";

export default function MainPageContent() {
    return (
        <>
            <SimpleGrid columns={{sm: 1, md: 2, lg: 2}}>
                <DevelopmentMapComponent />
                <PatchNoteComponent />
            </SimpleGrid>
        </>
    );
}
