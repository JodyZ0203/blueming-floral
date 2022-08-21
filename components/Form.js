
import { Icon, Field, Button } from "@chakra-ui/react"
import { FaEnvelope, FaPaperPlane } from "react-icons/fa"

const Form = ({ errorMessage, onSubmit }) => (
   

    <form onSubmit={onSubmit}>
      <h3 className='form-header'>Login</h3>
      <label>
        <span>Email</span>
        <input type="email" placeholder="Enter your email" name="email" required />
      </label>
  
      <div className="submit">
        <button type="submit">Sign Up / Login</button>
      </div>
      
      {errorMessage && <p className="error">{errorMessage}</p>}
  
      <style jsx>{`
        form
        .form-header {
            font-size: 22px;
            margin: 25px 0;
            font-weight: bold
          }
        label {
          display: flex;
          flex-flow: column;
          text-align: center;
        }
        label > span {
          font-weight: 600;
        }
        input {
          padding: 8px;
          margin: 0.3rem 0 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .submit {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          justify-content: space-between;
        }
        .submit > a {
          text-decoration: none;
        }
        .submit > button {
          padding: 0.5rem 2rem;
          cursor: pointer;
          background: #B9BFFF;
          border: 1px solid #ccc;
          border-radius: 4px;
          align-items: center;
        }
        .submit > button:hover {
          border-color: #888;
        }
        .error {
          color: brown;
          margin: 1rem 0 0;
        }
      `}</style>
    </form>
  )
  
export default Form
