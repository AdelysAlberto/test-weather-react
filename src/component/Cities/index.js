import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
const Cities = () => {
    return (
        <div className="col-md-12 col-lg-4 p-0">
            <div className="title-sub-cities bg-card p-3">
                <div className="font-weight-bolder">Principales provincias</div>
                <div className="p-2 d-flex flex-column">
                    <div className="d-flex flex-row justify-content-between mb-2">
                        <div>Buenos Aires, Argentina</div>
                        <div>consultar <AiOutlineSearch /> </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between mb-2">
                        <div>Cordoba, Argentina</div>
                        <div>consultar <AiOutlineSearch /> </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between mb-2">
                        <div>Bariloche, Argentina</div>
                        <div>consultar <AiOutlineSearch /> </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between mb-2">
                        <div>Mendoza, Argentina</div>
                        <div>consultar <AiOutlineSearch /> </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Cities;
