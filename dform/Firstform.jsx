import { Field, Form, Formik } from "formik";

const Firstform = () => {
    return (
        <Formik
        initialValues= {{ firstName: ""}}
        onSubmit={(values) => console.log(values)}
        >
        <Form>
            <Field name="firstName"/>
            <button type="submit">valider</button>
            </Form>
</Formik>
    )
}

export default Firstform;