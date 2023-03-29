import { useState } from "react";
import PasswordStrengthMeter from "./components/PasswordStrengthMeter";
import Button from 'react-bootstrap/Button';
function App() {
  const [password, setPassword] = useState("");

  const h3 = () => ({
    marginTop: "250px",
  });
  const p =()=> ({
    marginTop:'50px',
  });
 const messege=()=>{
  alert("is true");
 }
  return (
    <div className="container">
      <div className="col-md-4 mx-auto text-right">
        <h3 className="text-center my-13"> -</h3>

        <div className="form-group mb-1 " style={h3()}>
          <h3
            className="text-center my-13"
            style={{
              marginBottom: "30px",
              fontSize: "50px",
              fontWeight: "bold",
            }}
          >
            Sign Up
          </h3>
         
           <input
            type="password"
            className="form-control shadow-none"
            placeholder="Password"
            style={{ height: "60px",}}
            onChange={(e) => setPassword(e.target.value)}
          />
           <PasswordStrengthMeter password={password} style={p()} />
           <input
            type="text"
            className="form-control shadow-none"
            placeholder="Password Agian"
            style={{ marginBottom: "20px", height: "60px" }}
           
          />
          
        </div>
       
        <div className="text-center">
        <Button onClick={messege}  variant="success"  style={{width:'200px',
                                          height:'60px',
                                          fontWeight:'bold',
                                          fontSize:'30px'}}>Set</Button>{' '}
        </div>
      </div>
    </div>
  );
}

export default App;
