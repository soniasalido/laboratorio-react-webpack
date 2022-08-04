import React, {useContext} from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import {MembersPage} from "../../scenes/membersPage";
import {PrivateNavBar} from "../../layouts/privateNavBar.jsx";
import {SearchPage} from "../../scenes/searchPage";
import {AboutPage} from "../../scenes/aboutPage";
import {MemberDetails} from "../../pods/members/memberDetails.jsx";
import { NoPage} from "../../scenes/noPage.jsx";


export const PrivateRoutes = () => {

    return (
        <>
            <PrivateNavBar />
            <Routes>
                <Route path="/" element={<Navigate to="/members" />} />
                <Route path="search" element={<SearchPage />} />
                <Route path="members" element={<MembersPage />} />
                <Route path="members/:id" element={<MemberDetails />} />
                <Route path="/*" element={<NoPage />} />
            </Routes>
        </>
    )
}