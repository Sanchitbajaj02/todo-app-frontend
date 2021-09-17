import React from 'react'
import { BsPlusCircle} from "react-icons/bs";
import { MdDoneAll } from "react-icons/md";
import { FaList} from "react-icons/fa";
const DashBoardComponent = () => {
  return (
    <React.Fragment>
      <div className="container white-box">
        <div className="row">
          <div className="col-md-9 m-0">
            <img
              src={process.env.PUBLIC_URL + "/images/dashBoard.svg"}
              alt="Homepage"
              className="img-fluid m-0"
              width="70%"
              height= "70%"
            />
          </div>
          <div className="col-md-3">
            <button type="button" class="btn btn-primary DashboardButton"><BsPlusCircle size={30} /></button>
            <button type="button" class="btn btn-primary DashboardButton"><MdDoneAll size={30} /></button>
            <button type="button" class="btn btn-primary DashboardButton"><FaList size={30} /></button>
        </div>
      </div>
      </div>
    </React.Fragment>
  )
};

export default DashBoardComponent
