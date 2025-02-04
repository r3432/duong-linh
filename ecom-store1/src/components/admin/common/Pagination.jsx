import React from "react";

const PaginationDashboad = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center mb-0">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">Prev</span>
          </a>
        </li>
        <li className="page-item active" aria-current="page">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            4
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationDashboad;
