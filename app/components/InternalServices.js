// import React from "react";
// import Link from "next/link";

// const InternalServices = () => {
//   return (
//     <>
//       <div className="service-boxes-container">
//         <Link href="/location-scouting" passHref>
//           <div className="service-box">
//             <img
//               src="/images/scouting.jpg"
//               alt="Location Scouting"
//               className="service-image"
//             />
//             <div className="service-content">
//               <h3>Location Scouting</h3>
//               <p>Discover stunning locations for your film project.</p>
//             </div>
//           </div>
//         </Link>

//         <Link href="/full-cycle-video" passHref>
//           <div className="service-box">
//             <img
//               src="/images/fullscale.jpg"
//               alt="Full Cycle Video Production"
//               className="service-image"
//             />
//             <div className="service-content">
//               <h3>Full Cycle Video Production</h3>
//               <p>Receive comprehensive support for your filming needs.</p>
//             </div>
//           </div>
//         </Link>
//       </div>

//       <style jsx>{`
//         .service-boxes-container {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr); /* Two columns */
//           gap: 2rem; /* Spacing between grid items */
//           padding: 2rem;
//           justify-content: center;
//         }

//         .service-box {
//           background-color: #f5f5f5;
//           border-radius: 8px;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//           overflow: hidden;
//           cursor: pointer;
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//           text-align: left;
//         }

//         .service-box:hover {
//           transform: translateY(-10px);
//           box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
//         }

//         .service-image {
//           width: 100%;
//           height: 250px;
//           object-fit: cover;
//         }

//         .service-content {
//           padding: 1rem;
//         }

//         .service-content h3 {
//           font-size: 1.5rem;
//           color: #333;
//           margin-bottom: 0.5rem;
//         }

//         .service-content p {
//           font-size: 1.1rem;
//           color: #555;
//           line-height: 1.8;
//         }

//         /* Responsive Design */
//         @media (max-width: 1024px) {
//           .service-boxes-container {
//             grid-template-columns: 1fr; /* Single column for smaller screens */
//           }

//           .service-box {
//             margin-bottom: 2rem; /* Spacing between items */
//           }

//           .service-image {
//             height: 200px;
//           }

//           .service-content h3 {
//             font-size: 1.3rem;
//           }

//           .service-content p {
//             font-size: 1rem;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default InternalServices;
