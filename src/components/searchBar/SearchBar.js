import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import axios from "axios";
import { useState } from "react";

const SearchBar = () => {
    const [url, setUrl] = useState("");

    const checkUrl = async (e) => {
        e.preventDefault();
        const res = await axios.post("/url/user", {
            url: url,
            withCredentials: true,
        });
        console.log(res.data);
    };

    return (
        <form className="searchBar" onSubmit={checkUrl}>
            <div>
                <SearchRoundedIcon />
                <input
                    type="text"
                    onChange={(e) => setUrl(e.target.value)}
                    value={url}
                    placeholder="Search or Verify"
                />
            </div>
            <button type="submit">Verify</button>
        </form>
    );
};

export default SearchBar;
