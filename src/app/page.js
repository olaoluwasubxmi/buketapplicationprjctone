import React from 'react';
import { Analytics } from "@vercel/analytics/react"
import { FaPlus, FaUser, FaHome, FaSearch, FaBell } from 'react-icons/fa';

const Page = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#ffffff' }}>
      <div style={{ position: 'absolute', top: '10px', right: '10px', color: 'black' }}>
        <FaUser size={44} />
      </div>
      <div style={{ width: '500px', height: '450px', backgroundColor: '#800080', borderRadius: '10px', padding: '20px', position: 'relative', border: '2px solid black', marginTop: '20px' }}>
        <h1 style={{ textAlign: 'center' }}>Add Amount</h1>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <FaPlus size={48} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
          <span style={{ fontSize: '48px', marginRight: '10px' }}>$</span>
          <input type="text" style={{ fontSize: '24px', padding: '10px', borderRadius: '5px', border: '1px solid black', color: 'black' }} placeholder="Enter amount" />
        </div>
      </div>
      <div style={{ position: 'fixed', bottom: '0', left: '0', width: '100%', backgroundColor: '#ffffff', borderTopLeftRadius: '20px', borderTopRightRadius: '20px', padding: '10px', display: 'flex', justifyContent: 'space-around' }}>
        <FaHome size={24} color="blue" />
        <FaSearch size={24} color="red" />
        <FaBell size={24} color="green" />
      </div>
    </div>
  );
};

export default Page;
