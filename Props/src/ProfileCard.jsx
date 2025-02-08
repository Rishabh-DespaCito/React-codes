import PropTypes from "prop-types";

function ProfileCard({ name, age, num, isMember, hobbies, onHobbyClick }) {
  const sum = num + 1;
  return (
    <div className="profile-card">
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>Sum: {sum}</h3>
      <h3>IsMember: {isMember ? "Active Member" : "Guest"}</h3>
      <h3>
        Hobbies
        <ul>
          {hobbies.map((hobby, index) => {
            return (
              <li key={index} onClick={() => onHobbyClick(hobby)}>
                {hobby}
              </li>
            );
          })}
        </ul>
      </h3>
    </div>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  num: PropTypes.number,
  isMember: PropTypes.bool.isRequired,
  hobbies: PropTypes.arrayOf(PropTypes.string),
};

export default ProfileCard;
