
import React, { useState, useEffect } from "react";
import Axios from "axios";

export const GetRicks = () => {
    const [list, setList] = useState([]);

    console.log("www");
    useEffect(() => {
        Axios({
            url: "https://rickandmortyapi.com/api/character/?name=rick&status=alive",
        })
            .then((response) => {
                setList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [setList]);

    console.log ("list", list);
    return (
        <div className="App">
            <div>
                {list.map((item) => (
                    <div key={item.id}>
                        <h3>{item.url}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}