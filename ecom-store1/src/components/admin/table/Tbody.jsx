import React from "react";
import EditButtonDashboad from "./EditButton";
import DeleteButtonDashboad from "./DeleteButton";
import { Link } from "react-router-dom";

const TbodyDashboad = ({ data, removeItem }) => {
  return (
    <tbody>
      {data.length > 0 &&
        data.map((product) => {
          // console.log(product)
          return (
            <tr key={product.id}>
              <td scope="row">{product.id}</td>
              <td scope="row">{product.title}</td>
              <td scope="row">{product.content}</td>
              <td className="text-danger" scope="row">
                {product.price} Vnd
              </td>
              <td scope="row">
                <Link to={"/dashboad/product/edit"}>
                  <EditButtonDashboad />
                </Link>
              </td>
              <td scope="row">
                <DeleteButtonDashboad id={product.id} removeItem={removeItem} />
              </td>
            </tr>
          );
        })}
    </tbody>
  );
};

export default TbodyDashboad;
