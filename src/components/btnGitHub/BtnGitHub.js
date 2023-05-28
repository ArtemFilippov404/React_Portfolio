import "./style.css";


import gitHubicon from "./gitHub-black.svg";

const BtnGitHub = (props) => {
    return (
        <a href={props.link} target="_blank" rel="noreferrer" className="btn-outline">
            <img src={gitHubicon} alt="" />
                GitHub repo
        </a>
    );
}
 
export default BtnGitHub;