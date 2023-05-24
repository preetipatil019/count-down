import {useForm} from "react-hook-form"
const UserForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: { firstName: "" ,lastName:""} });
    console.log(errors)
    return (<div>
        User Form
        <form onSubmit={handleSubmit((data)=>{ 
console.log(data)
        })
    }>
            <input {...register("firstName", { required: "this is required" })} placeholder="First Name..." />
            <p>{errors.firstName?.message}</p>
            <input {...register("lastName", { required: "this is required", minLength: { value: 4, message: "length minimum 4" } })} placeholder="Last Name..." />
            <p>{errors.lastName?.message}</p>
            {/* <input type="text" name="email" placeholder="Email..." />
            <input type="text" name="age" placeholder="Age..." />
            <input type="text" name="password" placeholder="Password..." />
            <input type="text" name="confirmPassword" placeholder="Confirm Password..." /> */}
            <input type="submit" id="submit"/>
        </form>
    </div>)
}
export default UserForm;