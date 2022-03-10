import { useMoralis } from "react-moralis";
import { getEllipsisTxt } from "../utils/formatters";
import Blockie from "../utils/Blockie.jsx";
import { Button, Card, Modal } from "antd";
import { useState, useEffect } from "react";
import Address from "../Address/Address";
import { SelectOutlined } from "@ant-design/icons";
import { getExplorer } from "../utils/networks";
import Text from "antd/lib/typography/Text";
import { connectors } from "./connectorsConfig";
import connectToLogRocket from "./LogRocket";

const styles = {
  account: {
    height: "42px",
    padding: "0 15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "fit-content",
    borderRadius: "12px",
    backgroundColor: "rgb(50, 50, 50)",
    cursor: "pointer",
  },
  text: {
    color: "#ffffff",
    fontSize: "18px",
  },
  connector: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "auto",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20px 5px",
    cursor: "pointer",
  },
  icon: {
    alignSelf: "center",
    fill: "rgb(40, 13, 95)",
    flexShrink: "0",
    marginBottom: "8px",
    height: "30px",
  },
  connectWallet: {
    cursor: "pointer",
    backgroundColor: "#53a3ff",
    padding: "10px",
    margin: "10px",
    borderRadius: "25px"
  }
};

const targetNetworkId = '0x3';

const checkNetwork = async () => {
  if (window.ethereum) {
    const currentChainId = await window.ethereum.request({
      method: 'eth_chainId',
    });

    // return true if network id is the same
    if (currentChainId === targetNetworkId) return true;
    // return false is network id is different
    return false;
  }
};

function Account() {
  const { authenticate, isAuthenticated, account, chainId, logout } =
    useMoralis();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAuthModalVisible, setIsAuthModalVisible] = useState(false);

  useEffect(() => {
    if(isAuthenticated) {
      // User has a valid wallet connected to moralis; start logging user session on log.rocket
      connectToLogRocket(account);
    }
  }, [isAuthenticated, account])

  if (!isAuthenticated || !account) {
    return (
      <>
        <div style={styles.connectWallet} onClick={() => setIsAuthModalVisible(true)}>
          <p style={styles.text}>Connect Wallet</p>
        </div>
        <Modal
          visible={isAuthModalVisible}
          footer={null}
          onCancel={() => setIsAuthModalVisible(false)}
          bodyStyle={{
            padding: "15px",
            fontSize: "17px",
            fontWeight: "500",
          }}
          style={{ fontSize: "16px", fontWeight: "500" }}
          width="340px"
        >
          <div
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              fontWeight: "700",
              fontSize: "20px",
            }}
          >
            Connect Wallet
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            {connectors.map(({ title, icon, connectorId }, key) => (
              <div
                style={styles.connector}
                key={key}
                onClick={async () => {
                  try {
                    await authenticate({ provider: connectorId, chainId: targetNetworkId });
                    window.localStorage.setItem("connectorId", connectorId);
                    setIsAuthModalVisible(false);
                    console.log(await checkNetwork());
                    if(!await checkNetwork()) {
                      console.log("changing network...");
                      await window.ethereum.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: targetNetworkId }],
                      });
                      console.log("network changed!");
                    }
                  } catch (e) {
                    console.error(e);
                  }
                }}
              >
                <img src={icon} alt={title} style={styles.icon} />
                <Text style={{ fontSize: "14px" }}>{title}</Text>
              </div>
            ))}
          </div>
        </Modal>
      </>
    );
  }

  return (
    <>
     {/* <button
        onClick={async () => {
          try {
            console.log("change")
            await web3._provider.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: "0x38" }],
            });
            console.log("changed")
          } catch (e) {
            console.error(e);
          }
        }}
      >
        Hi
      </button>*/}
      <div style={styles.account} onClick={() => setIsModalVisible(true)}>
        <p style={{ marginRight: "5px", ...styles.text }}>
          {getEllipsisTxt(account, 6)}
        </p>
        <Blockie currentWallet scale={3} />
      </div>
      <Modal
        visible={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
        bodyStyle={{
          padding: "15px",
          fontSize: "17px",
          fontWeight: "500",
        }}
        style={{ fontSize: "16px", fontWeight: "500" }}
        width="400px"
      >
        Account
        <Card
          style={{
            marginTop: "10px",
            borderRadius: "1rem",
          }}
          bodyStyle={{ padding: "15px" }}
        >
          <Address
            avatar="left"
            size={6}
            copyable
            style={{ fontSize: "20px" }}
          />
          <div style={{ marginTop: "10px", padding: "0 10px" }}>
            <a
              href={`${getExplorer(chainId)}/address/${account}`}
              target="_blank"
              rel="noreferrer"
            >
              <SelectOutlined style={{ marginRight: "5px" }} />
              View on Explorer
            </a>
          </div>
        </Card>
        <Button
          size="large"
          type="primary"
          style={{
            width: "100%",
            marginTop: "10px",
            borderRadius: "0.5rem",
            fontSize: "16px",
            fontWeight: "500",
          }}
          onClick={async () => {
            await logout();
            window.localStorage.removeItem("connectorId");
            setIsModalVisible(false);
          }}
        >
          Disconnect Wallet
        </Button>
      </Modal>
    </>
  );
}


export default Account;
