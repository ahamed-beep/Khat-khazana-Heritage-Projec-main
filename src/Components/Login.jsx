import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginuser } from './Redux/user';
import { Link, useNavigate } from 'react-router';
import Nax from './Nax';
import toast from 'react-hot-toast';

function Login() {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
const [showPwd, setShowPwd] = useState(false);

const formHandler = async (e) => {
  e.preventDefault();
  setLoading(true);

  const res = await dispatch(loginuser({ email, password }));

  if (res.payload.success) {
    toast.success(res.payload.message);
    setEmail('');
    setPassword('');

    localStorage.setItem('token', res.payload.token);
    localStorage.setItem('userId', res.payload.id);
    localStorage.setItem('userRole', res.payload.role);

    if (res.payload.role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/user');
    }
  } else {
    toast.error(res.payload.message );
  }

  setLoading(false);
};





  return (
    <div>
      <Nax/>
    <section className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 font-poppins">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-3xl font-bold tracking-tight text-black">
          Login to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={formHandler}
          className="space-y-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder:text-gray-400 focus:border-black focus:ring-0"
              />
          </div>

       <div>
  <label htmlFor="password" className="block text-sm font-medium text-black">
    Password
  </label>

  <div className="mt-2 relative">
    <input
      id="password"
      type={showPwd ? "text" : "password"}          // 👈 toggle type
      autoComplete="current-password"
      required
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2
                 text-sm text-black placeholder:text-gray-400 focus:border-black focus:ring-0"
    />

    <button
      type="button"
      onClick={() => setShowPwd(!showPwd)}
      className="absolute inset-y-0 right-3 flex items-center text-gray-600"
      tabIndex={-1}
    >
      {showPwd ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
             viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M3 3l18 18M10 6.343a9.003 9.003 0 014 0m6.26 3.952A8.975 8.975 0 0121 12c-1.657 3.333-5 6-9 6a8.975 8.975 0 01-4.26-1.048M9 9.828A3 3 0 0012 15a3 3 0 002.122-.879M15 15l6 6" />
        </svg>
      ) : (
        /* eye icon */
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
             viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z" />
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )}
    </button>
  </div>
</div>
 <Link to='/forgot' className="text-sm font-semibold text-black underline hover:text-gray-800">
                Forgot password
              </Link>
         <button
  type="submit"
  disabled={loading}
  className={`flex mt-7 w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow
    ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-gray-800"}
    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black`}
>
  {loading ? "Logging in..." : "Submit"}
</button>

        </form>

        <p className="mt-8 text-center text-sm text-gray-600">
          Not Have a Account?{' '}
          <Link to="/sign" className="font-semibold text-black underline hover:text-gray-800">
            Signin
          </Link>
        </p>
      </div>
    </section>
              </div>
  );
}

export default Login;
