import { useMemo, useState, useEffect } from "react";
import React from "react";
// import { GetMembersMockDataByOrganization } from "./getMembersMockDataByOrganization.jsx";
// import { useMembersApiByOrganization }  from "./useMembersApiByOrganization.js";
import { MemberCardList } from "./memberCardList.jsx";


export const MembersList = ({ organization }) => {
    const [members , setMembers ] = useState([])
    const gitHubMembersUrl =  `https://api.github.com/orgs/${organization}/members`;


    useEffect( () => {
        fetch(gitHubMembersUrl)
            .then(response => response.json())
            .then(data => {
                setMembers(data);
            }).catch(error => {
                console.log(error);
            }
        );
    }, [organization]);


    return (
            <div className="container mt-5 animate__animated animate__fadeIn">
                <h1>Memberssss</h1>
                <hr />

                <div className="row rows-cols-1 row-cols-md-3 g-3">
                    {
                        (members !== null)
                            ? members.map(member => (<MemberCardList key={member.id} {...member} />))
                            : ` No hay Miembros en la api de github la organización "${organization}"`
                    }
                </div>

            </div>
      );
}