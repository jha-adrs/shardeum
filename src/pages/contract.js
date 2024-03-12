import config from "@/config/config";
import { WalletContext } from "@/context/WalletContext";
import { ethers } from "ethers";
import { useContext, useState } from "react";
/**
 * 
 *  Deployment published: https://github.com/jha-adrs/vite-project-sample.git
 */
const Contract = () => {
    const { connected, signer } = useContext(WalletContext);
    const [url, setUrl] = useState("");
    const [getURL, setGetURL] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState("Your result will appear here...");
    const contractAddress = config.contracts.GIT_CONTRACT;
    const contractABI = [
        "function publishDeployment(string memory url) public",
        "event DeploymentPublished(string url)",
        "function getDeployment(string memory url) public view returns (string memory, address)",
    ];
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    const publishDeployment = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            let tx = await contract.publishDeployment(url);
            await tx.wait();
            console.log("Deployment published:", url);
            console.log("Transaction hash:", tx.hash);
            setResult(`Deployment published: ${url}`);
        } catch (err) {
            console.error("Failed to publish deployment:", err);
        }
        setIsLoading(false);
    };

    const getDeployement = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            let [url, publisher] = await contract.getDeployment(getURL);
            setResult(`URL: ${url}, Publisher: ${publisher}`);
        } catch (err) {
            console.error("Failed to get deployment:", err);
        }
        setIsLoading(false);
    }

    return (
        <div style={{flex:"true", flexDirection: "column", padding: "50px"}}>
            <div>
                <form onSubmit={publishDeployment}>
                    <input
                        type="text"
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                        placeholder="Enter Git URL"
                        required
                    />
                    <button type="submit" disabled={!connected || isLoading}>
                        {isLoading ? "Publishing..." : "Publish Deployment"}
                    </button>
                </form>
            </div>
            <div>
                <form onSubmit={getDeployement}>
                    <input
                        type="text"
                        value={getURL}
                        onChange={e => setGetURL(e.target.value)}
                        placeholder="Enter Git URL"
                        required
                    />
                    <button type="submit" disabled={!connected || isLoading}>
                        {isLoading ? "Fetching..." : "Get Deployment"}
                    </button>
                </form>
            </div>
            <p style={{"fontWeight": "bold"}}>
                {result}
            </p>
        </div>
    );
};

export default Contract;