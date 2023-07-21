import "./App.css";
import FancyBox from "./components/FancyBox";

function App() {
  const someTextContent = (
    <a aria-label="Granskning" href="/granskning">
      <div className="h-80 w-80 flex flex-col">
        <div class="flex-grow rounded-t bg-primary-green"></div>
        <div class="rounded-b bg-white p-2 text-center">
          <div class="ml-1 flex items-center justify-center text-lg">
            Some text
            <div class="pl-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="none"
                alt=""
              >
                <path
                  stroke="#292D32"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                  d="M14.43 5.93 20.5 12l-6.07 6.07M3.5 12h16.83"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
  return (
    <div>
      <FancyBox
        content={someTextContent}
        shadowColor="pink"
        hasBlackShadowOnHover={true}
      />

      <FancyBox
        content={
          <input
            id="navn"
            type="text"
            autocomplete="name"
            required=""
            class="bg-neutral-10 h-10 w-screen rounded"
            name="navn"
          />
        }
        shadowColor="pink"
        top="top-1"
        left="left-1"
      />
    </div>
  );
}

export default App;
