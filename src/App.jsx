import * as React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <div className="flex justify-center">
          <div className="max-w-[800px]">
            <h2 className="mb-2 text-4xl font-bold tracking-tight md:text-6xl xl:text-7xl">
              Electron Boilerplate
            </h2>
            <h3 className="text-primary dark:text-primary-400 text-2xl">
              with React 18, Tailwind and JS
            </h3>
            <p className="mt-10 mb-5 text-sm text-neutral-500 dark:text-neutral-300">
              Packed with love by{" "}
              <a
                target="_blank"
                className="underline"
                href="https://dmitrybilichenko.com/"
              >
                Dmitry Bilichenko
              </a>
            </p>

            <p className="text-sm text-neutral-500 dark:text-neutral-300">
              This project on{" "}
              <a
                target="_blank"
                className="underline"
                href="https://github.com/billo32/electron-react-tailwind-js"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
