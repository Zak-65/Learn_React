import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle,faChevronDown } from '@fortawesome/free-solid-svg-icons'

function UserCard(props) {
  return (
    <article className="flex justify-between items-center gap-3 py-2 px-5">
      <span className="w-[5%] text-green-400">
        <FontAwesomeIcon icon={faCircle} />
      </span>
      <span className="w-[90%] leading-4">
        <h3 className="text-white font-extrabold text-2xl">{props.name}</h3>
        <p className="font-bold text-gray-900">{props.email}</p>
      </span>
      <a href="#" className="w-[5%] font-bold text-white text-xl">
        <FontAwesomeIcon icon={faChevronDown} />

      </a>
    </article>
  );
}

UserCard.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
};

UserCard.defaultProps = {
  name: "User",
  email: "user@example.com",
};

export default UserCard;