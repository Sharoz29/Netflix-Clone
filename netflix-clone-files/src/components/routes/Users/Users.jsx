import "./Users.css";
import { Link } from "react-router-dom";

const Users = ({ icon, onClick }) => {
  const iconClicked = onClick;

  return (
    <div className="users">
      <div className="users-container">
        <h1 className="users-title">Who's Watching?</h1>
        <div className="user-icons-container">
          <Link to={"/home"} onClick={onClick}>
            <div className="icon-holder">
              <img
                className="user1 user-icon"
                src="http://occ-0-2084-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229"
                alt=""
                value="http://occ-0-2084-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229"
              />

              <span
                className="account-user"
                value="http://occ-0-2084-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229"
              >
                User 1
              </span>
            </div>
          </Link>
          <Link to={"/home"}>
            <div className="icon-holder" onClick={iconClicked}>
              <img
                className="user2 user-icon"
                src="http://occ-0-2084-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS_J-owMff-jig42xPF7vozQS1ge5xTgPTzH7ttfNYQXnsYs4vrMBaadh4E6RTJMVepojWqOXx.png?r=1d4"
                alt=""
                value="http://occ-0-2084-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS_J-owMff-jig42xPF7vozQS1ge5xTgPTzH7ttfNYQXnsYs4vrMBaadh4E6RTJMVepojWqOXx.png?r=1d4"
              />

              <span
                className="account-user"
                value="http://occ-0-2084-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS_J-owMff-jig42xPF7vozQS1ge5xTgPTzH7ttfNYQXnsYs4vrMBaadh4E6RTJMVepojWqOXx.png?r=1d4"
              >
                User 2
              </span>
            </div>
          </Link>
          <Link to={"/home"}>
            <div className="icon-holder" onClick={iconClicked}>
              <img
                className="user3 user-icon"
                src="http://occ-0-2084-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdi6oYb6DJb1LndQWckgaXvrqqP3QURNa8Xngiq7wwFwDtWIg1otEuYKVxbYwS9c5clAI1_Bn7DuljwcvhfUzQu2_Y2v9y5P6t_n.png?r=e6e"
                alt=""
                value="http://occ-0-2084-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdi6oYb6DJb1LndQWckgaXvrqqP3QURNa8Xngiq7wwFwDtWIg1otEuYKVxbYwS9c5clAI1_Bn7DuljwcvhfUzQu2_Y2v9y5P6t_n.png?r=e6e"
              />

              <span
                className="account-user"
                value="http://occ-0-2084-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdi6oYb6DJb1LndQWckgaXvrqqP3QURNa8Xngiq7wwFwDtWIg1otEuYKVxbYwS9c5clAI1_Bn7DuljwcvhfUzQu2_Y2v9y5P6t_n.png?r=e6e"
              >
                User 3
              </span>
            </div>
          </Link>
          <Link to={"/home"}>
            <div className="icon-holder" onClick={iconClicked}>
              <img
                className="user4 user-icon"
                src="http://occ-0-2084-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdCemZ64K8SshrRuXpQ_cGA5j6EDCD-sE1eNV0of8K9ipVocEYtkD0g9MmicVHY185FVSgU3jsnzF9Ii7dVH1ubuGhFXs37HzCjN.png?r=b36"
                alt=""
                value="http://occ-0-2084-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdCemZ64K8SshrRuXpQ_cGA5j6EDCD-sE1eNV0of8K9ipVocEYtkD0g9MmicVHY185FVSgU3jsnzF9Ii7dVH1ubuGhFXs37HzCjN.png?r=b36"
              />

              <span
                className="account-user"
                value="http://occ-0-2084-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdCemZ64K8SshrRuXpQ_cGA5j6EDCD-sE1eNV0of8K9ipVocEYtkD0g9MmicVHY185FVSgU3jsnzF9Ii7dVH1ubuGhFXs37HzCjN.png?r=b36"
              >
                User 4
              </span>
            </div>
          </Link>
        </div>
        <span className="manage-users">Manage Profiles</span>
      </div>
    </div>
  );
};
export default Users;
