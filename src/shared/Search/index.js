import React from "react";

const Search = ({ defaultLocation }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 p-0">
                    <div className=" w-100 d-flex">
                        <input className="form-control mr-2" type="text" defaultValue={defaultLocation} />
                        <button type="submit" className="btnLogin w-25"> Consultar </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Search;
