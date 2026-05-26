import {React, useState, useEffect} from "react";
import { positions } from "../data";
import axios from 'axios';


const Positions = () => {
  const [positionsData, setPositionsData] = useState([]);

  useEffect(()=>{
    const fetchPositionsData = async () =>{
      const positionsRes = await axios.get("http://localhost:8000/api/position/allpositions");

      
      setPositionsData(positionsRes.data)
    }

    fetchPositionsData();
  },[])

  return (
    <div className="p-4">
      <h3 className="mb-4">Positions ({positionsData.length})</h3>

      <div className="table-responsive border rounded bg-white shadow-sm">
        <table className="table table-hover mb-0">
          <thead className="table-light">
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th className="text-end">Qty.</th>
              <th className="text-end">Avg.</th>
              <th className="text-end">LTP</th>
              <th className="text-end">P&L</th>
              <th className="text-end">Chg.</th>
            </tr>
          </thead>
          <tbody>
            {positionsData.map((position, index) => {
              const curValue = position.price * position.qty;
              const isProfit = curValue - position.avg * position.qty >= 0.0;
              const profClass = isProfit ? "text-success" : "text-danger";
              const dayClass = position.isLoss ? "text-danger" : "text-success";
              return (
                <tr key={index}>
                  <td>
                    <span className="badge bg-light text-muted fw-normal">{position.product}</span>
                  </td>
                  <td className="fw-medium">{position.name}</td>
                  <td className="text-end">{position.qty}</td>
                  <td className="text-end">{position.avg.toFixed(2)}</td>
                  <td className="text-end">{position.price.toFixed(2)}</td>
                  <td className={`text-end fw-medium ${profClass}`}>
                    {(curValue - position.avg * position.qty).toFixed(2)}
                  </td>
                  <td className={`text-end ${dayClass}`}>{position.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Positions;
