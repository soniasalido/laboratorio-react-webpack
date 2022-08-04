import { Navigate, useNavigate, useParams} from "react-router-dom";
import { GetMemberByID } from "./getMemberByID"
import { useMemo} from "react";
import { MembersLayout} from "../../layouts/MembersLayout.jsx";


export const MemberDetails = () => {

    const { id } =useParams();
    const navigate = useNavigate();



    // Usamos el hook useMemo para memorizar el valor del objeto para que si tenía los datos del miembro de una petición anterior (el id),
    // entonces no vuelva hacer una nueva petición. Si cambia el id, entonces se vuelve a hacer una nueva petición.
    const member = useMemo( () => GetMemberByID( id ), [ id ]);
    console.log("xpotax", member);



    // Función que para ir a la página anterior en el historial de navegación
    const onNavigateBack = () => {
        navigate(-1);
    }


    //Verificamos que exista el miembro
    if(member.length === 0) {
        return <>404 - El miembro NO Existe</>
    }

    return (
        <>
            <MembersLayout title="Members">
                <div className="container mt-5">
                    <h1>Member Details {member[0].name}</h1>
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <img
                                className="img-fluid animate__animated animate__fadeInLeft"
                                src={member[0].avatar_url}
                                alt={member[0].login}
                            />

                        </div>

                        <div className="col-md-6">
                            <h3>{member[0].login}</h3>
                            <a href={member[0].html_url} className="btn btn-warning btn-sm">
                                Ver Github Profile
                            </a>
                            <hr />
                            <button
                                className="btn btn-dark"
                                onClick={ onNavigateBack }
                            >
                                Volver
                            </button>

                        </div>

                    </div>
                </div>
            </MembersLayout>

        </>
    );
}