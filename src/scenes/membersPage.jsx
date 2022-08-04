import React from 'react';
import {MembersList} from "../pods/members/membersList";
import { MembersLayout } from "../layouts/MembersLayout";
import { Typography } from "@mui/material";


export const MembersPage = () => {
    return (
        <>
            <MembersLayout title="Members">
                <div className="container">
                    <Typography variant="h2">Lemoncode:</Typography>
                    <MembersList organization={'lemoncode'} />
                </div>
            </MembersLayout>

        </>
    )
}