import React from 'react';
import './Userlist.css';

const UserProfileCard = ({ user }) => {
  return (
    <div className="profile-card">
      <div className="card-header">
        <div className="user-id">ID: {user.id}</div>
        <div className="avatar">
          <img src='placeholder.png' />
        </div>
        <h1 className="user-name">{user.name}</h1>
        <div className="username">@{user.username}</div>
        <p>{user.company.name} • {user.company.catchPhrase}</p>
      </div>
      
      <div className="card-body">
        <div className="info-section">
          <h2 className="section-title">
            <i className="fas fa-address-card"></i> Contact Information
          </h2>
          
          <div className="info-item">
            <div className="info-label">Email</div>
            <div className="info-value">{user.email}</div>
          </div>
          
          <div className="info-item">
            <div className="info-label">Phone</div>
            <div className="info-value">{user.phone}</div>
          </div>
          
          <div className="info-item">
            <div className="info-label">Website</div>
            <div className="info-value">{user.website}</div>
          </div>
          
          <h2 className="section-title">
            <i className="fas fa-building"></i> Company
          </h2>
          
          <div className="info-item">
            <div className="info-label">Name</div>
            <div className="info-value">{user.company.name}</div>
          </div>
          
          <div className="info-item">
            <div className="info-label">Catchphrase</div>
            <div className="info-value">{user.company.catchPhrase}</div>
          </div>
          
          <div className="info-item">
            <div className="info-label">Business</div>
            <div className="info-value">
              <div>{user.company.bs}</div>
              <div className="company-bs">
                "We help businesses {user.company.bs} to drive growth and innovation."
              </div>
            </div>
          </div>
        </div>
        
        <div className="info-section">
          <h2 className="section-title">
            <i className="fas fa-map-marker-alt"></i> Address
          </h2>
          
          <div className="info-item">
            <div className="info-label">Street</div>
            <div className="info-value">{user.address.street}</div>
          </div>
          
          <div className="info-item">
            <div className="info-label">Suite</div>
            <div className="info-value">{user.address.suite}</div>
          </div>
          
          <div className="info-item">
            <div className="info-label">City</div>
            <div className="info-value">{user.address.city}</div>
          </div>
          
          <div className="info-item">
            <div className="info-label">Zipcode</div>
            <div className="info-value">{user.address.zipcode}</div>
          </div>
          
          <div className="info-item">
            <div className="info-label">Coordinates</div>
            <div className="info-value">
              <div className="geo-coordinates">
                <div className="geo-item">
                  <i className="fas fa-globe-americas"></i> Lat: {user.address.geo.lat}
                </div>
                <div className="geo-item">
                  <i className="fas fa-globe-americas"></i> Lng: {user.address.geo.lng}
                </div>
              </div>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-label">Map Location</div>
            <div className="info-value">
              <small>Southern Hemisphere, Indian Ocean region</small>
            </div>
          </div>
          
          <h2 className="section-title">
            <i className="fas fa-user-tag"></i> Profile Info
          </h2>
          
          <div className="info-item">
            <div className="info-label">Username</div>
            <div className="info-value">{user.username}</div>
          </div>
          
          <div className="info-item">
            <div className="info-label">User ID</div>
            <div className="info-value">{user.id}</div>
          </div>
        </div>
      </div>
      
      <div className="card-footer">
        <button 
          className="contact-btn"
          onClick={() => {
            alert(`You can contact ${user.name} via:\n\nEmail: ${user.email}\nPhone: ${user.phone}\n\nEmail copied to clipboard!`);
            navigator.clipboard.writeText(user.email);
          }}
        >
          <i className="fas fa-envelope"></i> Contact {user.name.split(' ')[0]}
        </button>
        
        <a 
          href={`http://${user.website}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="website-link"
        >
          <i className="fas fa-external-link-alt"></i> Visit Personal Website
        </a>
      </div>
    </div>
  );
};

export default UserProfileCard;