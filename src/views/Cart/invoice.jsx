import React, { useRef } from "react";
import "../../css/invoice.css"; // Import the CSS file
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const InvoicePage = ({ trav, closeBill }) => {
  const divRef = useRef();

  const handleDownloadPDF = () => {
    const input = divRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 10, imgWidth, imgHeight);
      pdf.save("download.pdf");
    });

    closeBill();
  };

  const invoiceData = {
    invoiceNumber: "INV-2024001",
    date: "Feb 23, 2025",
    customerName: "John Doe",
    customerAddress: "123 Main Street, City, Country",
  };

  const calculateTotal = () => {
    return trav.reduce((total, item) => total + item.freq * item.price, 0);
  };

  return (
    <>
      <div className="invoice-container" ref={divRef}>
        <h1 className="invoice-title">Invoice</h1>
        <p>
          <strong>Invoice Number:</strong> {invoiceData.invoiceNumber}
        </p>
        <p>
          <strong>Date:</strong> {invoiceData.date}
        </p>
        <p>
          <strong>Customer:</strong> {invoiceData.customerName}
        </p>
        <p>
          <strong>Address:</strong> {invoiceData.customerAddress}
        </p>

        <table className="invoice-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price (₹)</th>
              <th>Total (₹)</th>
            </tr>
          </thead>
          <tbody>
            {trav.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.freq}</td>
                <td>{item.price}</td>
                <td>{item.freq * item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="invoice-total">
          <strong>Total Amount: ₹{calculateTotal()}</strong>
        </div>
      </div>
      <div className="bill-actions">
        <button onClick={handleDownloadPDF}>Download Bill (PDF)</button>
        <button onClick={closeBill}>Close</button>
      </div>
    </>
  );
};

export default InvoicePage;
