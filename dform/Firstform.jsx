import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

const Firstform = () => {
//     return (
//         <Formik
//         initialValues= {{ firstName: ""}}
//         onSubmit={(values) => console.log(values)}
//         >
//         <Form>
//             <Field name="firstName"/>
//             <button type="submit">valider</button>
//             </Form>
// </Formik>
//     )

const initValues = {
    productName: "",
    price: 0,
}

const submit = (values, props) => {
    console.log(values);
    props.resetForm();
};

const validationSchema = yup.object().shape({
    productName: yup.string().required("Le nom du produit est obligatoire"),
});

return(
    <Formik initialValues={initValues} onSubmit={submit} validationSchema={validationSchema}>
        <Form>
            <Field type="text" name="productName" placeholder="Nom du produit"/>
            <ErrorMessage name="productName" />

            <Field type="number" name="price" placeholder="Prix du produit" min="0"/>
            <ErrorMessage name="price" />

            <button type="submit">Valider</button>
        </Form>
    </Formik>
  
);
};

export default Firstform;