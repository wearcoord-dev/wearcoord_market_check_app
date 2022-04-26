import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { FC, memo } from "react";
import { ItemCard } from "./ItemCard";

type Props ={
    gender: string;
}

export const ShowItems: FC<Props> = memo((props) => {
const {gender} = props;

    return (
        <Tabs
            isFitted
            variant="soft-rounded"
            colorScheme="blue"
            // style={{ paddingTop: "10px" }}
        >
            <TabList>
                <Tab>トップス</Tab>
                <Tab>パンツ</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <ItemCard gender={gender} type={"tops"} />
                </TabPanel>
                <TabPanel>
                    <ItemCard gender={gender} type={"pants"} />
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
});
