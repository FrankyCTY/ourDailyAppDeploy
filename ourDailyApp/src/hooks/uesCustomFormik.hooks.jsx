import React from "react";
import {useFormik} from "formik";

export default function useCustomFormik() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
        },
        onSubmit: (e) => {},
    })

    return {formik};
}