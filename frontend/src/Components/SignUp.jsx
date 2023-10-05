import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const initialValues = {
    username: '',
    password: '',
};

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required').min(4, 'Username must be at least 4 characters'),
    password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
});

function SignUp() {
    const navigate = useNavigate(); // Initialize useHistory

    const handleSignUp = async (values, { setSubmitting, setErrors, setStatus }) => {
        try {
            const response = await fetch('http://localhost:5555/Signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: values.username,
                    password: values.password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ success: data.status });
                navigate('/login'); // Redirect to login page upon successful signup
            } else {
                setErrors({ submit: data.error });
            }
        } catch (error) {
            console.error('Error:', error);
            setErrors({ submit: 'An error occurred while signing up' });
        }

        setSubmitting(false);
    };
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    Flowbite
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSignUp}>
                        {({ isSubmitting, status }) => (
                            <Form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                    <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    disabled={isSubmitting}>Create an account</button>
                                {status && status.success && <div className="text-success mt-3">{status.success}</div>}
                                {status && status.error && <div className="text-danger mt-3">{status.error}</div>}
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <a href="/" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                                </p>
                            </Form>
                        )}
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp
