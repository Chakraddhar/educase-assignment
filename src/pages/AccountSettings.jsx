export default function AccountSettings() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!user) {
    return <p>Please login first</p>;
  }

  return (
    <div className="card">
      <h1 className="page-title">Account Settings</h1>

      <div className="profile-row">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="Profile"
          className="profile-img"
        />

        <div>
          <p className="profile-name">{user.name}</p>
          <p className="profile-email">{user.email}</p>
        </div>
      </div>

      <p className="profile-desc">
        Backend-focused developer passionate about building scalable
        applications and continuously improving problem-solving and
        software development skills.
      </p>

      <hr className="divider" />
    </div>
  );
}
