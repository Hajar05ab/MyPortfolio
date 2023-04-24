import React from 'react';
import moi from './images/moi.jpg';
import logo from './images/flying-doves-group.png';
import cer1 from './images/1.png'
import cer2 from './images/2.png'
import cer3 from './images/3.png'
import cer4 from './images/4.png'
import Tabs from './Tabs';
import "flowbite";
import './App.css';

function App() {
  return (
    <>

      <nav className="bg-white border-gray-200 dark:bg-gray-900 drop-shadow-md ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" className="flex items-center">
            <img src={logo} className="h-8 mr-3" alt="my logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MyPortfolio</span>
          </a>
          <div className="flex md:order-2">
            <a href="https://github.com/Hajar05ab"><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go to my Github</button></a>

            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
        </div>
      </nav>

      <div classNameName='py-[100px]'>
        <div className="w-full max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700 p-5 m-auto">
          <div className="flex flex-col items-center pb-10">
            <img className="w-50 h-50 mb-3 rounded-full shadow-lg" src={moi} alt="Bonnie image" />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Hajar ABOUJAAFAR</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">Etudiante</span>
          </div>
        </div>
      </div>

      
<a href="#" class="block m-auto mb-4 text-center max-w-6xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ABOUT</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">Hajar ABOUJAAFAR étudiante en 4ème année Ingénierie Informatique et Réseaux à EMSI Marrakech.</p>
</a>


<a href="#" class="block m-auto  mb-4 text-center max-w-6xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Experience</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400"><p>-Stage d'été OCP Laayoune.</p>
      <p>-Stage fin d'étude DUT chez CHAMI CONSEIL Laayoune.</p>
      <p>-Stage d'été OCP ALJORF LASFAR EL Jadida.</p></p>
</a>

<div class="grid mb-8 border border-gray-200 max-w-screen-lg m-auto  justify-center rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
  
  
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={cer1} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Front-End Web UI Frameworks and Tools:
Bootstrap 4</h5>
        </a>
    </div>
</div>

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={cer2} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Developing Back-End Apps with Node.js and
Express</h5>
        </a>
    </div>
</div>

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={cer3} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">DevOps, Cloud, and Agile
Foundations</h5>
        </a>
    </div>
</div>

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={cer4} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Data Collection and Processing with Python</h5>
        </a>
    </div>
</div>


</div>

<a href="#" class="block m-auto text-center max-w-6xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Contacts</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400"><p>Hajar.aboujaafar05@gmail.com</p>
      <p>06 66 66 66 66</p>
    </p>
</a>

<footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline"></a>. All Rights Reserved.
    </span>
    </div>
</footer>


      
     
    </>
  );
}

export default App;
