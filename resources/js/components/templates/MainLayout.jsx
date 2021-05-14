import { memo } from "react";
import { Header } from "../organisms/layouts/Header";
import { Navbar } from "../organisms/layouts/Navbar";

export const MainLayout = memo((props) => {
    const { children } = props;

    return (
        <>
            <Header></Header>
            {children}
            <Navbar></Navbar>
        </>
    )
})