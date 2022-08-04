import React from "react";
import { Link } from "react-router-dom";

export const MemberCardList = ({ id, login, organization, avatar_url, url  }) => {
    return (
        <div className="col">

            <div className="card">
                <div className="row no-gutter">

                    <div className="col-4">
                        <img src={avatar_url} className="card-img" alt={login} />
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{login}</h5>
                            <p className="card-text">ID: {id}</p>
                            <p className="card-text">{organization}</p>
                            <p className="card-text"><small>{url}</small></p>

                            <Link to={`/members/${id}`}>Leer +...</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}