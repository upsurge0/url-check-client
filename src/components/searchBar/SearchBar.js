import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import axios from "axios";
import { useState } from "react";
import "./SearchBar.scss";

const SearchBar = ({ check, handleTermChange }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState("");

    const checkUrl = async (e) => {
        e.preventDefault();
        const re =
            /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
        if (re.test(searchTerm)) {
            setError("");
            await axios.post("/url/user", {
                url: searchTerm,
                withCredentials: true,
            });
            handleTermChange("");
            setSearchTerm("");
            check();
        } else {
            setError("Please enter a valid url string");
        }
    };

    return (
        <form className="searchBar" onSubmit={checkUrl}>
            <div className="leftSide">
                <SearchRoundedIcon />
                <input
                    type="text"
                    onChange={(e) => {
                        handleTermChange(e.target.value);
                        return setSearchTerm(e.target.value);
                    }}
                    value={searchTerm}
                    placeholder="Search or Verify"
                />
            </div>
            <div className="rightSide">
                <div className="error">{error}</div>
                <button type="submit">Verify</button>
            </div>
        </form>
    );
};

export default SearchBar;
