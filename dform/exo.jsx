import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

const ExoForm = () => {


    const initialValues = {
        firstName: "",
        lastName: "",
        birthday: "",
        phone: "",
        email: "",
        adressNumber: "",
        adressRoad: "",
        adressCity: "",
        adressCode: "",
    }

    const submit = (values, props) => {
        console.log(values);
        props.resetForm();
    };


    const validationSchema = yup.object().shape({
        firstName: yup.string().required().max(50),
        lastName: yup.string().required().max(50),
        birthday: yup.date().required().max(new Date()),
        phone: yup.string().required().length(10),
        email: yup.string().email().required().max(50).min(5),
        adressNumber: yup.string().required().max(50),
        adressRoad: yup.string().required().max(50),
        adressCity: yup.string().required().max(50),
        adressCode: yup.string().required().length(5),
    })
    


    return (
        <div>
            <h1>EXO</h1>

            <Formik initialValues={initialValues} onSubmit={submit} validationSchema={validationSchema}>
                <Form>
                    <div>
                    <label >prenom </label>
                    <Field type="text" name="firstName" />
                    <ErrorMessage name="firstName" />
                    </div>
                    <div>
                    <label >nom</label>
                    <Field type="text" name="lastName" />
                    <ErrorMessage name="lastName" />
                    </div>
                    <div>
                    <label >date de naissance</label>
                    <Field type="date" name="birthday" />
                    <ErrorMessage name="birthday" />
                    </div>
                    <div>
                    <label >tel</label>
                    <Field type="text" name="phone" />
                    <ErrorMessage name="phone" />
                    </div>
                    <div>
                    <label >mail</label>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" />
                    </div>
                    <div>
                    <label >numero de rue</label>
                    <Field type="text" name="adressNumber" />
                    <ErrorMessage name="adressNumber" />
                    </div>
                    <div>
                    <label >rue</label>
                    <Field type="text" name="adressRoad" />
                    <ErrorMessage name="adressRoad" />
                    </div>
                    <div>
                    <label >ville</label>
                    <Field type="text" name="adressCity" />
                    <ErrorMessage name="adressCity" />
                    </div>
                    <div>
                    <label >code postal</label>
                    <Field type="text" name="adressCode" />
                    <ErrorMessage name="adressCode" />
                    </div>
                    <button type="submit">envoyer</button>
                </Form>

            </Formik>
        </div>
    );


}

export default ExoForm;