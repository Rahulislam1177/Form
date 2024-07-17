import React from "react";
import "./MyForm.css";
const AllCountry = [
  " Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Austrian Empire*",
  "Azerbaijan",
];
console.log(AllCountry);

const MyForm = () => {
  return (
    <div className="maneFrom mb-10 ">
      <div>
        <div className="flex">
          <div className="">
            <div className="shortCut p-6 ">
              <h3 className="text-lg font-semibold  pb-0.5">Recent Activity</h3>
              <h4 className="LinneCl mt-1.5 mb-10"></h4>

              <ul>
                <li className="pb-2.5 ">
                  <div className="flex">
                    <h4 className="LinneC2 pt-5 mb-5"></h4>
                    <div className="pl-2.5">
                      <p className="text-slate-800 pb-1.5 ">10 hours Ago</p>
                      <a href="" className="font-semibold  hover:text-sky-600">
                        Commented on Video posted
                      </a>
                      <h4 className="font-semibold">
                        by
                        <span className="text-sky-600">
                          {" "}
                          <a href="">black demon.</a>
                        </span>
                      </h4>
                    </div>
                  </div>
                  <div className="flex">
                    <h4 className="LinneC2 pt-5 mb-5"></h4>
                    <div className="pl-2.5">
                      <p className="text-slate-800 pb-1.5 ">30 Days Ago</p>
                      <a href="" className="font-semibold   hover:text-sky-600">
                        Posted your status. “Hello guys, how are you?”
                      </a>
                    </div>
                  </div>
                  <div className="flex">
                    <h4 className="LinneC2 pt-5 mb-5"></h4>
                    <div className="pl-2.5">
                      <p className="text-slate-800 pb-1.5 ">2 Years Ago</p>
                      <a href="" className="font-semibold   hover:text-sky-600">
                        Share a video on her timeline.
                      </a>
                      <h4 className="font-semibold">
                        <span className="text-sky-600">
                          {" "}
                          <a href="">Share a video on her timeline.</a>
                        </span>
                      </h4>
                    </div>
                  </div>
                </li>
                <div className="backCol p-7 ">
                  <div className=" text-slate-800 text-lg">
                    <h3 className="text-lg font-semibold  pb-0.5">Edit Info</h3>
                    <h4 className="LinneCl mt-1.5 mb-5"></h4>
                    <li className="pb-2.5 mb-2.5 ">
                      <i className=" fi-rr-info pe-2.5"></i>
                      <a href="">Basic Info</a>
                    </li>
                    <li className="pb-2.5 mb-2.5  ">
                      <i className="fi fi-rr-mouse pe-2.5"></i>
                      <a href=""> Education & Work</a>
                    </li>
                    <li className="pb-2.5 mb-2.5  ">
                      <i className="fi fi-rr-heart pe-2.5"></i>
                      <a href=""> My Interests</a>
                    </li>
                    <li className="pb-2.5 mb-2.5  ">
                      <i className="fi fi-rr-settings pe-2.5"></i>
                      <a href=""> Account Setting</a>
                    </li>
                    <li className="pb-2.5 mb-2.5  ">
                      <i className="fi fi-rr-lock pe-2.5"></i>
                      <a href="">Change Password</a>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
          </div>

          <div className="sectionmane ">
            <div className=" pl-20 pt-20">
              <form action="#">
                <div className="flex items-center justify-between">
                  <div className="flex justify-between">
                    <div className="relative maneText">
                      <input
                        className="border-b-2 py-1 w-72 focus:outline-none focus:border-sky-700 focus:border-b-4 peer tranjasion"
                        autoComplete="off"
                        type="text"
                        id="filed1"
                        required="required"
                      />
                      <label
                        for="filed1"
                        className="absolute  text-xl left-0 top-1 cursor-text tranjasion  peer-focus:text-xs peer-focus:text-sky-700 peer-focus:-top-4 transition-all duration-450"
                      >
                        First Name
                      </label>
                    </div>
                    <div className="relative maneText pl-5">
                      <input
                        className="border-b-2 py-1  w-72 focus:outline-none tranjasion focus:border-sky-700 focus:border-b-4 peer tranjasion"
                        autoComplete="off"
                        type="text"
                        id="filed2"
                        required="required"
                      />
                      <label
                        for="filed2"
                        className="absolute  pl-5 text-xl left-0 top-1 cursor-text tranjasion  peer-focus:text-xs peer-focus:text-sky-700 peer-focus:-top-4 transition-all duration-450"
                      >
                        Last Name
                      </label>
                    </div>
                  </div>
                </div>{" "}
                <div>
                  <div className="relative maneText pt-8 Emailfild">
                    <input
                      className="border-b-2 py-1 w-full   focus:outline-none tranjasion focus:border-sky-700 focus:border-b-4 peer tranjasion"
                      autoComplete="off"
                      type="text"
                      id="filed3"
                      required="required"
                    />
                    <label
                      for="filed3"
                      className="absolute pt-8 text-xl left-0 top-1 cursor-text tranjasion  peer-focus:text-xs peer-focus:text-sky-700 peer-focus:-top-4 transition-all duration-450"
                    >
                      Email@
                    </label>
                  </div>
                  <div className="relative maneText pt-8 Emailfild">
                    <input
                      className="border-b-2 py-1 w-full   focus:outline-none tranjasion focus:border-sky-700 focus:border-b-4 peer tranjasion"
                      autoComplete="off"
                      type="text"
                      id="filed3"
                      required="required"
                    />
                    <label
                      for="filed3"
                      className="absolute pt-8 text-xl left-0 top-1 cursor-text tranjasion  peer-focus:text-xs peer-focus:text-sky-700 peer-focus:-top-4 transition-all duration-450"
                    >
                      Phone No.
                    </label>
                  </div>
                  <div className="flex pt-8">
                    <div className="relative maneText pr-20">
                      <select
                        className="border-b-2 py-1 w-52 focus:outline-none
                        tranjasion focus:border-sky-700 focus:border-b-4 peer
                        tranjasion"
                        autoComplete="off"
                        id="filed5"
                        required="required"
                      >
                        <option>Day</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                      </select>{" "}
                    </div>
                    <div className="relative maneText pr-20 ">
                      <select
                        className="border-b-2 py-1 w-52 focus:outline-none
                        tranjasion focus:border-sky-700 focus:border-b-4 peer
                        tranjasion"
                        autoComplete="off"
                        id="filed5"
                        required="required"
                      >
                        <option>Month</option>
                        <option>Jan</option>
                        <option>Feb</option>
                        <option>Mar</option>
                        <option>Apr</option>
                        <option>May</option>
                        <option>Jun</option>
                        <option>Jul</option>
                        <option>Aug</option>
                        <option>Sep</option>
                        <option>Oct</option>
                        <option>Nov</option>
                        <option>Dec</option>
                      </select>{" "}
                    </div>
                  </div>
                  <div className="relative maneText pt-8 ">
                    <select
                      className="border-b-2 py-1 w-52 focus:outline-none
                        tranjasion focus:border-sky-700 focus:border-b-4 peer
                        tranjasion"
                      autoComplete="off"
                      id="filed5"
                      required="required"
                    >
                      <option>Year</option>
                      <option>2000</option>
                      <option>2001</option>
                      <option>2002</option>
                      <option>2003</option>
                      <option>2004</option>
                      <option>2005</option>
                      <option>2006</option>
                      <option>2007</option>
                      <option>2008</option>
                      <option>2009</option>
                      <option>2010</option>
                      <option>2011</option>
                      <option>2012</option>
                    </select>{" "}
                  </div>
                  <div className="pt-8">
                    <fieldset>
                      <input
                        id="draft"
                        className="peer/draft tranjasion"
                        type="radio"
                        name="status"
                        checked
                      />
                      <label for="draft" className="pr-16 tranjasion pl-2.5">
                        Male
                      </label>

                      <input
                        id="published"
                        className="peer/published tranjasion"
                        type="radio"
                        name="status"
                      />
                      <label for="published" className=" pl-2.5 tranjasion">
                        Female
                      </label>
                    </fieldset>
                  </div>
                  <div className="relative maneText pt- Emailfild pt-9">
                    <input
                      className="border-b-2 py-1 w-full   focus:outline-none tranjasion focus:border-sky-700 focus:border-b-4 peer tranjasion"
                      autoComplete="off"
                      type="text"
                      id="filed7"
                      required="required"
                    />
                    <label
                      for="filed7"
                      className="absolute pt-8 text-xl left-0 top-1 cursor-text tranjasion  peer-focus:text-xs peer-focus:text-sky-700 peer-focus:-top-4 transition-all duration-450"
                    >
                      City
                    </label>
                  </div>
                  <div className="relative maneText pt- Emailfild ">
                    <div className="relative maneText pt-8 Emailfild">
                      <select
                        className="border-b-2 py-1  wMargin  focus:outline-none tranjasion focus:border-sky-700 focus:border-b-4 peer tranjasion"
                        autoComplete="off"
                        type="text"
                        required="required"
                      >
                        <option>Afghanistan</option>
                        <option>Cyprus</option>
                        <option>Benin (Dahomey)</option>
                        <option>Bangladesh</option>
                        <option>Papua New Guinea</option>
                        <option>Bosnia and Herzegovina</option>
                        <option>Malaysia</option>
                        <option>Seychelles</option>
                        <option>San Marino</option>
                        <option>Lebanon</option>
                        <option>Lebanon</option>
                        <option>Yemen</option>
                      </select>
                    </div>
                    <div className="relative maneText pt-28 Emailfild">
                      <input
                        className="border-b-2 py-1 wMargin  focus:outline-none tranjasion focus:border-sky-700 focus:border-b-4 peer tranjasion"
                        autoComplete="off"
                        type="text"
                        id="filed9"
                        required="required"
                      />
                      <label
                        for="filed9"
                        className="absolute pt-8 text-xl left-0 top-1 cursor-text tranjasion  peer-focus:text-xs peer-focus:text-sky-700 peer-focus:-top-4 transition-all duration-450"
                      >
                        About me
                      </label>
                    </div>
                    <div>
                      <button className="hover:bg-sky-500 hover:drop-shadow-2xl h-9 w-28 bg-sky-500 rounded focus:bg-sky-700 mr-2.5 mt-10">
                        Cancel
                      </button>
                      <button className="hover:bg-sky-500 hover:drop-shadow-2xl bg-sky-500 h-9 w-28 rounded focus:bg-sky-700 ">
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyForm;
