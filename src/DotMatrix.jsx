import React, { useRef, useState } from "react";
import qz from "qz-tray";
import { resultOmzet } from "./encode";
import { resultInvoice } from "./encode2";
import samplePDF from "./sample_pdf.pdf";
import clinic from "./clinic.png";
import { resultHastien } from "./hastien.js";
import logo from "./hastien.png";
import { data } from "./utils/data";

// import file from "./test.bin";
// import start from "./encode2";

const ThermalPrinter = () => {
  let img = new Image();
  img.src = `${logo}`;
  // img.onload = (img) => {
  //   setNimg(img)
  // }
  const [textToPrint, setTextToPrint] = useState("");
  const [connectionStatus, setConnectionStatus] = useState("");
  const [printers, setPrinters] = useState([]);
  const [selectedPrinter, setSelectedPrinter] = useState(null);
  const [nImg, setNimg] = useState("");

  const ePosDevice = useRef();

  const STATUS_CONNECTED = "Terhubung";

  const connect = () => {
    return new Promise((resolve, reject) => {
      setConnectionStatus("Connecting ...");

      qz.websocket
        .connect({ retries: 5, delay: 2 })
        .then(() => {
          // console.log('new Image: ', nImg)
          setConnectionStatus(STATUS_CONNECTED);
          resolve();
          // alert("Connected!");
        })
        .catch((err) => {
          reject();
        });
    });
  };

  const findAllPrinters = () => {
    return new Promise((resolve, reject) => {
      qz.printers
        .find()
        .then((data) => {
          let list = data;
          setPrinters(list);
          resolve();
        })
        .catch((e) => {
          console.error(e);
          reject();
        });
    });
  };

  const connectAndFind = () => {
    connect().then(() => {
      findAllPrinters();
    });
  };

  // function startDownload() {
  //   const imageURL = clinic;

  //   const downloadedImg = new Image();
  //   downloadedImg.crossOrigin = "Anonymous";
  //   downloadedImg.addEventListener("load", imageReceived, false);
  //   downloadedImg.alt = "Gambar dari " + imageURL;
  //   downloadedImg.src = imageURL;
  // }
  // const imageContainer = document.getElementById("image-container");
  // imageContainer.appendChild(clinic)

  // function imageReceived() {
  //   const canvas = document.createElement("canvas");
  //   const context = canvas.getContext("2d");

  //   canvas.width = this.width;
  //   canvas.height = this.height;
  //   canvas.innerText = this.alt;

  //   console.log(this)
  //   context.drawImage(this, 0, 0);
  //   imageContainer.appendChild(canvas);

  //   try {
  //     localStorage.setItem("test", this);
  //     localStorage.setItem("image", canvas.toDataURL("image/png"));
  //   } catch (err) {
  //     console.error(`Error: ${err}`);
  //   }
  // }

  const selectPrinter = (name) => {
    setSelectedPrinter(name);
    console.log(name);

    // setConnectionStatus(`selected Printer : ${selectedPrinter}`);
    setPrinters([]);
  };

  const print = (type) => {
    // let image = localStorage.getItem("image");

    // console.log(image, "gambarrrr");
    let data;
    if (type === "omzet") {
      let x = btoa(String.fromCharCode(...new Uint8Array(resultOmzet)));
      console.log("base64: ", x);
      data = [
        {
          type: "raw",
          format: "command",
          flavor: "base64",
          data: x,
        },
      ];
    } else if (type === "invoice") {
      // startDownload();
      let x = btoa(String.fromCharCode(...new Uint8Array(resultHastien)));
      // console.log("base64: ", x);
      data = [
        {
          type: "raw",
          format: "command",
          flavor: "base64",
          data: x,
        },
      ];
    } else if (type === "pdf") {
      data = [
        {
          type: "raw",
          format: "pdf",
          flavor: "file",
          // data: file,
          data: samplePDF,
        },
      ];
    } 

    let config = qz.configs.create(selectedPrinter); // Exact printer name from OS

    qz.print(config, data)
      .then(() => {
        // console.log(result);
        alert("Sent data to printer");
      })
      .finally(() => {
        qz.websocket.disconnect();
      });
    // connect().then(() => {
    //   let config = qz.configs.create("QPCPrintKW"); // Exact printer name from OS
    //   let data = Array.from(result);
    //   console.log(result);
    //     alert("Sent data to printer");
    //   });
    // });
  };

  return (
    <div id="thermalPrinter">
      <button
        disabled={connectionStatus === STATUS_CONNECTED}
        onClick={() => connectAndFind()}
      >
        Connect
      </button>

      {/* <button
        disabled={connectionStatus !== STATUS_CONNECTED}
        onClick={() => findAllPrinters()}
      >
        Find Printers
      </button> */}
      {/* { nImg } */}
      {/* {data.source} */}
      <img src={data.source}></img>
      <span className="status-label">{connectionStatus}</span>
      <span className="status-label">{selectedPrinter}</span>

      <div style={{ maxWidth: "400px", fontSize: "14px", textAlign: "left" }}>
        <ol>
          {printers.length !== 0 &&
            printers.map((pr) => (
              <li
                key={pr}
                style={{ cursor: "pointer", margin: "5px" }}
                onClick={() => selectPrinter(pr)}
              >
                {pr}
              </li>
            ))}
        </ol>
      </div>
      {/* <textarea
        id="textToPrint"
        rows="3"
        placeholder="Text to print"
        value={textToPrint}
        onChange={(e) => setTextToPrint(e.currentTarget.value)}
      /> */}
      {/* <button style={{ backgroundColor: "red" }} onClick={() => start(selectedPrinter)}>
        Print Invoice
      </button> */}
      <button disabled={!selectedPrinter} onClick={() => print("invoice")}>
        Test Print Invoice
      </button>
      <button disabled={!selectedPrinter} onClick={() => print("omzet")}>
        Test Print Laporan Omzet
      </button>
      <button disabled={!selectedPrinter} onClick={() => print("pdf")}>
        PDF
      </button>
    </div>
  );
};

export default ThermalPrinter;
