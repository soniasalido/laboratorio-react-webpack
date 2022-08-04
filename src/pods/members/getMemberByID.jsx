
import React from 'react';
import { members } from '../../data/members.MockData.js';


export const GetMemberByID = ( id ) => {

    //const miId = parseInt(id);
    //Menudo atasque!!!! --> con el === no funciona, ya que id es un string y un number ---> no son iguales
    const obj = members.filter(member => member.id == id);
    console.log("--que coño devuelvo---",obj);

    return obj;
}

