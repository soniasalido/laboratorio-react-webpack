
import React from 'react';
import { members } from '../../data/members.MockData.js';

// Ejemplo de cómo obtener los datos de una organización -->
// Los datos están un array de objetos en el documento members.MockData.js

export const GetMembersMockDataByOrganization = (organization ) => {
    const validOrganization = ['lemoncode', 'orangecode'];
    if (!validOrganization.includes(organization)) {
        return null;
    }else {
        return members.filter(member => member.organization === organization);
    }

}