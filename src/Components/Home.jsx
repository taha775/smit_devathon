import React from "react";
import { Link } from "react-router-dom";
import hero from "../Images/hero.jpg";
import myhero from "../Images/myhero.jpg";
import "./index.css";
import Footer from "./Footer";

const Home = () => {
  const courses = [
    {
      title: "JavaScript",
      description: "JavaScript is a programming language...",
      link: "/javascript",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 inline-block mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h8m-8 4h16"
          />
        </svg>
      ),
    },
    {
      title: "React",
      description:
        "React is a JavaScript library for building user interfaces...",
      link: "/react",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 inline-block mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h8m-8 4h16"
          />
        </svg>
      ),
    },
    // Add more courses as needed
  ];
  return (
    <>
      {/* NAV  NAV NAV NAV NAV NAV*/}
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="text-white text-2xl font-semibold">
            Learning hub
          </Link>

          <h1 className="font-serif ">welcome to learning hub </h1>
          <ul className="hidden sm:flex space-x-4">
            <li>
              <Link
                to="/Login"
                className="text-white font-serif hover:text-blue-300 hover:border-b hover:border-blue-300"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/Signup"
                className=" text-white font-serif hover:text-blue-300 hover:border-b hover:border-blue-300"
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                to="/both"
                className="text-white font-serif hover:text-blue-300 hover:border-b hover:border-blue-300"
              >
                Both
              </Link>
            </li>
          </ul>
          <div className="sm:hidden">
            <button className="text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div>
        <img src={myhero} alt="" />
      </div>
      {/* Cards section */}
      <div className="container mx-auto mt-8 ">
        <h2 className="text-3xl font-bold mb-4">Explore our courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
          {/* Java Card */}
          <div className=" bg-blue-300 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Java</h3>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAw1BMVEX////sICUNisfrAAAAiMYAgcMAhcUAg8QAhMTrDxbsFx3zh4j4y8z+8/PuXWDsHSLrAAzrBhDsFBr609T85+e41er++fn97u4AfcLv9fqKu93o8fjxdnj3urvtMjbzkZOkyeRbpNLT5PH2sbL729v1pKX4xMXwbG7tODyDt9trq9U+mM3b6fT0mZrzioz84+TuUVT1qqvuR0rxenwsksqtzubC2uxlqdVQn9DwY2btQkXuV1qWwuDtLDDtNTnuTVEAdL4rNSNsAAAQCUlEQVR4nO1daXuqPBBFwiLaFtxRa91r3eptXdvat/f//6o3CUmAsIiWVrlynud+uIoYjpPJzMlMKggpUqRIkSJFihQpoqB07gFcMub9c4/ggnEDzj2CC8YCPJ57CJeLW/B87iFcLqrg6dxDuFxUQep0AnELwODcY7hYlIHROvcYLhYlUBieewwXi76htc89hotFXtPy5x7DxeJJ15bnHsOl4hZkUssJQt/IpD4nCH9ymXS1CkAZZDJp5hmAvAbJWZx7FJeJKjScTJpb+WMJDac4OvcoLhMLZDhpauWP9xyaVdVzD+Mi0TYgN9r9uYdxkSihSZVJ1Rw/1IAOuSnenXscl4hqRseGUz73QC4Q1U/kjDNGmld5cWtxo3+eeyAXiIWGuUknlQ8esS+G3KTxnwdtvIZDbubnHsnl4Y1ykzpjHrUHLeUmACWQI9wE6X+Dee1XR3Q5eCGuOANefN8fPIP7a01El8Td+K9T5XkGfF5tqvVlUG58ZOPWFwCBc+2fRzlTtKjRwQ3/3m3bADnweq3eBrpinXLDV5Au7kFBz12v2Qh9mxvOrSzeADQp4/16UwkaFWd0w70TUxshavRrjnpGlJuc5jaQZ0RNpli84lrtPwXKTdHlc1safgN8XGtsIwjVJ41yk3NyU32z/NA1J6DVzyLlRr91vH5jFC0HfcV75beZnC83z5bZ5HLXu0oJVcaN7vI3H5aL1p6u190IwgPjxqmJUjekfZ1vZOfHF/XFrkoT6oa01/ON7Py4Nxg3znzqP4ub4vvZBnYB6APGjbPn7MMyJz1zzf6mzLgxnBWjc+CdaNeHL7aIO33LgnLjLwZeCR7tSeUMcAhluat2xsJ/OuXGKYreUMO5WkEUocQycVcw85EajmCV0Xodb41QZlx3y/QTmVXFN+erL0Y6qyDYNoxLyLov+vjo6wMhR8+4XqX2BK52pwGjaNHAdQyxrSvP9sx3UCWI854/irecn+elk02Ls9c+DwhiZfwn0beMxHALfXZgGONX0YUxOeQQHrjy/QcaGRox7uElkJw23loouOXzUZGZTnweIoHkWKaTc4U5wpDu0mS0+NplkkjOEHidy4A5nRgfJYnkWA6GqxvIUaeT0XNxfU8iycFmwi3abTavMoW4OsoTSQ7uGtI110u39rzijepkJJMc3G/GbWmybD2+8v6EkoMUitwf10tVh+nEFOwklByslXLyRN85sWL5kqSSIzwbnKIjCHf2xCrEUmGRWHKEP0V+E6aq2cu5FvCpo3CAnGqtXI5PProtx3k3Xc99uF+5cUSCcRSgBJKz6Oc/MiRj/xy9uJ5pURqUBoNSqeRNY25L6D34lkt0qt4M718L5G7veTbwauuxdiNUT5M2y8CzZuftJCKOWMeXnFr/DQBDY0GnXjTAyFHM0KY6hzeNGdK37F9uMH8HoFC076YBg7qEfl4Ag/mJNRE3QOcPA2TJOScUngYfcvqvwGA5LkPRUUW2YDqu537P9H7E1MrtHCjk+JvpBillLL0IH8vlqT3gfQC4zYaFrevEkJx7yCkDw/Ms5BJ7cchQxdYzs4l0QH+4IbCdpJsea0du0Bfyw9LJZyS1gcFx0GZ6aQzOzWs5wPdhEAz2C7fJp7wz+93iokgu7RuBd4slxr8HvNXR2RtHpOMlx9o6zGkG9R4F9tszQykFzivyBj32yNpr04vUGQPAYpF4Vts7nmPyc+j/xXBzLznDAvSY4PW5NcCGWR0MM/SB7JyFEsYvcjV+x/pB1wvAGA1vytj+azdLwATNWAK1ryL3gjWCQhyl615yBqCwfHTP5KVn42NJ5xXnLth2Prs/eJ+7V+ryJ/FpOv9Yp+GBG4Jl+bHsX/msVj7h012R44KSwM8NolbaOeHCW/F6679neTIMN/n4dyvEcg5etPSBzhZ7Jgc8IFmswo+hmxfcjumbqD64/rssxuXPouZWH7S/lL5A1X6OBrJWhAfvlOpiTGfc1Fxr5msuNpuMSA4V91n00CJuyB2JMn8cHoGRODYX1zkuNcdvgSbtocq3erMe6b4RyWGOlpLDpCVXZvxI1tEDR3yTkojYyBEcAR+cs6EdIeuJKCNMG72Dt41IzoInh000l3JCkodDG9YkhjyBnNmmUwm9oAr0sL7FhimuVoqsKpKkyKvNgW+LSE7ZQw6NfV1W8hTF5TCPfBQ59c2+q5jd9YEJsSyEHfNRJ5/uNRRFFCW5G36ziOTUPOTU2LyyI4rbaC7naHLqlbFomvL48EQYAC2i/rE3RVFUpGbYNSeTYx04B2HY3o+6nEPl9UeR0+xMTVU2J4eZgShEb87ryZAdUQ1jJ5Sc6uKm9dLOj94+qE7iIIcuYA45jsTNAVFObfDYnz8vR3df5GYRyKl3VjL0D3Ij2vIyOqZAu4LYkcSQKwLJqfVHOswTjUJBK+aYUOUgxxZ12I9FoxxvlDGY/wH4bhq6WyYiOb2uDF2DmO1Go0YoH9eAtpOQ6TSCLwgg5+YDGEUfJcapknyS91mlzIJPrCiGGR/B6yA5m5WMRi9Kk8iPG4jZ2mdl2qjo9nLwp3zJGbyDIMHLQQ4VdVigSxMrbsfkBRj+glcoOfWdRQ0cfajTPIDmZj3uQm/uGwBgr5NdB37Yj5xnBzV6rqhpWoEVRjvIYVUfBnnhj1+13u07cNQ/oLsVqBWFkdOk1EDL2R3PTn3WW+8nOxjvqaqimGP/q6boO5Rgw/Qh54M+dNEA4P1utHxuz/Oalxxa10l9DA2aXWrBghKNRKLc690o/zyfExbDyNkqIoMkr8br3mGG6s3eptJpYE5kNQsdOXx46M2nQR+dSJj7I8j5oKsQGLXYY/os5fZnibDklzuUqdkYWtveyJkfjpCbIlylbH4UFa7m6mq3nYwb+856va5QrDv7/XjSncK416LE4gSxoiiqLIvd4GljkTONTg5t6TLunAbgjZAFh6hj0UEyJlc+8el7WlSk9GEzUWT064sOE5LQE8NnVrMMaNogPuzr4CVZyNOqO+5sws1teqTlUBPhjsz1JUdwB8k+PT1zw333Y8iBaFYaXTxFuMf3QsKGkoWWokJS9pUIk1AgDlkJcEiCl5w87ZN0X+ZPDhV1sAsmdqTrjgvIMsUnosclns0ediQrCWfTMjIbZC3YhKDh4Bel1W7S6EBOIkZEGNZSrgZnsjw5RDnnRTp/cqiog887z3szco/QQXByVl5vznqbTWWNHA1EZ13ZbHqzU5d6HAQeEecsfOYGgj85tqgjMCtxhsckh/Jsk5wuWcSJmTWrokfIjwF5tT85wh31twO6leUq5STTjo8KL4Qcyx0rIVdw5FCVhs8AAsihl8NZmPdJOklPquevDFwEOR0reQgTvDhyWMMbl8IFkEMFHJiZ01nlnI+vOfquGxHinB+HNankkEnlIYe6WP6vJjCL4lzrKxVL6Vrl2ibx7Fm4Xz+SnHrnO0kWfzMcYqrb0Is4cugmONdk+8w8L0cOFXX0T79Vju6LGi6ZpUZPTDqKnMrUDP2Vj4QoYS0k/CKOHHv9cTzl4Mk+V4Mjh52c4BXDBEeNhTPdegGR9RwbzZUsSZGvPowV4kY+pIXwcQ47CoEdIrcY2Wm1t+rlwaVGcK7Xpk6jIXLrwS5xiU7OzIQPs4p69UHUsd2YnUPX8eS8MCMpaM+tm1b7CTirvDzkOFoOMl4N8N0+Auhr+PjYXxoW0cdu6lnRWvimDIdZpbENSDmbyN+o4uzgPRg59LHsH1bXDGCQwqwckSc85DhaeXyivZbDTAqAiYuGxU5kctaqpXptI4jsKNkY7yQTJa3+82Yjw0wsfJkiYP3YdOPSWQfOYHwR0rzFZE4x1btl9O6jKOpgaK1tkclpKFTYUbowqZy5E6h6EyUVa5h/dacKTVOJ0rHymkdDhveJpp/9oaste+p7Dzs55H9I2YuHHGc/hrfR6VbzsFMo3BBnFJmcjezQI7Ik/0SJumKlnSgb9c/cJd7a6lNVkqeRtnkcJVr2S22Xl8kUwSuyKmun10uOszDaZ2PEqZIiaACXRBxHjtAwvXrFARHDYlKVV3unnVVkVe5GpIbJN64gFq5PpAgZFSC/Wd6oZZX0eWs0WbUf8G/kaT2BgnWznAZA3lrU8UYN4CPnYMy2cvYgFxwxWVkaV1wzsL77K+6jixo0IuZK6KqtZ1y+/rlsHa5YrR7q218M39DNCl/P36i5r6+3uAAgCi+SIpurSYX3K/soG8oOULnKf8Pz9Ef5GTQ3+8kUy11UGnWqo5YYiKpLJp2ej310jmKGE2SSgvoMrtZIVN9NV9Djmtgjm0gM3CKB9BgtMBRDMqvSP0LsA7ZWXfeRPL6gWbNHcElhB/ep4XjAwrf0zzp6MGR6gn744gtBvRMu3cWE0ivjJjFnedbHsn8pScwYAFtpScrx/z1ZEbO/QQ7boCoaSXHGTZR8Ssqh2mF05aaxmh6WskKAXY6eoD+NMFEsDWK1D6idwJFzY7uy5IyggqVoWBpF8JCg4/+7NI2yRBxptZpOd93uDgKmEVmYRahY56K5liJ3vvFtd6NEnUKwlrnUGys6FkTfZD0rdc496F/DVvZjIFS7kM39uUf9W+jIkeQcyowqryJ0xvw72EvR+JEUWe6uY9w9TgZ6Y9FUlRDFFCvwu/01mYwT9c1+K5pWhTGRA/E/LAOqu/H6WyFOQjCr7CdTcTf2aMEYTSoHrlaiCJf13SRWGfCCUa+MV+ZfMYCXeJBM++o1YJBrinFW4/ih8q0Q+iyoowVJVKPuSX4Dzb8Jc9r1MV6q5d8I3Rq/In/Eh41sJZcxNFgdRMMM7nm4RHTIjrjS+fmvkhLGzcykgVwU0eZ0NNddM3FJ18RusZKnh/rHT0O915mIclY1J0kLiFz9Z1lzNa7EGIo0e2vcgQNj6qw8dkUJieCpKTvYQZMrC/Pq7T5Kj17gLWe4dW8qkmonSLq84yoFO3FW8P4c6hPTTQ/NI2Vluh3v1xu+4I3/PGqqQZ2MncZ4ssOMuFr3cKrO3aG+M3/ykeJEc78ysz6iBE4rWWvVdNfdYnSxSjqF2ZVE699QfYqnd8+iuOuTqndkM0lpBEyrpmQOBGgSDnmUiKRi8MWYluzO339VRNlMWJgskIQ8KztkieiQbDszlemksQ5K1TuiqorJFcQsWWK7szp/cc2o1fDqBm5sRO2ddNp1J40O9FBhDz4bq2pAnXICQToYUQsj7mFsYFjNjGvcztibRe3wnO1RY7b8vY2/fxH1zRjl/UrkYuRrQRNpaCqOAyep1diYVRo7tCOKCrfNbrLEihD09tvjW8YZoE/fj3eSjA83QMSsxj+a1f4+muuJ+tc0zSw6zKKB28mh923W/ejCYfKmst6jPn2VHWcAwx1T2u43iUikjgY67U0y6YkELCBG/7eKtSXXayQ+svZrTLEbHO78M6jj6BBx5Cxi54FDHxT1KEeca/HvoI6ybVbETuwImpCI8q7JGIeA4UlqihQpUqRIkSJW/A8eMTpkvlB1yQAAAABJRU5ErkJggg=="
              alt=""
            />
            <p className="text-gray-600 mb-4">
              Java is a versatile and widely-used programming language...
              {/* Add your Java description here */}
            </p>
            <Link
              to="/java"
              className="text-blue-600 font-semibold hover:underline"
            >
              Learn More
            </Link>
          </div>

          {/* Python Card */}
          <div className="bg-blue-300 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Python</h3>
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <p className="text-gray-600 mb-4">
              Python is a high-level programming language known for its
              simplicity...
              {/* Add your Python description here */}
            </p>
            <Link
              to="/python"
              className="text-blue-600 font-semibold hover:underline"
            >
              Learn More
            </Link>
          </div>

          {/* Flutter Card */}
          <div className="bg-blue-300 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Flutter</h3>
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <p className="text-gray-600 mb-4">
              Flutter is Google's UI toolkit for building natively compiled...
              {/* Add your Flutter description here */}
            </p>
            <Link
              to="/flutter"
              className="text-blue-600 font-semibold hover:underline"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      {/* Additional Cards */}
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div className="bg-blue-300 rounded-lg shadow-md p-6" key={index}>
              <div className="flex items-center mb-4">
                {course.icon}
                <h3 className="text-xl font-semibold">{course.title}</h3>

                <img
                  className=""
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <Link
                to={course.link}
                className="text-blue-600 font-semibold hover:underline"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* NAV  NAV NAV NAV NAV NAV*/}

      {/* Rest of your content */}
      <Footer />
    </>
  );
};

export default Home;
