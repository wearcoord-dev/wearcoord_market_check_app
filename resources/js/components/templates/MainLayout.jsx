import { memo } from "react";
import { Header } from "../organisms/layouts/Header";
import { Navbar } from "../organisms/layouts/Navbar";

export const MainLayout = memo(() => {
    return (
        <>
            <Header></Header>
            <p>layoutです</p>
            <Navbar></Navbar>
        </>
    )
})