import React, { useState, useEffect } from "react";
import "./App.css";
import MyChart from "./mychart";
import { Rating } from "react-simple-star-rating";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { CiMail, CiSettings } from "react-icons/ci";
import { FiTarget } from "react-icons/fi";
import { IoMdNotificationsOutline, IoIosCart } from "react-icons/io";
import { IoHomeSharp, IoFastFoodSharp } from "react-icons/io5";
import { TbTruckDelivery, TbBasketCancel } from "react-icons/tb";

import {
  FaCartPlus,
  FaMoneyBill1Wave,
  FaChevronRight,
  FaBowlFood,
} from "react-icons/fa6";
import { MdPayments } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { FaRegChartBar, FaCaretDown } from "react-icons/fa";

function App() {
  const data = [65, 59, 80, 81, 56, 55, 40, 68];
  const labels = ["5", "9", "11", "14", "18", "21", "25", "27"];

  const [orders, setOrders] = useState([
    {
      customer: "Wade Warren",
      orderNo: 15478256,
      amount: 124.0,
      status: "Delivered",
    },
    {
      customer: "Jane Cooper",
      orderNo: 48965786,
      amount: 365.02,
      status: "Delivered",
    },
    {
      customer: "Guy Hawkins",
      orderNo: 78958215,
      amount: 45.88,
      status: "Cancelled",
    },
    {
      customer: "Kristin Watson",
      orderNo: 20965732,
      amount: 65.0,
      status: "Pending",
    },
    {
      customer: "Cody Fisher",
      orderNo: 95715620,
      amount: 545.0,
      status: "Delivered",
    },
    {
      customer: "Savannah Nguyen",
      orderNo: 78514568,
      amount: 128.2,
      status: "Delivered",
    },
  ]);
  const percentage = 66;

  const [feedback, setFeedback] = useState([
    {
      name: "Jenny Wilson",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-10.png",
      feedback:
        "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
    },
    {
      name: "Dianne Russell",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-3.png",
      feedback:
        "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service",
    },
    {
      name: "Devon Lane",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-3.png",
      feedback:
        "Normally wings are wings, but theirs are lean meaty and tender and ",
    },
    {
      name: "Jenny Wilson",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-10.png",
      feedback:
        "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
    },
    {
      name: "Dianne Russell",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-3.png",
      feedback:
        "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service",
    },
  ]);
  const [rating, setRating] = useState(3);
  const handleRating = (rate: number) => {
    setRating(rate);
  };
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value: number, index: number) =>
    console.log(value, index);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="dashboard">
      <div className="header">
        <div className="search-bar-box">
          <div className="logo">
            <span className="grid-icon"></span>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <ul className="user-actions">
          <li>
            <CiMail />
          </li>
          <li>
            <CiSettings />
          </li>
          <li>
            <IoMdNotificationsOutline />
          </li>
        </ul>
      </div>
      <div className="dashboard-content">
        <ul className="dashboard-sidebar">
          <li className="sidebar-list">
            <IoHomeSharp className="sidebar-icon" />
          </li>
          <li className="sidebar-list">
            <FaRegChartBar className="sidebar-icon" />
          </li>
          <li className="sidebar-list">
            <BiTask className="sidebar-icon" />
          </li>
          <li className="sidebar-list">
            <MdPayments className="sidebar-icon" />
          </li>
          <li className="sidebar-list">
            <IoIosCart className="sidebar-icon" />
          </li>
        </ul>
        <div className="dashboard-main">
          <h1>Dashboard</h1>
          <div className="dashboard-content-2">
            <div className="Dashboard-left">
              <div className="box-1">
                <div className="dashboard-metrics">
                  <div className="metric">
                    <div className="inner-box">
                      <div className="Dashboaed-icon-box">
                        <FaCartPlus className="Dashboard-icon" />
                      </div>
                      <p className="sub-heading">Total Orders</p>

                      <div className="last-item">
                        <h2>75</h2>
                        <span className="percent-change">▲3%</span>
                      </div>
                    </div>
                  </div>
                  <div className="metric">
                    <div className="inner-box">
                      <div className="Dashboaed-icon-box icon-box-2">
                        <TbTruckDelivery className="Dashboard-icon icon-2" />
                      </div>
                      <p className="sub-heading">Total Delivered</p>

                      <div className="last-item">
                        <h2>70</h2>
                        <span className="percent-change">▲3%</span>
                      </div>
                    </div>
                  </div>
                  <div className="metric">
                    <div className="inner-box">
                      <div className="Dashboaed-icon-box icon-box-3">
                        <TbBasketCancel className="Dashboard-icon icon-3" />
                      </div>
                      <p className="sub-heading">Total Orders</p>

                      <div className="last-item">
                        <h2>75</h2>
                        <span className="percent-change">▲3%</span>
                      </div>
                    </div>
                  </div>
                  <div className="metric">
                    <div className="inner-box">
                      <div className="Dashboaed-icon-box icon-box-4">
                        <FaMoneyBill1Wave className="Dashboard-icon icon-4" />
                      </div>
                      <p className="sub-heading">Total Orders</p>

                      <div className="last-item">
                        <h2>75</h2>
                        <span className="percent-change">▲3%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="activity-section">
                <h2 className="heading">Activity</h2>
                <div className="activity-chart">
                  <select className="select-box">
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                  </select>
                </div>
                <div className="chart-box">
                  <MyChart className="chart" data={data} labels={labels} />
                </div>
              </div>
              <div className="table-container">
                <h2>Recent Orders</h2>
                <div className="table-box">
                  <table>
                    <thead>
                      <tr>
                        <th className="table-header">Customer</th>
                        <th className="table-header">Order No.</th>
                        <th className="table-header">Amount</th>
                        <th className="table-header">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="photo-box">
                          <img
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-10.png"
                            alt=""
                            className="photo"
                          />
                          <h3>Wade Warren</h3>
                        </td>
                        <td>15482256</td>
                        <td>$124.00</td>
                        <td>
                          <div className="chip-green">
                            <span>Delivered</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="photo-box">
                          <img
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-1.png"
                            alt=""
                            className="photo"
                          />
                          <h3>Guy Hawkins</h3>
                        </td>
                        <td>15482256</td>
                        <td>$124.00</td>
                        <td>
                          <div className="chip-red">
                            <span>Delivered</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="photo-box">
                          <img
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-3.png"
                            alt=""
                            className="photo"
                          />
                          <h3>Jane Cooper</h3>
                        </td>
                        <td>452879</td>
                        <td>$104.00</td>
                        <td>
                          <div className="chip-green">
                            <span>Delivered</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="photo-box">
                          <img
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-1.png"
                            alt=""
                            className="photo"
                          />
                          <h3>Guy Hawkins</h3>
                        </td>
                        <td>15482256</td>
                        <td>$124.00</td>
                        <td>
                          <div className="chip-red">
                            <span>Delivered</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="photo-box">
                          <img
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-3.png"
                            alt=""
                            className="photo"
                          />
                          <h3>Jane Cooper</h3>
                        </td>
                        <td>452879</td>
                        <td>$104.00</td>
                        <td>
                          <div className="chip-green">
                            <span>Delivered</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="box-2">
              <div className="progress-box">
                <div className="progress-box-1">
                  <h3>Net Profit</h3>
                  <h2>$6759.24</h2>
                  <div className="down-icon-box">
                    <FaCaretDown className="down-icon" />
                    <p>3 %</p>
                  </div>
                </div>
                <div className="progress-bar-box">
                  <CircularProgressbar
                    className="progress-bar"
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
              </div>
              <div>
                <div className="goals-section">
                  <div className="goals-list">
                    <div className="goal">
                      <div className="Dashboaed-icon-box icon-box-4">
                        <FiTarget className="Dashboard-icon icon-4" />
                      </div>
                      <h2 className="goal-heading">Goals</h2>
                    </div>
                    <div className="left-icon">
                      <FaChevronRight className="icon-goal" />
                    </div>
                  </div>
                  <div className="goals-list">
                    <div className="goal">
                      <div className="Dashboaed-icon-box icon-box-2">
                        <IoFastFoodSharp className="Dashboard-icon icon-2" />
                      </div>
                      <h2 className="goal-heading">Popular Dishes</h2>
                    </div>
                    <div className="left-icon">
                      <FaChevronRight className="icon-goal" />
                    </div>
                  </div>
                  <div className="goals-list">
                    <div className="goal">
                      <div className="Dashboaed-icon-box icon-box-1">
                        <FaBowlFood className="Dashboard-icon icon-1" />
                      </div>
                      <h2 className="goal-heading">Menus</h2>
                    </div>
                    <div className="left-icon">
                      <FaChevronRight className="icon-goal" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="customer-feedback-section">
                <h2>Customer's Feedback</h2>
                <div className="feedback-box">
                  {feedback.map((feed, index) => (
                    <div className="feedback-item" key={index}>
                      <div className="feedback-header">
                        <div className="feedback-photo-box">
                          <img className="customer-avatar" src={feed.image} />
                          <span>{feed.name}</span>
                        </div>
                        <div className="rating-stars">
                          <Rating
                            size={18}
                            initialValue={rating}
                            onClick={handleRating}
                            onPointerEnter={onPointerEnter}
                            onPointerLeave={onPointerLeave}
                            onPointerMove={onPointerMove}
                          />
                        </div>
                      </div>
                      <p className="feedback-text">{feed.feedback}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
