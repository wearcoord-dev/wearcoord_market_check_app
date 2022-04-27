import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { FC, memo } from "react";
import { ShowItems } from "../organisms/items/ShowItems";

export const Items: FC = memo(() => {
    return (
        <Tabs
            isFitted
            variant="soft-rounded"
            colorScheme="blue"
            style={{ paddingTop: "10px" }}
        >
            <TabList mb="1em">
                <Tab>男性向け</Tab>
                <Tab>女性向け</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <ShowItems gender={"male"} />
                </TabPanel>
                <TabPanel>
                    <ShowItems gender={"female"} />
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
});
