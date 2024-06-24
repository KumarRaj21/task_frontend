import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Chart from './Chart';
function App() {
  const [Data,setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);

//   useEffect(()=>{
//     axios.get('https://task-backend-3-cdbj.onrender.com/api/data')
//     .then(res =>{
//       setdata(res.data);
//       console.log(Data)
//       setloading(false);
//     }).catch(err =>{
//       seterror(err)
//       setloading(false)
//     });
// }, []);
//   if(loading) return <div>loading</div>
//    if(error) return <div>Error : {error.message}</div>
return (
<div className='app-container'>
  <div className='transition-table'>
    <div className='table-head'>
      <p>Transition Board</p>
      <div className='table-head-2'>
        <input type='text' placeholder='search transitions'/>
        <select >
          <option>march</option>
          <option>april</option>
          <option>may</option>
          <option>june</option>
          <option>july</option>
          <option>aug</option>
          <option>oct</option>
          <option>sept</option>
          <option>nov</option>
          <option>dec</option>
          <option>Jan</option>
          <option>feb</option>
        </select>
      </div>
      </div>
    <div className='table'>
    <table >
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>category</th>
            <th>sold</th>
            <th>Image</th>
        </tr>
        {/* {Data.map((item,index)=>{
          return <tr key={index}>
            <td>{item.id}</td>
            <td>19</td>
            <td>Male</td>
            <td>19</td>
            <td>Male</td>
            <td>19</td>
            <td>Male</td>
          </tr>
        })} */}

        
        <tr>
            <td>Anom</td>
            <td>19</td>
            <td>Male</td>
            <td>19</td>
            <td>Male</td>
            <td>19</td>
            <td>Male</td>
        </tr>
        <tr>
            <td>Megha</td>
            <td>19</td>
            <td>Female</td>
            <td>19</td>
            <td>Male</td>
            <td>19</td>
            <td>Male</td>
        </tr>
        <tr>
            <td>Subham</td>
            <td>25</td>
            <td>Male</td>
            <td>19</td>
            <td>Male</td>
            <td>19</td>
            <td>Male</td>
        </tr>
    </table>
    </div>
    <div className='pagination'>
      <p> page no : 1</p>
      <div className='buttons'>
        <button>Previous</button>
        <button>Next</button>
      </div>
      <p>per page :10</p>
    </div>
  </div>
  <div className='app-2'>
    <div className='statistics'>
      <div className='statistics-head'>statistics - June</div>
      <div className='statistics-body'>
        <p>Total Sale -- </p>
        <p>Total Sold Item -- </p>
        <p>Total Not Sold Item --</p>
      </div>
    </div>
   <div className='chart'>
    <Chart/>
   </div>
  </div>
  
</div>
  );
}

export default App;
