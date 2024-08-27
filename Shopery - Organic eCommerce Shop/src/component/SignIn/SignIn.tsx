import { Link} from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import Button from "../Reusable component/buttons";
import { ChangeEvent, FormEvent, useState } from "react";
import { validateForm } from "../../services/validation";
import InputField from "../Reusable component/input";


interface ValidationResult {
  email: { state?: "success" | "warning" | "error"; message: string };
  password: { state?: "success" | "warning" | "error"; message: string };

}

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
   
  });

  const [validation, setValidation] = useState<ValidationResult>({
    email: { state: undefined, message: "" },
    password: { state: undefined, message: "" },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
   
    setFormData((prevData) => {
      const updatedFormData = {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
     
      const newValidation = validateForm(updatedFormData);
      setValidation(newValidation);

      return updatedFormData;
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newValidation = validateForm(formData);
    setValidation(newValidation);

    const formIsValid = Object.values(newValidation).every(
      (field) => field.state === "success",
    );

    if (formIsValid) {
      console.log("Form Data:", formData);
    }
  };

  return (
    <section className="mt-[80px] flex flex-col items-center justify-center">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex max-h-[540px] w-[33%] flex-col items-center shadow-lg  gap-4"
        noValidate
      >
        <h1 className="mt-6 text-Heading05 font-semibold">Sign in</h1>
        <InputField
          name="email"
          onChange={handleChange}
          value={formData.email}
          placeholder="Email"
          type="email"
          className="h-12 w-[370px] rounded-xl border-[1px] px-3 "
          validationState={validation.email.state}
          validationMessage={validation.email.message}
        />
        <InputField
          name="password"
          onChange={handleChange}
          value={formData.password}
          placeholder="Password"
          type="password"
          className="h-12 w-[370px] rounded-xl border-[1px] px-3"
          validationState={validation.password.state}
          validationMessage={validation.password.message}
        />
       
        <div className="mb-5 flex w-[85%] justify-between text-BodySmall font-regular text-gray-600">
          <label className="flex items-center">
            <input
              name="termsAccepted"
              type="checkbox"
              onChange={handleChange}
              className="mr-2 h-5 w-5"
            />
           Remember me
          </label>
         <p>Forget Password</p>
       
        </div>

        <Button className="mb-4 w-[375px]">Create Account</Button>

        <p className="text-BodySmall font-regular mb-5">
        Don’t have account?{" "}
          <Link to={ROUTES.register} className="font-medium text-gray-900">
            Register
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
