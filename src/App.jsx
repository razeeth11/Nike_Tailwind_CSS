import "./App.css";

export default function App() {
  return (
    <div className="App min-h-screen w-full bg-[url('src/assets/images/Image.png')] bg-center bg-cover">
      <nav>
        <div className="nav-bar flex items-center justify-between px-[20px] py-[15px] w-full">
          <img
            className="cursor-pointer"
            src="src\assets\images\logo.png"
            alt="logo.png"
            width="200px"
          />
          <ul className="flex gap-[60px] items-center text-[14px]">
            <li className=" hover:text-yellow-400">
              <a href="#">Home</a>
            </li>
            <li className=" hover:text-yellow-400">
              <a href="#">About</a>
            </li>
            <li className=" hover:text-yellow-400">
              <a href="#">Features</a>
            </li>
            <li className=" hover:text-yellow-400">
              <a href="#">Contact</a>
            </li>
            <span class="material-symbols-outlined hover:text-yellow-400 cursor-pointer">
              local_mall
            </span>
          </ul>
        </div>
      </nav>
      <main>
        <div className="flex items-center justify-between px-4">
          <div className="marketing-line max-w-[500px] ps-5">
          <h1 className="text-[48px] font-bold">Groceries <br/> Delivery in <span className="text-yellow-400">15mins</span></h1>
          <p className="text-[14px] mt-5 leading-[30px]">Grocify offer a wide range of products, including fresh products, meats, dairy, baked goods and non-perishable items.</p>
          <button className="mt-10 px-5 py-3 bg-yellow-400 text-blue-950 rounded-full font-medium">Order Now</button>
          <button className="mt-10 ms-5 px-5 py-3 border-[1px] border-white rounded-full font-medium">Download App</button>
          </div>
          <div className="marketing-image">
            <img src="src\assets\images\grocery-image.png" alt="marketing-image.png" width='650px'/>
          </div>
        </div>
      </main>
    </div>
  );
}
