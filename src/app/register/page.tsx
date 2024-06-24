import Image from "next/image";
import logo from "@/assets/logo.png";
import google from "@/assets/icon/google.png";
import github from "@/assets/icon/github.png";

function Register() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 items-center">
        <div className=" py-24 rounded-3xl w-full max-w-[500px] bg-white">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
            <div className="flex items-center justify-center gap-4">
              <Image className="w-12" src={logo} alt="Your Company" />
              <p className="font-product text-gray-900 font-bold">
                GDG Huancayo
              </p>
            </div>
            <h2 className="mt-16 font-product text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Registrate con tu cuenta
            </h2>
          </div>

          <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div className="flex items-center justify-center gap-4 flex-row">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900 font-product"
                  >
                    Nombre
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Ej. Jorge"
                      required
                      className="block w-full rounded-md border-0 py-2 text-gray-900 font-product shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="lastname"
                    className="block text-sm font-medium leading-6 text-gray-900 font-product"
                  >
                    Apellidos
                  </label>
                  <div className="mt-2">
                    <input
                      id="lastname"
                      name="lastname"
                      type="text"
                      autoComplete="cc-name"
                      placeholder="Ej. Perez"
                      required
                      className="block w-full rounded-md border-0 py-2 text-gray-900 font-product shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900 font-product"
                >
                  Correo electrónico
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Ej. example.alias.com"
                    required
                    className="block w-full rounded-md border-0 py-2 text-gray-900 font-product shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900 font-product"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-blue-600 hover:text-blue-500 font-product"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder="Ej. 5nvBSoh!gsa"
                    className="block font-product w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full font-product justify-center rounded-full bg-blue-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Sign in
                </button>
                <div className="relative mt-10">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm font-medium leading-6">
                    <span className="bg-white px-6 text-gray-900 font-product">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex items-center w-full gap-2 mt-4 font-product justify-center rounded-full bg-white px-3 py-3 text-sm font-semibold leading-6 border border-gray-200 text-gray-900  shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                  >
                    <Image alt="google" src={google} className="size-5" />
                    <span>Google</span>
                  </button>
                  <button
                    type="submit"
                    className="flex w-full items-center gap-2 mt-4 font-product justify-center rounded-full bg-white px-3 py-3 text-sm font-semibold leading-6 border border-gray-200 text-gray-900  shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                  >
                    <Image alt="github" src={github} className="size-5" />
                    <span>GitHub</span>
                  </button>
                </div>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500 font-product">
              Not a member?{" "}
              <a
                href="#"
                className="font-semibold leading-6 text-blue-600 hover:text-blue-500 font-product"
              >
                Start a 14 day free trial
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Register;
