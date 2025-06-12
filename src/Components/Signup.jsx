import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router';
import { signinuser, googlelogin } from './Redux/user';  // dono thunks import karo
import Nax from './Nax';
import toast from 'react-hot-toast';

function Signinfrom() {
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [password, setPass]   = useState('');
const [loading, setLoading] = useState(false);
const [showPwd, setShowPwd] = useState(false);   // 👁️ toggle



  const dispatch = useDispatch();
  const navigate = useNavigate();

const formhandler = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await dispatch(signinuser({ name, email, password })).unwrap();

    const { token, id, role, message } = response;

    localStorage.setItem("token", token);
    localStorage.setItem("userId", id);
    localStorage.setItem("userRole", role);

    setName("");
    setEmail("");
    setPass("");

    toast.success(message);
    navigate("/log");
  } catch (err) {
    toast.error(err);
  } finally {
    setLoading(false);
  }
};



  useEffect(() => {
    if (window.google) {
      google.accounts.id.initialize({
        client_id: "371076891085-5op51naiscmt9ibv0uhsfcvf5qrjgm31.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });

      google.accounts.id.renderButton(
        document.getElementById("googleSignInDiv"),
        { theme: "outline", size: "large" }
      );
    }
  }, []);

const handleCredentialResponse = async (response) => {
  try {
    const res = await dispatch(googlelogin({ credential: response.credential }));
    
    if (res.meta.requestStatus === "fulfilled") {
      localStorage.setItem('token', res.payload.token);
      toast.success("Google Sign-In successful");
      console.log(res.data)
      navigate('/user')
    } else {
      toast.error(res.payload || "Google Sign-In failed");
    }
  } catch (error) {
    console.error("Google login error:", error);
    toast.error("Authentication failed. Please try again.");
  }
};
  return (
    <div>
      <Nax />

      <section className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 font-poppins">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-3xl font-bold tracking-tight text-black">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={formhandler}
            className="space-y-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black">
                Name
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder:text-gray-400 focus:border-black focus:ring-0"
              />
            </div>

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
      type={showPwd ? "text" : "password"}      /* toggle type */
      autoComplete="current-password"
      required
      value={password}
      onChange={(e) => setPass(e.target.value)}
      className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 pr-10
                 text-sm text-black placeholder:text-gray-400 focus:border-black focus:ring-0"
    />

    {/* Eye / Eye-off icon */}
    <button
      type="button"
      onClick={() => setShowPwd(!showPwd)}
      className="absolute inset-y-0 right-3 flex items-center text-gray-600"
      tabIndex={-1}
    >
      {showPwd ? (
        /* eye-off svg */
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
             viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M3 3l18 18M10 6.34a9 9 0 014 0m6.26 3.95A9 9 0 0121 12c-1.66 3.33-5 6-9 6a9 9 0 01-9-6 9 9 0 019-6z" />
        </svg>
      ) : (
        /* eye svg */
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
             viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M2.46 12C3.73 7.94 7.52 5 12 5s8.27 2.94 9.54 7c-1.27 4.06-5.06 7-9.54 7s-8.27-2.94-9.54-7z" />
          <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  </div>
</div>


           <button
  type="submit"
  disabled={loading}
  className={`flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow 
    ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-gray-800"}
    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black`}
>
  {loading ? "Submitting..." : "Submit"}
</button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Already have An Account?{' '}
            <Link to="/log" className="font-semibold text-black underline hover:text-gray-800">
              Login
            </Link>
          </p>

          {/* Google Sign-In Button */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <p>or</p>
            <div id="googleSignInDiv"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signinfrom;
