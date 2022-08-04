
import React from 'react';
import {useEffect} from "react";

// Ejemplo de cómo obtener los datos de una organización -->
// Los datos están una API en la url de github

export const useMembersApiByOrganization = (organization ) => {
    const gitHubMembersUrl =  `https://api.github.com/orgs/${organization}/members`;

    const [ members, setMembers ] = React.useState([]);


    useEffect(() => {
        fetch(gitHubMembersUrl)
            .then(response => response.json())
            .then(data => {
                setMembers(data);
            }).catch(error => {
                console.log(error);
            }
            );
    }, []);

    return members;
}