import React from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import styled from "@emotion/styled";

const PdfDownloader = ({ elementId, downloadFileName }) => {
  const downloadDocument = () => {
    const input = document.getElementById(elementId);
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save(`${downloadFileName}.pdf`);
    });
  };
  return <StyledButton onClick={downloadDocument}>Download Pdf</StyledButton>;
};
export default PdfDownloader;

const StyledButton = styled.button`
  margin: 1em 0;
  padding: 0.5em 2em;
  background: #57c9e6;
  border: none;
  border-radius: 4px;
  /* color: white; */
  :hover {
    background: #57d9e6;
    cursor: pointer;
  }
`;
